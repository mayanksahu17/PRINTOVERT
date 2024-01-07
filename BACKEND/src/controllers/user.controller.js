import {asyncHandler } from '../utils/asyncHandler.js'
import {ApiError} from '../utils/ApiError.js'
import {User} from '..//models/user.model.js'
import {uploadOnCloudinary} from '../utils/cloudinary.js'
import { ApiResponse } from '../utils/ApiResponse.js' 
import jwt from "jsonwebtoken"
import { Ticket } from '../models/ticket.model.js'

import mongoose from 'mongoose'
const generateAccessTokenandRefreshTocken = async(userId)=>{
  try {
    const user = await User.findById(userId)
    if (!user){
      throw new ApiError(404, 'user not found');
    }
     const accessToken = user.generateAccessToken()
    
     const refreshToken = user.generateRefreshToken()
     

     user.refreshToken = refreshToken
     

     await user.save({validateBeforeSave : false })

     return {accessToken , refreshToken}

  } catch (error) {
    throw new ApiError(500,"Somthing went wrong while generating refresh and access token  ")
  }
}




const registerUser =  asyncHandler(async(req,res)=> {
  
    const {fullName, email , username , password } =  req.body
 
    if ([fullName ,email, username , password].some((feild)=>feild?.trim() === "") ) {
      throw new ApiError(400, "fullname is required")
    }
 
    const exitedUser = await User.findOne({ 
    $or : [ { username }, { email } ]
    })

    if (exitedUser) {
    throw new ApiError(409, "User with email or username already exists")
    }
    

    const user = await User.create({
      fullName,
      email,
      password,
      username: username.toLowerCase()
    })

    const createdUser = await User.findById(user._id).select(
      "-password -refreshToken"
    )

    if(!createdUser){
      throw new ApiError(500,"Somthing went wrong while registering the user")
    }

    return res.status(201).json(
      new ApiResponse(200 , createdUser , "user registered successfully")
    )

  })




const loginUser = asyncHandler(async(req,res)=>{
  
  const {username, email , password} = req.body
  if (!username && !email) {  
    throw new ApiError(404 , "User Must have username or email")
  }

  const user = await User.findOne({
    $or: [{username} , {email}]
  })
  if (!user) {
    throw new ApiError(404 , "User does not Exist ")
  }

  const isCorrect = await user.isPasswordCorrect(password)

  if (!isCorrect) {
    throw new ApiError(401, "Invalid user credencials ")
  }
  const {refreshToken , accessToken} = generateAccessTokenandRefreshTocken(user._id)
  console.log(accessToken);
  const loggedInUser = await  User.findById(user._id).select("-refeshToken -password")

  const options = {
    httpOnly : true,
    secure : true ,

  }

  res
  .status(200)
  .cookie("accessToken" , accessToken , options)
  .cookie('refreshToken',refreshToken,options)
  .json(
    new ApiResponse(200,{
      user : loggedInUser,
      accessToken ,
      refreshToken
    },
    "User logged in successfully"
    )
  )
})
const logoutUser = asyncHandler(async(req,res)=>{
  await User.findByIdAndUpdate(
    req.user._id ,
    {
      $set : {
        refreshToken : undefined
      }
    },
    {
      new : true
    }
  )
  const options = {
    httpOnly : true,
    secure : true ,

  }
  return res
  .status(200)
  .clearCookie("accessToken" , options)
  .clearCookie("refreshToken" , options)
  .json(new ApiError(200 , {}, "User logged out successfully"))
})

const refreshAccessToken = asyncHandler(async(req,res)=>{
 try {
  const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken
  
  if (!incomingRefreshToken) {
   throw new ApiError(401, "unauthorized request ")
  }
 
 const decodedToken = jwt.verify(incomingRefreshToken , process.env.REFRESH_TOKEN_SECRET)
   const user = await User.findById(decodedToken?._id)
 
   if (!user) {
     throw new ApiError(401 , "invalid refresh token")
   }
 
   if (incomingRefreshToken !== user?.refreshToken) {
     throw new ApiError(401 , " refresh toke is expired or used ")
   }
   const options = {
     httpOnly : true ,
     secure : true
   }
   const {accessToken ,  newrefreshToken} = await generateAccessTokenandRefreshTocken(user._id)
 
   return res
   .status(200)
   .cookie("accessToken" , accessToken , options)
   .cookie("refreshToken" ,newrefreshToken ,options)
   .json(
     new ApiResponse(
       200 ,
       {accessToken , newrefreshToken}
       , "accessToken refreshed successfully"
     )
   )
 } catch (error) {
  throw new ApiError(401 , error?.message || "invalid refresh token ")
 }
})

const changeCurrentPassword = asyncHandler(async(req,res)=>{
  const {oldPassword , newPassword ,cpassword} = req.body
  if (!(cpassword===newPassword)) {
    throw new ApiError(400, "Invalid old password")
  }
  const user = await User.findById(req.user?._id)
  const isPasswordCorrect = user.isPasswordCorrect(oldPassword)
  if (!isPasswordCorrect) {
    throw new ApiError(400, "Invalid old password")
  }

  user.password = newPassword 
  await user.save({validateBeforeSave : false})

  return res.status(200)
  .json(new ApiResponse(200,{} , "password changed successfully"))
  
})

const getCurrentUser = asyncHandler(async(req,res)=>{
  return res
  .status(200)
  .json(new ApiResponse(200, req.user , "User Fetched Succesfully"))
})

