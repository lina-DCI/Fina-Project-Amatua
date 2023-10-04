import express from 'express';
const router = express.Router();
import {
    httpGetLocalesEN,
    httpGetLocalesDE,
    httpGetLocalesES
  } from "../controller/locale.controller.js"

router.get("/en", httpGetLocalesEN )

router.get("/de", httpGetLocalesDE)

router.get("/es",httpGetLocalesES)

export default router
