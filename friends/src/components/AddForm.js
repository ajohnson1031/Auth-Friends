import React, { useState } from "react";
import { axiosWithAuth } from "data/axiosAuth";

const AddForm = props => {
  const [value, setValue] = useState({
    friendText: "",
    ageText: "",
    emailText: "",
    err: null,
    status: null
  });

  const handleChange = e => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
      err: null,
      status: null
    });
    props.setStatus(null);
  };

  const handleSubmit = e => {
    e.preventDefault();
    value.friendText === "" || value.ageText === "" || value.emailText === ""
      ? setValue({ ...value, err: "Please complete all fields..." })
      : axiosWithAuth()
          .post("http://localhost:5000/api/friends/", {
            name: value.friendText,
            age: value.ageText,
            email: value.emailText,
            id: new Date().getTime()
          })
          .then(res => {
            props.setFriends(res.data);
            setValue({
              ...value,
              friendText: "",
              ageText: "",
              emailText: "",
              err: null,
              status: res.status
            });
          });
  };

  return (
    <>
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
      {value.err && <div className="err">{value.err}</div>}
      {value.status && (
        <div className="success">{"Congrats, you've made a friend!"}</div>
      )}
    </>
  );
};

export default AddForm;
