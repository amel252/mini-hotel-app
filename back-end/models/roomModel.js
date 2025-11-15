import mongoose from "mongoose";

const roomSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        photo: {
            type: String,
            required: true,
        },
        maxPersons: {
            type: Number,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true, // crée createdAt et updatedAt automatiquement
    }
);

const Room = mongoose.model("Room", roomSchema);

export default Room;
