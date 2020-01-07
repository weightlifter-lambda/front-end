import React from "react";
import logo from "./logo.svg";
import FormikSignUpForm from "./components/SignUpForm.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import SignUpForm2 from "./components/SignUpForm2";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/login" render={props => <LoginForm {...props} />} />
        <Route
          exact
          path="/register"
          render={props => <SignUpForm2 {...props} />}
        />
        <Route
          exact
          path="/dashboard"
          render={props => <Dashboard {...props} />}
        />
      </Router>
    </div>
  );
}

export default App;
