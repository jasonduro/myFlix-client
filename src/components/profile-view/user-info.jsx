import React from "react";

function UserInfo({ Username, Email, Birthday }) {
	return (
		<>
			<p>Username: {Username}</p>
			<p>Email: {Email}</p>
			<p>Birthday: {Birthday}</p>
		</>
	);
}

export default UserInfo;
