import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export const MovieView = ({ movies }) => {
  const { _id } = useParams();

  const movies = movies.find((b) => movies._id === movieId);

  return (
    <div>
      <div>
        <img className="w-100" src={movies.ImagePath} alt="movie poster" />
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
      <Link to={`/`}>
        <Button className="back-button">Back</Button>
      </Link>
    </div>
  );
};
