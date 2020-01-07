import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
// import { Route, NavLink } from "react-router-dom";

import { connect } from "react-redux";
import { register } from "../state/actions";

import "../App.css";

const SignUpForm = ({ values, status }) => {
  console.log("values", values);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    status && setUsers(...users);
  }, [status]);

  return (
    <div className="signUp">
      <Form>
        <label htmlFor="name">Name</label>
        <Field
          id="name"
          type="text"
          name="name"
          placeholder="Your First Name"
        />

        <label htmlFor="email">Email</label>
        <Field
          id="email"
          type="text"
          name="email"
          placeholder="JohnnyAppleseed@gmail.com"
        />

        <label htmlFor="password">Password</label>
        <Field
          id="password"
          type="text"
          name="password"
          placeholder="password"
        />
      </Form>
      <button type="submit">Submit</button>
    </div>
  );
};

const FormikSignUpForm = withFormik({
  mapPropsToValues(props) {
    return {
      name: props.name || "",
      email: props.email || "",
      password: props.password || ""
    };
  },

  handleSubmit(values, { setStatus }, props) {
    //   axios
    //     .post("https://reqres.in/api/users", values)
    //     .then(response => {
    //       console.log(response);
    //       setStatus(response.data);
    //     })
    //     .catch(err => console.log(err.response));
    console.log(props.register);
    props.register(values);
  }
})(SignUpForm);

const mapStateToProps = state => {
  return {
    ...state
  };
};
export default connect(mapStateToProps, { register })(FormikSignUpForm);
