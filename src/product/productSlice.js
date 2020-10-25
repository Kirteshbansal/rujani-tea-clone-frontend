import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getProduct } from "../projectService";

export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async (productId) => {
    try {
      const response = await getProduct(productId);
      return response.data;
    } catch (err) {
      console.error(err);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: { product: {}, loading: false, error: "" },
  reducers: {},
  extraReducers: {
    [fetchProduct.pending]: (state) => {
      state.loading = true;
    },
    [fetchProduct.fulfilled]: (state, action) => {
      state.product = { ...action.payload };
      state.loading = false;
    },
    [fetchProduct.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  },
});

export default productSlice.reducer;
