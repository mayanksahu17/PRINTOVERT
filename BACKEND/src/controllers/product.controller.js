import {Product} from '../models/product.model.js'
import {ApiError} from '../utils/ApiError.js'
import { ApiResponse } from '../utils/ApiResponse.js' 
import {asyncHandler } from '../utils/asyncHandler.js'
import { User } from '../models/user.model.js'

const addNewProduct = asyncHandler(async(req,res)=>{

    const userId = req.params.id

    const user = await User.findById(userId)
    
    if (!user) {
        throw new ApiError(404,"user not found ")
    }
    const imageLocalPath = req.files?.Image[0]?.path;

    if (!imageLocalPath) {
        throw new ApiError(400, 'Image file is required');
      }
    
    const image = await uploadOnCloudinary(imageLocalPath);
    console.log('Image URL:', image.url);
    
const {
name ,
color ,
brand,
category,
description,
price,
stock,
rating,
shipped,
delivered,
ordered,
  } = req.body

const productdeatil = {
name ,
color ,
brand,
category ,
description ,
price ,
stock ,
rating ,
shipped ,
delivered ,
ordered,
image 
}
   
 user.orders.push(productdeatil)
 await user.save()
 const updateOrders = user.orders 
 
res
.status(200)
.json(new ApiResponse(200,updateOrders,"Order created Successfully" ))

})

const UpdateProduct = asyncHandler(async (req, res) => {
    const { userId, productId } = req.params;
  
    // Check if userId or productId is undefined
    if (!userId || !productId) {
      throw new ApiError(400, "Invalid userId or productId");
    }
  
    const user = await User.findById(userId);
  
    if (!user) {
      throw new ApiError(404, "User not found");
    }
  
    const { ordered, delivered, shipped } = req.body;
    const { orders } = user;
  
    const indexToUpdate = orders.findIndex((product) => product?._id === productId);
  
    if (indexToUpdate !== -1) {
      // Update the properties
      orders[indexToUpdate] = { ...orders[indexToUpdate], ordered, delivered, shipped };
  
      // Save the updated user with the modified orders array
      await user.save();
  
      res
      .status(200)
      .json(new ApiResponse(200,"Order UPDATED Successfully" ));
    } else {
      throw new ApiError(404, "Product not found in user's orders");
    }
  });
  

  const removeProduct = asyncHandler(async (req, res) => {
    const { userId, productId } = req.params;
  
    // Check if userId or productId is undefined
    if (!userId || !productId) {
      throw new ApiError(400, "Invalid userId or productId");
    }
  
    const user = await User.findById(userId);
  
    if (!user) {
      throw new ApiError(404, "User not found");
    }
  
    const { orders } = user;
  
    // Find the index of the product to remove
    const indexToRemove = orders.findIndex((product) => product?._id === productId);
  
    if (indexToRemove !== -1) {
      // Remove the product from the orders array
      const removedProduct = orders.splice(indexToRemove, 1);
  
      // Save the updated user with the modified orders array
      await user.save();
  
      res.status(200).json(new ApiResponse(200,updateOrders,"Order created Successfully" ));
    } else {
      throw new ApiError(404, "Product not found in user's orders");
    }
  });
  


export {
    addNewProduct,
    UpdateProduct,
    removeProduct
}