import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Interstellar",
      description: "Matt fights the 4th dimension", 
      genre: "Science Fiction", 
      image:
        "https://www.euromax-cinemas.de/images/Breite_400px_RGB/p_20303.jpg",
      director: "Christopher Nolan"
    },
    {
      id: 2,
      title: "The Dark Knight",
      description: "Batman fights Joker", 
      genre: "Science Fiction", 
      image:
        "https://m.media-amazon.com/images/S/pv-target-images/dc46567834074e00d648c6d819bc8fd68b166554b3e919d53683d03f02dc1e6f._SX780_SY600_.jpg",
      director: "Christopher Nolan"
    },
    {
      id: 3,
      title: "Inception",
      description: "Leo fights dreams", 
      genre: "Science Fiction", 
      image:
        "https://img.fruugo.com/product/8/14/14592148_max.jpg",
      director: "Christopher Nolan"
    }
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  if (selectedMovie) {
    return (
      <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
    </div>
  );
};
