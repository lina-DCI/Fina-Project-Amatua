import { useAppContext } from "../context/ContextProvider";

const AboutUsConsciousDesign = () => {
    const { t, isDataLoaded } = useAppContext();

    if (!isDataLoaded) {
        return null;
    }
    return (
        <div className="about-us-section">
            <div className="core-main-image concious_photo">
                <img
                    src="/images/Conscious_design_photo.png"
                    alt="photo for conscious design"
                />
            </div>
            <div className="core-principles-container concious">
                <div className="core-principles-heading-wrapper">
                    <div className="core-principles-heading">
                        <h2>
                            <img
                                className="core-icon"
                                src="/images/conscious-design-made-in-berlin.svg"
                                alt="icon for consious Design made in Berlin"
                            />
                            <span className="core-heading-left">
                                {t(
                                    "about_us.conscious_design.heading_top_left"
                                )}
                            </span>
                            <span className="core-heading-right">
                                {" "}
                                {t(
                                    "about_us.conscious_design.heading_top_right"
                                )}
                            </span>
                            <img
                                className="core-pink-line"
                                src="/images/Pink-Line.svg"
                                alt="ornamental pink line"
                            />
                            <span className="core-heading-bottom">
                                {t("about_us.conscious_design.heading_bottom")}
                            </span>
                        </h2>
                    </div>
                </div>
                <div className="core-textbox">
                    <h3>{t("about_us.conscious_design.title")}</h3>
                    <p>
                        {t("about_us.conscious_design.part_1")}
                        <span className="emphasis">
                            {t("about_us.conscious_design.creativity")}{" "}
                        </span>{" "}
                        {t("about_us.conscious_design.part_2")}
                        <span className="emphasis">
                            {t("about_us.conscious_design.mass_production")}{" "}
                        </span>
                        {t("about_us.conscious_design.part_3")}
                        <span className="emphasis">
                            {t("about_us.conscious_design.quality")}{" "}
                        </span>
                        {t("about_us.conscious_design.part_4")}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUsConsciousDesign;
