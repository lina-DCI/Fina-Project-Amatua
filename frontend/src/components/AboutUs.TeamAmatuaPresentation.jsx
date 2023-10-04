import { NavLink } from "react-router-dom";
import { useAppContext } from "../context/ContextProvider";

const AboutUsTeamAmatuaPresentation = () => {
    const { t, isDataLoaded } = useAppContext();

    if (!isDataLoaded) {
        return null;
    }
    return (
        <>
            <div className="about-us-breadcrump-wrapper" id="about-us">
                <div className="about-us-breadcrump-nav">
                    <NavLink className="dark-green" to="/">
                        <span>
                            {t("products.main_section.breadcrump-nav-home")}
                        </span>
                    </NavLink>
                    <span> &#62; </span>
                    <NavLink to="/about_us">
                        <span>
                            {t(
                                "about_us.team_amatua_presentation.breadcrump_nav_about_us"
                            )}
                        </span>
                    </NavLink>
                </div>
            </div>
            <div className="about-us-section">
                <div className="team-main-container team_main">
                    <div className="team-main-photo"></div>

                    <div className="main-textbox">
                        <p>
                            <span>
                                {t("about_us.team_amatua_presentation.part_1")}
                            </span>
                            <span className="emphasis">
                                {t(
                                    "about_us.team_amatua_presentation.slow_design"
                                )}
                            </span>
                            <span>
                                {t("about_us.team_amatua_presentation.part_2")}
                            </span>
                        </p>
                        <p>
                            <span>
                                {t("about_us.team_amatua_presentation.part_3")}
                            </span>
                            <span className="emphasis">
                                {t(
                                    "about_us.team_amatua_presentation.four_principles"
                                )}
                            </span>
                            <span>
                                {t("about_us.team_amatua_presentation.part_4")}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutUsTeamAmatuaPresentation;
