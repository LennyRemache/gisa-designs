import { NavLink, Outlet } from "react-router-dom";
import Logo from "../assets/gisa-designs-logo.png";
import "../styles/NavBar.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Footer from "./Footer";
import { Squeeze as Hamburger } from "hamburger-react";
import { useState } from "react";

export default function NavBar() {
  const pages = ["", "Services", "About", "Contact", "FAQ"];

  const [isOpen, setOpen] = useState(false);
  function handleMenuNav() {
    setOpen(false);
  }

  return (
    <>
      <div className="navbar-parent">
        <nav className="navbar">
          <NavLink to="/" className="navbar-logo">
            <img src={Logo} alt="test" />
          </NavLink>
          <div className="navbar-links">
            {pages.map((page, index) => (
              <NavLink
                key={index}
                to={page === "Services" ? `/Services/a-la-carte` : `/${page}`}
                className="navbar-link"
              >
                {page === "" ? "Home" : page}
              </NavLink>
            ))}
          </div>
        </nav>
      </div>
      <div className="mobile-menu">
        <nav>
          <NavLink to="/" className="navbar-logo" onClick={handleMenuNav}>
            <img src={Logo} alt="test" />
          </NavLink>
          {isOpen && (
            <div className="navbar-links">
              {pages.map((page, index) => (
                <NavLink
                  key={index}
                  to={page === "Services" ? `/Services/a-la-carte` : `/${page}`}
                  className="navbar-link"
                  onClick={handleMenuNav}
                >
                  {page === "" ? "Home" : page}
                </NavLink>
              ))}
            </div>
          )}
          <div className="hamburger">
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              onToggle={(toggled) => {
                if (toggled === true) {
                  document.body.style.overflow = "hidden";
                } else {
                  document.body.style.overflow = "visible";
                }
              }}
              hideOutline={false}
              size={25}
            />
          </div>
        </nav>
      </div>
      <div className="body-content">
        <Outlet />
      </div>
      <div className="footer-content">
        <Footer pages={pages} />
      </div>
    </>
  );
}
