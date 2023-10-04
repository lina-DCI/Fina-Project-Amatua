import ProductsProductCard from "./Products.ProductCard";
import { useAppContext } from "../context/ContextProvider";

const ProductsPaperArtSection = () => {
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
            <section id="paper-art" className="products-section">
                <h2 className="products-section-title">
                    <span className="heading-left">PAPER</span>
                    <span className="heading-top products-heading-top">
                        ART
                    </span>
                    <img
                        className="pink-line"
                        src="/images/Pink-Line.svg"
                        alt="ornamental pink line"
                    />
                    <span className="products-heading-bottom">
                        {t("products.paper_art_section.heading_bottom")}
                    </span>
                </h2>

                <div onClick={toggleReadMore} className="link-hidden-section">
                    <p>
                        {isReadMore
                            ? t("products.paper_art_section.link_hidden_show")
                            : t("products.paper_art_section.link_hidden_read")}

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
                        <p className="text-block">{t("products.paper_art_section.pTop")}</p>

                        <div>
                            <div className="hidden-icons">
                                <img
                                    src="/images/icon-park-outline_pure-natural.svg"
                                    alt="icon plant"
                                />
                                <p>
                                    {t("products.paper_art_section.iconPTop")}
                                </p>
                            </div>

                            <div className="hidden-icons">
                                <img
                                    src="/images/ph_hand-heart.svg"
                                    alt="icon hand with a heart"
                                />
                                <p>
                                    {t(
                                        "products.paper_art_section.iconPBottom"
                                    )}
                                </p>
                            </div>

                            <img
                                className="pink-divider"
                                src="/images/pink-horizontal_line.svg"
                                alt="pink line divider"
                            />
                        </div>

                        <p className="text-block">{t("products.paper_art_section.pBottom")}</p>
                    </div>
                )}

                <div className="products-information">
                    {
                        products.filter((item) => item.product_category === "paper_art")
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

export default ProductsPaperArtSection;
