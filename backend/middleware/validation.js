import { validationResult } from "express-validator"

const validationInputs = (input) => {
    return [
        ...input,
        function (req, res, next) {
            const errors = validationResult(req)
         
            if (errors.isEmpty()) {
                console.log("test");
                return next()
            }
            const extractedErrors = errors.array().map((err) => err.msg)
            return res.json( {
                validation: extractedErrors
            } )
        },
    ]
}

export { validationInputs }