import { useEffect, useState } from "react";
import styles from "./Main.module.css";

import MovieCard from "./MovieCard";
function Main({ search, favorites, setFavorites }) {
  const [films, setFilms] = useState([]);
  // const [genres, setGenres] = useState([]);

  useEffect(() => {
    const apiKey = "784670b75891833569bbe2ab5bd3808c";
    fetch(
      `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`
    )
      .then((response) => response.json())
      .then((movieInfo) => setFilms(movieInfo.results));
  }, []);
  return (
    <div className={styles.flex}>
      {films
        .filter((film) => film.title.toLowerCase().includes(search))
        .map((film) => (
          <MovieCard
            film={film}
            favorites={favorites}
            setFavorites={setFavorites}
          />
        ))}
    </div>
  );
}

export default Main;
