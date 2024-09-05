import { NavLink, Outlet } from "react-router-dom";
import Logo from "../assets/gisa-designs-logo.png";
import "../styles/NavBar.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Footer from "./Footer";
import { Squeeze as Hamburger } from "hamburger-react";
import { useState } from "react";
import { motion, AnimatePresence, animate } from "framer-motion";
import { duration } from "@mui/material";

export default function NavBar() {
  const pages = ["", "Services", "About", "Contact", "FAQ"];

  const [isOpen, setOpen] = useState(false);
  function handleMenuNav() {
    setOpen(false);
    document.body.style.overflow = "visible";
  }

  const mobileNavVars = {
    preOpen: { opacity: 0 },
    open: { opacity: 1 },
    close: { opacity: 0 },
  };
  const mobileNavLinkVars = {
    preOpen: { opacity: 0, y: 50 },
    open: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    close: { opacity: 0, y: 100, transition: { duration: 1 } },
  };
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
          </NavLink>{" "}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="navbar-links"
                initial="preOpen"
                animate="open"
                exit="close"
                variants={mobileNavVars}
              >
                {pages.map((page, index) => (
                  <motion.div
                    variants={mobileNavLinkVars}
                    key={index}
                    className="navbar-link-motion"
                  >
                    <NavLink
                      className="navbar-link"
                      to={
                        page === "Services"
                          ? `/Services/a-la-carte`
                          : `/${page}`
                      }
                      onClick={handleMenuNav}
                    >
                      {page === "" ? "Home" : page}
                    </NavLink>
                  </motion.div>
                ))}
              </motion.div>
            )}{" "}
          </AnimatePresence>
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
              duration={0.25}
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
