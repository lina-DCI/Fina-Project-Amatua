import {
    getAllProducts,
} from "../model/product.model.js"

const httpGetAllProducts = async (req, res, next) => {
    try {
        const products = await getAllProducts()
        res.json(
            products
        )
    } catch (error) {
        next(error)
    }
}

export { httpGetAllProducts }