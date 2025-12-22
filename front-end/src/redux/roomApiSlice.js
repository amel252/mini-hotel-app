// le rôle du slice est de récupérer la liste des rooms, ajout, modif, suppression sans utiliser fetch
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const roomApiSlice = createApi({
    reducerPath: "roomApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "/api/rooms",
    }),
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

        // Récupérer une chambre par id
        getRoomById: builder.query({
            query: (id) => `/${id}`,
        }),
    }),
});

export const {
    useGetRoomsQuery,
    useCreateRoomMutation,
    useDeleteRoomMutation,
    useGetRoomByIdQuery,
} = roomApiSlice;
