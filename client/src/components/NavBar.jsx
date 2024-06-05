import { NavLink, Outlet } from "react-router-dom";
import Logo from "../assets/gisa-designs-logo.png";
import "../styles/NavBar.css";

export default function NavBar() {
  const pages = ["", "About", "Contact", "FAQ"];
  return (
    <>
      <nav className="navbar">
        <NavLink to="/">
          <img src={Logo} alt="test" />
        </NavLink>
        <ul>
          {pages.map((page, index) => (
            <NavLink key={index} to={`/${page}`}>
              {page === "" ? "Home" : page}
            </NavLink>
          ))}
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
