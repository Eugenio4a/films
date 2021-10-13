import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Main from "./Main";
import Film from "./Film";
import Cart from "./Cart";
import { BrowserRouter as Router, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route>
        <Header />
      </Route>
      <Route path="/main">
        <Main />
      </Route>
      <Route path="/film/:id">
        <Film />
      </Route>
      <Route path="/cart/:id">
        <Cart />
      </Route>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
