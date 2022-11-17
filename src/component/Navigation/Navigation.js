import React, {useEffect, useState} from 'react';
import logo from "../../logo.svg";
import {Link, NavLink} from "react-router-dom";
import {AiOutlineLogin, AiOutlineShoppingCart} from "react-icons/ai";
import "./navigation.scss"
import {useSelector} from "react-redux";
import Cart from "../Cart/Cart";

function Navigation() {
    const [showCart, setShowCart] = useState(false);
    const [unmountCart, setUnmountCart] = useState(false);
    const {category} = useSelector((state) => state.productStore)
    const {cart} = useSelector((state) => state.cartStore)

    useEffect(() => {
        cart.length === 0 && setShowCart(false)
    }, [cart]);

    useEffect(() => {
        if (unmountCart) {
            setShowCart(false)
        }
    }, [unmountCart]);

    const renderNavLink = () => {
        return category.map((el, index) => {
            return <li key={index}><NavLink to={"/showroom/" + el.toLowerCase()}>{el}</NavLink></li>
        })
    }

    const renderCart = () => {
        setUnmountCart(!unmountCart)
        // cart.length > 0 && setShowCart(!showCart)
    }

    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar-logo">
                    <Link to={"/"}><img src={logo} alt="nike"/></Link>
                </div>
                <div className="navbar-menu">
                    <ul>
                        {renderNavLink()}
                    </ul>
                </div>
                <div className="navbar-action">
                    <button><AiOutlineLogin/></button>
                    <button className="cartIcon" onClick={renderCart}><AiOutlineShoppingCart/>
                        {cart.length ? <span>{cart.length}</span> : null}
                    </button>
                    {unmountCart && cart.length > 0 ?
                        <Cart unmountCart={unmountCart} setShowCart={setShowCart}/> : null}

                </div>
            </div>
        </nav>
    );
}

export default Navigation;