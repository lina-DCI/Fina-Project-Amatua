import express from 'express'
const router = express.Router()

import { validationInputs } from "../middleware/validation.js"
import { userValidationRules } from "../lib/validation/userRules.js"

import {
  httpCreateUser,
  httpAuthenticateEmail,
  httpConfirmEmail
} from "../controller/user.controller.js"


//POST - signup
router.post(
  "/signup",
  validationInputs(userValidationRules.email_verification),
  httpCreateUser,
  httpAuthenticateEmail
)

//GET - verifizierung
router.get("/signup/:token", httpConfirmEmail);

export default router
