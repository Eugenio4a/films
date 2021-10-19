import { useEffect, useState } from "react";
import styles from "./Main.module.css";
import { Link } from "react-router-dom";
function Main({ search, favorites, setFavorites }) {
  const [films, setFilms] = useState([]);
  // const [genres, setGenres] = useState([]);

  console.log(favorites);
  useEffect(() => {
    const apiKey =
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=784670b75891833569bbe2ab5bd3808c";
    fetch(apiKey)
      .then((response) => response.json())
      .then((movieInfo) => setFilms(movieInfo.results));
  }, []);
  // useEffect(() => {
  //   fetch(
  //     "https://api.themoviedb.org/3/genre/movie/list?api_key=784670b75891833569bbe2ab5bd3808c"
  //   )
  //     .then((response) => response.json())
  //     .then((genre) => setGenres(genre.genres));
  // }, []);
  return (
    <div className={styles.flex}>
      {films.map((film) => (
        <div className={styles.box_padd} key={film.id}>
          <Link to={`/film/${film.id}`}>
            <img
              className={styles.image_full}
              src={`https://image.tmdb.org/t/p/w154/${film.poster_path}`}
              width="220"
              height="70%"
            />
          </Link>
          <h2>{film.title}</h2>
          <p>Release: {film.release_date}</p>

          <button onClick={() => setFavorites([...favorites, film])}>
            Add to favorites
          </button>

          {/* <p>
            {genres.map((genre) => {
              {
                <span>{genre.name}</span>;
              }
            })}
          </p> */}
        </div>
      ))}
    </div>
  );
}

export default Main;
