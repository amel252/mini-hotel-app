import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
export default {
    server: {
        port: 5173, // port du front
        proxy: {
            "/api": "http://localhost:3200", // 👈 ton backend tourne ici
        },
    },
};
