import React from "react";
import { Link } from "react-router-dom";
import styles from "./Main.module.css";
export default function MovieCard({ film, favorites, setFavorites }) {
  const isFavorite = Boolean(
    favorites.find((favoriteFilm) => favoriteFilm.id === film.id)
  );
  function addAndDeleteBtn(film) {
    if (!isFavorite) {
      let favoritesAdded = [...favorites, film];
      localStorage.setItem("movies", JSON.stringify(favoritesAdded));
      setFavorites(favoritesAdded);
      return;
    }
    let favoritesAdded = favorites.filter(
      (favoriteFilm) => favoriteFilm.id !== film.id
    );
    localStorage.setItem("movies", JSON.stringify(favoritesAdded));
    setFavorites(favoritesAdded);
  }

  return (
    <div className={styles.box_padd} key={film.id}>
      <Link to={`/film/${film.id}`}>
        <img
          className={styles.image_full}
          src={`https://image.tmdb.org/t/p/w154/${film.poster_path}`}
          width="220"
          height="70%"
          alt="film poster"
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
}
