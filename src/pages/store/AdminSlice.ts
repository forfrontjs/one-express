import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const adminApi = createApi({
  reducerPath: "adminApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_APP_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("accesToken");
      console.log(token);

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    uploadImage: builder.mutation({
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
    deleteImages: builder.mutation<void, number>({
      query: (id) => ({
        url: `uploads/${id}`,
        method: "DELETE",
      }),
    }),
    uploadFile: builder.mutation({
      query: ({ file, date }: { file: File; date: string }) => {
        const FileData = new FormData();
        FileData.append("file", file);

        return {
          url: `/product/add/cn/1/${date}`,
          method: "POST",
          body: FileData,
        };
      },
    }),
    downloadExcel: builder.query<Blob, void>({
      query: () => "/users/shop/1",
      transformResponse: (response: unknown) => {
        if (response instanceof Blob) {
          return response;
        }

        // Преобразуйте response в Blob, если это не Blob
        return new Blob([response as ArrayBuffer], {
          type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        });
      },
    }),
  }),
});


export const { useUploadImageMutation, useDeleteImagesMutation, useUploadFileMutation, useDownloadExcelQuery } = adminApi;
