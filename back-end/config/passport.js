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
                // Hasher le mot de passe
                const hashedPassword = await bcrypt.hash(password, 10);
                // Créer le nouvel utilisateur
                const user = await UserModel.create({
                    username,
                    email,
                    password: hashedPassword,
                });
                return done(null, user);
            } catch (error) {
                return done(error);
            }
        }
    )
);

export default passport;
