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
import useWindowDimensions from "./useWindowDimensions";

export default function NavBar() {
  const pages = ["", "Services", "About", "Contact", "FAQ"];

  const [isOpen, setOpen] = useState(false);
  function handleMenuNav() {
    setOpen(false);
    document.body.style.overflow = "visible";
  }
  const { height, width } = useWindowDimensions();

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

  const navbarVariants = {
    enter: { y: 5, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { delay: 0.6, duration: 0.6 } },
  };

  return (
    <>
      {width > 768 ? (
        <div className="navbar-parent">
          <motion.nav
            className="navbar"
            initial="enter"
            animate="visible"
            variants={navbarVariants}
          >
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
          </motion.nav>
        </div>
      ) : (
        <div className="mobile-menu">
          <motion.nav
            initial="enter"
            animate="visible"
            variants={navbarVariants}
          >
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
          </motion.nav>
        </div>
      )}

      <div className="body-content">
        <Outlet />
      </div>

      <div className="footer-content">
        <Footer pages={pages} />
      </div>
    </>
  );
}
