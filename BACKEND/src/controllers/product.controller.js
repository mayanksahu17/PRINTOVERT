import Product from '../models/product.model.js'
import {ApiError} from '../utils/ApiError.js'
import { ApiResponse } from '../utils/ApiResponse.js' 
import {asyncHandler } from '../utils/asyncHandler.js'
import { User } from '../models/user.model.js'

const addNewProduct = asyncHandler(async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);

    if (!user) {
      throw new ApiError(404, "User not found");
    }

    const imageLocalPath0 = req.files?.Image?.[0]?.path;
    const imageLocalPath1 = req.files?.Image?.[1]?.path;
    const imageLocalPath2 = req.files?.Image?.[2]?.path;
    const imageLocalPath3 = req.files?.Image?.[3]?.path;

    if (!(imageLocalPath0 && imageLocalPath1&& imageLocalPath2 && imageLocalPath3)) {
      throw new ApiError(400, "Image file is required");
    }

    const image0 = await uploadOnCloudinary(imageLocalPath0); 
    const image1 = await uploadOnCloudinary(imageLocalPath1); 
    const image2 = await uploadOnCloudinary(imageLocalPath2); 
    const image3 = await uploadOnCloudinary(imageLocalPath3); 
    console.log('Image URL:', image0.url);

    const {
      name,
      color,
      brand,
      category,
      description,
      price,
      stock,
      rating,
      shipped,
      delivered,
      ordered,
    } = req.body;

    // Validate data before saving
    if (!name || !category || !price || !stock) {
      throw new ApiError(400, "Name, category, price, and stock are required");
    }

    const productDetail = {
      name,
      color,
      brand,
      category,
      description,
      price,
      stock,
      rating,
      shipped,
      delivered,
      ordered,
      image0: image0.url,
      image1: image1.url,
      image2: image2.url,
      image3: image3.url,
    };

    user.orders.push(productDetail);
    await user.save();
    
    res.status(200).json(new ApiResponse(200, user.orders, "Order created successfully"));
  } catch (error) {
    console.error('Error:', error);
    res.status(error.statusCode || 500).json({ message: error.message || "Internal Server Error" });
  }
});

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
  
      res.status(200).json(new ApiResponse(200,removedProduct,"Order created Successfully" ));
    } else {
      throw new ApiError(404, "Product not found in user's orders");
    }
  });
  


export {
    addNewProduct,
    UpdateProduct,
    removeProduct
}