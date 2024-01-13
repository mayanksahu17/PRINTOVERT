import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  images : []
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
            console.log("action payload data", action.payload.images);
        },
        removeImage: (state, action) => {
            state.images = []; 
        }
    }
});

export const { addImage ,pushImage } = imageSlice.actions;
export default imageSlice.reducer