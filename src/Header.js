import styles from "./Header.module.css";

export default function Header() {
  return (
    <>
      <div className={styles.header}>
        <span className={styles.cart}>Favorite movies</span>

        <input
          className={styles.search_input}
          type="text"
          placeholder="Search movie"
        ></input>
      </div>
    </>
  );
}
