import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
    {
        username: { type: String, required: true, unique: true, trim: true },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        password: { type: String, required: true },
        profilePicture: {
            type: String,
            default: "https://randomuser.me/api/portraits/women/65.jpg",
        },
        isAdmin: { type: Boolean, default: false },
    },
    { timestamps: true }
);

// 🔐 Hash automatique avant enregistrement
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = this.password.trim();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

// 🔍 Comparaison mot de passe au login
userSchema.methods.isValidPassword = async function (password) {
    return await bcrypt.compare(password.trim(), this.password);
};

export default mongoose.model("User", userSchema);
