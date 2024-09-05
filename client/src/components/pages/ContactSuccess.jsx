import React from "react";
import "../../styles/pages/ContactSuccess.css";
import { Checkmark } from "react-checkmark";

export default function ContactSuccess() {
  return (
    <div>
      <Checkmark size="xLarge" />
      <div className="success-text">
        <p className="success-thanks">Thank you for getting in touch!</p>
        <p className="success-desc">
          Your submission has been received, and our team will be in touch with
          you shortly.
        </p>
        <p className="success-desc">
          We're happy to have you as a customer and look forward to providing
          you with the best possible service.
        </p>
        <p className="success-desc">
          For any further inquires, please contact gisadesigns@gmail.com
        </p>
      </div>
    </div>
  );
}
