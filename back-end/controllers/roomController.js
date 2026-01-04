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

//  create a review
export const createRoomReview = async (req, res) => {
    try {
        const { rating } = req.body; // note envoyée (1 à 5)
        if (rating < 1 || rating > 5) {
            return res.status(400).json({ message: "Invalid rating" });
        }
        const room = await RoomModel.findById(req.params.id);

        if (!room) {
            return res.status(404).json({ message: "Room not found" });
        }

        // Calcul de la nouvelle moyenne
        const totalRating = room.rating * room.numOfReviews + rating;

        room.numOfReviews += 1;
        room.rating = Number((totalRating / room.numOfReviews).toFixed(1));
        await room.save();

        res.json({
            rating: room.rating,
            numOfReviews: room.numOfReviews,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
