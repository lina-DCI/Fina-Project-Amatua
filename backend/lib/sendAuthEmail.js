import sgMail from "@sendgrid/mail"

const sendAuthEmail = async (data, token) => {

    sgMail.setApiKey(process.env.SENDGRID_API_KEY)

    const msg = {
        to: `${data.email}`, // Change to your recipient
        from: "amatuaproject@gmail.com", // Change to your verified sender
        subject: "Confirm your subscription to our newsletter",
        text: "Please verify your email",
        html: `Hello ${data.username}, ,<br>Thank you for subscribing to our newsletter. Please complete and confirm your subscription by clicking here ${process.env.USER_SIGN_UP}${token}</a>.`,
    };

    try {
        const response = await sgMail.send(msg);
        return true;
    } catch (error) {
        console.error(error);
    }
}

export { sendAuthEmail }
