import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import { ProfileView } from "../profile-view/profile-view";
import { NavigationBar } from "../navigation-bar/navigation-bar"
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export const MainView = () => { 
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [token, setToken] = useState(null); 
  const [user, setUser] = useState(null);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!token) return;

    fetch("https://myflix-app-jl.herokuapp.com/movies", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((response) => response.json())
      .then((movies) => {
       
          const moviesFromApi = movies.map((movies) => {
          return {
            key: movies._id,
            title: movies.Title,
            image: movies.ImagePath,
            description: movies.Description
          };
        }); 
                
        setMovies(moviesFromApi);
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
                    <LoginView onLoggedIn={(user) => setUser(user)} />
                  </Col>
                )}
              </>
            }
          />

          <Route
            path="/movies/${_id}"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : movies.length === 0 ? (
                  <Col>This is a test</Col>
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
                  <Col>The is a test 2</Col>
                ) : (
                  <>
                    {movies.map((movies) => (
                      <Col className="mb-4" key={_id} md={3}>
                        <MovieCard movies={movies} />
                      </Col>
                    ))}
                  </>
                )}
              </>
            }
          />

        <Route
          path="/profile/:Username"
          element={
            <>
            {!user ? (
              <Navigate to="/login" replace />
            ) : user.length === 0 ? (
              <Col>The is a test 3</Col>
              ) : (
                <>
                  {movies.map((users) => (
                    <Col className="mb-4" key={users._id} md={3}>
                      <ProfileView users={users} />
                    </Col>
                  ))}
                </>
              )}
            </>
          }
        />
              
        </Routes>
      </Row>
    </BrowserRouter>
  );
};