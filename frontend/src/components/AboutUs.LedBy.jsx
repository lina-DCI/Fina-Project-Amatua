import { useAppContext } from "../context/ContextProvider";

const AboutUsLedBy = () => {
    const { t, isDataLoaded } = useAppContext();

    if (!isDataLoaded) {
        return null;
    }
    return (
        <div className="about-us-section">
            <div className="led-by-heading-container led_by_heading">
                <div className="core-principles-heading-wrapper">
                    <div className="core-principles-heading">
                        <h2>
                            <img
                                className="core-icon"
                                src="/images/led-by-colombian-women.svg"
                                alt="led by Columbian women"
                            />
                            <span className="core-heading-left">
                                {t("about_us.led_by.heading_top_left")}
                            </span>
                            <span className="core-heading-right">
                                {" "}
                                {t("about_us.led_by.heading_top_right")}
                            </span>
                            <img
                                className="core-pink-line"
                                src="/images/Pink-Line.svg"
                                alt="ornamental pink line"
                            />
                            <span className="core-heading-bottom">
                                {t("about_us.led_by.heading_bottom")}
                            </span>
                        </h2>
                    </div>
                </div>
            </div>
            <div className="led-by-text-container led_by_text">
                <div className="core-textbox">
                    <h3>{t("about_us.led_by.title")}</h3>
                   <p>{t("about_us.led_by.paragraph")}</p>
                </div>{" "}
                <a href="https://www.instagram.com/amatua.berlin" target="_blank" rel="noopener noreferrer">
                    <button> {t("about_us.led_by.instragram_button")}</button>
                </a>

            </div>
        </div>
    );
};

export default AboutUsLedBy;
