import React, { useEffect, useState } from "react";
import logo from "../../logo.svg";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineLogin, AiOutlineShoppingCart } from "react-icons/ai";
import "./navigation.scss";
import { useSelector } from "react-redux";
import Cart from "../Cart/Cart";
import { useDelay } from "../../hooks/useDelay";

function Navigation() {
  const { category } = useSelector((state) => state.productStore);
  const { cart } = useSelector((state) => state.cartStore);

  const [isMounted, setIsMounted] = useState(false);
  const [shouldRender, animate] = useDelay({
    mountAnimation: {
      mount: "slideIn",
      unmount: "slideOut",
    },
    delayTime: 400,
    isMounted: isMounted,
  });

  useEffect(() => {
    if (cart.length === 0) {
      setIsMounted(false);
    }
  }, [cart]);

  const renderNavLink = () => {
    return category.map((el, index) => {
      return (
        <li key={index}>
          <NavLink to={"/showroom/" + el.toLowerCase()}>{el}</NavLink>
        </li>
      );
    });
  };

  const showCartHandler = () => {
    if (cart.length > 0) {
      setIsMounted(!isMounted);
    }
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-logo">
          <Link to={"/"}>
            <img src={logo} alt="nike" />
          </Link>
        </div>
        <div className="navbar-menu">
          <ul>{renderNavLink()}</ul>
        </div>
        <div className="navbar-action">
          <button>
            <AiOutlineLogin />
          </button>
          <button className="cart-icon" onClick={showCartHandler}>
            <AiOutlineShoppingCart />
            {cart.length > 0 && <span>{cart.length}</span>}
          </button>
          {shouldRender && <Cart cart={cart} animate={animate} />}
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
