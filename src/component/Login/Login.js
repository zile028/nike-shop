import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../store/sliceModal";
import Modal from "../Modal/Modal";

function Login() {
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
    // TODO check user is register

    // localStorage.setItem("users", JSON.stringify(inputData));
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
