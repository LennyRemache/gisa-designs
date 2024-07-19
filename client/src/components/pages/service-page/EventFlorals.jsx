import "../../../styles/pages/service-page/Eventflorals.css";
import LuxeImg from "../../../assets/event-design-1.jpeg";

export default function EventFlorals() {
  return (
    <div className="event-florals-container">
      <div className="luxe-container">
        <div className="luxe-header">
          <h1>Luxe Picnic</h1>
        </div>
        <div className="luxe-body">
          <div className="luxe-img">
            <img src={LuxeImg} alt="" srcset="" />
          </div>
          <div className="luxe-desc">
            <div>About the Luxe Picnic Package</div>
            <p>
              Our Party Package is perfect for any event - corporate events,
              baby & bridal showers, engagement parties, birthday soirees, or
              bar/bat mitzvahs! Scotts Flowers is a family-owned luxury florist
              based in the heart of New York City. Our talented designers will
              make beautiful, fresh arrangements for any celebration you're
              having!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
