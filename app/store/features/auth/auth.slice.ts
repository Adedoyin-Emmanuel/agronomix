"use client";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

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

        axios
          .post("/api/auth/reset-token")
          .then((response) => {
            //console.log(response);
          })
          .catch((error) => {
            console.error("Error logging out user:", error);
            toast.error("An error occured while logging out");
          });

        return state;
      }

      return state;
    },
  },
});

export const { loginUser, updateAuthInfo, logoutUser } = authSlice.actions;
export default authSlice.reducer;
