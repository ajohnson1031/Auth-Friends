import React from "react";
import { Link, Route } from "react-router-dom";
import LoginForm from "components/LoginForm";

function App() {
  return (
    <div className="App">
      <div className="link-container">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </div>
      <Route path="/" />
      <Route path="/login" component={LoginForm} />
    </div>
  );
}

export default App;
