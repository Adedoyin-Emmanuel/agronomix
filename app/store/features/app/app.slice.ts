"use client";

import { createSlice } from "@reduxjs/toolkit";
import { apiSlice } from "../api/api.slice";
import { saveToLocalStorage, loadFromLocalStorage } from "@/app/helpers/utils";
import { Buyer, Merchant } from "@/types/app.interface";

const BUYERS_URL = "/buyer";
const MERCHANT_URL = "/merchant";
const AUTH_URL = "/auth";
const PRODUCT_URL = "/product";

// TODO Added a product review to the API
const REVIEW_URL = "/review";

const initialState = {
  dashboardInfo:
    typeof window !== "undefined"
      ? (loadFromLocalStorage("agronomixDashboardInfo", null) as any | null) // TODO change the any type to the userDashboard Interface
      : null,
};

const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    /**
     * @see Save data reducers, basically updates the state and saves data to local storage.
     *
     */

    saveDashboardInfo: (state, action) => {
      state.dashboardInfo = action.payload;
      saveToLocalStorage(
        "agronomixDashboardInfo",
        JSON.stringify(action.payload)
      );
    },

    /**
     * @see clear data reducers, basically resets the state and removes data from local storage.
     *
     */

    // Resets the entire app state to the initial state, used when user logs out
    resetApp: (state, action) => {
      localStorage.removeItem("agronomixDashboardInfo");
    },
  },
});

export const appApiCall = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    /**
     * @summary Auth endpoints
     */

    login: builder.mutation({
      query: (data) => ({}),
      invalidatesTags: ["Buyer", "Merchant"],
    }),

    logout: builder.mutation({
      query: (data) => ({}),
      invalidatesTags: ["Buyer", "Merchant"],
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation } = appApiCall;
export const { saveDashboardInfo, resetApp } = appSlice.actions;
export default appSlice.reducer;
