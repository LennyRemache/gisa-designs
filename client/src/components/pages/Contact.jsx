import ContactImg from "../../assets/contact-us-image.jpeg";
import "../../styles/pages/Contact.css";

export default function Contact() {
  return (
    <div className="page-parent">
      <div className="contact-header">
        <div className="contact-header-title">Contact Us</div>
        <h1>Let's bring your vision to life!</h1>
        <p>
          We're here to collaborate with you every step of the way. Get in touch
          with us today to start blooming ideas together and create an
          unforgettable experience!{" "}
        </p>
      </div>
      <div className="form-parent">
        <form className="contact-form">
          <div className="form-details">
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" />
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
