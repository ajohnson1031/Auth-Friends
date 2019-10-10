import React, { useState } from "react";
import { axiosWithAuth } from "data/axiosAuth";

const AddForm = props => {
  const [value, setValue] = useState({
    friendText: "",
    ageText: "",
    emailText: "",
    err: null
  });

  const handleChange = e => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    value.friendText === "" || value.ageText === "" || value.emailText === ""
      ? setValue({ ...value, err: "Please complete all fiends..." })
      : axiosWithAuth()
          .post()
          .then();
  };

  return (
    <form className="horz-form">
      <input
        type="text"
        placeholder="Name..."
        name="friendText"
        value={value.friendText}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Age..."
        name="ageText"
        value={value.ageText}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Email Address..."
        name="emailText"
        value={value.emailText}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Add Friend +</button>
    </form>
  );
};

export default AddForm;
