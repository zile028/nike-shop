import React, {useState} from 'react';
import {toggleModal} from "../../store/sliceModal";
import Modal from "../Modal/Modal";
import {useDispatch} from "react-redux";
import "./register.scss"
import Auth from "../../services/Auth";

function Register() {
    const dispatch = useDispatch()
    const [inputData, setInputData] = useState({})

    const inputHandler = (e) => {
        let copyInput = {...inputData}
        copyInput[e.target.name] = e.target.value
        setInputData(copyInput)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        //TODO validate form
        if (Auth.Register(inputData)) {
            dispatch(toggleModal({register: false}))
            dispatch(toggleModal({login: true}))
        }
    }

    return (
        <Modal>
            <form className="form-register" onSubmit={submitHandler}>
                <input type="text" placeholder="Full Name" name="fullName" onInput={inputHandler}/>
                <input type="email" placeholder="Email" name="email" onInput={inputHandler}/>
                <input type="password" placeholder="Password" name="password" onInput={inputHandler}/>
                <button>Register</button>
                <button type="button" onClick={() => dispatch(toggleModal({register: false}))}>Cancel</button>
            </form>
        </Modal>
    );
}

export default Register;