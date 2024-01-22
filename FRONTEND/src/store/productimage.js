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
      state.frontimage = action.payload.URL;
      console.log("action ka data",action.payload.URL);
     
    },
    setback: (state, action) => {
      state.backimage = action.payload.URL;
    },
    setleft: (state, action) => {   
      state.rightimage = action.payload.URL;
    },
    setright: (state, action) => {
      state.leftimage = action.payload.URL;
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
