import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../__API__.js";
import scrollTop from "../layouts/ScrollTop";

const AddCart = () => {
    scrollTop();
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
                    //alert(res.status);
                    window.location.reload(true);
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
                    Your Cart - <span>{data.length}</span>
                </h2>
                {data &&
                    data.map(cart => {
                        return (
                            <>
                                <div key={cart.cart_id} className="cart-area">
                                    <span
                                        onClick={() => {
                                            removeCart(cart.product_id);
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
                                                Quantity : <span>0</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        );
                    })}
                {!isError && (
                    <div className="cart-area">
                        <h3>No Items In Cart</h3>
                    </div>
                )}
            </section>
            {/* *<!-- End Section -->*/}
        </>
    );
};

export default AddCart;
