import Button from "react-bootstrap/Button";

export const MovieView = ({ movies, onBackClick }) => {
  return (
    <div>
      <div>
        <img src={movies.ImagePath} alt="movie poster" />
      </div>
      <div>
        <span>Title: </span>
        <span>{movies.Title}</span>
      </div>
      <div>
        <span>Description: </span>
        <span>{movies.Description}</span>
      </div>
      <div>
        <span>Director: </span>
        <span>{movies.Director.Name}</span>
      </div>
      <div>
        <span>Genre: </span>
        <span>{movies.Genre.Name}</span>
      </div>
      <Button variant="primary" onClick={onBackClick}>Back</Button>
    </div>
  );
};
