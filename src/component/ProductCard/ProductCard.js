import React from "react";
import "./productcard.scss";

function ProductCard({product}) {

    const addToCartHandler = () => {
        console.log(product)
    }

    return (
        <div className="product-card">
            <div className="product-card-image">
                <img src={product.img} alt="product"/>
            </div>
            <div className="product-card-body">
                <h3>{product.title}</h3>
                <p className="price">{product.price}</p>
                <p>{product.source}</p>
            </div>
            <div className="product-card-footer">
                <a className="btn btn-primary btn-sm" href={product.url} target="blank">
                    Details
                </a>
                <button className="btn btn-danger btn-sm" onClick={addToCartHandler}>Add to cart
                </button>
            </div>
        </div>
    );
}

export default ProductCard;
