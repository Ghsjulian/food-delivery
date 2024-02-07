import React from "react";
import {Link} from "react-router-dom"
const Footer = () => {
    return (
        <>
            {/*<!-- Footer Section  -->*/}
            <div className="footer-row">
                <div className="col">
                    <h3>About</h3>
                    <p>
                        We provide good and delicious foods , our items are very
                        light weight and no harmful effects
                    </p>
                    <p>Contact : ghsjulian@gmail.com</p>
                    <p>Telephone : +8801302****27</p>
                </div>
                <div className="col">
                    <h3>Privacy Policy</h3>
                    <p>
                        You Can Buy Food Undoubtedly Because, We Take care of
                        our clients and customers. It's Good for your health.
                        otherwise you have a great chance if you buy or order
                        foods from our community you'll get some commission.
                    </p>
                </div>
                <div className="col">
                    <h3>Links</h3>
                    <p>Home</p>
                    <p>About</p>
                    <p>Contact</p>
                    <p>Follow</p>
                    <p>Login</p>
                </div>
                <div className="col">
                    <h3 style={{
                      marginBottom:".7rem",
                      paddingLeft : ".5rem"
                    }}>Follow Us</h3>
                    <Link to="#">
                        <i className="bi bi-facebook"></i>
                    </Link>
                    <Link to="#">
                        <i className="bi bi-twitter"></i>
                    </Link>
                    <Link to="#">
                        <i className="bi bi-youtube"></i>
                    </Link>
                    <Link to="#">
                        <i className="bi bi-instagram"></i>
                    </Link>
                    <Link to="#">
                        <i className="bi bi-linkedin"></i>
                    </Link>
                </div>
            </div>
            <div className="footer">
                <h3>&copy; Copyright All Reserved 2023-2024</h3>
                <h3>
                    Developer & Designer - <span id="dev-name">Ghs Julian</span>
                </h3>
            </div>
            {/*<!-- Footer Section  -->*/}
        </>
    );
};
export default Footer;
