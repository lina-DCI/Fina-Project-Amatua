import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
    {
        username: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        topics: { type: mongoose.Schema.Types.Mixed },
        token: {type: String},
        
        status: { type: Boolean, default: false },
        expirationDate: { type: Date, required: true },
    }
)

export { userSchema }