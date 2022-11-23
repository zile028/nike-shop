import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Auth from "../../services/Auth";
import { toggleModal } from "../../store/sliceModal";
import { login } from "../../store/sliceUser";
import Modal from "../Modal/Modal";

function Login() {
  const dispatch = useDispatch();
  const [inputData, setInputData] = useState({});

  const inputHandler = (e) => {
    let copyInputData = { ...inputData };
    copyInputData[e.target.name] = e.target.value;
    setInputData(copyInputData);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    let logedUser = Auth.login(inputData);
    if (logedUser) {
      dispatch(login(logedUser));
      dispatch(toggleModal({ login: false }));
    } else {
      console.log("ne postoji");
    }
  };
  return (
    <Modal>
      <form className="register" onSubmit={submitHandler}>
        <h3>Login</h3>
        <input
          type="email"
          placeholder="Email"
          name="email"
          onInput={inputHandler}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onInput={inputHandler}
        />
        <button>Login</button>
        <button
          type="button"
          onClick={() => dispatch(toggleModal({ login: false }))}
        >
          Cancel
        </button>
      </form>
    </Modal>
  );
}

export default Login;
