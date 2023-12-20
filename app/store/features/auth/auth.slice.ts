"use client";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const userInfoFromLocalStorage =
  typeof window !== "undefined"
    ? localStorage.getItem("agronomixUserInfo")
    : null;

const initialState = {
  userInfo: userInfoFromLocalStorage
    ? JSON.parse(userInfoFromLocalStorage)
    : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.userInfo = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem(
          "agronomixUserInfo",
          JSON.stringify(action.payload)
        );
      }
    },

    updateAuthInfo: (state, action) => {
      state.userInfo = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem(
          "agronomixUserInfo",
          JSON.stringify(action.payload)
        );
      }
    },

    logout: (state, action) => {
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

export const { login, updateAuthInfo, logout } = authSlice.actions;
export default authSlice.reducer;
