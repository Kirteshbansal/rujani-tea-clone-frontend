import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getAllProducts } from "../projectService";

export const fetchProducts = createAsyncThunk("products/fetchProducts", async (thunkAPI) => {
    try {
        const response = await getAllProducts();
        return response.data;
    } catch (err) {
        console.error(err);
    }
});

const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        sortOption: "Alphabetically, A-Z",
        loading: false,
        error: "",
    },
    reducers: {
        sortProducts(state, action) {
            state.sortOption = action.payload;
        },
    },
    extraReducers: {
        [fetchProducts.pending]: (state) => {
            state.loading = true;
        },
        [fetchProducts.fulfilled]: (state, action) => {
            state.products = [...action.payload];
            state.loading = false;
        },
        [fetchProducts.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
    },
});

export const { sortProducts } = productsSlice.actions;

export default productsSlice.reducer;
