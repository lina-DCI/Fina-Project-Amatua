import mongoose from "mongoose"

const productSchema = new mongoose.Schema(
    {
        product_category: { type: String, required: true },
        product_name:     { type: String, required: true },
        product_subname:  { type: String },
        price:            { type: String, required: true },
        currency:         { type: Array },
        locales:          { type: mongoose.Schema.Types.Mixed },
        pictures:         { type: Array },
    }
)

export { productSchema }