const updateAccountDetails = asyncHandler(async(req,res)=>{
  const {fullName , email} = req.body
  if (!fullName || !email) {
    throw new ApiError(400,"All feilds are required")  }
    
   const user = await User.findByIdAndUpdate(req.user?._id,
     {
      $set : {
        fullName,
        email
      }
     } ,
     {new : true } 
     ).select("-password")


  return res
  .status(200)
  .json(new ApiResponse(200 , user , "Account details updated successfully"))
})

const getUserCredencials = asyncHandler(async(req,res)=>{
    const userCredencials = await User.findById(req.params._id)
    return res
  .status(200)
  .json(new ApiResponse(200, userCredencials , "User Fetched Succesfully"))

})

const createOrder = asyncHandler(async(req,res)=>{
  const user = await User.findById(req?._id)

  const ImageLocalPath = req.files?.Image[0]?.path;

  if (!ImageLocalPath) {
    throw new ApiError(400, "Image file is required")
  }
  const Image = await uploadOnCloudinary(ImageLocalPath)
  const newOrder = {
    name : req.body.name,
    image: Image.url,
    color: req.body.color,
    brand:  req.body.brand,
    category: req.body.category,
    description: req.body.description,
    price: req.body.price,
  } 
  user.orders.push(newOrder)
  await user.save();
  return res
  .status(200)
  .json(new ApiResponse(200, user.orders , "order added Succesfully"))

})

const raiseTicket  = asyncHandler(async (req,res)=>{
  const {email , subject , status, response } = req.body 
  if(!subject && !status && !response){
  throw new ApiError(404 , "User Must have response or status ,subject")
 }
  const user = await User.findOne({email })

user.Ticket.push(req.body)
 await user.save()

return res
.status(200)
.json(new ApiResponse(200, user.orders , "Ticket added Succesfully"))

}) 

const uploadImage = asyncHandler(async (req, res) => {
  try {
    const { email } = req.body;

    // Check if req._id exists or has a valid value
    console.log('Request email:', email);
    console.log('Request _id:', req?.params.id);

    // Attempt to find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const imageLocalPath = req.files?.Image[0]?.path;
    if (!imageLocalPath) {
      throw new ApiError(400, 'Image file is required');
    }

    const image = await uploadOnCloudinary(imageLocalPath);
    console.log('Image URL:', image.url);

    // Push the new image URL object into the user's 'image' array
    user.image.push({ imageURL: image.url });
    await user.save();
    console.log('Image uploaded');

    return res.status(200).json(new ApiResponse(200, user.image, 'Image added Successfully'));
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
});

const getAllImages = asyncHandler(async (req, res) => {
  try {
  

    // Check if req._id exists or has a valid value
 
   
    const userId = req?.params.id
    // Attempt to find the user by userId
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Extract all image URLs from the user's 'image' array
    const imageUrls = user.image.map((img) => img.imageURL);

    return res.status(200).json(new ApiResponse(200, imageUrls, 'All Image URLs Retrieved'));
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
});

const getAllUserTickets = asyncHandler(async (req, res) => {
  try {
    const userId = req.params.id; // Assuming the user ID is passed in the URL

    // Find the user by ID
    const user = await User.findById(userId).populate('Ticket'); // Assuming 'Ticket' is the ref field

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const userTickets = user.Ticket; // Assuming 'Ticket' is the array of ticket references in the user schema

    // Fetch all tickets associated with the user
    const tickets = await Ticket.find({ _id: { $in: userTickets } });

    new ApiResponse(200, { success: true, data: tickets }, "User Ticket Fetched Succesfully")

    return res.status(200).json( new ApiResponse(200, { success: true, data: tickets }, "User Ticket Fetched Succesfully"));
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
});


const createTicket = asyncHandler(async (req, res) => {
  try {
    const userId = req.params.id; // Assuming the user ID is passed in the URL

    // Fetch the user by ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const { subject, image, status, callBackNumber, response, category, description } = req.body;

    // Create a new ticket
    const newTicket = new Ticket({
      subject,
      image,
      status,
      callBackNumber,
      response,
      category,
      description
    });

    // Save the new ticket
    await newTicket.save();

    // Add the newly created ticket to the user's Ticket array
    user.Ticket.push(newTicket);
    await user.save();

    return res.status(201).json({ success: true, data: newTicket });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
});



const getAllUserTransactions = asyncHandler(async (req, res) => {
  try {
    const userId = req.params.id; // Assuming the user ID is passed in the URL

    // Find the user by ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Fetch all transactions associated with the user
    const userTransactions = await Transection.find({ _id: { $in: user.Transection } });

    return res.status(200).json({ success: true, data: userTransactions });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
});


const getAllOrderedProducts = asyncHandler(async (req, res) => {
  try {
    const userId = req.params.id; // Assuming the user ID is passed in the URL

    // Find the user by ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Fetch ordered products in the user's cart
    const orderedProducts = await Product.find({ _id: { $in: user.cart }, ordered: true });

    return res.status(200).json({ success: true, data: orderedProducts });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
});


export { 
  registerUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
  changeCurrentPassword,
  getCurrentUser,
  updateAccountDetails,
  getUserCredencials,
  createOrder ,
  raiseTicket ,
  uploadImage ,
  getAllImages,
  getAllUserTickets,
  createTicket,
  getAllUserTransactions,
  getAllOrderedProducts,
}