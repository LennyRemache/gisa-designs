import { NavLink } from "react-router-dom";
import "../../styles/pages/FAQ.css";

export default function FAQ() {
  return (
    <>
      <div className="faq-parent">
        <div className="faq-hero">
          <div>Frequently Asked Questions</div>
          <div>
            Can't find what you're looking for?{" "}
            <NavLink to="/Contact">Contact Us</NavLink>
          </div>
        </div>
        <div className="faq-container">
          <div className="faq">
            <div className="faq-nav">
              <ul>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#delivery">Delivery</a>
                </li>
                <li>
                  <a href="#payment">Payment</a>
                </li>
              </ul>
            </div>
            <div className="faq-questions">
              <div id="services">
                <p className="section-title">Services</p>
                <ul className="section-questions">
                  <li className="service-question">
                    What is your process for inquiries?
                  </li>
                  <p className="service-answer">
                    Our inquiry process ensures we grasp and fulfill your unique
                    vision. It kicks off with you completing an inquiry/contact
                    form, outlining your event details. Following this, we
                    provide a mood board to enhance your visualization of our
                    offerings. Then, we arrange a complimentary consultation to
                    delve into your vision, preferences, and specific
                    requirements, and any edits we can discuss you'd like to
                    make to the mood board that serves as a blueprint for us.
                    Should you decide to proceed, we transition to booking,
                    where we finalize details, sign agreements, payment, and
                    confirm all aspects of your order. On the event day, we
                    manage delivery and setup, ensuring flawless execution
                    unless the service is only for pick-up or delivery. This
                    meticulous process guarantees a seamless and personalized
                    experience, meticulously bringing your vision to life.{" "}
                    <br /> <br />
                    We're committed to collaborating closely with you every step
                    of the way to create an unforgettable experience.
                  </p>
                  <li className="service-question">
                    What sets your floral and event design services apart from
                    others?
                  </li>
                  <p className="service-answer">
                    Our floral and event design services stand out for our
                    deeply personal approach, emphasizing meaningful connections
                    with our clients. Through tailored creativity, attention to
                    detail, and expertise, we craft unforgettable experiences
                    that reflect the unique personalities and preferences of
                    each individual. From personalized consultations to
                    collaborative customization options, we ensure that every
                    event is truly unforgettable, reflecting the essence of our
                    clients and their vision.
                  </p>
                  <li className="service-question">
                    How far in advance should I book your services for my event?
                  </li>
                  <p className="service-answer">
                    To secure your date and ensure ample time for planning, we
                    recommend booking our services at least 1 months in advance.
                    However, feel free to reach out for less than 1 month
                    inquiries as well, as we'll do our best to accommodate your
                    needs.
                  </p>
                  <li className="service-question">
                    Do you offer setup and teardown services for events?
                  </li>
                  <p className="service-answer">
                    Yes, we provide comprehensive setup and teardown services to
                    ensure your event decor is installed and removed seamlessly.
                    Sit back, relax, and enjoy your event while we take care of
                    the details.
                  </p>
                  <li className="service-question">
                    What types of events do you specialize in?
                  </li>
                  <p className="service-answer">
                    We specialize in a wide range of events, including micro
                    weddings, corporate events, birthdays, anniversaries, bridal
                    showers, proposals, luxe picnics, and more.
                  </p>
                </ul>
              </div>
              <div id="delivery">
                <p className="section-title">Delivery</p>
                <ul className="section-questions">
                  <li className="delivery-question">
                    What areas do you serve for delivery?
                  </li>
                  <p className="delivery-answer">
                    We currently offer delivery services to Queens, Manhattan,
                    North Brooklyn, and certain areas in Long Island (not
                    passing Huntington). If you're unsure whether we deliver to
                    your location, feel free to reach out for clarification.
                  </p>
                  <li className="delivery-question">
                    How do I care for my flowers?
                  </li>
                  <div>
                    <p className="delivery-answer-list">
                      Your florals should last over 5 days. With proper care
                      ensures your flowers stay fresh longer. Here are some
                      general tips:
                    </p>
                    <ul className="delivery-answer-list-points">
                      <li>
                        Trim stems at an angle before placing them back in
                        water.
                      </li>
                      <li>
                        Change the water every 2 days and remove any wilted
                        leaves.
                      </li>
                      <li>
                        Keep flowers away from direct sunlight and heat sources.
                      </li>
                      <li>
                        Follow any specific care instructions provided with your
                        arrangement.
                      </li>
                    </ul>
                  </div>
                </ul>
              </div>
              <div id="payment">
                <p className="section-title">Payment</p>
                <ul className="section-questions">
                  <li className="payment-question">
                    What forms of payment do you accept?
                  </li>
                  <p className="payment-answer">
                    Payment details will be provided upon confirmation of your
                    order.
                  </p>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
