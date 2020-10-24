import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getProductsByCollection } from "../projectService";

export const fetchProductsByCollection = createAsyncThunk(
  "collectionProducts/fetchProductsByCollection",
  async (collectionId) => {
    const response = await getProductsByCollection(collectionId);
    return response.data;
  }
);

const collectionSlice = createSlice({
  name: "collectionProducts",
  initialState: { collectionProducts: {} },
  reducers: {},
  extraReducers: {
    [fetchProductsByCollection.fulfilled]: (state, action) => {
      state.collectionProducts = { ...action.payload };
    },
  },
});

export default collectionSlice.reducer;
