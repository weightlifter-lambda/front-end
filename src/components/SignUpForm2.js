import React, { useState } from "react";
import { connect } from "react-redux";
import { register } from "../state/actions";

import styled, { ThemeProvider } from "styled-components";

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

const LoginForms = styled.div`
  display: flex;
  height: 50%;
  width: 25%;
  margin: 5em 0 5em 0;
  padding: 3rem;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
`;

const Footer = styled.footer`
  display: flex;
  height: 15%;
  width: 100%;
  border: 1px solid blue;
`;

const SignUpForm2 = props => {
  const [user, setUser] = useState({
    first_name: "",
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
    <Container>
      <Header>Header</Header>
      <LoginForms>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name </label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              placeholder="John Doe"
              onChange={handleChanges}
            />
          </div>
          <div>
            <label>Email </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="johndoe@gmail.com"
              onChange={handleChanges}
            />
          </div>
          <div>
            <label>Password </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="min. 8 characters"
              onChange={handleChanges}
            />
          </div>

          <button> Register </button>
        </form>
      </LoginForms>
      <Footer>Footer</Footer>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps, { register })(SignUpForm2);
