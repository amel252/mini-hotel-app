// le role de slice est de récup la liste des rooms , ajout, modif , suppri sans utilisé les fetch
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const roomApi = createApi({
    reducerPath: "roomApi",
    baseQuery: fetchBaseQuery({ baseUrl: "/api/rooms" }),
    tagTypes: ["Room"],
    endpoints: (builder) => ({
        // Récupérer toutes les chambres
        getRooms: builder.query({
            query: () => "/", // GET /api/rooms
            providesTags: ["Room"],
        }),
        // Créer une chambre
        createRoom: builder.mutation({
            query: (room) => ({
                url: "/",
                method: "POST",
                body: room,
            }),
            invalidatesTags: ["Room"],
        }),
        // Supprimer une chambre
        deleteRoom: builder.mutation({
            query: (id) => ({
                url: `/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Room"],
        }),
        //  récup  room par id
        getRoomById: builder.query({
            query: (id) => `/rooms/${id}`,
        }),
    }),
});

export const {
    useGetRoomsQuery,
    useCreateRoomMutation,
    useDeleteRoomMutation,
    useGetRoomByIdQuery,
} = roomApi;
