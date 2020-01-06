import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import { Yup } from "yup";
import { Route, NavLink } from "react-router-dom";
import axios from "axios";
import "../App.css";

const SignUpForm = () => {
  return (
    <div className="signUp">
      <Form>
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
    </div>
  );
};

const FormikSignUpForm = withFormik({
  mapPropsToValues(props) {
    return {
      email: props.email || "",
      password: props.password || ""
    };
  }
})(SignUpForm);

export default FormikSignUpForm;
