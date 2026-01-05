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
        surfaceArea: {
            type: String,
            required: false,
        },
        breackfast: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
            default: 0,
            min: 0,
            max: 5,
        },
        numOfReviews: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true, // crée createdAt et updatedAt automatiquement
    }
);

const RoomModel = mongoose.model("Room", roomSchema);

export default RoomModel;
