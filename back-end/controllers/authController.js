import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
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

export default passport;
