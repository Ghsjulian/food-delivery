import React, { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../__API__.js";
import { useCart } from "../context/useCart";


const Header = () => {
    const { state, dispatch, cart } = useCart();
    const navRef = useRef(null);
    const [isLoggedIn, setIsLoggedIn] = useState("");
    const [cartNum, setCart] = useState(0);
    const navigate = useNavigate();
    useEffect(() => {
        const cookie = api.getCookie("login");
        if (cookie !== "") {
            setCart(cart.length)
           
        /*    api.getData(`/products/cart.php?cookie=${cookie}`, res => {
                if (res.data) {
                    setCart(res.data.length);
                }
            });
            */
        }
        if (api.getCookie("login")) {
            setIsLoggedIn(api.getCookie("login"));
        }
    });
    const mobileNav = () => {
        const isOpen = navRef.current.getAttribute("id");
        if (isOpen === "close") {
            navRef.current.style.display = "block";
            navRef.current.setAttribute("id", "open");
        } else {
            navRef.current.setAttribute("id", "close");
            navRef.current.style.display = "none";
        }
    };
    const LogOut = () => {
        api.deleteCookie("login");
        navigate("/login");
        // alert("something ");
    };
    return (
        <>
            <div className="nav-bar">
                <div className="logo-area">
                    <h3 className="logo">e-Cart</h3>
                </div>
                <div className="search-area">
                    <input type="text" />
                    <i className="bi bi-search"></i>
                </div>
                <div className="links">
                    <Link to="/">Home</Link>{" "}
                    {isLoggedIn && (
                        <>
                            <Link to="/notification">Notification</Link>
                            <Link id="cart-id" to="/cart">Cart{!cartNum==0&&<span>{cartNum}</span>}</Link>
                            <Link to="/orders">Orders</Link>
                            <li onClick={LogOut}>Logout</li>
                        </>
                    )}
                    <Link to="/about">About Us</Link>
                    {!isLoggedIn && (
                        <>
                            <Link to="/login">Login</Link>
                            <Link to="/signup">Signup</Link>
                        </>
                    )}
                </div>
                <span id="mobile-btn">
                    <i className="bi bi-list" onClick={mobileNav}></i>
                </span>
            </div>
            {/* Mobile Menu Bar */}
            <div id="close" ref={navRef} className="menu">
                <h3>Menu</h3>
                <div className="list">
                    <div className="search-area">
                        <input type="text" />
                        <i className="bi bi-search"></i>
                    </div>
                    <Link onClick={mobileNav} to="/">
                        Home
                    </Link>
                    {isLoggedIn && (
                        <>
                            <Link onClick={mobileNav} to="/notification">
                                Notification
                            </Link>
                            <Link id="cart-id" onClick={mobileNav} to="/cart">
                                Cart{!cartNum==0&&<span>{cartNum}</span>}
                            </Link>
                            <Link onClick={mobileNav} to="/orders">
                                Orders
                            </Link>
                            <li onClick={LogOut}>Logout</li>
                        </>
                    )}
                    {!isLoggedIn && (
                        <>
                            <Link onClick={mobileNav} to="/login">
                                Login
                            </Link>
                            <Link onClick={mobileNav} to="/signup">
                                Signup
                            </Link>
                        </>
                    )}
                    <Link onClick={mobileNav} to="/about">
                        About Us
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Header;
