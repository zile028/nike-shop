import React, {useEffect, useState} from 'react';
import logo from "../../logo.svg";
import {Link, NavLink} from "react-router-dom";
import {AiOutlineLogin, AiOutlineShoppingCart} from "react-icons/ai";
import "./navigation.scss"
import {useDispatch, useSelector} from "react-redux";
import Cart from "../Cart/Cart";
import {useDelayUnmount} from "../../hooks/useDelayUnmount";
import Modal from "../Modal/Modal";
import {closeModal, showModal, toggleModal} from "../../store/sliceModal";

function Navigation() {
    const [isMount, setIsMount] = useState(false);
    const {shouldRender, animateStyle} = useDelayUnmount(
        {
            isMount: isMount,
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
        if (cart.length > 0) {
            setIsMount(!isMount)
        }
    }

    return (
        <nav className="navbar">
            {modal.register && <Modal>
                <form className="form-register">
                    <input type="text" placeholder="Full Name" name="fullName"/>
                    <input type="email" placeholder="Email" name="email"/>
                    <input type="password" placeholder="Password" name="password"/>
                    <button>Register</button>
                    <button type="button" onClick={() => dispatch(toggleModal({register: false}))}>Cancel</button>
                </form>
            </Modal>}
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
                        dispatch(toggleModal({register: true}))
                    }}><AiOutlineLogin/></button>
                    <button className="cartIcon" onClick={renderCart}><AiOutlineShoppingCart/>
                        {cart.length ? <span>{cart.length}</span> : null}
                    </button>
                    {shouldRender ? <Cart animateStyle={animateStyle}/> : null}

                </div>
            </div>
        </nav>
    );
}

export default Navigation;