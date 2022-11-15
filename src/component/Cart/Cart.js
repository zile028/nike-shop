import React from 'react';
import "./cart.scss"
import {AiFillMinusCircle, AiFillPlusCircle} from "react-icons/ai";

function Cart({cart}) {

    return (
        <div className="cart">
            {cart.map((el, index) => {
                return <div className="cart-product" key={index}>
                    <div><img src={el.img} alt=""/></div>
                    <div><p>{el.title}</p>
                        <p> ${el.price}</p>
                        <button><AiFillPlusCircle/></button>
                        {el.count}
                        <button><AiFillMinusCircle/></button>
                    </div>
                </div>
            })}
        </div>
    );
}

export default Cart;