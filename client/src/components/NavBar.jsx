import { NavLink, Outlet } from "react-router-dom";
import Logo from "../assets/gisa-designs-logo.png";
import "../styles/NavBar.css";

export default function NavBar() {
  const pages = ["", "About", "Contact", "FAQ"];
  return (
    <>
      <nav className="navbar">
        <NavLink to="/" className="navbar-logo">
          <img src={Logo} alt="test" />
        </NavLink>
        <div className="navbar-links">
          {pages.map((page, index) => (
            <NavLink key={index} to={`/${page}`} className="navbar-link">
              {page === "" ? "Home" : page}
            </NavLink>
          ))}
        </div>
      </nav>
      <Outlet />
    </>
  );
}
