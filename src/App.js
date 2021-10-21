import { useEffect, useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Film from "./Film";
import FaviroteFilms from "./FaviroteFilms";
import { BrowserRouter as Router, Route } from "react-router-dom";
export default function App() {
  const [search, setSearch] = useState([]);
  const [favorites, setFavorites] = useState([]);

  return (
    <Router>
      <Header setSearch={setSearch} favorites={favorites} />
      <Route exact path="/">
        <Main
          search={search}
          favorites={favorites}
          setFavorites={setFavorites}
        />
      </Route>
      <Route path="/film/:id">
        <Film />
      </Route>
      <Route path="/favorites">
        <FaviroteFilms favorites={favorites} setFavorites={setFavorites} />
      </Route>
    </Router>
  );
}
