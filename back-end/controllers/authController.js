// Appelle la stratégie Passport pour vérifier l’utilisateur. Gère la réponse HTTP (200 OK ou 401). Peut ajouter du JSON, des messages, des logs ou d’autres actions. 👉 C’est là que tu décides ce que l’API renvoie au client.
// import passport from "passport";

import passport from "passport";
import jwt from "jsonwebtoken";

// Signup
export const register = (req, res, next) => {
    passport.authenticate("register", { session: false }, (err, user, info) => {
        if (err) {
            console.error("Error in register:", err);
            return res.status(500).json({ message: "Error serveur" });
        }
        if (!user)
            return res.status(400).json({
                message: info?.message || "Error registration",
            });
        return res.status(201).json({
            message: "User created successufly",
            user: { id: user._id, email: user.email, username: user.username },
        });
    })(req, res, next);
};

// Login
export const login = (req, res, next) => {
    passport.authenticate("login", { session: false }, (err, user, info) => {
        if (err) return next(err);

        // Debug : log de l’utilisateur trouvé et du body
        // console.log("Body reçu :", req.body);
        // console.log("Utilisateur trouvé :", user);
        // console.log("req.body.email :", req.body.email);
        // console.log("req.body.password :", req.body.password);

        if (!user)
            return res.status(401).json({
                message: info?.message || "Email ou mot de passe incorrect",
            });

        req.login(user, { session: false }, (error) => {
            if (error) return next(error);
            // Générer le JWT
            const token = jwt.sign(
                { id: user._id, email: user.email }, // payload
                "amel123", // secret
                { expiresIn: "1h" } // expiration
            );
            return res.json({
                message: "Connexion réussie",
                token, // <-- renvoyer le token au client
                user: {
                    id: user._id,
                    email: user.email,
                    username: user.username,
                },
            });
        });
    })(req, res, next);
};
