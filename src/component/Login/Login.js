import React, {useState} from 'react';
import {toggleModal} from "../../store/sliceModal";
import Modal from "../Modal/Modal";
import {useDispatch} from "react-redux";

import Auth from "../../services/Auth";

function Login() {
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
        if (Auth.Login(inputData)) {
            //TODO store login user to redux store
            console.log("logovan")
            dispatch(toggleModal({login: false}))
        } else {
            console.log("ne postoji")
        }
    }

    return (
        <Modal>
            <form className="form-register" onSubmit={submitHandler}>
                <input type="email" placeholder="Email" name="email" onInput={inputHandler}/>
                <input type="password" placeholder="Password" name="password" onInput={inputHandler}/>
                <button>Login</button>
                <button type="button" onClick={() => dispatch(toggleModal({login: false}))}>Cancel</button>
            </form>
        </Modal>
    );
}

export default Login;