import React from "react";
import IconHello from "../../img/hello.svg";

const Cadastro = () => {
  return (
    <div className="container col-11 col-md-9" id="form-container">
      <div className="row gx-5">
        <div className="col-md-6">
          <h2>Realize seu cadastro</h2>
          <form>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
              />
              <label htmlFor="name" className="form-label">
                Digite seu nome
              </label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="lastname"
                name="lastname"
              />
              <label htmlFor="lastname" className="form-label">
                Digite seu sobrenome
              </label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="email"
                name="email"
              />
              <label htmlFor="email" className="form-label">
                Digite seu email
              </label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="senha"
                name="senha"
              />
              <label htmlFor="senha" className="form-label">
                Digite sua senha
              </label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="confimesenha"
                name="confimesenha"
              />
              <label htmlFor="confimesenha" className="form-label">
                confirme sua senha
              </label>
            </div>
            <div className="mb-3">
              <div className="form-check mb-2">
                <input
                  type="checkbox"
                  className="form-check-input"
                  value="agree-form"
                  id="agree-form"
                />
                <label className="form-check-label" htmlFor="agree-form">
                  Concordo com os termos de uso
                </label>
              </div>
            </div>
            <div className="mb-3">
              <div className="form-check mb-2">
                <input
                  type="checkbox"
                  className="form-check-input"
                  value="newsletter"
                  id="newsletter"
                />
                <label className="form-check-label" htmlFor="newsletter">
                  Desejo receber novidades
                </label>
              </div>
            </div>
            <div>
              <button type="submit" className="btn btn-primary">
                Cadastrar
              </button>
            </div>
          </form>
        </div>
        <div className="col-md-6">
          <div className="row align-items-center">
            <div className="col-12">
              <img
                src={IconHello}
                alt="tela de registro"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
