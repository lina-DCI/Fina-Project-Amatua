import { useAppContext } from "../context/ContextProvider";

const AboutUsSustainableProcesses = () => {
    const { t, isDataLoaded } = useAppContext();

    if (!isDataLoaded) {
        return null;
    }
    return (
        <div className="about-us-section">
            <div className="core-main-image sustainable_photo">
                <img
                    src="/images/sustainable_processes_photo.png"
                    alt="photo for sustainable processes"
                />
            </div>
            <div className="core-principles-container sustainable">
                <div className="core-principles-heading-wrapper">
                    <div className="core-principles-heading">
                        <h2>
                            <img
                                className="core-icon"
                                src="/images/sustainable-processes.svg"
                                alt="icon for sustainable processes"
                            />
                            <span className="core-heading-left">
                                {t(
                                    "about_us.sustainable_processes.heading_top"
                                )}
                            </span>

                            <img
                                className="core-pink-line"
                                src="/images/Pink-Line.svg"
                                alt="ornamental pink line"
                            />
                            <span className="core-heading-bottom">
                                {t(
                                    "about_us.sustainable_processes.heading_bottom"
                                )}
                            </span>
                        </h2>
                    </div>
                </div>
                <div className="core-textbox">
                    <h3>{t("about_us.sustainable_processes.title")}</h3>
                    <p>{t("about_us.sustainable_processes.paragraph")}</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUsSustainableProcesses;
