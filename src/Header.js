import styles from "./Header.module.css";
import { Link } from "react-router-dom";
export default function Header({ setSearch }) {
  return (
    <>
      <div className={styles.header}>
        <Link to="/cart">
          <span className={styles.cart}>Favorite movies</span>
        </Link>

        <input
          onChange={(event) => setSearch(event.target.value)}
          className={styles.search_input}
          type="text"
          placeholder="Search movie"
        ></input>
      </div>
    </>
  );
}
