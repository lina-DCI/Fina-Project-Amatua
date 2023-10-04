import { NavHashLink } from "react-router-hash-link";
import { useAppContext } from "../context/ContextProvider";
// import { NavLink } from "react-router-dom"

const Footer = () => {

    const { t, isDataLoaded } = useAppContext();

    if (!isDataLoaded) {
        return null;
    }

    return (
        <div className="footer-section">
            <div className="topic-container">
            <h2>
                <span className="heading-top">{t("footer.socialmedia.heading_top")}</span>
                <img
                    className="pink-line"
                    src="/images/Pink-Line.svg"
                    alt="ornamental pink line"
                />
                <span className="heading-bottom">{t("footer.socialmedia.heading_bottom")}</span>
            </h2>
            </div>

            <div className="socialmedia-section">
                    <div className="socialmedia">
                        <h3>{t("footer.socialmedia.instagram")}</h3>
                        <img
                            src="/images/instagram-icon.svg"
                            className="socialmedia-icon"
                            alt="Icon for instagram"
                        />
                        <a href="https://www.instagram.com/amatua.berlin" target="_blank" rel="noopener noreferrer">
                            @amatua.berlin
                        </a>
                    </div>
                

                <div className="socialmedia">
                    <h3>{t("footer.socialmedia.store")}</h3>
                    <img
                        src="/images/Etsy-icon.svg"
                        className="socialmedia-icon"
                        alt="Icon for etsy"
                    />
                    <a href="https://www.etsy.com" target="_blank" rel="noopener noreferrer">etsy store</a>
                </div>

                <div className="socialmedia">
                    <h3>{t("footer.socialmedia.email")}</h3>
                    <img
                        src="/images/email-icon.svg"
                        className="socialmedia-icon"
                        alt="Icon for e-mail"
                    />
                    <a href="mailto:amatua.berlin@gmail.com">e-mail</a>
                </div>

                <div className="socialmedia">
                    <h3>{t("footer.socialmedia.pinterest")}</h3>
                    <img
                        src="/images/Pinterest-icon.svg"
                        className="socialmedia-icon"
                        alt="Icon for pinterest"
                    />
                    <a href="https://www.pinterest.de/Amatuaberlin" target="_blank" rel="noopener noreferrer">
                        Amatuaberlin
                    </a>
                </div>
            </div>

            <div className="link-section">
                <div className="link-wrapper">
                    <div className="nav-point">
                        <NavHashLink className="nav-links" to="/#">
                        {t("footer.home")}
                        </NavHashLink>
                    </div>

                    <div className="nav-point">
                        <NavHashLink className="nav-links" to="/about_us/#">
                        {t("footer.about_us")}
                        </NavHashLink>
                    </div>

                    <div className="nav-point">
                        <NavHashLink className="nav-links" to="/products/#">
                        {t("footer.products")}
                        </NavHashLink>
                    </div>

                    <div className="nav-point">
                        <NavHashLink className="nav-links" to="/policies/#" scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })} >
                        {t("footer.policies")}
                        </NavHashLink>
                    </div>
                </div>
                <div className="copyright">{t("footer.copyright")}</div>
            </div>
        </div>
    );
};

export default Footer;
