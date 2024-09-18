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

  const serviceHeroVariants = {
    enter: { y: 10, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { delay: 0.6, duration: 0.6 } },
  };

  return (
    <div>
      <div className="service-header">
        <motion.div
          className="service-header-title"
          initial="enter"
          animate="visible"
          variants={serviceHeroVariants}
        >
          A La Carte Menu
        </motion.div>
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
    </div>
  );
}
