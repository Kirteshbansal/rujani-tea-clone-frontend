import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getAllProducts } from "../projectService";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (thunkAPI) => {
    const response = await getAllProducts();
    return response.data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: { products: [] },
  reducers: {},
  extraReducers: {
    [fetchProducts.fulfilled]: (state, action) => {
      state.products = [...action.payload];
    },
  },
});

export default productsSlice.reducer;
