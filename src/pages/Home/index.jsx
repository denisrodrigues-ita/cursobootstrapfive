import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <header className="container-fluid text-light bg-dark">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <Link className="navbar-brand" to="/">
          Curso Bootstrap
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/bicons">
                Icons
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/art">
                Art
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/elementos">
                Elementos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/formularios">
                Formularios
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/validacoes">
                Validações
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/accordion">
                Accordion
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Home;
