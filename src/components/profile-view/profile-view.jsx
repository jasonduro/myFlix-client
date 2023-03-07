import React from "react";
import Link from "react-router-dom";
import { useParams } from "react-router";

export const ProfileView = ({ user }) => {
/*   let { userId } = useParams();
  const user = users.find((u) => u.Username === userId); */

  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");  
  const [user, setUser] = useState(storedUser ? storedUser : null);
  const [token, setToken] = useState(storedToken ? storedToken : null);
/* 
  useEffect(() => {
    if (!token) return;

    fetch("https://myflix-app-jl.herokuapp.com/users", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((response) => response.json())
      .then((users) => { 

      setUsers(user);
  });
  }, [token]); */

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