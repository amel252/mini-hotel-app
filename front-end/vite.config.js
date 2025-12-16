import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default {
    server: {
        port: 5173, // port du front
        proxy: {
            "/api": "http://localhost:3200", // 👈 ton backend tourne ici
        },
    },
};
