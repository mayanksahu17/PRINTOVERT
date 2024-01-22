import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: "",
  productimage: "",
  color: "white",
  size: "",
  price: null,
  stock: null,
  rating: null,
  shipped: false,
  delivered: false,
  ordered: false,
  brand: null,
  category : "",
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


    removeTshirt: (state, action) => {
      state.color = "white";
      state.size = null;
    },
  },
});

export const {
  Editsize,
  Editcolor,
  EditFrontImage,
  Editbackimage,
  Editrightimage,
  Editleftimage,
  removeTshirt,
} = productSlice.actions;

export default productSlice.reducer;
