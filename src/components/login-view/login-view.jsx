import React from "react";

export const LoginView = () => {
  const handleSubmit = (event) => {
    // this snippet prevenets the default behavior of the form which is to reload the entire page
    event.preventDefault();

    const data = {
      access: username,
      secret: password
    };

    fetch("https://myflix-app-jl.herokuapp.com/login", {
      method: "POST",
      body: JSON.stringify(data)
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" />
      </label>
      <label>
        Password:
        <input type="password" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};