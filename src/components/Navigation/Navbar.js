import { Link } from "react-router-dom";
import LogoutButton from "./../Login/LogoutButton";

const NavBarComponent = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <div className="container-fluid">
        <a href="/" className=" navbar-brand">
          Home
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
      </div>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a href="/home" className="nav-link">
            Notes
          </a>
          <a href="/home" className="nav-link">
            Journal
          </a>
          {/* <a href="/Login" className="nav-link">
            <LogoutButton />
          </a> */}
        </div>
      </div>
    </nav>
  );
};

export default NavBarComponent;
