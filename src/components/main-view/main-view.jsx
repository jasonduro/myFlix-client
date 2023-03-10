import { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import ProfileView from "../profile-view/profile-view";
import { NavigationBar } from "../navigation-bar/navigation-bar";


export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const storedUsername = localStorage.getItem("username");
  const [username, setUsername] = useState(storedUsername ? storedUsername : null);
  const [token, setToken] = useState(storedToken ? storedToken : null);
  const [movies, setMovies] = useState([]);
  const [user, setUser] = useState(storedUser ? storedUser : null);

  useEffect(() => {
    if (!token) return;

    fetch("https://myflix-app-jl.herokuapp.com/movies", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((response) => response.json())
      .then((movies) => { 

      setMovies(movies);
  });
  }, [token]);

  return (
    <BrowserRouter>
      <NavigationBar
        user={user}
        onLoggedOut={() => {
        setUser(null);
        setToken(null);
        localStorage.clear();
        }}
      />
    <Row className="justify-content-md-center">
        <Routes>
          <Route
          path="/signup"
          element={
            <>
              {user ? (
                <Navigate to="/" />
              ) : ( 
                <Col md={5}>
                  <SignupView />
                </Col>
              )}
            </>
          }
        /> 
        
        <Route
          path="/login"
          element={
            <>
              {user ? (
                <Navigate to="/" />
              ) : (
                <Col md={5}>
                  <LoginView onLoggedIn={(user, token) => {
                    setUser(user);
                    setToken(token); 
                  }} />
                </Col>
              )}
            </>
          }
        />
        
        <Route
          path="/movies/:movieId"
          element={
            <>
              {!user ? (
                <Navigate to="/login" replace />
              ) : movies.length === 0 ? (
                <Col>The list is empty!</Col>
              ) : (
                <Col md={8}>
                  <MovieView movies={movies} />
                </Col>
              )}
            </>
          }
        />
        
        <Route
          path="/"
          element={
            <>
              {!user ? (
                <Navigate to="/login" replace />
              ) : movies.length === 0 ? (
                <Col>The list is empty!</Col>
              ) : (
                <>
                  {movies.map((movie) => (
                    <Col className="mb-4" key={movies._id} 
                    xs={12} sm={6} md={4} lg={3}>
                      <MovieCard movies={movie} />
                    </Col>
                  ))}
                </>
              )}
            </>
          }
        />

        <Route
          path="/profile"
          element={
            <>
              {!user ? (
                <Navigate to="/login" replace />
              ) : (
                <Col md={5}>
                  <ProfileView 
                    user={user}
                    token={token}
                  />
                  {console.log(user)}
                </Col>
              )}
            </>
          }
        />

      </Routes>
    </Row>
  </BrowserRouter>
  );
};





