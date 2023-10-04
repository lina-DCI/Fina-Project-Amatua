import { useAppContext } from "../context/ContextProvider";

const AboutUsSocialCommitment = () => {
    const { t, isDataLoaded } = useAppContext();

    if (!isDataLoaded) {
        return null;
    }
    return (
        <div className="about-us-section">
            <div className="core-main-image commitment_photo">
                <img
                    src="/images/social_commitment_photo.png"
                    alt=" photo for social commitment"
                />
            </div>
            <div className="core-principles-container commitment">
                <div className="core-principles-heading-wrapper">
                    <div className="core-principles-heading">
                        <h2>
                            <img
                                className="core-icon"
                                src="/images/social-commitment-and-vision.svg"
                                alt="icon for social commitment and vision"
                            />
                            <span className="core-heading-left">
                                {t(
                                    "about_us.social_commitment.heading_top_left"
                                )}
                            </span>
                            <span className="core-heading-right">
                                {t(
                                    "about_us.social_commitment.heading_top_right"
                                )}
                            </span>
                            <img
                                className="core-pink-line"
                                src="/images/Pink-Line.svg"
                                alt="ornamental pink line"
                            />
                            <span className="core-heading-bottom">
                                {t("about_us.social_commitment.heading_bottom")}
                            </span>
                        </h2>
                    </div>
                </div>
                <div className="core-textbox">
                    <h3>{t("about_us.social_commitment.title")}</h3>
                    <p>{t("about_us.social_commitment.paragraph")}</p>
                </div>
            </div>
            <div className="mission-statement-container mission">
                <div className="mission-icon-container">
                    <img
                        src="/images/Amatua_a.svg"
                        alt="letter a from amatua"
                    />
                </div>
                <div className="mission-text-container">
                    <p>
                        {t("about_us.social_commitment.slogan.part_1")}
                        <span className="accent-1">
                            {t(
                                "about_us.social_commitment.slogan.transparency"
                            )} 
                        </span>
                        <br />
                        {t("about_us.social_commitment.slogan.part_2")}
                        <span className="accent-2">
                            {t(
                                "about_us.social_commitment.slogan.positive_impact"
                            )}
                        </span>
                        {t("about_us.social_commitment.slogan.part_3")}
                        <span className="accent-3">
                            {t("about_us.social_commitment.slogan.creativity")}
                        </span>
                        {t("about_us.social_commitment.slogan.part_4")}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUsSocialCommitment;
