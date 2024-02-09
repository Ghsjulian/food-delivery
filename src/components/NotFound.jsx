import React from "react";
import "../css/Index_2.css";
const NotFound = () => {
    document.title = "Error 404 Page Doesn't Exist | URL Not Found !";

    return (
        <>
            <section id="not-found" className="main-section">
            <h1>Error</h1>
                <h2>
                    404 <span>Page Not Found !</span>
                </h2>
            </section>
        </>
    );
};
export default NotFound;
