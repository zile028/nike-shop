import React from 'react';
import "./register.scss"
import Modal from "../Modal/Modal";
import {closeModal} from "../../store/sliceModal";
import {useDispatch} from "react-redux";

function Register() {
	const dispatch = useDispatch()

	return (
	  <Modal>
		  <form className="register">
			  <h3>Register</h3>
			  <input type="text" placeholder="First name" name="firstName"/>
			  <input type="text" placeholder="Last name" name="lastName"/>
			  <input type="email" placeholder="Email" name="email"/>
			  <input type="password" placeholder="Password" name="password"/>
			  <button>Register</button>
			  <button type="button" onClick={() => dispatch(closeModal("register"))}>Cancel
			  </button>
		  </form>
	  </Modal>
	);
}


export default Register;