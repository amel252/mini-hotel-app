// Appelle la stratégie Passport pour vérifier l’utilisateur. Gère la réponse HTTP (200 OK ou 401). Peut ajouter du JSON, des messages, des logs ou d’autres actions. 👉 C’est là que tu décides ce que l’API renvoie au client.
// import passport from "passport";
// authController → s’occupe de l’authentification: login/logout, register,refresh token, reset PWD, vérification d’email, génération et validation des JWT / sessions

import passport from "passport";
import generateToken from "../utils/generateToken";

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

        // Soit tu renvoies juste le user :
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
                message: info?.message || "Email or password incorrect",
            });

        req.login(user, { session: false }, (error) => {
            if (error) return next(error);
            // Toute la logique JWT est déléguée ici
            generateToken(res, user);
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
//  fonction forget password
// fontion reset password
// fonction user profile => /api/user/me
