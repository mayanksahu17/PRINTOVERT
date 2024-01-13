import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  images : []
};
const imageSlice = createSlice({
    name: "image",
    initialState,
    reducers: {
        addImage: (state, action) => {
            state.images = action.payload.images;
            console.log("action payload data", action.payload.images);
        },
        removeImage: (state, action) => {
            state.images = []; 
        }
    }
});

export const { addImage } = imageSlice.actions;
export default imageSlice.reducer