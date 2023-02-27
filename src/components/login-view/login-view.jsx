import React from "react";

export const LoginView = ({ onLoggedIn }) => {
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
    }).then((response) => {
      if (response.ok) {
        onLoggedIn(username);
      } else {
        alert("Login totally failed");
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input 
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        />
      </label>
      <label>
        Password:
        <input 
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};