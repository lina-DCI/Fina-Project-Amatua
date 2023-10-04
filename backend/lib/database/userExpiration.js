import mongoose from "mongoose"
import { userSchema } from "../../model/user.schema.js"
const User = mongoose.model("User", userSchema)

async function deleteInactiveUsers() {
    const expirationTime = new Date(Date.now())
    await User.deleteMany({ status: false, expirationDate: { $lt: expirationTime } })
}

// Führe die Funktion regelmäßig aus (z. B. jede Sekunde)
const intervalId = setInterval( deleteInactiveUsers,  5 * 60 * 1000 )

export {intervalId}