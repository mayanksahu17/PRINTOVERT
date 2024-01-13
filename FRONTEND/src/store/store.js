import {configureStore} from '@reduxjs/toolkit';
import authSlice from './authSlice';
import imageslice from './imageslice';
const store = configureStore({
    reducer: {
        auth : authSlice,
        images : imageslice
        
    }
});


export default store;