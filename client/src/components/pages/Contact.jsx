import ContactImg from "../../assets/contact-us-image.jpeg";
import "../../styles/pages/Contact.css";

export default function Contact() {
  const services = [
    { title: "A La Carte Menu", name: "a-la-carte-menu" },
    { title: "Luxe Picnic", name: "lux-picnic" },
    { title: "Proposal", name: "proposal" },
    { title: "Special Event", name: "special-event" },
    { title: "Flower Arrangement", name: "flower-arrangement" },
    { title: "Other", name: "other" },
  ];

  return (
    <div className="page-parent">
      <div className="contact-header">
        <div className="contact-header-title">Contact Us</div>
        <h1>Let's bring your vision to life!</h1>
        <p>
          We're here to collaborate with you every step of the way. Get in touch
          with us today to start blooming ideas together and create an
          unforgettable experience!t
        </p>
      </div>
      <div className="form-parent">
        <form className="contact-form">
          <div className="form-details">
            <div className="name-parent">
              <p>Name</p>
              <div className="name">
                <div className="first-name">
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" name="firstName" />
                </div>
                <div className="last-name">
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" name="lastName" />
                </div>
              </div>
            </div>

            <div className="email">
              <label htmlFor="email">Email</label>
              <input type="email" />
            </div>
            <div className="phone">
              <label htmlFor="phone">Phone</label>
              <input type="tel" />
            </div>
            <div className="services">
              <label htmlFor="services">
                What services are you interested in?
              </label>
              {services.map((service) => (
                <div className={service.name}>
                  <input type="checkbox" name={service.name} id="services" />{" "}
                  <p>{service.title}</p>
                </div>
              ))}
            </div>
            <div className="date">
              <label htmlFor="date">
                Event Date or Delivery Date (Exact or Estimated)
              </label>
              <input type="date" />
            </div>
          </div>
          <div className="form-image">
            <img src={ContactImg} alt="" srcset="" />
          </div>
        </form>
      </div>
    </div>
  );
}
