import RoomModel from "../models/roomModel.js";

export const getTest = (req, res) => {
    res.send("Hello les amis ");
};

export const postTest = (req, res) => {
    res.send(req.body);
};

// create a room
export const addRoom = async (req, res) => {
    // On crée un nouvel objet room à partir du modèle RoomModel.
    const room = new RoomModel(req.body);
    try {
        // On essaye d’enregistrer la nouvelle chambre dans la BD
        await room.save();
        res.send(room);
        // Si ok on renvoie la chambre enregistrée au client
    } catch (error) {
        res.status(500).send(error);
    }
};
