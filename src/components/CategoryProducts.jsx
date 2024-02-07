import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../__API__.js";

const CategoryProducts = ({ value }) => {
    const [dataCategory, setCategory] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        api.getData(
            `/products/category-product.php?category=${value}`,
            result => {
                if (result.data) {
                    setCategory(result.data);
                }
            }
        );
    }, [value]);

    return (
        <>
            {dataCategory.map(product => {
                return (
                    <Link
                        key={product.product_id}
                        to={`/view/product/${product.product_id}`}
                        className="products"
                    >
                        <img
                            src={api.host + "/images/" + product.product_img}
                            alt={product.product_name}
                        />
                        <h3 id="product-name">{product.product_name}</h3>
                        <h3 id="price">
                            Only - <span>{product.product_price}</span>
                        </h3>
                        <i id="cart" className="bi bi-cart-plus"></i>
                    </Link>
                );
            })}
        </>
    );
};

export default CategoryProducts;
