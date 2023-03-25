import React from "react";
import img from "../../img/g_1.jpg";
import img2 from "../../img/g_2.jpg";

const Elementos = () => {
  return (
    <section className="container">
      <p className="h1">Parágrago heading</p>
      <span className="h3">Meu span heading</span>

      <h1 className="display-1">Chamando atenção</h1>
      <h1 className="display-4">Chamando atenção</h1>

      <p>
        Texto <mark>destacado</mark> pelo bootstrap
      </p>
      <p>
        Texto <span className="mark">destacado</span> pelo bootstrap
      </p>

      <p>
        Texto <del>deletado</del> pelo html
      </p>

      <p>
        Texto <ins>inserido</ins> pelo html
      </p>

      <blockquote className="blockquote">
        <p className="mb-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          posuere erat a ante.
        </p>
        <figcaption className="blockquote-footer">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </figcaption>
      </blockquote>

      <ul className="list-unstyled">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>

      <ul className="list-inline">
        <li className="list-inline-item">Item 1</li>
        <li className="list-inline-item">Item 2</li>
        <li className="list-inline-item">Item 3</li>
      </ul>

      <div className="col-md-4 m-4">
        <img src={img} alt="imagem" className="img-fluid" />
      </div>

      <div className="col-md-4 m-4">
        <img src={img2} alt="imagem" className="img-thumbnail" />
      </div>

      <div className="col-md-4 m-4">
        <figure>
          <img
            src={img}
            alt="imagem"
            className="figure-img img-fluid rounded"
          />
          <figcaption className="figure-caption">
            Grafite da Av. Paulista
          </figcaption>
        </figure>
      </div>

      <div className="col-6">
        <table className="table table-striped table-hover">
          <thead>
            <th itemScope="col">ID</th>
            <th itemScope="col">Nome</th>
            <th itemScope="col">Sobrenome</th>
            <th itemScope="col">Email</th>
          </thead>
          <tbody>
            <tr>
              <td scope="row">1</td>
              <td>John</td>
              <td>Doe</td>
              <td>jhon@gmail.com</td>
            </tr>
            <tr>
              <td scope="row">2</td>
              <td>Pedro</td>
              <td>Matos</td>
              <td>pedro@gmail.com</td>
            </tr>
            <tr>
              <td scope="row">3</td>
              <td>mateus</td>
              <td>jae</td>
              <td>mateus@gmail.com</td>
            </tr>
            <tr>
              <td scope="row">4</td>
              <td>jeff</td>
              <td>betel</td>
              <td>jeff@gmail.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Elementos;
