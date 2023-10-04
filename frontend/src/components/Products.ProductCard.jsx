// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import BackIcon from "/images/back_icon.svg";
import ShareIcon from "/images/share.svg";
import { useAppContext } from "../context/ContextProvider";


// eslint-disable-next-line react/prop-types
const ProductsProductCard = ({ open, onClose }) => {

    const {
        isDataLoaded,
        t,
        areProductsLoaded,
        product,
    } = useAppContext();

    // Schließe die Karte, wenn die Komponente unmontiert wird
    useEffect(() => {
        return () => {
            onClose();
        };
    }, []);

    if (!open) return null;

    if (!isDataLoaded) {
        return null;
    }

    if (!areProductsLoaded) {
        return null;
    }

    return (
        <>
            <div className="overlay-modal">
                <div className="productcard-section">
                    <div className="productcard-header">
                        <div onClick={onClose} className="back-icon-container">
                            {/* Back icon and link */}
                            <img
                                src={BackIcon}
                                alt="BackIcon"
                                className="back-icon"
                            />
                        </div>
                        <div className="share-icon-container">
                            {/* Share icon and link */}
                            <img
                                src={ShareIcon}
                                alt="ShareIcon"
                                className="share-icon"
                            />
                        </div>
                    </div>

                    {/* Carousel */}
                    <Carousel>
                        {
                            product.pictures.map((picture, index) =>
                                <Carousel.Item key={index}>
                                    <div className="image-container">
                                        <img src={picture} alt="First Slide" className="carousel-image" />
                                    </div>
                                </Carousel.Item>
                            )
                        }
                    </Carousel>
                    {/* Carousel end */}
                    {/* Product card info */}
                    <div className="productcard-info">
                        <div className="productcard-h">
                            <h1>{product.product_name}</h1>
                            <h2>{product.product_subname}</h2>
                        </div>
                        <div className="price">{product.price}{product.currency[0]}</div>
                    </div>
                    <ul className="productcard-features">
                        {
                            product.locales.en.description.map((listItem, index) =>
                                <li key={index}>{t(`translation_product:description.${index}`)}</li>
                            )
                        }
                    </ul>
                    <div className="productcard-buttons">
                        <button onClick={onClose} className="back-button">
                            Back
                        </button>
                        <button className="etsy-button">See in Store</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductsProductCard;
