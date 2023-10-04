import React from "react";
import { NavHashLink } from "react-router-hash-link";

const BehindTheScenes = () => {
    return (
        <>
            <section className="behind-scenes-section">
                <h2>
                    <span className="heading-top">BEHIND</span>

                    <img
                        className="pink-line"
                        src="/images/Pink-Line.svg"
                        alt="ornamental pink line"
                    />
                    <span className="heading-bottom">THE SCENES</span>
                </h2>

                <NavHashLink to="/about_us/#">
                    <video className="mobile-video" controls>
                        <source
                            src="/images/BehindScenes_video.mp4"
                            type="video/mp4"
                        />
                        Sorry, your browser doesn't support videos.
                    </video>
                </NavHashLink>

                <NavHashLink to="/about_us/#">
                    <video className="desktop-video" controls>
                        <source
                            src="/images/Process_video.mp4"
                            type="video/mp4"
                        />
                        Sorry, your browser doesn't support videos.
                    </video>
                </NavHashLink>
            </section>
        </>
    );
};

export default BehindTheScenes;
