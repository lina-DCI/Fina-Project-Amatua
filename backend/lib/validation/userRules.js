import { check } from "express-validator"

// Custom validation rule function
const atLeastOneCheckbox = (value, { req }) => {
    const topics = req.body.topics; // Assuming you have a field named 'checkboxes'

    if (!topics || Object.values(topics).every(topic => !topic)) {
        throw new Error("Please select at least one checkbox");
    }

    return true;
}

const userValidationRules = {
    email_verification: [
            check("email")
                .escape()
                .trim()
                .normalizeEmail()
                .isEmail()
                .withMessage("Please enter a valid email address 😣"),
            check("username")
                .escape()
                .trim()
                .isLength({ min: 3 }).withMessage("You need at least 3 charachters! 😣"),
            check("checkboxes").custom(atLeastOneCheckbox).withMessage("Please select at least one checkbox 😣"),
        ],
}

export { userValidationRules }
