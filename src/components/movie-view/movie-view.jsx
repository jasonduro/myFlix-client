import { useParams } from "react-router";
import { Link, Redirect } from "react-router-dom";
import Button from "react-bootstrap/Button";

export const MovieView = ({ movies }) => {
  const { movieId } = useParams();

  const movie = movies.find((m) => m.id === movieId);

  {console.log(movies)}

  if (!movie) {
    // movie not found, redirect to homepage
    return <Redirect to="/" />;
  }

  //display individual movie info
  return (
    <div>
      <div>
        <img className="w-100" src={movie.ImagePath} alt="movie poster" />
      </div>
      <div>
        <span>Title: </span>
        <span>{movie.Title}</span>
      </div>
      <div>
        <span>Description: </span>
        <span>{movie.Description}</span>
      </div>
        <div>
        <span>Director: </span>
        <span>{movie.Director.Name}</span>
      </div>
      <div>
        <span>Genre: </span>
        <span>{movie.Genre.Name}</span>
      </div>  
      <Link to={`/`}>
        <Button className="back-button">Back</Button>
      </Link>
    </div>
  );
};
