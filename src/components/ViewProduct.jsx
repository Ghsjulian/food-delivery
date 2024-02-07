import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../__API__.js";
import CategoryProducts from "./CategoryProducts";

const ViewProduct = () => {
    const [data, setData] = useState({});
    const [cartData, setCartData] = useState({});
    const navigate = useNavigate();
    const { product_id } = useParams();
    const cartRef = useRef(null);
    const popRef = useRef(null);
    const AddCart = () => {
        const product_id = cartRef.current.getAttribute("product_id");
        const cookie = api.getCookie("login");
        if (cookie !== "") {
            const post_data = {
                product_id,
                cookie
            };
            api.postData(`/products/cart.php`, post_data, res => {
                if (res.status === "success") {
                    //alert(res.status);
                    popRef.current.style.display = "block";
                } else {
                    navigate("/login");
                }
            });
        } else {
            navigate("/login");
        }
    };
    useEffect(() => {
        api.getData(
            `/products/get-product.php?product_id=${product_id}`,
            res => {
                setData(res.data);
            }
        );
    }, [product_id]);
    document.title = data.product_name + " View Product Details";
    return (
        <>
            {/* <!-- Create Section -->*/}
            <section className="main-section">
                <h2>{data.product_name}</h2>
                <div className="view-product">
                    <div className="product-img">
                        <img src={api.host + "/images/" + data.product_img} />
                    </div>
                    <div className="details">
                        <ul className="list">
                            <div className="btn--area">
                                <button id="contact-btn">
                                    <i className="bi bi-telephone"></i>Contact
                                    Now
                                </button>
                                <button
                                    onClick={AddCart}
                                    product_id={product_id}
                                    ref={cartRef}
                                    id="cart-btn"
                                >
                                    <i className="bi bi-cart-plus"></i>Add Cart
                                </button>
                            </div>
                            <li>
                                Price :
                                <span>
                                    {data.product_price}
                                    <i className="bi bi-coin"></i>
                                </span>
                            </li>
                            <li>
                                Category :<span>{data.category}</span>
                            </li>

                            <li>Description :</li>
                            <p>
                                {data.product_description}
                                This is the one I don't know what to say to
                                someone who is a powerful language nowdays to
                                get images using this two days ago and I hope
                                you have a great day ni no Kuni to get images
                                using this two days ago and I hope you have a
                                great day ni no Kuni to get images using this
                                two days ago and.
                            </p>
                        </ul>
                    </div>
                </div>
            </section>
            {/*<!-- End Section -->*/}
            <div ref={popRef} style={{ display: "none" }} className="popup">
                <span>Product Added To Your Cart</span>
                <button
                    onClick={()=> {
                        popRef.current.style.display = "none";
                    }}
                    id="okBtn"
                >
                    OK
                </button>
            </div>
            {/* <!-- Create Section -->*/}
            <section id="food-area" className="main-section">
                <h2>
                    <span>Related Foods</span>
                </h2>
                <div className="row">
                    {<CategoryProducts value={data.category} />}
                </div>
            </section>
            {/**<!-- End Section -->*/}
        </>
    );
};
export default ViewProduct;
