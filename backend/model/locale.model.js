import mongoose from "mongoose"
import { localeSchema } from "./locale.schema.js"
const Locale = mongoose.model("Locale", localeSchema)

const getLocalesEN = async () => {
    return await Locale.findOne({lang: "en"}) 
}

const getLocalesDE = async () => {
    return await Locale.findOne({lang: "de"})
} 

const getLocalesES = async () => {
    return await Locale.findOne({lang: "es"})
}

export { getLocalesEN, getLocalesDE, getLocalesES }