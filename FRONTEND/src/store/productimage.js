import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: "",
  productimage: "",
  frontimage: "",
  backimage: "",
  rightimage: "",
  leftimage: "",

};

const productimage = createSlice({
  name: "productimage",
  initialState,
  reducers: {
    setfront: (state, action) => {
      state.productimage = action.payload.URL;
     
    },
    setback: (state, action) => {
      state.productimage = action.payload.URL;
    },
    setleft: (state, action) => {   
      state.productimage = action.payload.URL;
    },
    setright: (state, action) => {
      state.productimage = action.payload.URL;
    },
    setright: (state, action) => {
      state.productimage = action.payload.URL;
    },



   
  }
});

export const {
    setfront,
    setback,
    setleft,
    setright
} = productimage.actions;

export default productimage.reducer;
