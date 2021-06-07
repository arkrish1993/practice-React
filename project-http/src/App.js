import React, { useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = React.useCallback(() => {
    setIsLoading(true);
    fetch("https://swapi.dev/api/films/")
      .then((response) => {
        if (!response.ok) {
          setIsLoading(false);
          throw Error("Something went wrong!");
        }
        return response.json();
      })
      .then((data) => {
        const transformedMovies = data.results.map((movie) => {
          return {
            id: movie.episode_id,
            title: movie.title,
            openingText: movie.opening_crawl,
            releaseDate: movie.release_date,
          };
        });
        setMovies(transformedMovies);
        setIsLoading(false);
      })
      .catch((error) => setError(error.message));
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  let content;

  content =
    movies.length > 0 ? (
      <MoviesList movies={movies} />
    ) : (
      <p>No movies found.</p>
    );
  if (error) content = <p>{error}</p>;
  if (isLoading) content = <p>Loading...</p>;

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
