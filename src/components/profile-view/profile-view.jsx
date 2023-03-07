import React from "react";
import Link from "react-router-dom";
import { useParams } from "react-router";

export const ProfileView = ({ users }) => {
  let { userId } = useParams();

  const user = users.find((u) => u.Username === userId);

  if (!user) {
    // user not found, redirect to homepage
    return <Redirect to="/" />;
  }

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