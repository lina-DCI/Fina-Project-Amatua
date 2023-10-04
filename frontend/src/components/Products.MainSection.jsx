import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { useEffect, useState } from "react";
import { useAppContext } from "../context/ContextProvider";

const ProductsMainSection = () => {
    const [activeCategory, setActiveCategory] = useState("");
    const { t, isDataLoaded, fetchProducts, areProductsLoaded } = useAppContext();

    useEffect(() => {
        fetchProducts()
    }, []);

    if (!isDataLoaded) {
        return null;
    }

    if (!areProductsLoaded) {
        return null;
    }

    return (
        <div className="products-main-section">
            <div className="products-breadcrump-nav">
                <NavLink
                    className="dark-green"
                    to="/"
                >
                    <span>
                        {t("products.main_section.breadcrump-nav-home")}
                    </span>
                </NavLink>
                <span> &#62; </span>
                <NavLink to="/products">
                    <span>
                        {t("products.main_section.breadcrump-nav-products")}
                    </span>
                </NavLink>
            </div>
            <div className="blooming-collection-banner-container">
                <div className="blooming-collection-banner">
                    <img
                        src="/images/Blooming_collection_2023_Pink.svg"
                        alt="image with text Blooming collection 2023"
                    />
                </div>
            </div>
            <div className="products-main-content-container">
                <div className="main-content-textbox">
                    <p>{t("products.main_section.main-content-textbox-one")}</p>
                    <p>{t("products.main_section.main-content-textbox-two")}</p>
                </div>

                <div className="products-main-filternav-container">
                    {/* <NavHashLink
                        className= {({ isActive }) =>
                            isActive ? "products-filter-selected" : "products-filter-chip"
                        }
                        to="/products/#"
                    >
                         {t("products.main_section.filternav-all")}
                    </NavHashLink> */}
                    <NavHashLink
                        // className={({ isActive }) =>
                        //     isActive
                        //         ? "products-filter-selected"
                        //         : "products-filter-chip"
                        // }
                        onClick={() => setActiveCategory("cottonBags")}
                        className={
                            activeCategory === "cottonBags"
                                ? "products-filter-selected"
                                : "products-filter-chip"
                        }
                        to="/products/#cottonbags"
                    >
                        {t("products.main_section.filternav-cotton-bags")}
                    </NavHashLink>
                    <NavHashLink
                        // className={({ isActive }) =>
                        //     isActive
                        //         ? "products-filter-selected"
                        //         : "products-filter-chip"
                        // }
                        onClick={() => setActiveCategory("homeLiving")}
                        className={
                            activeCategory === "homeLiving"
                                ? "products-filter-selected"
                                : "products-filter-chip"
                        }
                        to="/products/#home-and-living"
                    >
                        {t("products.main_section.filternav-home-living")}
                    </NavHashLink>
                    <NavHashLink
                        // className={({ isActive }) =>
                        //     isActive
                        //         ? "products-filter-selected"
                        //         : "products-filter-chip"
                        // }
                        onClick={() => setActiveCategory("paperArt")}
                        className={
                            activeCategory === "paperArt"
                                ? "products-filter-selected"
                                : "products-filter-chip"
                        }
                        to="/products/#paper-art"
                    >
                        {t("products.main_section.filternav-paper-art")}
                    </NavHashLink>
                </div>
            </div>
        </div>
    );
};

export default ProductsMainSection;
