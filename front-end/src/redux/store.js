import { configureStore } from "@reduxjs/toolkit";
import { authApiSlice } from "./authApiSlice";
import { roomApiSlice } from "./roomApiSlice";

export const store = configureStore({
    reducer: {
        [roomApiSlice.reducerPath]: roomApiSlice.reducer,
        [authApiSlice.reducerPath]: authApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            roomApiSlice.middleware,
            authApiSlice.middleware,
        ]),
});
