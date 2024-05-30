import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.BASE_URL || "http://localhost:9000" }),
  reducerPath: "main",
  tagTypes: ["Kpis", "Products", "Transactions"],
  endpoints: (build) => ({
    getKpis: build.query({
      query: () => "/kpi/kpis/",
      providesTags: ["Kpis"],
    }),
    getProducts: build.query({
      query: () => "/product/products/",
      providesTags: ["Products"],
    }),
    getTransactions: build.query({
      query: () => "/transaction/transaction/",
      providesTags: ["Transactions"],
    }),
  }),
});

export const { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } = api;
