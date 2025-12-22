import { configureStore } from "@reduxjs/toolkit";
import { roomApiSlice } from "./roomApiSlice";

export const store = configureStore({
    reducer: {
        [roomApiSlice.reducerPath]: roomApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(roomApiSlice.middleware),
});
