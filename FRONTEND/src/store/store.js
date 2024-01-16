import { configureStore } from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk'; 
import authSlice from './authSlice';
import imageslice from './imageslice';
import productSlice from './productSlice.js';

const store = configureStore({
    reducer: {
        auth: authSlice,
        images: imageslice,
        product: productSlice
    }
});

export default store;