import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import SignUpForm2 from "./components/SignUpForm2";
import LoginForm from "./components/LoginForm";
// import Footer from "./styled/footer";

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
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
