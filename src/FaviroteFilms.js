import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
export default function Cart({ favorites, setFavorites }) {
  function deleteFilm(filmToDelete) {
    const newArrFilms = favorites.filter((film) => film.id !== filmToDelete.id);
    setFavorites(newArrFilms);
  }
  return (
    <>
      <Link to="/">Go to main</Link>
      <div style={{ display: "flex" }}>
        {favorites.map((film) => {
          return (
            <>
              <div key={film.id} style={{ padding: "10px", maxWidth: "200px" }}>
                <img
                  src={`https://image.tmdb.org/t/p/w154/${film.poster_path}`}
                />
                <h4>{film.title}</h4>
                <button onClick={() => deleteFilm(film)}>
                  Detete from cart
                </button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
