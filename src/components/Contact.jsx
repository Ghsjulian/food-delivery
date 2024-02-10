import React from "react";
import scrollTop from "../layouts/ScrollTop";
const Contact = () => {
    scrollTop();
    return (
        <>
            {/*<!-- Section Started -->*/}

            <div className="section">
                <div id="aboutSection" className="about-section">
                    <div className="about-text">
                        {/*<!--<h2 id="text-1">Welcome To My Portfolio</h2>-->*/}
                        <h2 id="text-2">
                            Contact <i className="bi bi-arrow-right"></i>
                            <span>Us</span>
                        </h2>
                        <p id="description">
                            I am a professional web developer and desginer. I
                            have three years of experience in development
                            sector. I can build any website easily. You can
                            directly contact with me or you can follow me on my
                            social media.
                        </p>
                        <p id="description">
                            I'm a Web Developer Programmer & Freelancer you can
                            also hire me if you have any projects. I am always
                            available for jobs. I live in Bangladesh, I am
                            working as a freelancer on marketplaces.
                        </p>
                    </div>

                    <div className="contact-form">
                        <input type="text" placeholder="Your Name" />
                        <input type="email" placeholder="Enter Email" />
                        <textarea placeholder="Write Message..."></textarea>
                        <button id="contact-btn">Contact Now </button>
                    </div>
                </div>
            </div>

            {/*<!-- Section Finished -->*/}
        </>
    );
};

export default Contact;
