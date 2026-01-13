// l’envoi du token est une logique transversale que tu réutilises partout en auth.
// tu dois faire exactement la même chose à chaque modification comme :après un login, après un register, après un refresh, après un reset password

// le code est réutilisé plusieurs fois ,ça évite la duplication, ça centralise la sécurité (cookies, options, durée de vie), si tu veux changer la façon d’envoyer le token → un seul endroit à modifier

import jwt from "jsonwebtoken";

const generateToken = (res, user) => {
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: "30d",
    });
    const options = {
        httpOnly: true,
        expires: new Date(
            Date.now() + 30 * 24 * 60 * 60 * 1000 // 30 jours
        ),
        secure: process.env.NODE_ENV !== "devlopement",
        // NODE_ENV=> en production =>le navigateur refuse d’envoyer le cookie si la connexion n’est pas HTTPS
        sameSite: "strict",
    };
    res.status(200).cookie("token", token, options).json({
        success: true,
        token,
        user,
    });
};
