import { configureStore } from "@reduxjs/toolkit";
import { roomApiSlice } from "./slices/roomApiSlice.js";

export const store = configureStore({
    reducer: {
        [roomApiSlice.reducerPath]: roomApiSlice.reducer,
        // autres reducers...
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(roomApiSlice.middleware),
});
