import React, { useEffect, useState } from "react";
import axios from "axios";

function MovieTrailer({ movieId }) {
  const [trailer, setTrailer] = useState(null);

  useEffect(() => {
    const fetchTrailer = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=42149ab0dab19ebd5&language=en-US`
        );

        const officialTrailer = response.data.results.find(
          (video) => video.type === "Trailer" && video.site === "YouTube"
        );

        if (officialTrailer) {
          setTrailer(`https://www.youtube.com/embed/${officialTrailer.key}`);
        }
      } catch (error) {
        console.error("Error fetching trailer:", error);
      }
    };

    fetchTrailer();
  }, [movieId]);

  return (
    <div>
      {trailer ? (
        <iframe
          width="100%"
          height="300"
          src={trailer}
          title="Movie Trailer"
          allowFullScreen
        ></iframe>
      ) : (
        <p>No trailer available</p>
      )}
    </div>
  );
}

export default MovieTrailer;
