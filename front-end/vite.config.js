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
// Remarques:
//  quand je fait npm run build au terminal (front-end) Vite fait le ménage et prépare le site pour Internet=> vite Analyse ton code React -> Trouve les images importées -> Les copie dans dist/assets /assets->  Les renomme avec un hash  -> Génère index.html, JS, CSS  ➡️ Tout ça se passe AVANT Express

//  quand express démarre -> express voit cette ligne -> app.use(express.static("front-end/dist"))=> Il se dit : “Si quelqu’un demande un fichier, je vais le chercher dans dist et je le renvoie.”

//  Quand un visiteur ouvre le site => Le navigateur demande :http://monsite.com/ =>Express : envoie dist/index.html => Puis le navigateur demande : du js ; css, des imgs

// => Express : les lit dans dist/assets => les envoie => Express ne crée rien, il distribue juste
