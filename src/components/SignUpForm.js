import React, { useState } from "react";
import { connect } from "react-redux";
import { register } from "../state/actions";

const SignUpForm2 = props => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
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
    props.register(user);
    props.history.push("/");
    setUser({
      first_name: "",
      email: "",
      password: ""
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>First Name</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        onChange={handleChanges}
      />
      <label>Last Name</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        onChange={handleChanges}
      />
      <label>Email</label>
      <input type="email" id="email" name="email" onChange={handleChanges} />
      <label>Password</label>
      <input
        type="password"
        id="password"
        name="password"
        onChange={handleChanges}
      />
      <button> Register </button>
    </form>
  );
};

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps, { register })(SignUpForm2);
