import React from "react";
import Link from "react-router-dom";
import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Button, Card, Row, Col, Container, Form } from "react-bootstrap";
import PropTypes from "prop-types";
import axios from "axios";
import UserInfo from "./user-info";
import UpdateUser from "./update-user";
import "./profile-view.scss";

class ProfileView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			Username: null,
			Password: null,
			Email: null,
			Birthday: null,
			FavoriteMovies: [],
		};
	}

	componentDidMount() {
		const accessToken = localStorage.getItem("token");
		this.getUser(accessToken);
	}

	onRemoveFavorite = (e, movie) => {
		const username = localStorage.getItem("user");
		console.log(username);
		const token = localStorage.getItem("token");
		console.log(this.props);
		axios
			.delete(
				"https://myflix-app-jl.herokuapp.com/users/${Username}/movies/${movie._id}",
				{ headers: { Authorization: `Bearer ${token}` } }
			)
			.then((response) => {
				console.log(response);
				alert("Movie was removed from favorites.");
				this.componentDidMount();
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	onLoggedOut() {
		localStorage.removeItem("token");
		localStorage.removeItem("user");
		this.setState({ user: null });
		window.open("/", "_self");
	}

	getUser = (token) => {
		const Username = localStorage.getItem("user");

		axios
			.get("https://myflix-app-jl.herokuapp.com/users/${Username}", {
				headers: { Authorization: `Bearer ${token}` },
			})
			.then((response) => {
				this.setState({
					Username: response.data.Username,
					Password: response.data.Password,
					Email: response.data.Email,
					Birthday: response.data.Birthday,
					FavoriteMovies: response.data.FavoriteMovies,
				});
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	editUser = (e) => {
		e.preventDefault();
		const Username = localStorage.getItem("user");
		const token = localStorage.getItem("token");
		axios
			.put(
				"https://myflix-app-jl.herokuapp.com/users/${Username}",
				{
					Username: this.state.Username,
					Password: this.state.Password,
					Email: this.state.Email,
					Birthday: this.state.Birthday,
				},
				{ headers: { Authorization: `Bearer ${token}` } }
			)
			.then((response) => {
				this.setState({
					Username: response.data.Username,
					Password: response.data.Password,
					Email: response.data.Email,
					Birthday: response.data.Birthday,
				});

				localStorage.setItem("user", this.state.Username);
				const data = response.data;
				console.log(data);
				console.log(this.state.Username);
				alert("Profile is updated!");
				window.open("/users/${Username}", "_self");
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	onDeleteUser() {
		const Username = localStorage.getItem("user");
		const token = localStorage.getItem("token");

		axios
			.delete("https://myflix-app-jl.herokuapp.com/users/${Username}", {
				headers: { Authorization: `Bearer ${token}` },
			})

			.then((response) => {
				console.log(response);
				alert("Profile has been deleted!");
				localStorage.removeItem("user");
				localStorage.removeItem("token");
				window.open("/", "_self");
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	setUsername(value) {
		this.setState({ Username: value });
		this.Username = value;
	}
	setPassword(value) {
		this.setState({ Password: value });
		this.Password = value;
	}

	setEmail(value) {
		this.setState({
			Email: value,
		});
		this.Email = value;
	}

	setBirthday(value) {
		this.setState({ Birthday: value });
		this.Birthday = value;
	}

	render() {
		const { movies } = this.props;
		const { FavoriteMovies, Username, Email, Birthday, Password } = this.state;
		return (
			<Container>
				<Col>
					<Card className='user-profile'>
						<Card.Header>Your Profile</Card.Header>
						<Card.Body>
							<UserInfo
								Username={this.Username}
								Email={this.Email}
								Birthday={this.Birthday}
							/>
						</Card.Body>
					</Card>
				</Col>

				<Row>
					<Col>
						<Card className='update-inputs'>
							<Card.Header>Update Profile</Card.Header>
							<Card.Body>
								<Card.Text>
									<UpdateUser
										editUser={this.editUser}
										setUsername={this.setUsername}
										setPassword={this.setPassword}
										setEmail={this.setEmail}
										setBirthday={this.setBirthday}
									/>
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				</Row>

				<Row></Row>
				<Card className='favmov-inputs'>
					<Card.Body>
						<Row>
							<Col xs={12}>
								<h4>Favorite Movies</h4>
							</Col>
						</Row>

						<Row>
							{FavoriteMovies.map((ImagePath, Title, _id) => (
								<>
									<Col key={_id} className='fav-movie'>
										<Figure>
											<Link to={`/movies/${movie._id}`}>
												<Figure.Image src={ImagePath} alt={Title} />
												<Figure.Caption>{Title}</Figure.Caption>
											</Link>
										</Figure>
										<Button
											className='remove'
											variant='secondary'
											onClick={() => removeFav(movie._id)}
										>
											Remove from the list
										</Button>
									</Col>
								</>
							))}
						</Row>
					</Card.Body>
				</Card>
			</Container>
		);
	}
}
export default ProfileView;
