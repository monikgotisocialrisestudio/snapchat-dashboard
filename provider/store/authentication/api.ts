import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ResponseType } from "@/lib/types/globle.type"; // Adjust import path and type name as needed
import { AuthUserType } from "./authentication.type";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  }),
  tagTypes: ["auth"],
  endpoints: (builder) => ({
    validateToken: builder.mutation<ResponseType<AuthUserType>, string>({
      query: (id) => ({
        url: `api/find_license_key`,
        method: "POST",
        body: { license_key: id },
      }),
    }),
  }),
});

export const { useValidateTokenMutation } = authApi;
