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
          <div>Luxe Description</div>
        </div>
      </div>
    </div>
  );
}
