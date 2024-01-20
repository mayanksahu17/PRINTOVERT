import Product from '../models/product.model.js'
import {ApiError} from '../utils/ApiError.js'
import { ApiResponse } from '../utils/ApiResponse.js' 
import {asyncHandler } from '../utils/asyncHandler.js'
import { User } from '../models/user.model.js'
import {uploadOnCloudinary} from '../utils/cloudinary.js'

const addNewProduct = asyncHandler(async (req, res) => {
  try {
      const userId = req.params.id;
      const user = await User.findById(userId);

      if (!user) {
          throw new ApiError(404, "User not found");
      }

      const imagePaths = [];

      for (let i = 0; i < 4; i++) {
          const imageLocalPath = req.files?.Image?.[i]?.path;

          if (!imageLocalPath) {
              throw new ApiError(400, `Image${i} file is required`);
          }

          const image = await uploadOnCloudinary(imageLocalPath);
          
          console.log(`Image${i} URL:`, image.url);

          imagePaths.push(image.url);
      }

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

      // Add more specific validations as needed

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
          image0: imagePaths[0],
          image1: imagePaths[1],
          image2: imagePaths[2],
          image3: imagePaths[3],
      };

     // Save the product to get its ID
    const newProduct = await Product.create(productDetail);
    const productId = newProduct._id;

    // Push the productId into user.orders
    user.orders.push(productId);
    await user.save();
      res.status(200).json(new ApiResponse(200, user.orders, "Order created successfully"));
  } catch (error) {
      console.error('Error:', error.message);
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
  
  const getAllProducts = asyncHandler(async (req, res) => {
    try {
      const userId = req.params.id;
      const user = await User.findById(userId);
  
      if (!user) {
        throw new ApiError(404, "User not found");
      }
  
      // This allorders is an array containing all product IDs
      const allorders = user.orders;
  
      // Use $in to find products whose _id is in the allorders array
      const products = await Product.find({ _id: { $in: allorders } });
  
      res.status(200).json(new ApiResponse(200, products, "All products retrieved successfully"));
    } catch (error) {
      console.error('Error:', error.message);
      res.status(error.statusCode || 500).json({ message: error.message || "Internal Server Error" });
    }
  });

export {
    addNewProduct,
    UpdateProduct,
    removeProduct,
    getAllProducts
}