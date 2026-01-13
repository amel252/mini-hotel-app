// récupérer un utilisateur: modifier son profil, supprimer un compte, lister les utilisateurs (admin), changer avatar, nom, email, etc.
import React from "react";
import User from "../models/userModel.js";

export const getUsers = async (req, res) => {
    try {
        // Vérifier que l'utilisateur est admin
        if (!req.user?.isAdmin) {
            return res.status(403).json({ message: "Access denied" });
        }
        const users = await User.find().select("-password"); // retire le password
        res.json(users);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
};
