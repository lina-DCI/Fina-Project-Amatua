import { createToken, validateToken } from "../lib/authentication/token.js"
import {
    createUser,
    setStatusConfirm,
} from "../model/user.model.js"
import { sendAuthEmail } from "../lib/sendAuthEmail.js"

async function httpCreateUser(req, res, next) {
    try {

        const token = await createToken(
            {
                email: req.body.email,
                username: req.body.username,
            },
            process.env.TOKEN_SEKRET
        )
        
        const userData = req.body
        await createUser(userData, token)

        req.token = token

        next();
    } catch (error) {
        next(error);
    }
}


async function httpAuthenticateEmail( req, res, next) {
    try {
        const token = req.token
       
        const emailSent = await sendAuthEmail(req.body, token);
    
        if (!emailSent) {
            const error = new Error("Email could not be sent");
            error.statusCode = 400;
            throw error;
        } 

        res.json( {
            message: `${req.body.username} hat eine E-Mail erhalten!`
        } )
    } catch (error) {
        next(error);
    }
}

async function httpConfirmEmail(req, res, next) {
    try {
        const { token } = req.params
        const decoded = await validateToken(token, process.env.TOKEN_SEKRET)
        const message = await setStatusConfirm(decoded.email);

        // Weiterleitungs-URL mit der Nachricht als Parameter
        const redirectUrl = `${process.env.EMAIL_CONFIRM_SITE}${encodeURIComponent(message)}`
        // Weiterleitung
        res.redirect(redirectUrl);
    } catch (error) {
        next(error);
    }
}

export { httpCreateUser, httpAuthenticateEmail, httpConfirmEmail }