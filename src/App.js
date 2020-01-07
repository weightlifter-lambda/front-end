import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import SignUpForm2 from "./components/SignUpForm2";
import LoginForm from "./components/LoginForm";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Link to="/register">Register</Link>
        <Route exact path="/" render={props => <LoginForm {...props} />} />
        <Route path="/register" render={props => <SignUpForm2 {...props} />} />
        <Switch>
          <PrivateRoute exact path="/dashboard" />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
