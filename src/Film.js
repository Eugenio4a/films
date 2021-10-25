import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Film.module.css";
function Film() {
  const [film, setFilm] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const apiKey = `784670b75891833569bbe2ab5bd3808c`;
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
      .then((response) => response.json())
      .then((oneMovieInfo) => setFilm(oneMovieInfo));
  }, [id]);
  return (
    <>
      <div className={styles.film_box}>
        <div className={styles.film_box_poster}>
          <img
            src={`https://image.tmdb.org/t/p/w154/${film.poster_path}`}
            width="250"
            alt="film poster"
          />
        </div>
        <div className={styles.film_box_description}>
          <h2>{film.title}</h2>
          <p>{film.overview}</p>
          <p>Release: {film.release_date}</p>
          <p>Budget: {film.budget} $</p>

          <Link to="/">
            <button>Go home</button>
          </Link>
        </div>
      </div>
    </>
  );
}
export default Film;
