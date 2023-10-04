import mongoose from "mongoose"
import { userSchema } from "./user.schema.js"
const User = mongoose.model("User", userSchema)

const createUser = async (userData, tokenSecret) => {
    const newUser = {
        username: userData.username,
        email: userData.email,
        topics: userData.topics,
        token: tokenSecret,
        status: false,
        expirationDate: new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 Stunden in Millisekunden
    }

    return await User.create(newUser);
}

const setStatusConfirm = async (email) => {
    try {
        const user = await User.findOne({ email: email })

        if (!user) {
            return "Verification link has expired."
        }

        if(user.status === true){
            return "User has already confirmed their email."
        }

        user.status = true; // Setze den Status auf true
        const updatedUser = await user.save()

        if (updatedUser) {
            return "Email was confirmed."; // Bestätigung erfolgreich
        } else {
            return "Error updating user status"; // Fehler beim Aktualisieren des Benutzerstatus
        }
    } catch (error) {
        console.error('Error updating user status: ', error);
        throw new Error('Error updating user status.');
    }
}

export { createUser, setStatusConfirm }