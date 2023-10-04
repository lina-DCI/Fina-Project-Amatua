import express from 'express'
const router = express.Router()

import {
    httpGetAllProducts
} from "../controller/product.controller.js"


//POST - signup
router.get("/all", httpGetAllProducts)


export default router
