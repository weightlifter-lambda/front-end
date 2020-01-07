import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from "../state/actions";

const LoginForm = props => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });
  // console.log(user);
  const handleChanges = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    props.login(user);
    setTimeout(() => {
      props.history.push("/dashboard");
    }, 800);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Email</label>
      <input type="email" id="email" name="email" onChange={handleChanges} />
      <label>Password</label>
      <input
        type="password"
        id="password"
        name="password"
        onChange={handleChanges}
      />
      <button> Login </button>
    </form>
  );
};

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps, { login })(LoginForm);
