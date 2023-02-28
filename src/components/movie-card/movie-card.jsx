import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";

import "./movie-card.scss";

export const MovieCard = ({ movies, onMovieClick }) => {
  return (
    <Card className="h-100" onClick={() => {onMovieClick(movies); }}>
      <Card.Img variant="top" src={movies.ImagePath} />
      <Card.Body>
        <Card.Title>{movies.Title}</Card.Title>
        <Card.Text>{movies.Description}</Card.Text>
        <Button onClick={() => onMovieClick(movies)} variant="link">
          details
        </Button>
      </Card.Body>
    </Card>
  );
};

MovieCard.propTypes = {
  movies: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired,
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired
}; 

