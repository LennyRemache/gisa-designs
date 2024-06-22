import ContactImg from "../../assets/contact-us-image.jpeg";
import "../../styles/pages/Contact.css";

export default function Contact() {
  return (
    <div className="form-parent">
      <form className="contact-form">
        <div className="form-details">
          <h1>Let's bring your vision to life!</h1>
          <p>
            We're here to collaborate with you every step of the way. Get in
            touch with us today to start blooming ideas together and create an
            unforgettable experience!{" "}
          </p>
        </div>
        <div className="form-image">
          <img src={ContactImg} alt="" srcset="" />
        </div>
      </form>
    </div>
  );
}
