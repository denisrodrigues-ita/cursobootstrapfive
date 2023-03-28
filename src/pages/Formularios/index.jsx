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

      <div className="col-4 m-4">
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

      <div className="col-4 m-4">
        <h2>Switch</h2>
        <div className="form-check form-switch">
          <input
            type="checkbox"
            className="form-check-input"
            id="flexSwitchCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Default switch checkbox input
          </label>
        </div>
      </div>

      <div className="col-4 m-4">
        <h2>Range</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="customRange1" className="form-label">
              Default range
            </label>
            <input
              type="range"
              className="form-range"
              min={0}
              max={5}
              step={0.5}
              id="customRange1"
            />
          </div>
        </form>
      </div>

      <h2 className="col-4 m-4">input groups</h2>
      <div className="input-group m-4 col-4">
        <span className="input-group-text" id="basic-addon">
          @
        </span>
        <input
          type="email"
          className="form-control"
          placeholder="Digite seu email"
        />
      </div>
      <div className="input-group m-4 col-4">
        <span className="input-group-text" id="basic-addon2">
          #
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Digite o nome do canal"
        />
      </div>
      <p className="col-4 m-4">Quanto você quer pagar?</p>
      <div className="input-group m-4 col-4">
        <span className="input-group-text" id="basic-addon3">
          R$
        </span>
        <input
          type="number"
          className="form-control"
          placeholder="Qual o valor?"
        />
        <span className="input-group-text">,00</span>
      </div>

      <div className="col-4 m-4">
        <h2>Floating Labe</h2>
        <div className="form-floating mb-4">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="Insira seu email"
          />
          <label htmlFor="floatingInput">Email</label>
        </div>
      </div>

      <div className="container-start col-6 m-4">
        <h2>Cadastre-se preenchendo o formulário</h2>
        <form className="row g-3">
          <div className="col-lg-6 col-md-12">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Insira seu email"
            />
          </div>
          <div className="col-lg-6 col-md-12">
            <label htmlFor="senha" className="form-label">
              Senha
            </label>
            <input
              type="password"
              className="form-control"
              id="senha"
              placeholder="Insira sua senha"
            />
          </div>
          <div className="col-lg-4 col-md-6">
            <label htmlFor="cep" className="form-label">
              CEP:
            </label>
            <input
              type="text"
              className="form-control"
              id="cep"
              placeholder="Insira seu CEP"
            />
          </div>
          <div className="col-lg-10 col-md-8 col-sm-8">
            <label htmlFor="rua" className="form-label">
              Rua:
            </label>
            <input
              type="text"
              className="form-control"
              id="rua"
              placeholder="Insira seu endereço"
            />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-4">
            <label htmlFor="numero" className="form-label">
              Número:
            </label>
            <input
              type="number"
              className="form-control"
              id="numero"
              placeholder="Nº"
            />
          </div>
          <div className="col-lg-8 col-md-6">
            <label htmlFor="cidade" className="form-label">
              Cidade:
            </label>
            <input
              type="text"
              className="form-control"
              id="cidade"
              placeholder="Cidade"
            />
          </div>
          <div className="col-lg-4 col-md-6">
            <label htmlFor="estado" className="form-label">
              Estado:
            </label>
            <select id="estado" className="form-select">
              <option selected>Escolha...</option>
              <option value="1">Amapa</option>
              <option value="2">Amazonas</option>
              <option value="3">Bahia</option>
              <option value="4">Ceará</option>
              <option value="5">Distrito Federal</option>
              <option value="6">Espírito Santo</option>
              <option value="7">Goiás</option>
              <option value="8">Maranhão</option>
              <option value="9">Mato Grosso</option>
            </select>
          </div>

          <div className="col-12">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="newsletter"
              />
              <label className="form-check-label" htmlFor="newsletter">
                Desejo receber newsletter
              </label>
            </div>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Formularios;
