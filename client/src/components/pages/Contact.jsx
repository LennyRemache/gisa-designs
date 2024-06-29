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
              <input type="email" name="email" />
            </div>
            <div className="phone">
              <label htmlFor="phone">Phone</label>
              <input type="tel" name="phone" />
            </div>
            <div className="services">
              <label htmlFor="services">
                What services are you interested in?
              </label>
              {services.map((service) => (
                <div className={service.name}>
                  <input type="checkbox" name={service.name} id="services" />
                  <p>{service.title}</p>
                </div>
              ))}
            </div>
            <div className="date">
              <label htmlFor="date">
                Event Date or Delivery Date (Exact or Estimated)
              </label>
              <input type="date" name="date" />
            </div>
            <div className="address">
              <label htmlFor="address">
                Delivery Location / Event Location
              </label>
              <div className="street-address">
                <p>Address Line</p>
                <input
                  type="text"
                  name="address-line"
                  id="address"
                  autoComplete="street-address"
                />
              </div>
              <div className="city-state-zip">
                <div>
                  <p>City</p>
                  <input
                    type="text"
                    name="city"
                    id="address"
                    autoComplete="address-level2"
                  />
                </div>
                <div>
                  <p>State</p>
                  <input
                    type="text"
                    name="state"
                    id="address"
                    autoComplete="address-level1"
                  />
                </div>
                <div>
                  <p>Zip</p>
                  <input
                    type="text"
                    name="zip"
                    id="address"
                    autoComplete="postal-code"
                  />
                </div>
              </div>
            </div>
            <div className="budget">
              <label htmlFor="budget">What is your Budget?</label>
              <select name="budget">
                <option disabled selected>
                  {" "}
                  -- select an option --{" "}
                </option>
                <option>{"< $500"}</option>
                <option>$500 - $1000</option>
                <option>$1000 - $1500</option>
                <option>$1500 - $2000</option>
                <option>{"> $2000"}</option>
              </select>
            </div>
            <div className="pinterest">
              <label htmlFor="link">Link to Pinterest</label>
              <p>
                ( If your Pinterest Board is private, please invite us
                @gisadesigns )
              </p>
              <input type="url" name="pinterest-link" />
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
