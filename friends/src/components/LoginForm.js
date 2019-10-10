import React, { useState } from "react";
import { axiosWithAuth } from "data/axiosAuth";

const LoginForm = props => {
  const [value, setValue] = useState({ username: "", password: "", err: null });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = e => {
    setValue({ ...value, [e.target.name]: e.target.value, err: null });
  };

  const login = () => {
    setIsLoading(true);
    axiosWithAuth()
      .post("http://localhost:5000/api/login", {
        username: value.username,
        password: value.password
      })
      .then(res => {
        setIsLoading(false);
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        props.history.push("/friendslist");
      })
      .catch(err => {
        setIsLoading(false);
        setValue({ ...value, err: "There was an error. Try again." });
      });
  };

  const handleSubmit = e => {
    e.preventDefault();
    value.username === "" || value.password === ""
      ? setValue({ ...value, err: "Please fill in all fields..." })
      : login();
  };

  return (
    <>
      {isLoading && <div className="loader" />}
      <form>
        <h4>Login Form</h4>
        <input
          type="text"
          name="username"
          placeholder="Enter username..."
          value={value.username}
          onChange={handleChange}
          autoComplete="username"
        />
        <input
          type="password"
          name="password"
          placeholder="Enter password..."
          value={value.password}
          onChange={handleChange}
          autoComplete="current-password"
        />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
        {value.err && <div className="err">{value.err}</div>}
      </form>
    </>
  );
};

export default LoginForm;
