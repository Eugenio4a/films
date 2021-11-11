export default function favoriteFilms({ favorites, setFavorites }) {
  function deleteFilm(filmToDelete) {
    const newArrFilms = favorites.filter((film) => film.id !== filmToDelete.id);
    setFavorites(newArrFilms);
  }

  return (
    <>
      <div style={{ display: "flex" }}>
        {favorites.map((film) => {
          return (
            <>
              <div
                key={film.id}
                style={{ padding: "10px", maxWidth: "200px", height: "100%" }}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w154/${film.poster_path}`}
                  alt="Poster"
                />
                <h4>
                  {film.title.length > 15
                    ? `${film.title.slice(0, 15)} ...`
                    : `${film.title}`}
                </h4>
                <button onClick={() => deleteFilm(film)}>Detete</button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
