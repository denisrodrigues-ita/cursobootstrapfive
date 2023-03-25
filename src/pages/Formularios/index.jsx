import React from "react";

const Formularios = () => {
  return (
    <div className="container-fluid">
      <div className="col-4 m-4">
        <h2>Formularios</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="form-label">
              E-mail
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              aria-describedby="emailHelp"
              placeholder="Digite seu e-mail"
            />
            <div id="emailHelp" className="form-text">
              Não compartilhamos seu endereço de email
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="form-label">
              Senha
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Digite sua senha"
            />
          </div>
          <button type="submit" className="btn">
            Cadastrar
          </button>
        </form>
      </div>

      {/* Form disabled */}
      <div className="col-4 m-4">
        <h2>Formularios desabilitados</h2>
        <fieldset disabled>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="form-label">
                E-mail
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                aria-describedby="emailHelp"
                placeholder="Digite seu e-mail"
              />
              <div id="emailHelp" className="form-text">
                Não compartilhamos seu endereço de email
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="form-label">
                Senha
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Digite sua senha"
              />
            </div>
            <button type="submit" className="btn">
              Cadastrar
            </button>
          </form>
        </fieldset>
      </div>

      {/* Form control */}
      <div className="m-4">
        <h2>Crie seu post</h2>

        <form>
          <div className="col-4 mb-4">
            <label htmlFor="title" className="form-label">
              Título do Post:
            </label>
            <input
              type="text"
              className="form-control form-control-sm"
              id="title"
              placeholder="Digite seu título"
            />
          </div>
          <div className="col-4 mb-4">
            <label htmlFor="content" className="form-label">
              Conteudo:
            </label>
            <textarea
              className="form-control"
              placeholder="Digite seu conteudo"
              id="content"
              rows={5}
              style={{ resize: "none" }}
            ></textarea>
          </div>
          <button type="submit" className="btn ml-3">
            Enviar
          </button>
        </form>
      </div>

      <div className="col-4 m-4">
        <h2>Teste de input de arquivos</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="formFile" className="form-label">
              Apenas um arquivo
            </label>
            <input className="form-control" type="file" id="formFile" />
          </div>
          <div className="mb-4">
            <label htmlFor="formFile" className="form-label">
              varios arquivos
            </label>
            <input
              className="form-control"
              type="file"
              id="formFile"
              multiple
            />
          </div>
        </form>
      </div>

      <div className="col-4 m-4">
        <h2>Listas</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="cidades" className="form-label">
              Selecione uma cidade
            </label>
            <input
              className="form-control"
              list="datalistOptions"
              id="cidades"
              placeholder="Busque sua cidade"
            />
            <datalist id="datalistOptions">
              <option value="São Paulo" />
              <option value="Rio de Janeiro" />
              <option value="Belo Horizonte" />
            </datalist>
          </div>
        </form>
      </div>

      <div className="col-4 m-4">
        <h2>Select</h2>
        <form>
          <div className="mb-4 form-floating">
            <select
              id="floatingSelect"
              className="form-select"
              aria-label="floating label select"
            >
              <option selected>Selecione uma cidade</option>
              <option value="1">São Paulo</option>
              <option value="2">Rio de Janeiro</option>
              <option value="3">Belo Horizonte</option>
            </select>
            <label htmlFor="floatingSelect">Cidades</label>
          </div>
        </form>
      </div>

      <div className="col-4 m-4">
        <h2>Checkbox</h2>
        <form>
          <div className="mb-4">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Default checkbox
              </label>
            </div>
          </div>
        </form>
      </div>

      <div className="m-4">
        <h2>Radio</h2>
        <form>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              name="exampleRadios"
              id="exampleRadios1"
              value="option1"
            />
            <label className="form-check-label" htmlFor="exampleRadios1">
              opção a
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              name="exampleRadios"
              id="exampleRadios2"
              value="option2"
            />
            <label className="form-check-label" htmlFor="exampleRadios2">
              opção b
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Formularios;
