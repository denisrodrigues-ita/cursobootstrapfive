import React from "react";
import "./accordion.css";

const Accordion = () => {
  const [count, setCount] = React.useState(0);

  const handleCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      {/* Accordion */}
      <div className="col-8 m-4">
        <h2>Accordion</h2>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h3 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Item 1
              </button>
            </h3>
            <div
              className="accordion-collapse collapse show"
              id="collapseOne"
              aria-labelledby="headingOne"
              data-bs-parent="#accordion"
            >
              <div className="accordion-body">
                <p>Este é o item 1 e sua descrição</p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h3 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="true"
                aria-controls="collapseTwo"
              >
                Item 2
              </button>
            </h3>
            <div
              className="accordion-collapse collapse"
              id="collapseTwo"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordion"
            >
              <div className="accordion-body">
                <p>Este é o item 2 e sua descrição</p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h3 className="accordion-header" id="headingThree">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="true"
                aria-controls="collapseThree"
              >
                Item 3
              </button>
            </h3>
            <div
              className="accordion-collapse collapse"
              id="collapseThree"
              aria-labelledby="headingThree"
              data-bs-parent="#accordion"
            >
              <div className="accordion-body">
                <p>Este é o item 3 e sua descrição</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Alert */}
      <div className="col-8 m-4">
        <div className="alert alert-primary" role="alert">
          This is a primary alert—check it out!
        </div>
        <div className="alert alert-success" role="alert">
          This is a success alert—check it out!
        </div>
        <div className="alert alert-danger" role="alert">
          This is a darger alert—check it out!
        </div>
        {/* Com link */}
        <div className="alert alert-warning" role="alert">
          This is a warning alert{" "}
          <a href="#" className="alert-link">
            an example link
          </a>
          . Give it a click if you like.
        </div>
        {/* com mais conteúdo */}
        <div className="alert alert-info" role="alert">
          <h4 className="alert-heading">Well done!</h4>
          <p>
            Aww yeah, you successfully read this important alert message. This
            example text is going to run a bit longer so that you can see how
            spacing within an alert works with this kind of content.
          </p>
          <hr />
          <p className="mb-0">
            {" "}
            Whenever you need to, be sure to use margin utilities to keep things
            nice and tidy.{" "}
            <a className="alert-link" href="#">
              Alert Link
            </a>
          </p>
        </div>
        {/* com ícone de fechar */}
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <strong>Holy guacamole!</strong> You should check in on some of those
          fields below.
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      </div>

      {/* Badge */}
      <div className="col-8 m-4">
        <h2>
          Cadeira gamer X400 <span className="badge bg-primary">New</span>
        </h2>
        <h2>
          Fone de ouvido XY720 <span className="badge bg-danger">10% Off</span>
        </h2>
        <button type="button" className="btn" onClick={handleCount}>
          Count <span className="badge bg-info">{count}</span>
        </button>
      </div>

      {/* BreadCrumb */}
      <div className="col-8 m-4">
        <nav className="breadcrumb">
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Library</a>
            </li>
            <li className="breadcrumb-item active">
              <a href="#">Profile</a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Button */}
      <div className="row mb-5">
        <h2 className="ml-4">Button</h2>
        <div className="col-8 ml-4" role="group">
          <button type="button" className="btn btn-primary me-2">
            Primary
          </button>
          <button type="button" className="btn btn-secondary me-2">
            Secondary
          </button>
          <button type="button" className="btn btn-success me-2">
            Success
          </button>
          <button type="button" className="btn btn-danger me-2">
            Danger
          </button>
          <button type="button" className="btn btn-link me-2">
            Link
          </button>
        </div>
      </div>
      <div className="row mb-5">
        <h2 className="ml-4">Button outline</h2>
        <div className="col-8 ml-4" role="group">
          <button type="button" className="btn btn-outline-primary me-2">
            Primary
          </button>
          <button type="button" className="btn btn-outline-secondary me-2">
            Secondary
          </button>
          <button type="button" className="btn btn-outline-success me-2">
            Success
          </button>
          <button type="button" className="btn btn-outline-danger me-2">
            Danger
          </button>
        </div>
      </div>
      <div className="row mb-5">
        <h2 className="ml-4">Button Group</h2>
        <div className="col-8 ml-4 btn-group" role="group">
          <button type="button" className="btn btn-dark">
            Diminuir
          </button>
          <button type="button" className="btn btn-dark">
            Pausar
          </button>
          <button type="button" className="btn btn-dark">
            Aumentar
          </button>
        </div>
      </div>
      <div className="row mb-5">
        <h2 className="ml-4">Button Group Outline</h2>
        <div className="col-8 ml-4 btn-group" role="group">
          <button type="button" className="btn btn-outline-dark">
            Diminuir
          </button>
          <button type="button" className="btn btn-outline-dark">
            Pausar
          </button>
          <button type="button" className="btn btn-outline-dark">
            Aumentar
          </button>
        </div>
      </div>
      <div className="row mb-5">
        <h2 className="ml-4">Button Group Outline Vertical</h2>
        <div className="col-8 ml-4 btn-group-vertical" role="group">
          <button type="button" className="btn btn-outline-dark">
            Diminuir
          </button>
          <button type="button" className="btn btn-outline-dark">
            Pausar
          </button>
          <button type="button" className="btn btn-outline-dark">
            Aumentar
          </button>
        </div>
      </div>

      {/* card */}
      <div className="container mb-4">
        <div className="row ml-3">
          <div className="acc card mb-4 me-2 p-0">
            <img
              src="https://via.placeholder.com/300"
              className="card-img-top"
              alt="minha imgem"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Esta é a descrição do produto</p>
              <a href="#" className="btn btn-primary">
                Comprar
              </a>
            </div>
          </div>
          <div className="acc card mb-4 me-2 p-0">
            <img
              src="https://via.placeholder.com/300"
              className="card-img-top"
              alt="minha imgem"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <h6 className="card-subtitle mb-2 text-mutes">Um subtitulo</h6>
              <p className="card-text">Esta é a descrição do produto</p>
              <a href="#" className="btn btn-primary">
                Comprar
              </a>
            </div>
          </div>
          <div className="acc card mb-4 me-2 p-0">
            <img
              src="https://via.placeholder.com/300"
              className="card-img-top"
              alt="minha imgem"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <h6 className="card-subtitle mb-2 text-mutes">Um subtitulo</h6>
              <p className="card-text">Esta é a descrição do produto</p>
              <a href="#" className="card-link">
                Comprar
              </a>
              <a href="#" className="card-link">
                Cancelar
              </a>
            </div>
          </div>
        </div>
        <div className="row ml-3 mb-5">
          <div className="card text-center col-5 p-0" id="card-banner">
            <div className="card-header">Card banner</div>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
                qui velit sed illum inventore perspiciatis ipsam maiores quam
                explicabo, libero nesciunt excepturi pariatur odio similique
                modi. Minus dicta quidem illum!
              </p>
              <a href="#" className="btn btn-success">
                Acessar Oferta
              </a>
            </div>
            <div className="card-footer text-muted">2 days ago</div>
          </div>
        </div>
        <div className="row ml-3">
          <div className="card text-center col-5 p-0" id="card-banner">
            <div className="card-header">Card banner</div>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <img
                src="https://via.placeholder.com/300"
                className="card-img-top"
                alt="minha imgem"
              />
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
                qui velit sed illum inventore perspiciatis ipsam maiores quam
                explicabo, libero nesciunt excepturi pariatur odio similique
                modi. Minus dicta quidem illum!
              </p>
              <a href="#" className="btn btn-success">
                Acessar Oferta
              </a>
            </div>
            <div className="card-footer text-muted">2 days ago</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordion;
