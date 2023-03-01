import React from "react";

function UserInfo({ email, name }) {
  return(
    <>
    <h4>Your info</h4>
      <p>Username: {name}</p>
      <p>Email: {email}</p>   
    </>
  )
}


export default UserInfo