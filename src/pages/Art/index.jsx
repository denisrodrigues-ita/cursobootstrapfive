import React from "react";
import logo from "../../img/art_logo.svg";
import "../../css/art.css";

const Art = () => {
  return (
    <>
      <div className="container-fluid">
        <header id="header" className="row">
          <div id="logo-container">
            <img id="logo" src={logo} alt="Art" />
            <h1>Art</h1>
          </div>
          <p>Exibições de arte urbana</p>
        </header>
        <nav id="navbar" className="container">
          <div className="row justify-content-center">
            <a href="#">Home</a>
            <a href="#">Projetos</a>
            <a href="#">Artistas</a>
            <a href="#">Contato</a>
          </div>
        </nav>
      </div>
      <div className="container" id="main-image-container">
        <div className="main-image center-image">
          <div className="main-image-info">
            <h2>Arte no muro de Davi</h2>
            <p className="secondary-color">Realizada em 20/05/2021</p>
            <a className="btn" href="#">
              Detalhes
            </a>
          </div>
        </div>
      </div>
      <div className="container" id="gallery-container">
        <div className="col-12">
          <h1>Artes em destaque</h1>
        </div>
        <div className="row gx-md-5">
          <div className="col-xs-12 col-md-6">
            <div
              className="small-image-container center-image"
              id="img-2"
            ></div>
            <h3>Obra de Arthur</h3>
            <p className="secondary-color">Realizada em: 26/01/2018</p>
            <a className="btn" href="#">
              Detalhes
            </a>
          </div>
          <div className="col-xs-12 col-md-6">
            <div
              className="small-image-container center-image"
              id="img-3"
            ></div>
            <h3>Grafite da Av. Paulista</h3>
            <p className="secondary-color">Realizada em: 14/06/2021</p>
            <a className="btn" href="#">
              Detalhes
            </a>
          </div>
          <div className="col-xs-12 col-md-6">
            <div
              className="small-image-container center-image"
              id="img-4"
            ></div>
            <h3>Arte em conjunto do Metrô</h3>
            <p className="secondary-color">Realizada em: 19/01/2018</p>
            <a className="btn" href="#">
              Detalhes
            </a>
          </div>
          <div className="col-xs-12 col-md-6">
            <div
              className="small-image-container center-image"
              id="img-5"
            ></div>
            <h3>Obra de Paulo</h3>
            <p className="secondary-color">Realizada em: 12/12/2015</p>
            <a className="btn" href="#">
              Detalhes
            </a>
          </div>
          <div className="col-xs-12 col-md-6">
            <div
              className="small-image-container center-image"
              id="img-6"
            ></div>
            <h3>Grafite no centro da cidade</h3>
            <p className="secondary-color">Realizada em: 13/02/2012</p>
            <a className="btn" href="#">
              Detalhes
            </a>
          </div>
        </div>
        <footer className="container">
          <p className="secondary-color">Nos encontre nas redes sociais:</p>
          <div className="row justify-content-center" id="social-icons-container">
            <div className="col-1">
              <a href="#">
                <i className="bi bi-facebook secondary-color"></i>
              </a>
            </div>
            <div className="col-1">
              <a href="#">
                <i className="bi bi-instagram secondary-color"></i>
              </a>
            </div>
            <div className="col-1">
              <a href="#">
                <i className="bi bi-twitter secondary-color"></i>
              </a>
            </div>
          </div>
          <p className="secondary-color">Art &copy; 2021</p>
        </footer>
      </div>
    </>
  );
};

export default Art;
