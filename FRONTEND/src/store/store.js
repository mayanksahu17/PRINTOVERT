import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import imageslice from './imageslice';
import productSlice from './productSlice.js';
import productimage from './productimage.js'
import allProducts from './allProducts.js';
const store = configureStore({
    reducer: {
        auth: authSlice,
        images: imageslice,
        product: productSlice,
        productimage : productimage,
        allProductData : allProducts,
    }
});

export default store;