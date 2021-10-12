import { useEffect, useState } from "react";
import styles from "./Main.module.css";
function Main() {
  const [films, setFilms] = useState([]);
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    const apiKey =
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=784670b75891833569bbe2ab5bd3808c";
    fetch(apiKey)
      .then((response) => response.json())
      .then((movieInfo) => setFilms(movieInfo.results));
  }, []);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=784670b75891833569bbe2ab5bd3808c"
    )
      .then((response) => response.json())
      .then((genre) => setGenres(genre.genres));
  }, []);
  return (
    <div className={styles.flex}>
      {films.map((film) => (
        <div className={styles.box_padd} key={film.id}>
          <img
            src={`https://image.tmdb.org/t/p/w154/${film.poster_path}`}
            width="220"
            height="70%"
          />
          <h2>{film.original_title}</h2>

          <p>
            {genres.map((genre, film) => {
              {
                <span>{genre.name}</span>;
              }
            })}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Main;
