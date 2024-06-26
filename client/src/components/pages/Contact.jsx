import { useState } from "react";
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

  const initialContactForm = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    services: {
      "a-la-carte-menu": false,
      "lux-picnic": false,
      proposal: false,
      "specaial-event": false,
      "flower-arrangement": false,
    },
    date: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    budget: "",
    link: "",
    message: "",
  };
  const [contactForm, setContactForm] = useState(initialContactForm);

  const updateContactForm = (e) => {
    setContactForm((prevFormState) => ({
      ...prevFormState,
      [e.target.name]: e.target.value,
    }));
    console.log(contactForm);
  };

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
                  <input
                    type="text"
                    name="firstName"
                    value={contactForm.firstName}
                    onChange={updateContactForm}
                  />
                </div>
                <div className="last-name">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={contactForm.lastName}
                    onChange={updateContactForm}
                  />
                </div>
              </div>
            </div>

            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={contactForm.email}
                onChange={updateContactForm}
              />
            </div>
            <div className="phone">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                name="phone"
                value={contactForm.phone}
                onChange={updateContactForm}
              />
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
              <input type="date" name="date" value={contactForm.date} />
            </div>
            <div className="address">
              <p>Delivery Location / Event Location</p>
              <div className="street-address">
                <label htmlFor="address">Address Line</label>
                <input
                  type="text"
                  name="address"
                  autoComplete="street-address"
                  value={contactForm.address}
                  onChange={updateContactForm}
                />
              </div>
              <div className="city-state-zip">
                <div>
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    name="city"
                    autoComplete="address-level2"
                    value={contactForm.city}
                    onChange={updateContactForm}
                  />
                </div>
                <div>
                  <label htmlFor="state">State</label>
                  <input
                    type="text"
                    name="state"
                    autoComplete="address-level1"
                    value={contactForm.state}
                    onChange={updateContactForm}
                  />
                </div>
                <div>
                  <label htmlFor="zip">Zip</label>
                  <input
                    type="text"
                    name="zip"
                    autoComplete="postal-code"
                    value={contactForm.zip}
                    onChange={updateContactForm}
                  />
                </div>
              </div>
            </div>
            <div className="budget">
              <label htmlFor="budget">What is your Budget?</label>
              <select name="budget">
                <option disabled selected>
                  -- select an option --
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
              <input type="url" name="link" />
            </div>
            <div className="message">
              <label htmlFor="message">Message</label>
              <textarea name="message" rows="10"></textarea>
            </div>
          </div>
          <div className="form-image">
            <img src={ContactImg} alt="" />
          </div>
        </form>
      </div>
    </div>
  );
}
