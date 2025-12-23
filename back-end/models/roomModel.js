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
        photos: {
            type: [String],
            required: true,
            default: [],
        },
        maxPersons: {
            type: Number,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        adressCity: {
            type: String,
            required: true,
        },
        Advantages: {
            type: String,
            required: true,
        },
        breackfast: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true, // crée createdAt et updatedAt automatiquement
    }
);

const RoomModel = mongoose.model("Room", roomSchema);

export default RoomModel;
