// Vérifie l’authentification. Compare email et mot de passe. Décide si l’utilisateur est valide ou pas (done(null, user) ou done(null, false)). Ne renvoie pas de JSON et ne gère pas la réponse HTTP.
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import bcrypt from "bcrypt";
import UserModel from "../models/userModel.js";

//  function d'inscription user
passport.use(
    "signup",
    new LocalStrategy(
        {
            usernameField: "email", // on utilisera email comme identifiant
            passwordField: "password",
            passReqToCallback: true, // pour avoir accès à req.body
        },
        async (req, email, password, done) => {
            try {
                const { username } = req.body; // récupère username depuis la requête
                // Vérifier si l'email existe déjà
                const existingUser = await UserModel.findOne({ email });
                if (existingUser) {
                    return done(null, false, {
                        message: "Email already exist",
                    });
                }
                // Créer le nouvel utilisateur
                const user = await UserModel.create({
                    username,
                    email,
                    password,
                });
                return done(null, user);
            } catch (error) {
                return done(error);
            }
        }
    )
);
// --- Stratégie login ---
passport.use(
    "login",
    new LocalStrategy(
        {
            usernameField: "email",
            passwordField: "password",
            passReqToCallback: true,
        },
        async (req, email, password, done) => {
            console.log("Recherche utilisateur avec email :", email);
            try {
                const user = await UserModel.findOne({ email });
                if (!user) {
                    return done(null, false, {
                        message: "Utilisateur non trouvé",
                    });
                }

                // Utiliser la méthode isValidPassword de ton modèle
                const validate = await user.isValidPassword(password);
                if (!validate) {
                    return done(null, false, {
                        message: "Mot de passe incorrect",
                    });
                }

                // Connexion réussie
                return done(null, user, { message: "Connexion réussie" });
            } catch (error) {
                return done(error);
            }
        }
    )
);

export default passport;
