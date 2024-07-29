import { useState } from "react";
import ContactImg from "../../assets/contact-us-image.jpeg";
import "../../styles/pages/Contact.css";
import * as Yup from "yup";
import axios from "axios";

export default function Contact() {
  const today = new Date();

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
    services: [],
    date: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    link: "",
    message: "",
  };

  const [contactForm, setContactForm] = useState(initialContactForm);
  const [errors, setErrors] = useState({});

  const updateContactForm = (e) => {
    if (e.target.id === "services") {
      let updatedServices = [...contactForm.services];
      if (e.target.checked === true) {
        updatedServices.push(e.target.name);
      } else {
        updatedServices = updatedServices.filter(
          (service) => service !== e.target.name
        );
      }
      setContactForm((prevFormState) => ({
        ...prevFormState,
        services: updatedServices,
      }));
    } else {
      setContactForm((prevFormState) => ({
        ...prevFormState,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is Required."),
    lastName: Yup.string().required("Last Name is Required."),
    email: Yup.string()
      .required("Email is Required.")
      .email("Invalid email format."),
    phone: Yup.string().matches(/^\d{10}$/, "Phone Number must be 10 digits."),
    services: Yup.array()
      .min(1, "Select at least one service.")
      .required("Select at least one service."),
    date: Yup.date()
      .min(
        today,
        `Date must be later than ${
          today.getMonth() + 1
        }/${today.getDate()}/${today.getFullYear()}`
      )
      .required("Date is required."),
    address: Yup.string().required("Street Address is required."),
    city: Yup.string().required("City is required."),
    state: Yup.string().required("State is required"),
    zip: Yup.string().required("Zip is required."),
    budget: Yup.string().required("Budget is required."),
    message: Yup.string().required("Message is required."),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await validationSchema.validate(contactForm, { abortEarly: false });
      await axios
        .post("https://gisa-designs.onrender.com/contact/request", contactForm)
        .catch((err) => {
          console.log(err.response.data.err);
        });
      console.log("Form submitted", contactForm);
    } catch (error) {
      const newError = {};
      error.inner.forEach((err) => {
        newError[err.path] = err.message;
      });
      console.log(newError);
      setErrors(newError);
    }
  };

  return (
    <div className="page-parent">
      <div className="contact-header">
        <div className="contact-header-title">Contact Us</div>
        <p>Let's bring your vision to life!</p>
        <p>
          We're here to collaborate with you every step of the way. Get in touch
          with us today to start blooming ideas together and create an
          unforgettable experience!t
        </p>
      </div>
      <div className="form-parent">
        <form className="contact-form" onSubmit={handleSubmit}>
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
                  {errors.firstName && (
                    <div className="error">{errors.firstName}</div>
                  )}
                </div>
                <div className="last-name">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={contactForm.lastName}
                    onChange={updateContactForm}
                  />
                  {errors.lastName && (
                    <div className="error">{errors.lastName}</div>
                  )}
                </div>
              </div>
            </div>
            <div className="email-phone">
              <div className="email">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  value={contactForm.email}
                  onChange={updateContactForm}
                />
                {errors.email && <div className="error">{errors.email}</div>}
              </div>
              <div className="phone">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={contactForm.phone}
                  onChange={updateContactForm}
                />
                {errors.phone && contactForm.phone && (
                  <div className="error">{errors.phone}</div>
                )}
              </div>
            </div>

            <div className="services">
              <label htmlFor="services">
                What services are you interested in?
              </label>
              {errors.services && (
                <div className="error">{errors.services}</div>
              )}
              {services.map((service, index) => (
                <div className={service.name} key={index}>
                  <input
                    type="checkbox"
                    name={service.name}
                    id="services"
                    checked={contactForm.services.includes(`${service.name}`)}
                    onChange={updateContactForm}
                  />
                  <p>{service.title}</p>
                </div>
              ))}
            </div>
            <div className="date">
              <label htmlFor="date">
                Event Date or Delivery Date (Exact or Estimated)
              </label>
              <input
                type="date"
                name="date"
                value={contactForm.date}
                onChange={updateContactForm}
              />
              {errors.date && <div className="error">{errors.date}</div>}
            </div>
            <div className="address">
              <p>Delivery Location / Event Location</p>
              <div className="street-address">
                <label htmlFor="address">Address Line</label>
                {errors.address && (
                  <div className="error">{errors.address}</div>
                )}
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
                  {errors.city && <div className="error">{errors.city}</div>}
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
                  {errors.state && <div className="error">{errors.state}</div>}
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
                  {errors.zip && <div className="error">{errors.zip}</div>}
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
              <select
                name="budget"
                value={contactForm.budget}
                onChange={updateContactForm}
              >
                <option selected disabled>
                  -- Select an option --
                </option>
                <option>{"< $500"}</option>
                <option>$500 - $1000</option>
                <option>$1000 - $1500</option>
                <option>$1500 - $2000</option>
                <option>{"> $2000"}</option>
              </select>
              {errors.budget && <div className="error">{errors.budget}</div>}
            </div>
            <div className="pinterest">
              <label htmlFor="link">Link to Pinterest</label>
              <p>
                ( If your Pinterest Board is private, please invite us
                @gisadesigns )
              </p>
              <input
                type="url"
                name="link"
                value={contactForm.link}
                onChange={updateContactForm}
              />
            </div>
            <div className="message">
              <label htmlFor="message">Message</label>
              <p>( Any additional Request or Information? )</p>
              {errors.message && <div className="error">{errors.message}</div>}
              <textarea
                name="message"
                rows="5"
                value={contactForm.message}
                onChange={updateContactForm}
              ></textarea>
            </div>
            <button type="submit" className="contact-btn">
              Submit
            </button>
          </div>
          <div className="form-image">
            <img src={ContactImg} alt="" />
          </div>
        </form>
      </div>
    </div>
  );
}
