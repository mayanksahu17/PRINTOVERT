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

        setproductimage : (state , action)=>{
            state.productimage = action.payload.file
        },

        Editsize : (state,action)=>{
            state.size = action.payload.size
           
        },
        
        Editcolor : (state,action)=>{
            state.color = action.payload.color
        },

        Editfontimage: (state, action) => {
            state.fontimage = action.payload.file
           
        },
        Editbackimage: (state, action) => {
            state.backimage = action.payload.images ;
            // console.log("action payload data", action.payload.images);
        },
        Editrightimage: (state, action) => {
            state.backimage = action.payload.images ;
            // console.log("action payload data", action.payload.images);
        },
        Editleftimage: (state, action) => {
            state.backimage = action.payload.images ;
            // console.log("action payload data", action.payload.images);
        },
        removeTshirt: (state, action) => {
            state.fontimage = null; 
            state.backimage = null; 
            state.rightimage = null; 
            state.leftimage = null; 
            state.color = "white"; 
            state.size = null; 

        }
    }
});

export const {Editsize , Editcolor, Editfontimage, Editbackimage, 
             Editrightimage, Editleftimage, removeTshirt } = productSlice.actions;

export default productSlice.reducer