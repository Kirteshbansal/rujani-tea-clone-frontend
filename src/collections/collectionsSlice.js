import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getCollections } from "../projectService";

export const fetchCollections = createAsyncThunk("collections/fetchCollections", async () => {
    try {
        const response = await getCollections();
        return response?.data || [];
    } catch (err) {
        console.error(err);
    }
});

const collectionsSlice = createSlice({
    name: "collections",
    initialState: { collections: [], loading: false, error: "" },
    reducers: {},
    extraReducers: {
        [fetchCollections.pending]: (state) => {
            state.loading = true;
        },
        [fetchCollections.fulfilled]: (state, action) => {
            state.collections = [...action.payload];
            state.loading = false;
        },
        [fetchCollections.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
    },
});

export default collectionsSlice.reducer;
