import React from "react";
import logo from "../../img/art_logo.svg";
import "./art.css";

const Art = () => {
  return (
    <>
      <div className="art container-fluid">
        <header id="header" className="art row">
          <div id="logo-container">
            <img id="logo" src={logo} alt="Art" />
            <h1>Art</h1>
          </div>
          <p>Exibições de arte urbana</p>
        </header>
        <nav id="navbar" className="art container">
          <div className="art row justify-content-center">
            <a href="#">Home</a>
            <a href="#">Projetos</a>
            <a href="#">Artistas</a>
            <a href="#">Contato</a>
          </div>
        </nav>
      </div>
      <div className="art container" id="main-image-container">
        <div className="art main-image center-image">
          <div className="art main-image-info">
            <h2>Arte no muro de Davi</h2>
            <p className="art secondary-color">Realizada em 20/05/2021</p>
            <a className="art btn" href="#">
              Detalhes
            </a>
          </div>
        </div>
      </div>
      <div className="art container" id="gallery-container">
        <div className="art col-12">
          <h1>Artes em destaque</h1>
        </div>
        <div className="art row gx-md-5">
          <div className="art col-xs-12 col-md-6">
            <div
              className="art small-image-container center-image"
              id="img-2"
            ></div>
            <h3>Obra de Arthur</h3>
            <p className="art secondary-color">Realizada em: 26/01/2018</p>
            <a className="art btn" href="#">
              Detalhes
            </a>
          </div>
          <div className="art col-xs-12 col-md-6">
            <div
              className="art small-image-container center-image"
              id="img-3"
            ></div>
            <h3>Grafite da Av. Paulista</h3>
            <p className="art secondary-color">Realizada em: 14/06/2021</p>
            <a className="art btn" href="#">
              Detalhes
            </a>
          </div>
          <div className="art col-xs-12 col-md-6">
            <div
              className="art small-image-container center-image"
              id="img-4"
            ></div>
            <h3>Arte em conjunto do Metrô</h3>
            <p className="art secondary-color">Realizada em: 19/01/2018</p>
            <a className="art btn" href="#">
              Detalhes
            </a>
          </div>
          <div className="art col-xs-12 col-md-6">
            <div
              className="art small-image-container center-image"
              id="img-5"
            ></div>
            <h3>Obra de Paulo</h3>
            <p className="art secondary-color">Realizada em: 12/12/2015</p>
            <a className="art btn" href="#">
              Detalhes
            </a>
          </div>
          <div className="art col-xs-12 col-md-6">
            <div
              className="art small-image-container center-image"
              id="img-6"
            ></div>
            <h3>Grafite no centro da cidade</h3>
            <p className="art secondary-color">Realizada em: 13/02/2012</p>
            <a className="art btn" href="#">
              Detalhes
            </a>
          </div>
        </div>
        <footer className="art container">
          <p className="art secondary-color">Nos encontre nas redes sociais:</p>
          <div
            className="art row justify-content-center"
            id="social-icons-container"
          >
            <div className="art col-1">
              <a href="#">
                <i className="art bi bi-facebook secondary-color"></i>
              </a>
            </div>
            <div className="art col-1">
              <a href="#">
                <i className="art bi bi-instagram secondary-color"></i>
              </a>
            </div>
            <div className="art col-1">
              <a href="#">
                <i className="art bi bi-twitter secondary-color"></i>
              </a>
            </div>
          </div>
          <p className="art secondary-color">Art &copy; 2021</p>
        </footer>
      </div>
    </>
  );
};

export default Art;
