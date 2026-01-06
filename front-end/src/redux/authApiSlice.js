import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
//  creation des api

export const authApiSlice = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3200/api/auth",
    }),
    endpoints: (builder) => ({
        register: builder.mutation({
            query(body) {
                return {
                    url: "/register",
                    method: "POST",
                    body,
                };
            },
        }),
        login: builder.mutation({
            query(body) {
                return {
                    url: "/login",
                    method: "POST",
                    body,
                };
            },
        }),
    }),
});
export const { useLoginMutation, useRegisterMutation } = authApiSlice;
