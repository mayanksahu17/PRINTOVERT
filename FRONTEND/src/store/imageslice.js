import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  images : [],
  selectedImage : ""
};
const imageSlice = createSlice({
    name: "image",
    initialState,
    reducers: {
        pushImage: (state, action) => {
            state.images.push(action.payload.images)
            // console.log("action payload data", action.payload.images);
        },
        addImage: (state, action) => {
            state.images = action.payload.images ;
        },
        removeImage: (state, action) => {
            state.images = []; 
        },
        selectedImage : (state , action)=>{
            state.selectedImage = action.payload.image
            console.log("image got selected " , action.payload.image);
        },
        removeSelectedImage : (state,action)=>{
            state.selectedImage = ""
        }

    }
});

export const { addImage ,pushImage ,selectedImage  ,removeSelectedImage } = imageSlice.actions;
export default imageSlice.reducer