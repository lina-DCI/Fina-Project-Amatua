import { useAppContext } from "../context/ContextProvider";

const InstagramSection = () => {

    const { t, isDataLoaded } = useAppContext();

    if (!isDataLoaded) {
        return null;
    }

    return (
        <div className="instagram-section">
            <div className="instagram-wrapper">
                <article className="instagram-box">
                {t("instagram_section.main_text_start")}<span>Instagram</span>{t("instagram_section.main_text_end")}
                </article>
                
                    
                    <a href="https://www.instagram.com/amatua.berlin" target="_blank" rel="noopener noreferrer">
                    <button> 
                        <div className="ig-svg-container">
                        <div className="ig-button-text">{t("instagram_section.instagram_button")}</div>
                        </div>
                        </button>
                    </a>
                
            </div>
        </div>
    );
};

export default InstagramSection;
