import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut, refreshUser, register } from "./operation";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: (builder) =>
    builder
      .addCase(register.fulfilled, (state, action) => {
        (state.user = action.payload.user),
          (state.token = action.payload.token),
          (state.isLoggedIn = true);
      })
      .addCase(logIn.fulfilled, (state, action) => {
        (state.user = action.payload.user),
          (state.token = action.payload.token),
          (state.isLoggedIn = true);
      })
      .addCase(logOut.fulfilled, (state) => {
        (state.user = {
          name: null,
          email: null,
        }),
          (state.token = null),
          (state.isLoggedIn = false);
      })
      .addCase(refreshUser.pending, (state) => {
        state.isLoggedIn = false;
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      }),
});

export const authReducer = authSlice.reducer;
