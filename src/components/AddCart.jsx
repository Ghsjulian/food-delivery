import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../__API__.js";

const AddCart = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const cookie = api.getCookie("login");
        if (cookie !== "") {
            api.getData(`/products/cart.php?cookie=${cookie}`, res => {
                setData(res.data);
            });
        } else {
            navigate("/login");
        }
    }, []);

    return (
        <>
            {/* <!-- Create Section -->*/}
            <section id="cartPage" className="main-section">
                <h2>
                    Your Cart - <span>5</span>
                </h2>
           {
             data.map(cart => {
                    return (
                        <>
                <div key={cart.cart_id} className="cart-area">
                    <span cart-id={cart.product_id} id="remove">X</span>
                    <div className="cart-list">
                        <Link to="#"></Link>
                        <div className="cart-div">
                            <p id="name">Chicken Coop with Plate Rice</p>
                            <p id="price">
                                Price : <span>123TK BDT</span>
                            </p>
                            <p id="price">
                                Quantity : <span>3</span>
                            </p>
                        </div>
                    </div>
                </div>
                </>
                )
})
}
            </section>
           {/* *<!-- End Section -->*/}
        </>
    );
};

export default AddCart;
