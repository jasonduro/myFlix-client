import React, { useEffect } from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { propTypes } from "prop-types";
import UserInfo from "./user-info";
import FavoriteMovies from "./favorite-movies";
import UpdateUser from "./update-user";

export function ProfileView({ movies, onUpdatedUserInfo }) {
  const [user, setUser] = useState({})

  const favoriteMovieList = movies.filter((movies) => {});

  const getUser = () => {}
  const handleSubmit = (e) => {}
  const removeFav = (id) => {}
  const handleUpdate = (e) => {};

  useEffect(() => {}, [])


  return (
    <Container>
      <Row>
        <Col xs={12} sm={4}>
          <Card>
            <Card.Body>
            <UserInfo name={user.Username} email={user.Email} />
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
