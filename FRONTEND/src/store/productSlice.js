import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  productimage : null,
  fontimage  : null,
  backimage  : null,
  rightimage : null,
  leftimage  : null,
  color      : "white",
  size       : ""
};
const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
      setproductimage: (state, action) => {
        state.productimage = action.payload.file;
      },
  
      Editsize: (state, action) => {
        state.size = action.payload.size;
      },
  
      Editcolor: (state, action) => {
        state.color = action.payload.color;
      },
  
      Editfrontimage: (state, action) => {
        if ( action.payload.image) {
          state.fontimage = action.payload.image;
          console.log("kaam ho gya ");
        }else{console.log("kuchh dikkat h yha ");}
      },
  
      Editbackimage: (state, action) => {
        state.backimage = action.payload.images;
      },
  
      Editrightimage: (state, action) => {
        state.rightimage = action.payload.images; // Corrected from state.backimage
      },
  
      Editleftimage: (state, action) => {
        state.leftimage = action.payload.images; // Corrected from state.backimage
      },
  
      removeTshirt: (state, action) => {
        state.fontimage = null;
        state.backimage = null;
        state.rightimage = null;
        state.leftimage = null;
        state.color = "white";
        state.size = null;
      },
    },
  });
  
  export const {
    Editsize,
    Editcolor,
    Editfrontimage,
    Editbackimage,
    Editrightimage,
    Editleftimage,
    removeTshirt,
  } = productSlice.actions;
  
  export default productSlice.reducer;