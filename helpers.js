// function pour la gestion des erreurs (catchErrors sert à éviter d’écrire des try...catch partout ds ton code.) , catchErrors = un petit outil qui attrape les erreurs des fonctions asynchrones et les envoie à Express pour qu’il les gère.

export const catchErrors = (fn) => (req, res, next) => {
    return fn(req, res, next).catch(next);
};
