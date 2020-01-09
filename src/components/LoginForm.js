import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from "../state/actions";
import styled, { ThemeProvider } from "styled-components";
import * as yup from "yup";
const theme = {
  colors: {
    yellow: "#FBB338",
    grey_main: "dimgrey",
    grey_hilite: "grey",
    blue: "#06A8FF"
  }
};
const Container = styled.body`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: dimgrey;
`;
const Header = styled.header`
  display: flex;
  height: 15%;
  width: 100%;
  border: 1px solid red;
  background: grey;
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
  background: #fbb338;
`;
const Fields = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  font-family: "Russo One";
`;
const Button = styled.button`
  font-family: "Russo One";
  &:hover {
    background: #06a8ff;
  }
`;
const Footer = styled.footer`
  display: flex;
  height: 15%;
  width: 100%;
  border: 1px solid blue;
  background: grey;
`;

const LoginForm = props => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });
  // console.log(user);

  const validateForm = () => {
    let schema = yup.object().shape({
      email: yup.string().email()
    });
  };
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
    <Container>
      <Header>header</Header>
      <Login>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChanges}
          />
          <label>Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChanges}
          />
          <Button onClick={validateForm}> Login </Button>
        </form>
      </Login>
      <Footer>footer</Footer>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps, { login })(LoginForm);
