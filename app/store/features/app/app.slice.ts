"use client";

import { createSlice } from "@reduxjs/toolkit";
import { apiSlice } from "../api/api.slice";
import { saveToLocalStorage, loadFromLocalStorage } from "@/app/helpers/utils";
import { Buyer, Merchant } from "@/types/app.interface";

const BUYER_URL = "/buyer";
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
      query: (data) => ({
        url: `${AUTH_URL}/login`,
        method: "POST",
        data,
      }),
      invalidatesTags: ["Buyer", "Merchant"],
    }),

    logout: builder.mutation({
      query: () => ({
        url: `${AUTH_URL}/logout`,
        method: "POST",
      }),
      invalidatesTags: ["Buyer", "Merchant"],
    }),

    forgotPassword: builder.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/forgot-password`,
        method: "POST",
        data,
      }),
    }),

    resetPassword: builder.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/reset-password`,
        method: "POST",
        data,
      }),
    }),

    verfiyEmail: builder.query({
      query: (data) => ({
        url: `${AUTH_URL}/verify-email`,
        method: "GET",
        params: {
          email: data,
        },
      }),
    }),

    changePassword: builder.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/change-password`,
        method: "POST",
        data,
      }),
    }),

    /**
     * @summary Buyer endpoints
     */

    createBuyer: builder.mutation({
      query: (data) => ({
        url: BUYER_URL,
        method: "POST",
        data,
      }),
    }),

    updateBuyer: builder.mutation({
      query: (data) => ({
        url: BUYER_URL,
        method: "PUT",
        data,
      }),

      invalidatesTags: ["Buyer", "Merchant"],
    }),

    searchBuyer: builder.query({
      query: (data) => ({
        url: `${BUYER_URL}/search`,
        method: "GET",
        params: {
          searchTerm: data,
        },
      }),
      providesTags: ["Buyer", "Merchant"],
    }),

    getOnlineBuyers: builder.query({
      query: (data) => ({
        url: `${BUYER_URL}/online`,
        method: "GET",
      }),
      providesTags: ["Buyer", "Merchant"],
    }),

    getCurrentBuyer: builder.query({
      query: (data) => ({
        url: `${BUYER_URL}/me`,
        method: "GET",
      }),
      providesTags: ["Buyer", "Merchant"],
    }),

    getBuyerById: builder.query({
      query: (data) => ({
        url: BUYER_URL,
        method: "GET",
        params: {
          id: data,
        },
        providesTags: ["Buyer", "Merchant"],
      }),
    }),

    getAllBuyers: builder.query({
      query: (data) => ({
        url: MERCHANT_URL,
        method: "GET",
      }),
      providesTags: ["Buyer", "Merchant"],
    }),

    deleteBuyer: builder.mutation({
      query: (data) => ({
        url: MERCHANT_URL,
        method: "DELETE",
        params: {
          id: data,
        },
      }),
      invalidatesTags: ["Buyer", "Merchant"],
    }),

    /**
     * @summary Merchant endpoints
     */

    createMerchant: builder.mutation({
      query: (data) => ({
        url: MERCHANT_URL,
        method: "POST",
        data,
      }),
    }),

    updateMerchant: builder.mutation({
      query: (data) => ({
        url: MERCHANT_URL,
        method: "PUT",
        data,
      }),

      invalidatesTags: ["Buyer", "Merchant"],
    }),

    searchMerchant: builder.query({
      query: (data) => ({
        url: `${MERCHANT_URL}/search`,
        method: "GET",
        params: {
          searchTerm: data,
        },
      }),
      providesTags: ["Buyer", "Merchant"],
    }),

    getOnlineMerchants: builder.query({
      query: (data) => ({
        url: `${MERCHANT_URL}/online`,
        method: "GET",
      }),
      providesTags: ["Buyer", "Merchant"],
    }),

    getCurrentMerchant: builder.query({
      query: (data) => ({
        url: `${MERCHANT_URL}/me`,
        method: "GET",
      }),
      providesTags: ["Buyer", "Merchant"],
    }),

    getMerchantById: builder.query({
      query: (data) => ({
        url: MERCHANT_URL,
        method: "GET",
        params: {
          id: data,
        },
        providesTags: ["Buyer", "Merchant"],
      }),
    }),

    getAllMerchants: builder.query({
      query: (data) => ({
        url: MERCHANT_URL,
        method: "GET",
      }),
      providesTags: ["Buyer", "Merchant"],
    }),

    deleteMerchant: builder.mutation({
      query: (data) => ({
        url: MERCHANT_URL,
        method: "DELETE",
        params: {
          id: data,
        },
      }),
      invalidatesTags: ["Buyer", "Merchant"],
    }),

    /**
     * @summary Product endpoints
     */

    createProduct: builder.mutation({
      query: (data) => ({
        url: PRODUCT_URL,
        method: "POST",
        data,
      }),
      invalidatesTags: ["Buyer", "Merchant"],
    }),

    updateProduct: builder.mutation({
      query: (data) => ({
        url: PRODUCT_URL,
        method: "PUT",
        data,
      }),
      invalidatesTags: ["Buyer", "Merchant"],
    }),

    getProductById: builder.query({
      query: (data) => ({
        url: PRODUCT_URL,
        method: "GET",
        params: {
          id: data,
        },
      }),

      providesTags: ["Buyer", "Merchant"],
    }),

    getAllProducts: builder.query({
      query: (data) => ({
        url: PRODUCT_URL,
        method: "GET",
      }),

      providesTags: ["Buyer", "Merchant"],
    }),

    searchProducts: builder.query({
      query: (data) => ({
        url: `${PRODUCT_URL}/search`,
        method: "GET",
        params: {
          searchTerm: data,
        },
      }),
      providesTags: ["Buyer", "Merchant"],
    }),
  }),
});

export const {
  /**
   * @summary Auth endpoint hooks
   */
  useLoginMutation,
  useLogoutMutation,
  useChangePasswordMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useVerfiyEmailQuery,

  /**
   * @summary Buyer endpoint hooks
   */
  useCreateBuyerMutation,

  /**
   * @summary Buyer endpoint hooks
   */
  useCreateMerchantMutation,
} = appApiCall;
export const { saveDashboardInfo, resetApp } = appSlice.actions;
export default appSlice.reducer;
