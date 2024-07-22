import { useState } from "react";
import "../../styles/pages/Services.css";
import { Navigate, NavLink, Outlet } from "react-router-dom";

export default function Services() {
  const sections = [];
  const service = (name) => {
    if (name === "a-la-carte") {
      return "A La Carte";
    } else if (name === "event-florals") {
      return "Events";
    }
  };

  return (
    <div>
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
    </div>
  );
}
