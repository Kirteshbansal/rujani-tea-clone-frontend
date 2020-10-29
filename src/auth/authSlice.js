import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  userRegister,
  userLogIn,
  // userAuth,
  updateAddress,
} from "../userService";

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

// export const userAuthentication = createAsyncThunk(
//   "user/userAuthentication",
//   async (thunkAPI) => {
//     try {
//       const response = await userAuth();
//       return response.data;
//     } catch (err) {
//       console.error(err);
//     }
//   }
// );

export const manageAddress = createAsyncThunk(
  "user/manageAddress",
  async (addr, id) => {
    try {
      const response = await updateAddress(addr, id);
      console.log(response);
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
  reducers: {
    userLogout(state, action) {
      state.loginSuccess = false;
      console.log(state.loginSuccess);
    },
  },
  extraReducers: {
    [createUser.pending]: (state) => {
      state.loading = true;
    },
    [createUser.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [createUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
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
    // [userAuthentication.fulfilled]: (state, action) => {
    //   console.log("user authentication", action.payload);
    // state.isAuth = action.payload.isAuth;
    // state.loading = false;
    // },
    [manageAddress.pending]: (state) => {
      state.loading = true;
    },
    [manageAddress.fulfilled]: (state, action) => {
      console.log(action);
      state.user.address = { ...action.payload };
      state.loading = false;
    },
    [manageAddress.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  },
});

export const { userLogout } = userSlice.actions;

export default userSlice.reducer;
