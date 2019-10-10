import React from "react";

const Home = () => {
  return (
    <>
      <h1 className="home-header">Wecome to the Friends App!</h1>
      <h3 style={{ textDecoration: "underline" }}>Login Credentials:</h3>
      <p>
        <strong>username:</strong> Lambda School
      </p>
      <p>
        <strong>password:</strong>
        {" i<3Lambd4"}
      </p>
    </>
  );
};

export default Home;
