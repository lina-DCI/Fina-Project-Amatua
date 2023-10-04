// import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { useAppContext } from "../context/ContextProvider";
import { useState } from "react";

const Navbar = () => {
    const { t, isDataLoaded } = useAppContext();

    const [activeOverlay, setActiveOverlay] = useState(false);

    const toggleOverlay = () => {
        setActiveOverlay((prevState) => !prevState)
        ;
    };

    if (!isDataLoaded) {
        return null;
    }

    return (
        <nav>
            <div id="top"></div>
            <input type="checkbox" name="menu" id="menu-button" />
            <label
                htmlFor="menu-button"
                onClick={toggleOverlay}
                className={activeOverlay ? "navbar-overlay" : ""}

                // onClick={() => setActiveOverlay(true)}
                // className={activeOverlay ? "navbar-overlay" : "navbar-overlay-hidden"}
            >
                <img
                    src="/images/menu-line.svg"
                    className="fa-solid fa-bars fa-2x"
                    alt="open menu button"
                />
                <img
                    src="/images/x-icon.svg"
                    className="fa-solid fa-xmark fa-2x"
                    alt="close menu button"
                />
            </label>

            <ul className="link-section">
                <ul>
                    <li>
                        <NavHashLink className="navbar-links" to="/about_us/#top">
                            {t("navbar.about_us")}
                        </NavHashLink>
                    </li>
                    <li>
                        <NavHashLink className="navbar-links" to="/products/#top">
                            {t("navbar.our_products")}
                        </NavHashLink>
                    </li>
                </ul>
                <hr />
                <ul>
                    <li>
                        <a href="https://www.instagram.com/amatua.berlin" target="_blank" rel="noopener noreferrer">
                            {t("navbar.instagram")}
                        </a>
                    </li>
                    <li>
                        <a href="https://www.etsy.com" target="_blank" rel="noopener noreferrer">{t("navbar.etsy_store")}</a>
                    </li>
                    <li>
                        <a href="mailto:amatua.berlin@gmail.com">
                            {t("navbar.send_email")}
                        </a>
                    </li>
                </ul>
                <hr />
                <ul>
                    <li>
                        <NavHashLink className="navbar-links" to="/policies/#data-policies-title" >
                            {t("navbar.data_policies")}
                        </NavHashLink>
                    </li>
                </ul>
            </ul>
        </nav>
    );
};

export default Navbar;
