import { useState } from "react";
import "../../styles/pages/Services.css";
import { Navigate, NavLink, Outlet } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Services() {
  const sections = [];
  const service = (name) => {
    if (name === "a-la-carte") {
      return "A La Carte";
    } else if (name === "event-florals") {
      return "Events";
    }
  };

  const pageVariants = {
    enter: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.25 } },
    exit: { opacity: 0, transition: { duration: 0.25 } },
  };

  return (
    <AnimatePresence>
      <motion.div
        initial="enter"
        animate="visible"
        exit="exit"
        variants={pageVariants}
      >
        <div className="service-header">
          <div className="service-header-title">Our Services</div>
        </div>
        <div className="service-container">
          <div className="service-body">
            {sections.length ? (
              <div className="service-nav">
                <ul>
                  {sections.map((section, index) => (
                    <li key={index}>
                      <NavLink to={`${section}`}>{service(section)}</NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              ""
            )}
            <Outlet />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
