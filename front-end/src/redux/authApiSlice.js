import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
//  creation des api

export const authApiSlice = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3200/api/auth",
    }),
    endpoints: (builder) => ({
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
export const { useLoginMutation } = authApiSlice;
