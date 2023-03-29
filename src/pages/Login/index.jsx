import React from "react";
import { Link } from "react-router-dom";
import IconSign from "../../img/sign_in.svg";
import "./login.css";

const Login = () => {
  return (
    <div className="container coll-11 col-md-9" id="form-container">
      <div className="row align-items-center gx-5">
        <div className="col-md-6 order-md-2">
          <h2>Faça login para continuar</h2>
          <form>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Digite seu email"
              />
              <label htmlFor="email" className="form-label">
                Email
              </label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Digite sea senha"
              />
              <label htmlFor="password" className="form-label">
                Senha
              </label>
            </div>
            <button type="submit" className="btn">
              Entrar
            </button>
          </form>
        </div>
        <div className="col-md-6 order-md-1">
          <div className="col-12">
            <img src={IconSign} alt="Entrar no sistema" className="img-fluid" />
          </div>
          <div className="col-12" id="link-container">
            <Link to="/cadastro">Cadastre-se</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
