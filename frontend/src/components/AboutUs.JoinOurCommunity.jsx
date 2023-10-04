import { useState } from "react";
import UserIcon from "/images/user-icon.svg";
import EmailIcon from "/images/email-icon.svg";
import { useAppContext } from "../context/ContextProvider";

const AboutUsJoinOurCommunity = () => {
    const { processLetterForm, t, isDataLoaded } = useAppContext();

    const [email, setEmail] = useState("");
    const [username, setUserName] = useState("");

    // Themen, an denen die User interessiert sind
    const [topics, setTopics] = useState({
        workshops: false,
        diy: false,
        ecoDesigns: false,
    });

    // privacy policies
    const [privacyChecked, setPrivacyChecked] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleNameChange = (e) => {
        setUserName(e.target.value);
    };

    const handleTopicChange = (topic) => {
        setTopics((prevTopics) => ({
            ...prevTopics,
            [topic]: !prevTopics[topic],
        }));
    };

    const handlePrivacyChange = () => {
        setPrivacyChecked(!privacyChecked);
    };

    const handleSubmitNewsLetterForm = async (e) => {
        e.preventDefault();

        if (!privacyChecked) {
            return; // Wenn die Datenschutzrichtlinie nicht akzeptiert wurde, mache nichts.
        }

        const formData = {
            email,
            username,
            topics,
        };

        await processLetterForm(formData);

        setEmail("");
        setUserName("");
        setTopics({
            workshops: false,
            diy: false,
            ecoDesigns: false,
        });
        setPrivacyChecked(false);
    };

    if (!isDataLoaded) {
        return null;
    }

    return (
        <div className="newsletter-section join">
            <div className="newsletter-h2-section">
                <h2 className="heading-top">
                    {t("about_us.join_our_community.heading_top")}
                </h2>
                <img
                    className="pink-line"
                    src="/images/Pink-Line.svg"
                    alt="ornamental pink line"
                />
                <h2 className="heading-bottom">
                    {t("about_us.join_our_community.heading_bottom")}
                </h2>
            </div>

            <form
                className="newsletter-form"
                onSubmit={handleSubmitNewsLetterForm}
            >
                <p className="main_text">
                    {t("about_us.join_our_community.main_text")}
                </p>
                <div className="newsletter-label-form">
                    <label>
                        <img
                            src={EmailIcon}
                            alt="EmailIcon"
                            className="label-email-icon"
                        />
                        <input
                            className="newsletter-input-email"
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                            placeholder="Email"
                        />
                    </label>
                    <label>
                        <img
                            src={UserIcon}
                            alt="UserIcon"
                            className="label-user-icon"
                        />
                        <input
                            className="newsletter-input-name"
                            type="text"
                            value={username}
                            onChange={handleNameChange}
                            placeholder={t("newsletter.newsletter-input-name")}
                        />
                    </label>
                </div>

                {/* Interested-Checkboxen */}
                <div className="checkbox-container">
                    <p className="interest_text">
                        {t("newsletter.interest_text")}
                    </p>
                    <label
                        className={`custom-checkbox ${
                            topics.workshops ? "active" : ""
                        }`}
                    >
                        <input
                            type="checkbox"
                            checked={topics.workshops}
                            onChange={() => handleTopicChange("workshops")}
                        />
                        Workshops
                    </label>
                    <label
                        className={`custom-checkbox ${
                            topics.diy ? "active" : ""
                        }`}
                    >
                        <input
                            type="checkbox"
                            checked={topics.diy}
                            onChange={() => handleTopicChange("diy")}
                        />
                        Set DIY
                    </label>
                    <label
                        className={`custom-checkbox ${
                            topics.ecoDesigns ? "active" : ""
                        }`}
                    >
                        <input
                            type="checkbox"
                            checked={topics.ecoDesigns}
                            onChange={() => handleTopicChange("ecoDesigns")}
                        />
                        Eco-Designs
                    </label>
                </div>
                <div className="private-policy-container">
                    {/* privacy policies */}
                    <label>
                        <input
                            type="checkbox"
                            checked={privacyChecked}
                            onChange={handlePrivacyChange}
                        />
                        <p className="policy_text">
                            {t("newsletter.policy_text")}
                        </p>
                    </label>

                    <button
                        className={`${
                            !privacyChecked ? "form_button_disabled" : ""
                        }`}
                        type="submit"
                        disabled={!privacyChecked}
                    >
                        {t("about_us.join_our_community.send_button")}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AboutUsJoinOurCommunity;
