import React, {Fragment, useEffect, useState} from 'react';
import "./cart.scss"
import {AiFillMinusCircle, AiFillPlusCircle} from "react-icons/ai";
import {BsTrash} from "react-icons/bs";
import {useDispatch, useSelector} from "react-redux";
import {changeCount, removeFromCart} from "../../store/sliceCart";

function Cart({animateStyle}) {
    const dispatch = useDispatch()
    const {total, cart} = useSelector((state) => state.cartStore)
    
    return (
        <div className="cart" style={animateStyle}>
            <div className="cart-product">
                {cart.map((el, index) => {
                    return <Fragment key={index}>
                        <div><img src={el.img} alt=""/></div>
                        <div><p>{el.title}</p>
                            <p> ${el.price}</p>
                            <button onClick={() => dispatch(changeCount({increment: 1, index}))}><AiFillPlusCircle/>
                            </button>
                            {el.count}
                            <button onClick={() => dispatch(changeCount({increment: -1, index}))}><AiFillMinusCircle/>
                            </button>
                        </div>
                        <button onClick={() => dispatch(removeFromCart(index))}><BsTrash/></button>
                    </Fragment>
                })}
            </div>

            <div className="cart-total">
                <p>Total: <span>${total}</span></p>
            </div>
        </div>
    );
}

export default Cart;

