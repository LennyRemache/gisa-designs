import { NavLink, Outlet } from "react-router-dom";
import Logo from "../assets/gisa-designs-logo.png";
import "../styles/NavBar.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Footer from "./Footer";

export default function NavBar() {
  const pages = ["", "Services", "About", "Contact", "FAQ"];
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
          <div className="navbar-socials">
            <InstagramIcon />
            <MailOutlineIcon />
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
