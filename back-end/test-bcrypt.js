import bcrypt from "bcrypt";

const plain = "maria123";
const hash = "$2b$10$qDhylPDtLN9SjBZ6qA7hv.hzQ/1LgwKAjM/Iy0KMyZjIwzWXohrRm";

(async () => {
    const result = await bcrypt.compare(plain, hash);
    console.log("Résultat bcrypt :", result);
})();

// import mongoose from "mongoose";
// import bcrypt from "bcrypt";

// const userSchema = new mongoose.Schema(
//     {
//         username: {
//             type: String,
//             required: true,
//             unique: true,
//         },
//         email: {
//             type: String,
//             required: true,
//             unique: true,
//             lowercase: true,
//             trim: true,
//         },
//         password: {
//             type: String,
//             required: true,
//             unique: true,
//         },
//         profilePicture: {
//             type: String,
//             default: "https://randomuser.me/api/portraits/women/65.jpg",
//         },
//         isAdmin: {
//             type: Boolean,
//             default: false,
//         },
//     },
//     {
//         timestamps: true,
//     }
// );
// //  pré Hook - avant d'enregistrer dans Mongo
// userSchema.pre("save", async function (next) {
//     // const user = this;

//     // nettoyage du password
//     this.password = this.password.trim();

//     // Ne re-hashe pas si le mot de passe n’a pas changé
//     if (!user.isModified("password")) return next();

//     try {
//         const hash = await bcrypt.hash(user.password, 10);
//         user.password = hash;
//         next();
//     } catch (err) {
//         next(err);
//     }
// });
// //  ajouter une methode pour vérifier le MDP
// userSchema.methods.isValidPassword = async function (password) {
//     const user = this;
//     //  comparé
//     const isSamePassword = await bcrypt.compare(password, user.password);
//     return isSamePassword;
//     //  return false ou true
// };

// const UserModel = mongoose.model("User", userSchema);

// export default UserModel;
