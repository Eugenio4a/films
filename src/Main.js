import { useEffect, useState } from "react";
import styles from "./Main.module.css";
import { Link } from "react-router-dom";
function Main({ search, favorites, setFavorites }) {
  const [films, setFilms] = useState([]);
  // const [genres, setGenres] = useState([]);

  useEffect(() => {
    const apiKey =
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=784670b75891833569bbe2ab5bd3808c";
    fetch(apiKey)
      .then((response) => response.json())
      .then((movieInfo) => setFilms(movieInfo.results));
  }, []);
  return (
    <div className={styles.flex}>
      {films
        .filter((film) => film.title.toLowerCase().includes(search))
        .map((film) => {
          const isFavorite = Boolean(
            favorites.find((favoriteFilm) => favoriteFilm.id === film.id)
          );
          function addAndDeleteBtn(film) {
            if (!isFavorite) {
              setFavorites([...favorites, film]);

              return setFavorites([...favorites, film]);
            }
            setFavorites(
              favorites.filter((favoriteFilm) => favoriteFilm.id !== film.id)
            );
          }

          return (
            <div className={styles.box_padd} key={film.id}>
              <Link to={`/film/${film.id}`}>
                <img
                  className={styles.image_full}
                  src={`https://image.tmdb.org/t/p/w154/${film.poster_path}`}
                  width="220"
                  height="70%"
                />
              </Link>
              <h2>
                {film.title.length > 15
                  ? `${film.title.slice(0, 15)} ...`
                  : `${film.title}`}
              </h2>
              <p>Release: {film.release_date}</p>

              <button
                className={styles.btn}
                style={
                  !isFavorite
                    ? { backgroundColor: "#c9ffcd" }
                    : {
                        backgroundColor: "#c9ffcd",
                        color: "red",
                      }
                }
                onClick={() => addAndDeleteBtn(film)}
              >
                {!isFavorite ? "Add to favorites" : "Remove from favorites"}
              </button>
            </div>
          );
        })}
    </div>
  );
}

export default Main;
