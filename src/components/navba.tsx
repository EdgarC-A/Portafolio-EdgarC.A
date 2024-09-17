import volantis from "./img/volantis.png";
import logo from "./img/IMG_9952.webp";
import "./navba.css";

function Mynavba() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src={logo}
            alt="Logo"
            width="60"
            className="d-inline-block align-text-top logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a
              id="redirect-inicio"
              className="nav-link "
              aria-current="page"
              href="#"
            >
              Home
            </a>
            <a className="nav-link " href="#redirect1">
              About me
            </a>
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle brn-editdrop"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Projects
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#redirection2">
                    Developed projects
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#redirection3">
                    Projects in Progress
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item volantis"
                    href="https://beige-kudu-377083.hostingersite.com/"
                    target="blank"
                  >
                    <img
                      src={volantis}
                      alt="Logo"
                      width="70"
                      className="d-inline-block align-text-top logo"
                    />
                    Visit the business page
                  </a>
                </li>
              </ul>
            </div>
            <a className="nav-link" href="#redirection-form">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Mynavba;
