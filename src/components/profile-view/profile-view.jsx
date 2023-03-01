import { Link } from "react-router-dom";

export const ProfileView = ({ users }) => {
  
  return (
    <div>
      <div>
        <span>Username: </span>
        <span>{users.Username}</span>
      </div>
      <div>
        <span>Email: </span>
        <span>{users.Email}</span>
      </div>
      <div>
        <span>Password: </span>
        <span>{users.Password}</span>
      </div>
      <div>
        <span>Birthday: </span>
        <span>{users.Birthday}</span>
      </div>
      <Link to={`/`}>
        <button className="back-button">Back</button>
      </Link>
    </div>
  );
};
