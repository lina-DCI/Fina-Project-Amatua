import mongoose from "mongoose"
import { productSchema } from "./product.schema.js"
const Product = mongoose.model("Product", productSchema)

const getAllProducts = async () => {
    return await Product.find({})
}

export { getAllProducts }