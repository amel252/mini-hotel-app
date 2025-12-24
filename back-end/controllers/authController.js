export const signup = (req, res) => {
    // Passport met l'utilisateur créé dans req.user
    if (!req.user) {
        return res
            .status(400)
            .json({ message: "Erreur lors de l'inscription" });
    }
    res.status(201).json({
        message: "Utilisateur créé avec succès",
        user: req.user,
    });
};
