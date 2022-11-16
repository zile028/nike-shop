import React from "react";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { changeCount, removeFromCart } from "../../store/sliceCart";
import "./cart.scss";

function Cart() {
  const { cart } = useSelector((state) => state.cartStore);
  const dispatch = useDispatch();
  const quantityHandler = (increment, index) => {
    dispatch(changeCount({ increment, index }));
  };
  const removeHandler = (index) => {
    dispatch(removeFromCart(index));
  };

  return (
    <div className="cart">
      {cart.map((el, index) => {
        return (
          <div className="cart-product" key={index}>
            <div>
              <img src={el.img} alt={el.title} />
            </div>
            <div>
              <h4>{el.title}</h4>
              <p>{el.price}</p>
              <div className="quantity">
                <button
                  onClick={() => {
                    quantityHandler(1, index);
                  }}
                >
                  <AiFillPlusCircle />
                </button>
                <span>{el.count}</span>
                <button
                  onClick={() => {
                    quantityHandler(-1, index);
                  }}
                >
                  <AiFillMinusCircle />
                </button>
              </div>
            </div>
            <button
              onClick={() => {
                removeHandler(index);
              }}
            >
              <BsTrash />
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Cart;
