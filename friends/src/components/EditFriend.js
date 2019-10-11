import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "data/axiosAuth";

const EditFriend = props => {
  const id = props.match.params.id;
  const [values, setValues] = useState({
    name: "",
    age: "",
    email: "",
    err: null,
    status: null
  });

  useEffect(() => {
    axiosWithAuth()
      .get(`http://localhost:5000/api/friends/${id}`)
      .then(res =>
        setValues({
          ...values,
          name: res.data.name,
          age: res.data.age,
          email: res.data.email
        })
      )
      .catch(() =>
        setValues({ ...values, err: "Sorry, this friend is imaginary. 🤪" })
      );
  }, []);

  const handleChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
      err: null,
      status: null
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    values.name === "" || values.age === "" || values.email === ""
      ? setValues({ ...values, err: "Please complete all fields..." })
      : axiosWithAuth()
          .put(`http://localhost:5000/api/friends/${id}`, {
            name: values.name,
            age: values.age,
            email: values.email
          })
          .then(res =>
            setValues({
              ...values,
              friend: {
                name: values.name,
                age: values.age,
                email: values.email
              },
              err: null,
              status: res.status
            })
          );
  };

  return (
    <div>
      {values && (
        <form className="edit-form">
          <h4>Edit Friend:</h4>
          <input
            type="text"
            name="name"
            placeholder="New name..."
            value={values.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="age"
            placeholder="New age..."
            value={values.age}
            onChange={handleChange}
          />
          <input
            type="text"
            name="email"
            placeholder="New email..."
            value={values.email}
            onChange={handleChange}
          />
          <button onClick={handleSubmit}>Submit Changes!</button>
          {values.err && <div className="err">{values.err}</div>}
          {values.status && (
            <div className="success">{"Yay! All changes were successful!"}</div>
          )}
        </form>
      )}
    </div>
  );
};

export default EditFriend;
