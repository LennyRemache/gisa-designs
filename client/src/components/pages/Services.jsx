import "../../styles/pages/Services.css";
import { NavLink, Outlet } from "react-router-dom";

export default function Services() {
  const sections = ["a-la-carte", "event-florals"];
  return (
    <div>
      <div className="service-header">
        <div className="service-header-title">Our Services</div>
      </div>
      <div className="service-container">
        <div className="service-body">
          <div className="service-nav">
            <ul>
              {sections.map((section, index) => (
                <li>
                  <NavLink key={index} to={`${section}`}>
                    {section}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
