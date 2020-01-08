import React, { useState } from "react";
import { connect } from "react-redux";
import { register } from "../state/actions";

import styled, { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    yellow: "#FBB338",
    grey_main: "grey",
    grey_hilite: "",
    blue: "#06A8FF"
  }
};

const Container = styled.body`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const Header = styled.header`
  display: flex;
  height: 15%;
  width: 100%;
  border: 1px solid red;
`;

const Login = styled.div`
  display: flex;
  height: 50%;
  width: 20%;
  margin: 3em 0 5em 0;
  padding: 3rem;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
  border-radius: 10px;
`;

const Fields = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  font-family: "Russo One";
  border: 1px solid red;
`;

const Button = styled.button`
  font-family: "Russo One";
  &:hover {
    background: yellow;
  }
`;

const Footer = styled.footer`
  display: flex;
  height: 15%;
  width: 100%;
  border: 1px solid blue;
`;

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
