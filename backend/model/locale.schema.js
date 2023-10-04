import mongoose from "mongoose"

const localeSchema = new mongoose.Schema({
    lang : {
        type: String,
        unique: true,
        required: true
    },
    translation: {
        type: mongoose.Schema.Types.Mixed,
        required: true
    }
})

export { localeSchema }