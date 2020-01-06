import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
// import { Yup } from "yup";
// import { Route, NavLink } from "react-router-dom";
import axios from "axios";
import "../App.css";

const SignUpForm = ({values, status}) => {
  console.log("values", values);

  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    status && setUsers(...users)
  }, [status]);

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
      <button type="submit">Submit</button>

    </div>
  );
};

const FormikSignUpForm = withFormik({
  mapPropsToValues(props) {
    return {
      email: props.email || "",
      password: props.password || ""
    };
  },
  
  handleSubmit(values, {setStatus}) {
    axios
      .post("https://reqres.in/api/users", values)
      .then(response => {
        console.log(response);
        setStatus(response.data)
      })
      .catch(err => console.log(err.response));
  }

})(SignUpForm);

export default FormikSignUpForm;
