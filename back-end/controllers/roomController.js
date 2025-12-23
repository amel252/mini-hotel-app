import RoomModel from "../models/roomModel.js";

// ****create a room***
export const addRoom = async (req, res) => {
    // On crée un nouvel objet room à partir du modèle RoomModel.
    const room = new RoomModel(req.body);
    // On essaye d’enregistrer la nouvelle chambre dans la BD
    await room.save();
    // Si ok on renvoie la chambre enregistrée au client
    res.send(room);
};
// *****read all rooms****
export const getRooms = async (req, res) => {
    // aller chercher tout mes rooms
    const rooms = await RoomModel.find({});
    // envoyé la réponse
    res.send(rooms);
};

// **** read room by id**
export const getRoomById = async (req, res) => {
    const room = await RoomModel.findById(req.params.id);
    res.send(room);
};
//  ****update room****
export const updateRoom = async (req, res) => {
    //  chercher l'élement a modifier
    const room = await RoomModel.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });
    if (!room) {
        return res.status(404).json({ message: "Room not found" });
    }
    res.status(200).json(room);
};
//  *** delete room **
export const deleteRoom = async (req, res) => {
    //  chercher l'élement a modifier
    const room = await RoomModel.findByIdAndDelete(req.params.id);
    //  si y a pas de chambre on envoie msg d'erreur
    if (!room) {
        res.status(404).send("Aucune chambre trouvé ");
    }
    // si ok envoie la réponse
    res.status(200).send("chambre est supprimé ");
};
