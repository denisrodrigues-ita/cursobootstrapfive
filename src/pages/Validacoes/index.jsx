import React from "react";

document.title = "Validações";

const Validacoes = () => {
  const [validated, setValidated] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className="container">
      <div className="row justify-content-center m-4">
        <div className="col-md-8 col-sm-12">
          <h2>Faça login para continuar:</h2>
          <form
            className={`row ${validated ? "was-validated" : ""}`}
            noValidate
            onSubmit={handleSubmit}
          >
            <div className="col-12 mb-4">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Digite seu email"
                required
              />
              <div className="invalid-feedback">
                Por favor, insira um email válido.
              </div>
              <div className="valid-feedback">Email válido.</div>
            </div>
            <div className="col-12 mb-4">
              <label htmlFor="senha" className="form-label">
                Senha:
              </label>
              <input
                minLength={5}
                type="password"
                className="form-control"
                id="senha"
                placeholder="Digite sua senha"
                required
              />
              <div className="invalid-feedback">
                Por favor, insira uma senha.
              </div>
              <div className="valid-feedback"></div>
            </div>
            <button className="btn col-4 m-auto" type="submit">
              Entrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Validacoes;
