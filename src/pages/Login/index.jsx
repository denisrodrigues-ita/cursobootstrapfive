import React from "react";
import { Link } from "react-router-dom";
import IconSign from "../../img/sign_in.svg";
import "./login.css";

const Login = () => {
  return (
    <div className="login container coll-11 col-md-9" id="form-container">
      <div className="login row align-items-center gx-5">
        <div className="login col-md-6 order-md-2">
          <h2>Faça login para continuar</h2>
          <form>
            <div className="login form-floating mb-3">
              <input
                type="email"
                className="login form-control"
                id="email"
                name="email"
                placeholder="Digite seu email"
              />
              <label htmlFor="email" className="login form-label">
                Email
              </label>
            </div>
            <div className="login form-floating mb-3">
              <input
                type="password"
                className="login form-control"
                id="password"
                name="password"
                placeholder="Digite sea senha"
              />
              <label htmlFor="password" className="login form-label">
                Senha
              </label>
            </div>
            <button type="submit" className="login btn">
              Entrar
            </button>
          </form>
        </div>
        <div className="login col-md-6 order-md-1">
          <div className="login col-12">
            <img src={IconSign} alt="Entrar no sistema" className="login img-fluid" />
          </div>
          <div className="login col-12" id="link-container">
            <Link to="/cadastro">Cadastre-se</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
