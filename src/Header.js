import styles from "./Header.module.css";
import { Link } from "react-router-dom";
export default function Header({ setSearch }) {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.headerFavorite}>
          <Link to="/">Go to main</Link>
          <Link to="/favorites">
            <span className={styles.cart}>Favorite movies</span>
          </Link>
        </div>
        <div>
          <input
            onChange={(event) => setSearch(event.target.value.toLowerCase())}
            className={styles.search_input}
            type="text"
            placeholder="Search movie"
          ></input>
        </div>
      </div>
    </>
  );
}
