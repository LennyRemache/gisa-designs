import "../../styles/pages/Services.css";
import { NavLink, Outlet } from "react-router-dom";

export default function Services() {
  return (
    <div>
      <div className="faq-header">
        <div className="faq-header-title">Our Services</div>
      </div>
      <div className="faq-nav">
        <ul>
          <li>
            <NavLink to="a-la-carte">A La Carte Menu</NavLink>
          </li>
          <li>
            <NavLink to="event-florals">Event Florals</NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}
