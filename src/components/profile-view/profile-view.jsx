import React from "react";
import Link from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { Redirect } from "react-router-dom";

const ProfileView = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");  
  const [username, setUsername] = useState(storedUser ? storedUser : null);
  const [token, setToken] = useState(storedToken ? storedToken : null);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!token) return;

    fetch(`https://myflix-app-jl.herokuapp.com/users/${username}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((response) => response.json())
      .then((user) => { 

      getUser(username, token);
  });
  }, [token]);

  return (
    <div>
      <div>
        <span>Username: </span>
        <span>{user.Username}</span>
      </div>
      <div>
        <span>Email: </span>
        <span>{user.Email}</span>
      </div>
      <Link to={`/`}>
        <button className="back-button">Back</button>
        </Link>
    </div>
  );
};


export default ProfileView; 