import React from "react";

const Home = () => {
  return (
    <>
      <h1 className="home-header">Wecome to Aaron's Friends App!</h1>
      <h2 style={{ textDecoration: "underline" }}>Login Credentials:</h2>
      <h3>
        <strong>username:</strong> Lambda School
      </h3>
      <h3>
        <strong>password:</strong>
        {" i<3Lambd4"}
      </h3>
    </>
  );
};

export default Home;
