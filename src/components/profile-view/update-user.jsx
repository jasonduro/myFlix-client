import React from "react";
import { Form, Button } from "react-bootstrap";

function UpdateUser({
	editUser,
	setUsername,
	setPassword,
	setEmail,
	setBirthday,
	onDeleteUser,
}) {
	return (
		<Form
			className='update-form'
			onSubmit={(e) =>
				this.editUser(
					e,
					this.Username,
					this.Password,
					this.Email,
					this.Birthday
				)
			}
		>
			<Form.Group>
				<Form.Label>Username</Form.Label>
				<Form.Control
					type='text'
					name='Username'
					placeholder='New Username'
					onChange={(e) => this.setUsername(e.target.value)}
					required
				/>
			</Form.Group>

			<Form.Group>
				<Form.Label>Password</Form.Label>
				<Form.Control
					type='password'
					name='Password'
					placeholder='New Password'
					onChange={(e) => this.setPassword(e.target.value)}
					required
				/>
			</Form.Group>

			<Form.Group>
				<Form.Label>Email</Form.Label>
				<Form.Control
					type='email'
					name='Email'
					placeholder='New Email'
					onChange={(e) => this.setEmail(e.target.value)}
					required
				/>
			</Form.Group>

			<Form.Group>
				<Form.Label>Birthday</Form.Label>
				<Form.Control
					type='date'
					name='Birthday'
					onChange={(e) => this.setBirthday(e.target.value)}
				/>
			</Form.Group>

			<Form.Group>
				<Button variant='warning' type='submit' onClick={() => this.editUser()}>
					Update User
				</Button>
				<Button
					className='delete-button'
					variant='danger'
					onClick={() => this.onDeleteUser()}
				>
					Delete User
				</Button>
			</Form.Group>
		</Form>
	);
}

export default UpdateUser;
