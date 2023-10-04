import { useAppContext } from "../context/ContextProvider";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {
    const { changeLanguage, selectedLanguage, isDataLoaded } = useAppContext();

    if (!isDataLoaded) {
        return null;
    }

    return (
        <div className="header-section">
            <div className="amatua-logo-container">
                <NavLink to="/">
                    <img
                        className="amatua-logo"
                        src="/images/amatua-logo.svg"
                        alt="Amatua Logo"
                    />
                </NavLink>
            </div>
            <div className="header-right">
                <select
                    className="language-selection-chip"
                    onChange={(e) => changeLanguage(e.target.value)}
                    name="language"
                    id="language"
                    value={selectedLanguage}
                >
                    <option value="en">EN</option>
                    <option value="de">DE</option>
                    <option value="es">ES</option>
                </select>

                <Navbar />
            </div>

            {/* Dropdown-Menue für die Sprachänderung */}

            {/* END => Dropdown-Menue für die Sprachänderung */}
        </div>
    );
};

export default Header;
