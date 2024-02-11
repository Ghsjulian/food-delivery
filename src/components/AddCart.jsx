import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../__API__.js";
import scrollTop from "../layouts/ScrollTop";
import { useCart } from "../context/useCart";

const AddCart = () => {
    scrollTop();
    const { state, dispatch, cart } = useCart();
    const [isError, setIsError] = useState(true);
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
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
    }, []);
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
    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);
    const totalRef = useRef(null);
    const addQuantity = price => {
        if (quantity < 5) {
            let curentPrice = parseInt(price);
            //  setQuantity(quantity + 1);
            // setTotalPrice(totalRef.current.textContent);
            alert(this.parentElement.textContent);
        }
    };
    const minusQuantity = price => {
        if (quantity !== 1) {
            let curentPrice = parseInt(price);
            setQuantity(quantity - 1);
        }
    };

    return (
        <>
            {/* <!-- Create Section -->*/}
            <section id="cartPage" className="main-section">
                <h2>
                    Your Cart <i className="bi bi-arrow-right"></i>{" "}
                    <span>{data.length}</span>
                </h2>
                {data &&
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
                                                <span
                                                    className="price"
                                                    ref={totalRef}
                                                >
                                                    {" "}
                                                    {parseInt(
                                                        cartItem.product_price
                                                    ) * quantity}
                                                    TK BDT
                                                </span>
                                            </p>
                                            <p id="price">
                                                Quantity :{" "}
                                                <span id="quantity_type">
                                                    {quantity}
                                                </span>
                                            </p>
                                            <p id="price" className="quantity">
                                                <button
                                                    onClick={() => {
                                                        addQuantity(
                                                            cartItem.product_price
                                                        );
                                                    }}
                                                    className="addbtn"
                                                    id="add"
                                                >
                                                    +
                                                </button>
                                                <button
                                                    className="addbtn"
                                                    id="add"
                                                >
                                                    -
                                                </button>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/*  <h2>Total : {product_price}</h2>*/}
                            </>
                        );
                    })}
                {!isError && (
                    <div className="cart-area">
                        <h3>No Items In Cart</h3>
                    </div>
                )}

                <div className="order-area">
                    <h2>
                        All Total <i className="bi bi-arrow-right"></i>{" "}
                        <span>{totalPrice}</span>
                    </h2>
                    <Link to={`/order/quantity=${quantity}`} id="order-btn">
                        Place Order
                    </Link>
                </div>
            </section>
            {/* *<!-- End Section -->*/}
        </>
    );
};

export default AddCart;
