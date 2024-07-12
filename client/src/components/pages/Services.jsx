import { useState } from "react";
import "../../styles/pages/Services.css";
import { Navigate, NavLink, Outlet } from "react-router-dom";

export default function Services() {
  const sections = ["a-la-carte", "event-florals"];

  const [click, setClick] = useState(0);
  const handleClick = () => {
    setClick(click + 1);
  };

  return (
    <div>
      {click}
      <div className="service-header">
        <div className="service-header-title">Our Services</div>
      </div>
      <div className="service-container">
        <div className="service-body">
          <div className="service-nav">
            <ul>
              {sections.map((section, index) => (
                <li key={index}>
                  <NavLink to={`${section}`} onClick={handleClick}>
                    {section}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          {click === 0 && <Navigate to={`${sections[0]}`} />}
          <Outlet />
        </div>
      </div>
    </div>
  );
}
