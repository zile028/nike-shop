import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/sliceCart";
import "./productcard.scss";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-card" draggable={true}>
      <div className="product-card-image">
        <img src={product.img} alt="product" />
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
        <button className="btn btn-danger btn-sm" onClick={addToCartHandler}>
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
