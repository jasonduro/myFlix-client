import { useParams } from "react-router";
import { Link } from "react-router-dom";

export const MovieView = ({ movies }) => {
  const { movieId } = useParams();

  const movie = movies.find((b) => b.id === movieId);
  
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
        <button className="back-button">Back</button>
      </Link>
    </div>
  );
};
