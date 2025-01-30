import { useEffect, useState } from "react";

function Anime() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/trending/all/day?api_key=4219e299c89411838049ab0dab19ebd5&language=en-US"
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("API Response:", data);
      setMovies(data.results);
      localStorage.setItem("cachedMovies", JSON.stringify(data.results)); // Cache data
      setError(null);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to fetch data. Showing cached data.");
      const cachedMovies = JSON.parse(localStorage.getItem("cachedMovies") || "[]");
      setMovies(cachedMovies); // Use cached data if available
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Anime Section</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title || movie.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Anime;