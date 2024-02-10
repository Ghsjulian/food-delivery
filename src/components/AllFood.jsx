import React, { useEffect, useState } from "react";
import api from "../__API__.js";
import { Link } from "react-router-dom";
import scrollTop from "../layouts/ScrollTop";
const AllFood = () => {
    scrollTop();
    const [products, addProducts] = useState([]);
    useEffect(() => {
        api.getData("/products/all-products.php", res => {
            addProducts(res.data);
        });
    }, []);
    return (
        <>
            {/* <!-- Create Section -->*/}
            <section id="food-area" className="main-section">
                <h2>
                    Our <i className="bi bi-arrow-right"></i>
                    <span>Dishes And Items</span>
                </h2>
                <div className="row">
                    {products.map((product, index) => {
                        return (
                            <>
                                <Link
                                    key={index}
                                    to={`/view/product/${product.product_id}`}
                                    className="products"
                                >
                                    <img
                                        src={
                                            api.host +
                                            "/images/" +
                                            product.product_img
                                        }
                                    />
                                    <h3 id="product-name">
                                        {product.product_name}
                                    </h3>
                                    <h3 id="price">
                                        Only -{" "}
                                        <span>{product.product_price}</span>
                                    </h3>
                                    <i
                                        id="cart"
                                        className="bi bi-cart-plus"
                                    ></i>
                                </Link>
                            </>
                        );
                    })}
                </div>
            </section>
            {/*  <!-- End Section -->*/}
        </>
    );
};
export default AllFood;
