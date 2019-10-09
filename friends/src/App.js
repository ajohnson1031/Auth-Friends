import React from "react";
import { Link, Route } from "react-router-dom";
import LoginForm from "components/LoginForm";

function App() {
  return (
    <div className="App">
      <Link to="/login">Login</Link>
      <Route path="/login" component={LoginForm} />
    </div>
  );
}

export default App;
