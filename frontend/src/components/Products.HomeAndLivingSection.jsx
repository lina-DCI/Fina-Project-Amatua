import ProductsProductCard from "./Products.ProductCard";
import { useAppContext } from "../context/ContextProvider";

const ProductsHomeAndLivingSection = () => {
    const {
        isReadMore,
        toggleReadMore,
        t,
        isDataLoaded,
        isOpen,
        onOpen,
        onClose,
        products,
        areProductsLoaded,
    } = useAppContext();

    if (!isDataLoaded) {
        return null;
    }

    if (!areProductsLoaded) {
        return null;
    }

    return (
        <>
            <section id="home-and-living" className="products-section">
                <h2 className="products-section-title">
                    <span className="heading-left">
                        {t("products.home_and_living_section.heading-left")}
                    </span>
                    <span className="special-symbol heading-left">
                        {t(
                            "products.home_and_living_section.special-symbol-heading-left"
                        )}
                    </span>
                    <span className="heading-top products-heading-top">
                        {t("products.home_and_living_section.heading-right")}
                    </span>
                    <img
                        className="pink-line"
                        src="/images/Pink-Line.svg"
                        alt="ornamental pink line"
                    />
                    <span className="products-heading-bottom">
                       {t("products.home_and_living_section.heading-bottom")}
                    </span>
                </h2>

                <div onClick={toggleReadMore} className="link-hidden-section">
                    <p>
                        {isReadMore ? t("products.home_and_living_section.link_hidden_show") : t("products.home_and_living_section.link_hidden_read")}

                        {isReadMore ? (
                            <img
                                src="/images/UpArrow.svg"
                                alt="icon upwards arrow - click to read more"
                            />
                        ) : (
                            <img
                                src="/images/DownArrow.svg"
                                alt="icon downwards arrow - click to show less"
                            />
                        )}
                    </p>
                </div>
                {isReadMore && (
                    <div className="hidden-section">
                        <p className="text-block">{t("products.home_and_living_section.pTop")}
                        </p>

                        <div>
                            <div className="hidden-icons">
                                <img
                                    src="/images/icon-park-outline_pure-natural.svg"
                                    alt="icon plant"
                                />
                                <p>{t("products.home_and_living_section.iconPTop")}</p>
                            </div>

                            <div className="hidden-icons">
                                <img
                                    src="/images/ph_hand-heart.svg"
                                    alt="icon hand with a heart"
                                />
                                <p>{t("products.home_and_living_section.iconPBottom")}</p>
                            </div>

                            <img
                                className="pink-divider"
                                src="/images/pink-horizontal_line.svg"
                                alt="pink line divider"
                            />
                        </div>

                        <p className="text-block">{t("products.home_and_living_section.pBottom")}
                        </p>
                    </div>
                )}

                <div className="products-information">
                    {
                        products.filter((item) => item.product_category === "home_and_living")
                            .map((product, index) =>

                                <div key={index} className="product-short-view">
                                    <img
                                        onClick={() => onOpen(product)}
                                        src={product.pictures[0]}
                                        alt="product picture"
                                        width={169}
                                        height={227}
                                    />
                                    <p onClick={() => onOpen(product)}>
                                        {product.product_name}
                                        <span>{product.product_subname}</span>
                                    </p>
                                    <ProductsProductCard open={isOpen} onClose={onClose} />
                                </div>

                            )
                    }
                </div>
                {/* <ProductsProductCard/> */}
            </section>
        </>
    );
};

export default ProductsHomeAndLivingSection;
