import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const loginApi = createApi({
  reducerPath: "loginApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://auth-qa.qencode.com/",
  }),
  tagTypes: ["login"],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: `v1/auth/login`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["login"],
    }),
    getHealth: builder.query({
      query: () => ({
        url: `healthcheck`,
      }),
      keepUnusedDataFor: 0,

      providesTags: ["mcrsProfile"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useLoginMutation, useGetHealthQuery } = loginApi;
