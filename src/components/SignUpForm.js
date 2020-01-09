import React, { useState } from "react";
import { connect } from "react-redux";
import { register } from "../state/actions";
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
  background: rgb(0, 0, 0);
  background: linear-gradient(
    11deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(80, 78, 74, 1) 100%
  );
`;
const Header = styled.header`
  display: flex;
  height: 15%;
  width: 100%;
  justify-content: center;
  font-family: "Russo One";
  font-size: 4rem;
  color: #fbb338;
  background: black;
`;
const Login = styled.div`
  display: flex;
  height: 300px;
  width: 200px;
  justify-content: center;
  align-items: center;
  margin: 6rem 0 3rem 0;
  padding: 3rem;
  font-family: "Russo One";
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
  height: 2.2rem;
  width: 75%;
  margin-bottom: 20px;
  font-family: "Russo One";
  font-size: 1.2rem;
  border-radius: 10px;
  &:hover {
    background: #06a8ff;
  }
`;
const Footer = styled.footer`
  display: flex;
  height: 15%;
  width: 100%;
  justify-content: center;
  color: white;
`;
const SignUpForm = props => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const validateForm = () => {
    let schema = yup.object().shape({
      email: yup.string().email("email"),
      password: yup
        .string()
        .required()
        .min(8, "bad password")
    });

    schema
      .isValid({
        email: user.email,
        password: user.password
      })

      .then(function(valid) {
        console.log(valid);
        return valid;
      });
  };

  const handleChanges = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
    console.log(e.target.value);
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
      <Header>Workout Logs</Header>
      <Login>
        <form onSubmit={handleSubmit}>
          <Fields>
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
          </Fields>
          {/* <Button> Register </Button> */}
          <Button onClick={validateForm}> Register </Button>
        </form>
      </Login>
      {/* <Footer>footer</Footer> */}
    </Container>
  );
};
const mapStateToProps = state => {
  return {
    ...state
  };
};
export default connect(mapStateToProps, { register })(SignUpForm);
