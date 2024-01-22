import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allProductData: [],
};

const allProductDataSlice = createSlice({
  name: 'allProductData', 
  initialState, 
  reducers: {
   
    setProducts: (state, action) => {
      state.allProductData = action.payload.data;

    },
  
    removeProducts: (state) => {
      state.allProductData = [];
      console.log("removed");
    },
  },
});


export const { setProducts, removeProducts } = allProductDataSlice.actions;

export default allProductDataSlice.reducer;
