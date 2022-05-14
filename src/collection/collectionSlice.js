import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getProductsByCollection } from "../projectService";

export const fetchProductsByCollection = createAsyncThunk(
  "collectionProducts/fetchProductsByCollection",
  async (collectionId) => {
    try {
      const response = await getProductsByCollection(collectionId);
      return response.data;
    } catch (err) {
      console.error(err);
    }
  }
);

const collectionSlice = createSlice({
  name: "collectionProducts",
  initialState: { collectionProducts: {}, loading: false, error: "" },
  reducers: {},
  extraReducers: {
    [fetchProductsByCollection.pending]: (state) => {
      state.loading = true;
    },
    [fetchProductsByCollection.fulfilled]: (state, action) => {
      state.collectionProducts = { ...action.payload };
      state.loading = false;
    },
    [fetchProductsByCollection.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  },
});

export default collectionSlice.reducer;
