import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/ApiError.js';
import { User } from '..//models/user.model.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import Product from '../models/product.model.js';
import { wallet } from '../models/wallet.model.js';
import { Admin } from '../models/admin.model.js';

const getAllOrderedProducts = asyncHandler(async (req, res) => {
  const orderedProducts = await Product.find({ ordered: true });
  return res.json(new ApiResponse(200,  orderedProducts,'Ordered products retrieved successfully'));
}); 

const getAllActiveProducts = asyncHandler(async (req, res) => {
  // Assuming active products are those that are not delivered yet
  const activeProducts = await Product.find({ delivered: false });
  return res.json(new ApiResponse(200,activeProducts, 'Active products retrieved successfully', ));
});

const getAllDeliveredProducts = asyncHandler(async (req, res) => {
  const deliveredProducts = await Product.find({ delivered: true });
  return res.json(new ApiResponse(200,deliveredProducts, 'Delivered products retrieved successfully', ));
});

const getAllWalletRequest = asyncHandler(async (req, res) => {
  const pendingWalletRequests = await WalletRequest.find({ confirmed: false });
  return res.json(new ApiResponse(200,pendingWalletRequests, 'Pending wallet requests retrieved successfully', ));
});


const registerAdmin = asyncHandler(async(req,res)=>{
    const {userName , password} = req.body;
    console.log(userName , password);
    if ((!userName || !password) ) {
        throw new ApiError(500, " Username or password is required ");
    }
    const admin = Admin.create({userName , password })
    if (!admin) {
        throw new ApiError(500, "Something went wrong while registering the user");
      }

   return res.json(new ApiResponse(200 ,admin , "User Registered succesfullly"))
})



const loginAdmin = asyncHandler(async (req, res) => {
    try {
      const { userName, password } = req.body;
      console.log(userName, password);
  
      if (!userName || !password) {
        throw new ApiError(500, 'Username or password is required');
      }
  
      const admin = await Admin.findOne({ userName });
  
      if (!admin) {
        throw new ApiError(500, 'Something went wrong while logging in the user');
      }
  
      return res.json(new ApiResponse(200, admin, 'User logged in successfully'));
    } catch (error) {
      // Handle errors here, you may want to log or customize the response
      console.error('Error in loginAdmin:', error);
      res.status(error.statusCode || 500).json(new ApiResponse(false, null, error.message));
    }
  });

const getwalletrequests = asyncHandler(async (req, res) => {
    try {
      const allrequests = await wallet.find();
      if (!allrequests) {
       throw new ApiError(400,"Can not get wallet requests")
      }
      res.json(new ApiResponse(200, allrequests, 'All wallet requests fetched successfully'));
    } catch (error) {
    
      console.error('Error in getwalletrequests:', error);
      res.status(error.statusCode || 500).json(new ApiError(401,"Can not get wallet requests"));
    }
  });

const addwalletamount = asyncHandler(async (req, res) => {
    const { amount, userid } = req.body;
  
    try {
     
      const user = await User.findById(userid);
  
      if (!user) {
        throw new ApiError(404, 'User not found');
      }
  
      if (amount <= 0) {
        throw new ApiError(400, 'Invalid amount. Amount must be greater than 0.');
      } 
      user.walletBalance =  user.walletBalance +  amount; 
  
      await user.save();
  
      res.json(new ApiResponse(200, `Wallet amount added successfully. New balance: ${user.walletBalance}`));
    } catch (error) {
      console.error('Error in addwalletamount:', error);
      res.status(error.statusCode || 500).json(new ApiResponse(400, error.message));
    }
  });
  





const test = asyncHandler(async (req,res)=>{
    res.json(new ApiResponse(200,"sab theek h "))
})

export  {
    getAllOrderedProducts,
    getAllActiveProducts,
    getAllDeliveredProducts,
    getAllWalletRequest,
    registerAdmin,
    test,
    loginAdmin,
    getwalletrequests,
    addwalletamount
}