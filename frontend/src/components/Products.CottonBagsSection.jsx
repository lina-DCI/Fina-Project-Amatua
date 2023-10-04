import ProductsProductCard from "./Products.ProductCard";
import { useAppContext } from "../context/ContextProvider";

const ProductsCottonBagsSection = () => {
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

    //Für Übersetzung
    if (!isDataLoaded) {
        return null;
    }

    if (!areProductsLoaded) {
        return null;
    }

    return (
        <>
            <section id="cottonbags" className="products-section">
                <h2 className="products-section-title">
                    <span className="heading-left">COTTON</span>
                    <span className="heading-top products-heading-top">
                        BAGS
                    </span>
                    <img
                        className="pink-line"
                        src="/images/Pink-Line.svg"
                        alt="ornamental pink line"
                    />
                    <span className="products-heading-bottom">
                        {t("products.cotton_bags_section.heading_bottom")}
                    </span>
                </h2>

                <div onClick={toggleReadMore} className="link-hidden-section">
                    <p>
                        {isReadMore
                            ? t("products.cotton_bags_section.link_hidden_show")
                            : t(
                                "products.cotton_bags_section.link_hidden_read"
                            )}

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
                        <p className="text-block"> {t("products.cotton_bags_section.pTop")}</p>

                        <div>
                            <div className="hidden-icons">
                                <img
                                    src="/images/icon-park-outline_pure-natural.svg"
                                    alt="icon plant"
                                />
                                <p>
                                    {t("products.cotton_bags_section.iconPTop")}
                                </p>
                            </div>

                            <div className="hidden-icons">
                                <img
                                    src="/images/ph_hand-heart.svg"
                                    alt="icon hand with a heart"
                                />
                                <p>
                                    {t(
                                        "products.cotton_bags_section.iconPBottom"
                                    )}
                                </p>
                            </div>

                            <img
                                className="pink-divider"
                                src="/images/pink-horizontal_line.svg"
                                alt="pink line divider"
                            />
                        </div>

                        <p className="text-block">{t("products.cotton_bags_section.pBottom")}</p>
                    </div>
                )}

                <div className="products-information">
                    {
                        products.filter( (item) => item.product_category === "cotton_bags")
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

            </section>
        </>
    );
};

export default ProductsCottonBagsSection;
