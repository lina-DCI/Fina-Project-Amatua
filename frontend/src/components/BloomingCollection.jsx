import { NavHashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";
import { useAppContext } from "../context/ContextProvider";

const BloomingCollection = () => {
    const { t, isDataLoaded } = useAppContext();

    //Für Übersetzung
    if (!isDataLoaded) {
        return null;
    }

    return (
        <>
            <section className="blooming-collection">
                <div className="blooming-collection-banner-container">
                    <NavHashLink to="/products/#">
                        <div className="blooming-collection-banner blooming-collection-banner-clickable">
                            <img
                                src="/images/Blooming_collection_2023_Pink.svg"
                                alt="image with text Blooming collection 2023"
                            />
                        </div>
                    </NavHashLink>
                </div>

                <div className="blooming-products">
                    <NavHashLink
                        className="product-box"
                        to="/products/#cottonbags"
                    ><div className="blooming-bags-bg">  <img
                            src="/images/cotton-bags-type.png"
                            alt="banner cotton bags with background image of cotton plants"
                        /></div>
                      
                    </NavHashLink>

                    <NavHashLink
                        className="product-box"
                        to="/products/#home-and-living"
                    ><div className="blooming-home-bg">  <img
                            src="/images/home-and-living-type.png"
                            alt="
                    home and living banner with background image of home furniture"
                        /></div>
                  
                    </NavHashLink>
                    <NavHashLink
                        className="product-box"
                        to="/products/#paper-art"
                    ><div className="blooming-paper-bg">  <img
                            src="/images/paper-art-type.png"
                            alt="banner paper art with background image craft paper with flowers"
                        /></div>
                     
                    </NavHashLink>
                </div>

                <NavLink to="/products">
                    <button className="blooming-btn secondary-button">
                        {t("blooming_section.blooming_secondary_btn")}
                    </button>
                </NavLink>

                <a href="https://www.etsy.com" target="_blank" rel="noopener noreferrer">
                    <button className="blooming-btn">
                        {t("blooming_section.blooming_btn")}
                    </button>
                </a>
            </section>
        </>
    );
};

export default BloomingCollection;
