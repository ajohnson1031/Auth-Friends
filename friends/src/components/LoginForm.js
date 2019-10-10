import React, { useState } from "react";

const LoginForm = () => {
  const [value, setValue] = useState({ username: "", password: "" });

  const handleChange = e => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  return (
    <form>
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
      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginForm;
