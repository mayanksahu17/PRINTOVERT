import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name : "",
  productimage : "",
  fontimage  : "",
  backimage  : "",
  rightimage : "",
  leftimage  : "",
  color      : "white",
  size       : "",
  price : null,
  stock : null,
  rating : null,
  shipped : false ,
  delivered : false ,
  ordered : false,
  brand : null
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
        state.backimage = action.payload.image;
      },

      Editrightimage: (state, action) => {
        state.rightimage = action.payload.image;
      },

      Editleftimage: (state, action) => {
        state.leftimage = action.payload.image; 
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