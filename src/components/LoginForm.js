import React, { useState } from "react";
import { connect } from "react-redux";
import { register } from "../state/actions";

const LoginForm = props => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });
  console.log(user);
  const handleChanges = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    props.register(user);
    setUser({
      email: "",
      password: ""
    });
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
      <button> Submit </button>
    </form>
  );
};

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps, { register })(LoginForm);
