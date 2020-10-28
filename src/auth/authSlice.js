import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { userRegister, userLogIn, userAuth } from "../userService";

export const createUser = createAsyncThunk("user/createUser", async (user) => {
  try {
    const response = await userRegister(user);
    return response.data;
  } catch (err) {
    console.error(err);
  }
});

export const userLogin = createAsyncThunk("user/userLogin", async (user) => {
  try {
    const response = await userLogIn(user);
    return response.data;
  } catch (err) {
    console.error(err);
  }
});

export const userAuthentication = createAsyncThunk(
  "user/userAuthentication",
  async (thunkAPI) => {
    try {
      const response = await userAuth();
      return response.data;
    } catch (err) {
      console.error(err);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    loginSuccess: false,
    isAuth: "",
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    [userLogin.pending]: (state) => {
      state.loading = true;
    },
    [userLogin.fulfilled]: (state, action) => {
      state.user = { ...action.payload.user };
      state.loginSuccess = action.payload.loginSuccess;
      state.loading = false;
    },
    [userLogin.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [userAuthentication.fulfilled]: (state, action) => {
      console.log("user authentication", action.payload);
      // state.isAuth = action.payload.isAuth;
      // state.loading = false;
    },
  },
});

// export const {} = userSlice.actions;

export default userSlice.reducer;
