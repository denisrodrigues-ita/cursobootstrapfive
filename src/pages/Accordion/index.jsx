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

      {/* Slider */}
      <div className="container mb-4">
        <div className="col-8">
          <div id="carousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button
                className="active"
                type="button"
                data-bs-target="#carousel"
                data-bs-slide-to="0"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carousel"
                data-bs-slide-to="1"
                aria-current="false"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carousel"
                data-bs-slide-to="2"
                aria-current="false"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" id="carousel-item-1">
                <img
                  src="https://via.placeholder.com/300"
                  className="d-block w-100"
                  alt="minha imagem"
                />
                <div className="carousel-caption">
                  <h5>First slide label</h5>
                  <p>
                    Some representative placeholder content for the first slide.
                  </p>
                </div>
              </div>
              <div className="carousel-item" id="carousel-item-2">
                <img
                  src="https://via.placeholder.com/300"
                  className="d-block w-100"
                  alt="minha imagem"
                />
                <div className="carousel-caption">
                  <h5>Second slide label</h5>
                  <p>
                    Some representative placeholder content for the second
                    slide.
                  </p>
                </div>
              </div>
              <div className="carousel-item" id="carousel-item-3">
                <img
                  src="https://via.placeholder.com/300"
                  className="d-block w-100"
                  alt="minha imagem"
                />
                <div className="carousel-caption">
                  <h5>Third slide label</h5>
                  <p>
                    Some representative placeholder content for the third slide.
                  </p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>

      {/* close button */}
      <div className="container">
        <p>
          Clique para fechar{" "}
          <button
            className="btn-close"
            type="button"
            aria-label="Close"
          ></button>
        </p>
        <a href="#" className="btn btn-primary">
          Fechar
          <button
            className="btn-close"
            type="button"
            aria-label="Close"
          ></button>
        </a>
      </div>

      {/* Collapse */}
      <div className="container mt-5">
        <button
          className="btn btn-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapse"
          aria-expanded="false"
          aria-controls="collapse"
        >
          Clique para abrir/fechar
        </button>
        <div className="collapse" id="collapse">
          <div className="col-12 mt-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
            totam itaque nulla quas, nobis hic asperiores accusamus nesciunt ad,
            assumenda beatae? Neque sed ducimus et doloremque autem quidem? Rem,
            harum?
          </div>
        </div>
      </div>

      {/* Dropdown */}
      <div className="container mt-5">
        <div className="dropdown mb-4">
          <a
            href="#"
            className="btn btn-secondary dropdown-toggle"
            role="button"
            id="dropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="dropdown">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mt-5">
        <div className="dropdown mb-4 dropend">
          <a
            href="#"
            className="btn btn-secondary dropdown-toggle"
            role="button"
            id="dropdown-direita"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="dropdown-direita">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Modal */}
      <div className="container mb-4">
        <button
          type="button"
          className="btn btn-info"
          data-bs-toggle="modal"
          data-bs-target="#modal"
        >
          Abrir modal
        </button>
      </div>

      <div
        className="modal fade"
        id="modal"
        tabIndex="-1"
        aria-labelledby="modalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                repellat eaque, hic, veniam rerum dolores, nostrum corporis
                officia cumque ab adipisci suscipit fugiat. Voluptatem non
                ratione ex libero dicta eligendi.
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Fechar
              </button>
              <button type="button" className="btn btn-primary">
                Salvar mudanças
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Off Canvas */}
      <div className="container m-4">
        <button
          className="btn btn-primary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvas"
          aria-controls="offcanvas"
        >
          Abrir offcanvas
        </button>
        <div
          className="offcanvas offcanvas-start"
          tabIndex="-1"
          id="offcanvas"
          aria-labelledby="offcanvasLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasLabel">
              Offcanvas
            </h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
              <li>Item 5</li>
              <li>Item 6</li>
              <li>Item 7</li>
              <li>Item 8</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Paginação */}
      <div className="container">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#">
                Anterior
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                Próximo
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Progress */}
      <div className="container">
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: "75%" }}
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            75%
          </div>
        </div>
        <div className="progress mt-5">
          <div
            className="progress-bar progress-bar-striped bg-success"
            role="progressbar"
            style={{ width: "90%" }}
            aria-valuenow="90"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            90%
          </div>
        </div>
      </div>

      {/* Scroll Spy */}
      <nav id="scrollspy" className="navbar navbar-light bg-light px-5 mb-4">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" href="#item-1">
              Item 1
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#item-2">
              Item 2
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#item-3">
              Item 3
            </a>
          </li>
        </ul>
      </nav>

      <div
        data-bs-spy="scroll"
        data-bs-target="#scrollspy"
        data-bs-offset="0"
        tabIndex="0"
      >
        <div className="container">
          <h4 id="item-1">Item 1</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptates, quae, quod, voluptatibus quibusdam voluptatem quidem
            voluptas quos quia quas natus. Quisquam, quae. Quisquam, quae.
            Quisquam,
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptates, quae, quod, voluptatibus quibusdam voluptatem quidem
            voluptas quos quia quas natus. Quisquam, quae. Quisquam, quae.
            Quisquam,
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptates, quae, quod, voluptatibus quibusdam voluptatem quidem
            voluptas quos quia quas natus. Quisquam, quae. Quisquam, quae.
            Quisquam,
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptates, quae, quod, voluptatibus quibusdam voluptatem quidem
            voluptas quos quia quas natus. Quisquam, quae. Quisquam, quae.
            Quisquam,
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptates, quae, quod, voluptatibus quibusdam voluptatem quidem
            voluptas quos quia quas natus. Quisquam, quae. Quisquam, quae.
            Quisquam,
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptates, quae, quod, voluptatibus quibusdam voluptatem quidem
            voluptas quos quia quas natus. Quisquam, quae. Quisquam, quae.
            Quisquam,
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptates, quae, quod, voluptatibus quibusdam voluptatem quidem
            voluptas quos quia quas natus. Quisquam, quae. Quisquam, quae.
            Quisquam,
          </p>
          <h4 id="item-2">Item 2</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptates, quae, quod, voluptatibus quibusdam voluptatem quidem
            voluptas quos quia quas natus. Quisquam, quae. Quisquam, quae.
            Quisquam,
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptates, quae, quod, voluptatibus quibusdam voluptatem quidem
            voluptas quos quia quas natus. Quisquam, quae. Quisquam, quae.
            Quisquam,
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptates, quae, quod, voluptatibus quibusdam voluptatem quidem
            voluptas quos quia quas natus. Quisquam, quae. Quisquam, quae.
            Quisquam,
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptates, quae, quod, voluptatibus quibusdam voluptatem quidem
            voluptas quos quia quas natus. Quisquam, quae. Quisquam, quae.
            Quisquam,
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptates, quae, quod, voluptatibus quibusdam voluptatem quidem
            voluptas quos quia quas natus. Quisquam, quae. Quisquam, quae.
            Quisquam,
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptates, quae, quod, voluptatibus quibusdam voluptatem quidem
            voluptas quos quia quas natus. Quisquam, quae. Quisquam, quae.
            Quisquam,
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptates, quae, quod, voluptatibus quibusdam voluptatem quidem
            voluptas quos quia quas natus. Quisquam, quae. Quisquam, quae.
            Quisquam,
          </p>
          <h4 id="item-3">Item 3</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptates, quae, quod, voluptatibus quibusdam voluptatem quidem
            voluptas quos quia quas natus. Quisquam, quae. Quisquam, quae.
            Quisquam,
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptates, quae, quod, voluptatibus quibusdam voluptatem quidem
            voluptas quos quia quas natus. Quisquam, quae. Quisquam, quae.
            Quisquam,
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptates, quae, quod, voluptatibus quibusdam voluptatem quidem
            voluptas quos quia quas natus. Quisquam, quae. Quisquam, quae.
            Quisquam,
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptates, quae, quod, voluptatibus quibusdam voluptatem quidem
            voluptas quos quia quas natus. Quisquam, quae. Quisquam, quae.
            Quisquam,
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptates, quae, quod, voluptatibus quibusdam voluptatem quidem
            voluptas quos quia quas natus. Quisquam, quae. Quisquam, quae.
            Quisquam,
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptates, quae, quod, voluptatibus quibusdam voluptatem quidem
            voluptas quos quia quas natus. Quisquam, quae. Quisquam, quae.
            Quisquam,
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptates, quae, quod, voluptatibus quibusdam voluptatem quidem
            voluptas quos quia quas natus. Quisquam, quae. Quisquam, quae.
            Quisquam,
          </p>
        </div>
      </div>
    </>
  );
};

export default Accordion;
