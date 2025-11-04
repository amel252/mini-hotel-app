import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        // permet de supp les espace en plus en fin de mot
        trim: true,
        lowercase: true,
    },
    maxPersons: {
        type: Number,
        default: 1,
        validate: (value) => {
            if (value <= 0) {
                throw new Error(
                    "la chambre doit pouvoir acceuillir au moins une personne"
                );
            }
        },
    },
});
const Room = mongoose.model("Room", RoomSchema);
export default Room;
