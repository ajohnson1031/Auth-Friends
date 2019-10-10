import React from "react";
import { Link, Route, Redirect } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import LoginForm from "components/LoginForm";
import FriendsList from "components/FriendsList";

function App() {
  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem("token") ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );

  return (
    <div className="App">
      <div className="link-container">
        <Link to="/">
          <Icon name="home" />
        </Link>
        <Link to="/login">Login</Link>
        <Link to="/friendslist">Friends List</Link>
      </div>
      <Route path="/" />
      <Route path="/login" component={LoginForm} />
      <PrivateRoute path="/friendslist" component={FriendsList} />
    </div>
  );
}

export default App;
