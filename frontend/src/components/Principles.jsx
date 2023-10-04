import { useAppContext } from "../context/ContextProvider"
import { NavHashLink } from "react-router-hash-link";

const Principles = () => {
    const { t, isDataLoaded } = useAppContext()

    if (!isDataLoaded) {
        return null;
    }

    return (
        <div className="principles-section">
         
            <h2>
                <span className="heading-top">{t("principles.heading-top")}</span>
                <img
                    className="pink-line"
                    src="/images/Pink-Line.svg"
                    alt="ornamental pink line"
                />
            </h2>
           

            <p className="principles-intro-text">{t("principles.principles_main")}</p>
            <div className="principles-icons-section-wrapper">
                <div className="principles-icon-text-wrapper">
                    <div className="principles-icon-container">
                        <img
                            className="principles-icon"
                            src="/images/led-by-colombian-women.svg"
                            alt="icon for Columbian women"
                        />
                    </div>
                    <div className="principles-text-container">
                        <p>{t("principles.colombian-women")}</p>
                    </div>
                </div>
                <div className="principles-icon-text-wrapper">
                    <div className="principles-icon-container">
                        <img
                            className="principles-icon conscious"
                            src="/images/conscious-design-made-in-berlin.svg"
                            alt="icon for Berlin design"
                        />
                    </div>
                    <div className="principles-text-container">
                        <p>{t("principles.concious-design")}</p>
                    </div>
                </div>
                <div className="principles-icon-text-wrapper">
                    <div className="principles-icon-container">
                        <img
                            className="principles-icon"
                            src="/images/sustainable-processes.svg"
                            alt="icon for sustainability"
                        />
                    </div>
                    <div className="principles-text-container">
                        <p>{t("principles.sustainable-processes")}</p>
                    </div>
                </div>

                <div className="principles-icon-text-wrapper">
                    <div className="principles-icon-container">
                        <img
                            className="principles-icon"
                            src="/images/social-commitment-and-vision.svg"
                            alt="icon for commitment"
                        />
                    </div>
                    <div className="principles-text-container">
                        <p>{t("principles.social-commitment")}</p>
                    </div>
                </div>
            </div>
            <NavHashLink to="/about_us/#">
                <button>{t("principles.about-us-link")}</button>
            </NavHashLink>
        </div>
    );
};

export default Principles;
