const middlewareAdmin = (req, res, next) => {
    if (req.user.isAdmin === true) {
        next(); // l'utilisateur est admin → OK
    } else {
        res.status(403).json("Access refused only admin ");
    }
};

export default middlewareAdmin;
