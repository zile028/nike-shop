import React, { useEffect, useState } from "react";
import logo from "../../logo.svg";
import { Link, NavLink } from "react-router-dom";
import {
  AiOutlineLogin,
  AiOutlineLogout,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import "./navigation.scss";
import { useDispatch, useSelector } from "react-redux";
import Cart from "../Cart/Cart";
import { useDelay } from "../../hooks/useDelay";
import Register from "../Register/Register";
import { toggleModal } from "../../store/sliceModal";
import Login from "../Login/Login";
import { logout } from "../../store/sliceUser";

function Navigation() {
  const { category } = useSelector((state) => state.productStore);
  const { cart } = useSelector((state) => state.cartStore);
  const { modal } = useSelector((state) => state.modalStore);
  const { user } = useSelector((state) => state.userStore);
  const dispatch = useDispatch();
  const [isMounted, setIsMounted] = useState(false);
  const [mountAuth, setMountAuth] = useState(false);
  const [shouldRender, animate] = useDelay({
    mountAnimation: {
      mount: "slideIn",
      unmount: "slideOut",
    },
    delayTime: 400,
    isMounted: isMounted,
  });

  const [renderAuth, authAnimate] = useDelay({
    mountAnimation: {
      mount: "slideIn",
      unmount: "slideOut",
    },
    delayTime: 400,
    isMounted: mountAuth,
  });

  useEffect(() => {
    if (cart.length === 0) {
      setIsMounted(false);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
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
    setMountAuth(false);
    if (cart.length > 0) {
      setIsMounted(!isMounted);
    }
  };

  return (
    <>
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
            {user.email ? (
              <button onClick={() => dispatch(logout())}>
                {user.firstName} <AiOutlineLogout />
              </button>
            ) : (
              <button
                onClick={() => {
                  setIsMounted(false);
                  setMountAuth(!mountAuth);
                }}
              >
                <AiOutlineLogin />
              </button>
            )}

            {renderAuth && (
              <div className="auth-menu" style={authAnimate}>
                <button
                  onClick={() => {
                    setMountAuth(false);
                    dispatch(toggleModal({ login: true }));
                  }}
                >
                  Login
                </button>
                <button
                  onClick={() => {
                    setMountAuth(false);
                    dispatch(toggleModal({ register: true }));
                  }}
                >
                  Register
                </button>
              </div>
            )}
            <button className="cart-icon" onClick={showCartHandler}>
              <AiOutlineShoppingCart />
              {cart.length > 0 && <span>{cart.length}</span>}
            </button>
            {shouldRender && <Cart animate={animate} />}
          </div>
        </div>
      </nav>
      {modal.register && <Register />}
      {modal.login && <Login />}
    </>
  );
}

export default Navigation;
