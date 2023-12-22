"use client";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const userInfoFromLocalStorage =
  typeof window !== "undefined"
    ? localStorage.getItem("agronomixUserInfo")
    : null;

const initialState = {
  userAuthInfo: userInfoFromLocalStorage
    ? JSON.parse(userInfoFromLocalStorage)
    : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.userAuthInfo = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem(
          "agronomixUserInfo",
          JSON.stringify(action.payload)
        );
      }
    },

    updateAuthInfo: (state, action) => {
      state.userAuthInfo = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem(
          "agronomixUserInfo",
          JSON.stringify(action.payload)
        );
      }
    },

    logoutUser: (state, action) => {
      if (typeof window !== "undefined") {
        localStorage.removeItem("agronomixUserInfo");

        //logout the user
        const logoutUser = async () => {
          await axios.post("/api/auth/reset-token");
        };
        logoutUser();
      }
    },
  },
});

export const { loginUser, updateAuthInfo, logoutUser } = authSlice.actions;
export default authSlice.reducer;
