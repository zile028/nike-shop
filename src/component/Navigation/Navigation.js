import React, {useEffect, useState} from 'react';
import "./navigation.scss"
import logo from "../../logo.svg";
import {Link, NavLink} from "react-router-dom";
import {AiOutlineLogin, AiOutlineShoppingCart} from "react-icons/ai";
import {useDispatch, useSelector} from "react-redux";
import Cart from "../Cart/Cart";
import {useDelayUnmount} from "../../hooks/useDelayUnmount";
import {toggleModal} from "../../store/sliceModal";
import Register from "../Register/Register";
import Login from "../Login/Login";

function Navigation() {
    const [isMount, setIsMount] = useState(false);
    const [mountAuth, setMountAuth] = useState(false);
    const [shouldRender, animateStyle] = useDelayUnmount(
        {
            isMount: isMount,
            delay: 400,
            mountStyle: {mount: "slideIn", unmount: "slideOut"}
        })
    const [renderAuth, animateAuth] = useDelayUnmount(
        {
            isMount: mountAuth,
            delay: 400,
            mountStyle: {mount: "slideIn", unmount: "slideOut"}
        })
    const dispatch = useDispatch()
    const {category} = useSelector((state) => state.productStore)
    const {cart} = useSelector((state) => state.cartStore)
    const {modal} = useSelector((state) => state.modalStore)

    useEffect(() => {
        cart.length === 0 && setIsMount(false)
    }, [cart]);


    const renderNavLink = () => {
        return category.map((el, index) => {
            return <li key={index}><NavLink to={"/showroom/" + el.toLowerCase()}>{el}</NavLink></li>
        })
    }

    const renderCart = () => {
        setMountAuth(false)
        if (cart.length > 0) {
            setIsMount(!isMount)
        }
    }

    return (
        <nav className="navbar">
            {modal.register && <Register/>}
            {modal.login && <Login/>}
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
                    <button onClick={() => {
                        setIsMount(false)
                        setMountAuth(!mountAuth)
                    }
                    }>
                        <AiOutlineLogin/>
                    </button>


                    <button className="cartIcon" onClick={renderCart}><AiOutlineShoppingCart/>
                        {cart.length ? <span>{cart.length}</span> : null}
                    </button>
                    {shouldRender ? <Cart animateStyle={animateStyle}/> : null}

                    {renderAuth ?
                        <div style={animateAuth} className="auth-menu">
                            <button
                                onClick={() => {
                                    setMountAuth(false)
                                    dispatch(toggleModal({login: true}))
                                }}
                            >Login
                            </button>
                            <button onClick={() => {
                                setMountAuth(false)
                                dispatch(toggleModal({register: true}))
                            }}>Register
                            </button>
                        </div> : null}
                </div>
            </div>
        </nav>
    );
}

export default Navigation;