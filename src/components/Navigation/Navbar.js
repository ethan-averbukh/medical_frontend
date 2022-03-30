import {Link} from "react-router-dom";

const NavBarComponent = () => {
    return (
        <nav className="nav">
            <div className="nav-brand">
                <Link to='/' className="nav-link-0">Home</Link>
            </div>
            <div className="nav-links">
                <Link to='/Notes' className="nav-link-1">Notes</Link>
                <Link to='/Journal' className="nav-link-2">Journal</Link>
            </div>
        </nav>
    )
}


export default NavBarComponent;