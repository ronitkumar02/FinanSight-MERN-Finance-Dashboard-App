import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: process.env.BASE_URL || "http://localhost:9000"}),
    reducerPath: "main",
    tagTypes: ["Kpis"],
    endpoints: (build) => ({
        getKpis: build.query({
            query: () => "/kpi/kpis",
            providesTags: ["Kpis"],
        }),
    }),
});

export const { useGetKpisQuery } = api;