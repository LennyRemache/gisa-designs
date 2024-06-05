import { NavLink, Outlet } from "react-router-dom";
import Logo from "../assets/gisa-designs-logo.png";

export default function NavBar() {
  const pages = ["", "About", "Contact", "FAQ"];
  return (
    <>
      <nav>
        <NavLink to="/">
          <img src={Logo} alt="test" />
        </NavLink>
        {pages.map((page, index) => (
          <NavLink key={index} to={`/${page}`}>
            {page === "" ? "Home" : page}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </>
  );
}
