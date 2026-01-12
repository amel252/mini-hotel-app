// Appelle la stratégie Passport pour vérifier l’utilisateur. Gère la réponse HTTP (200 OK ou 401). Peut ajouter du JSON, des messages, des logs ou d’autres actions. 👉 C’est là que tu décides ce que l’API renvoie au client.
// import passport from "passport";

import passport from "passport";
import jwt from "jsonwebtoken";

// Register
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

        if (!user)
            return res.status(401).json({
                message: info?.message || "Email ou mot de passe incorrect",
            });

        req.login(user, { session: false }, (error) => {
            if (error) return next(error);
            // Générer le JWT
            const token = jwt.sign(
                {
                    id: user._id,
                    email: user.email,
                    isAdmin: user.isAdmin,
                }, // payload
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
                    isAdmin: user.isAdmin,
                },
            });
        });
    })(req, res, next);
};
// Logout route sécurisée
export const logout = (req, res, next) => {
    passport.authenticate("jwt", { session: false }, (err, user, info) => {
        if (err) return next(err);
        // Si le token est absent ou invalide
        if (!user) return res.status(401).json({ message: "Token invalid" });

        // Ici, côté serveur, on ne fait rien avec le token
        // On dit juste au client qu'il peut supprimer le token
        return res.json({
            message: "logout successufuly , delete token client side",
            user: {
                id: user.id,
                username: user.username,
            },
        });
    })(req, res, next);
};
