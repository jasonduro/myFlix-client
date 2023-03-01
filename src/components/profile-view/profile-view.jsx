import React, { useEffect } from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { propTypes } from "prop-types";
import UserInfo from "./user-info";
import FavoriteMovies from "./favorite-movies";
import UpdateUser from "./update-user";

export const ProfileView = ({ movies, users }) => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const favoriteMovieList = movies.filter((movies) => {});

  //I don't know what code to put in here below: 
  const getUser = (token) => {}
  const handleSubmit = (e) => {}
  const removeFav = (id) => {}
  const handleUpdate = (e) => {}; 

  useEffect(() => {
    if (!token) return;

    fetch("https://myflix-app-jl.herokuapp.com/users", {
      headers: { Authorization: `Bearer ${token}` }
    })
  }, []);


  return (
    <Container>
      <Row>
        <Col xs={12} sm={4}>
          <Card>
            <Card.Body>
            <UserInfo name={users.Username} email={users.Email} />
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={8}>
          <Card>
            <Card.Body>
            <UpdateUser handleSubmit={ handleSubmit } handleUpdate={ handleUpdate } />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <FavoriteMovies favoriteMovieList={favoriteMovieList}/>

    </Container>
  );
  }
