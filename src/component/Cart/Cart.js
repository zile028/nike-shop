import React, { Fragment, useEffect, useState } from "react";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { changeCount, removeFromCart } from "../../store/sliceCart";
import "./cart.scss";

function Cart({ cart, showCart, setIsMounted }) {
  const { total } = useSelector((state) => state.cartStore);
  const dispatch = useDispatch();
  const [animate, setAnimate] = useState({});
  useEffect(() => {
    let timer = null;
    if (showCart) {
      setAnimate({ animationName: "slideIn" });
    } else {
      setAnimate({ animationName: "slideOut" });
      timer = setTimeout(() => {
        setIsMounted(false);
      }, 400);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [showCart]);

  const quantityHandler = (increment, index) => {
    dispatch(changeCount({ increment, index }));
  };
  const removeHandler = (index) => {
    dispatch(removeFromCart(index));
  };

  return (
    <div className="cart" style={animate}>
      <div className="cart-product">
        {cart.map((el, index) => {
          return (
            <Fragment key={index}>
              <div>
                <img src={el.img} alt={el.title} />
              </div>
              <div>
                <h4>{el.title}</h4>
                <p>${el.price}</p>
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
            </Fragment>
          );
        })}
      </div>
      <div className="cart-total">
        <p>
          Total: <span>${total}</span>
        </p>
      </div>
    </div>
  );
}

export default Cart;
