import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieTrailer from "./MovieTrailer";

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/popular?api_key=42149ab0dab19ebd5&language=en-US"
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", padding: "20px" }}>
      {movies.map((movie) => (
        <div key={movie.id} style={{ width: "250px", textAlign: "center" }}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            style={{ width: "100%", borderRadius: "10px" }}
          />
          <h3>{movie.title}</h3>
          <p>Release Date: {movie.release_date}</p>
          <MovieTrailer movieId={movie.id} />
        </div>
      ))}
    </div>
  );
}

export default MovieList;
