import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <header className="container-fluid text-light bg-dark">
      <nav class="navbar navbar-expand-lg navbar-dark">
        <Link class="navbar-brand" to="/">
          Curso Bootstrap
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link" to="/bicons">
                Icons
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/art">
                Art
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/elementos">
                Elementos
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Home;
