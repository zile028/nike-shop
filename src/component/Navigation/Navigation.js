import React from 'react';
import logo from "../../logo.svg";
import {Link, NavLink} from "react-router-dom";
import {AiOutlineLogin, AiOutlineShoppingCart} from "react-icons/ai";
import "./navigation.scss"
import {useSelector} from "react-redux";

function Navigation() {
    const {category} = useSelector((state) => state.productStore)

    const renderNavLink = () => {
        return category.map((el, index) => {
            return <li key={index}><NavLink to={"/showroom/" + el.toLowerCase()}>{el}</NavLink></li>
        })
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
                    <button><AiOutlineShoppingCart/></button>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;