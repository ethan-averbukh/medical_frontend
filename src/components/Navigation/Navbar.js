import { Link } from "react-router-dom";
import LogoutButton from "./../Login/LogoutButton";

const NavBarComponent = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <div className="container-fluid">
        <Link href="/" className=" navbar-brand">
          Home
        </Link>
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
          <Link href="/home" className="nav-link">
            Notes
          </Link>
          <Link href="/home" className="nav-link">
            Journal
          </Link>
          {/* <Link href="/Login" className="nav-link">
            <LogoutButton />
          </Link> */}
        </div>
      </div>
    </nav>
  );
};

export default NavBarComponent;
