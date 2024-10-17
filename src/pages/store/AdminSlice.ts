import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const adminApi = createApi({
  reducerPath: "adminApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://192.168.68.137:5009",
    credentials: "include",
    prepareHeaders: (headers) => {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluIiwiaWQiOiJlYTgwNDU2Zi1hMzdjLTQyMzctODIyMC0wMDRkOTJmZTAzMjIiLCJpYXQiOjE3Mjg4OTU3ODl9.g9uBUqU4AVWLqAlXWOsrO6spTUsv2MCA8rOBhUqZtfg";
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    uploadFile: builder.mutation({
      query: (file: File) => {
        const formData = new FormData();
        formData.append("file", file);

        return {
          url: "/uploads",
          method: "POST",
          body: formData,
        };
      },
    }),
  }),
});


export const { useUploadFileMutation } = adminApi;
