import React, { useState } from "react";
import "./register.scss";
import Modal from "../Modal/Modal";
import { toggleModal } from "../../store/sliceModal";
import { useDispatch } from "react-redux";

function Register() {
  const dispatch = useDispatch();
  const [inputData, setInputData] = useState({});

  const inputHandler = (e) => {
    let data = e.target.value;
    let name = e.target.name;
    let copyInputData = { ...inputData };
    copyInputData[name] = data;
    setInputData(copyInputData);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    // TODO validate input data

    localStorage.setItem("users", JSON.stringify(inputData));
  };
  return (
    <Modal>
      <form className="register" onSubmit={submitHandler}>
        <h3>Register</h3>
        <input
          type="text"
          placeholder="First name"
          name="firstName"
          onInput={inputHandler}
        />
        <input
          type="text"
          placeholder="Last name"
          name="lastName"
          onInput={inputHandler}
        />
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
        <button>Register</button>
        <button
          type="button"
          onInput={() => dispatch(toggleModal({ register: false }))}
        >
          Cancel
        </button>
      </form>
    </Modal>
  );
}

export default Register;
