import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../__API__.js";
import scrollTop from "../layouts/ScrollTop";
import { useCart } from "../context/useCart";

const AddCart = () => {
    scrollTop();
    const userCookie = api.getCookie("login");
    const [totalPrice, setTotalPrice] = useState(0);
    const { state, dispatch, cart } = useCart();
    const [isError, setIsError] = useState(true);
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const price = cart.reduce((total, item) => {
            let itemPrice = parseInt(item.product_price);
            return total + itemPrice;
        }, 0);
        setTotalPrice(price);
        /*
        const cookie = api.getCookie("login");
        if (cookie !== "") {
            api.getData(`/products/cart.php?cookie=${cookie}`, res => {
                if (res.data) {
                    setData(res.data);
                } else {
                    setIsError(false);
                }
            });
            
        } else {
            navigate("/login");
        }
        */
    }, [cart]);
    const removeCart = cart_id => {
        const cookie = api.getCookie("login");
        if (cookie !== "") {
            api.getData(
                `/products/delete-cart.php?cart_id=${cart_id}&cookie=${cookie}`,
                res => {
                    //alert(res.message);
                    dispatch({
                        type: "REMOVE_CART",
                        payload: {
                            cart_id
                        }
                    });
                    //window.location.reload(true);
                    // navigate("/");
                    //  setIsUpdate({})
                }
            );
        } else {
            navigate("/login");
        }
    };

    return (
        <>
            {/* <!-- Create Section -->*/}
            <section id="cartPage" className="main-section">
                <h2>
                    Your Cart <i className="bi bi-arrow-right"></i>{" "}
                    <span>{cart.length}</span>
                </h2>
                {cart &&
                    cart.map((cartItem, index) => {
                        return (
                            <>
                                <div key={index} className="cart-area">
                                    <span
                                        onClick={() => {
                                            removeCart(cartItem.product_id); // Use cart_id instead of product_id
                                        }}
                                        id="remove"
                                    >
                                        X
                                    </span>
                                    <div className="cart-list">
                                        <Link
                                            to={`/view/product/${cartItem.product_id}`}
                                        >
                                            <img
                                                src={
                                                    api.host +
                                                    "/images/" +
                                                    cartItem.product_img
                                                }
                                            />
                                        </Link>
                                        <div className="cart-div">
                                            <p id="name">
                                                {cartItem.product_name}
                                            </p>
                                            <p id="price">
                                                Price :
                                                <span className="price">
                                                    {" "}
                                                    {cartItem.product_price}
                                                    TK BDT
                                                </span>
                                            </p>
                                            <p id="price">
                                                Quantity :{" "}
                                                <span id="quantity_type">
                                                    1
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/*  <h2>Total : {product_price}</h2>*/}
                            </>
                        );
                    })}
                {cart.length == 0 && (
                    <div className="cart-area">
                        <h3>No Items In Cart</h3>
                    </div>
                )}

                {cart.length > 0 && (
                    <div className="order-area">
                        <h2>
                            All Total <i className="bi bi-arrow-right"></i>{" "}
                            <span>{totalPrice}TK BDT</span>
                        </h2>
                        <Link to={`/order/user=${userCookie}`} id="order-btn">
                            Place Order
                        </Link>
                    </div>
                )}
            </section>
            {/* *<!-- End Section -->*/}
        </>
    );
};

export default AddCart;
