import React from "react";
import { useSelector } from "react-redux";
import "./cart.scss";

function Cart() {
  const { cart } = useSelector((state) => state.cartStore);
  return (
    <div className="cart-wrapper">
      <ul>
        {cart.map((el, index) => {
          return (
            <li key={index}>
              {el.title} - {el.count}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Cart;
