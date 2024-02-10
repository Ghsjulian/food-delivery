import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../__API__.js";
import scrollTop from "../layouts/ScrollTop";
import { useCart } from "../context/useCart";

const AddCart = () => {
    scrollTop();
    const { state, dispatch } = useCart();
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
                    alert(res.message);
                    dispatch({
                        type: "ghs",
                        payload: {
                            ...product
                        }
                    });
                    //window.location.reload(true);
                    //  setIsUpdate({})
                }
            );
        } else {
            navigate("/login");
        }
    };
    const [quantity, setQuantity] = useState(1);
    const addQuantity = () => {
        if (quantity < 5) {
            setQuantity(quantity + 1);
        }
    };
    const minusQuantity = () => {
        if (quantity !== 1) {
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
                    data.map((cart, index) => {
                        return (
                            <>
                                <div key={index} className="cart-area">
                                    <span
                                        onClick={() => {
                                            removeCart(cart.product_id); // Use cart_id instead of product_id
                                        }}
                                        id="remove"
                                    >
                                        X
                                    </span>
                                    <div className="cart-list">
                                        <Link
                                            to={`/view/product/${cart.product_id}`}
                                        >
                                            <img
                                                src={
                                                    api.host +
                                                    "/images/" +
                                                    cart.product_img
                                                }
                                            />
                                        </Link>
                                        <div className="cart-div">
                                            <p id="name">{cart.product_name}</p>
                                            <p id="price">
                                                Price :
                                                <span className="price">
                                                    {cart.product_price}
                                                </span>
                                            </p>
                                            <p id="price">
                                                Quantity :{" "}
                                                <span>{quantity}</span>
                                            </p>
                                            <p id="price" className="quantity">
                                                <button
                                                    onClick={addQuantity}
                                                    id="add"
                                                >
                                                    +
                                                </button>
                                                <button
                                                    onClick={minusQuantity}
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
  <Link to={`/order/quantity=${quantity}`} id="order-btn">Place Order</Link>
  </div>
  
            </section>
            {/* *<!-- End Section -->*/}
        </>
    );
};

export default AddCart;
