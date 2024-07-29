import "../styles/Footer.css";
import { NavLink } from "react-router-dom";
import Logo from "../assets/gisa-designs-logo.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

export default function Footer({ pages }) {
  return (
    <div className="footer-parent">
      <div className="footer">
        <div className="footer-left">
          <img src={Logo} alt="" />
          <div className="footer-bottom">copyright 2024 Gisa Designs</div>
          <div className="footer-nav">
            {pages.map((page, index) => (
              <NavLink
                key={index}
                to={page === "Services" ? `/Services/a-la-carte` : `/${page}`}
                className="footer-nav-link"
              >
                {page === "" ? "Home" : page}
              </NavLink>
            ))}
          </div>
        </div>
        <div className="footer-right">
          <MailOutlineIcon />
          <InstagramIcon />
        </div>
      </div>
    </div>
  );
}
