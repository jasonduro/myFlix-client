import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Interstellar",
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt0816692%2F&psig=AOvVaw0ebheitXJHdRJuL8PoM8HY&ust=1677158733160000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNio-Kadqf0CFQAAAAAdAAAAABAD",
      director: "Christopher Nolan"
    },
    {
      id: 2,
      title: "The Dark Knight",
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt0468569%2F&psig=AOvVaw2rEvYnOUX0yNs2qUdmpaUW&ust=1677158951875000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJCWlZ-eqf0CFQAAAAAdAAAAABAD",
      director: "Christopher Nolan"
    },
    {
      id: 3,
      title: "Inception",
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt1375666%2F&psig=AOvVaw0Xg_jV6d7gzbIZpDb7xWbQ&ust=1677159062753000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOjRy8Seqf0CFQAAAAAdAAAAABAD",
      director: "Christopher Nolan"
    }
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  if (selectedMovie) {
    return (
      <MovieView Movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
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
