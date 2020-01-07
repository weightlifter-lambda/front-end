import React, { useState } from "react";
import { connect } from "react-redux";
import { register } from "../state/actions";

import styled, { ThemeProvider } from "styled-components";

const theme = {
  primary: "#FBB338",
  secondary: "grey",
  font: "Ubuntu"
};

const Container = styled.body`
  display: flex;
  justify-content: center;
  height: 200px;
  width: 50%;
  background: grey;
  margin: auto;
  margin-top: 8em;
  border: 1px solid red;
`;

const Labels = styled.div`
  display: flex;
  margin: 3em;

  font-family: "Ubuntu";
  color: white;
`;

const Button = styled.button`
  font-size: 1rem;
  &:hover {
    background: #fbb338;
  }
`;
const SignUpForm2 = props => {
  const [user, setUser] = useState({
    first_name: "",
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
      first_name: "",
      email: "",
      password: ""
    });
  };
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Labels>
          <label>Name</label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            placeholder="John Doe"
            onChange={handleChanges}
          />
          <label>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="johndoe@gmail.com"
            onChange={handleChanges}
          />
          <label>Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="min. 8 characters"
            onChange={handleChanges}
          />
        </Labels>
        <ThemeProvider theme={theme}>
          <Button> Register </Button>
        </ThemeProvider>
      </form>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps, { register })(SignUpForm2);
