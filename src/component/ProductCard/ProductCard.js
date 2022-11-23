import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../../store/sliceCart";
import "./productcard.scss";
import {BsStar, BsStarFill} from "react-icons/bs";
import {likeToggle} from "../../store/sliceUser";

function ProductCard({product}) {
	const dispatch = useDispatch();
	const {isLogged, user} = useSelector(state => state.userStore)
	const addToCartHandler = () => {
		dispatch(addToCart(product));
	};


	return (
	  <div className="product-card" draggable={true}>
		  <div className="product-card-image">
			  <img src={product.img} alt="product"/>
			  {isLogged ?
				<span className="like-btn">
					{user.favorites?.includes(product.id) ?
					  <BsStarFill onClick={() => dispatch(likeToggle(product.id))}/> :
					  <BsStar onClick={() => dispatch(likeToggle(product.id))}/>
					}
                </span>
				: null}
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
