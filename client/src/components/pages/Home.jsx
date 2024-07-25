import "../../styles/pages/Home.css";
import HeroImage from "../../assets/home-flowers-1.jpg";
import FlowerDesign1 from "../../assets/flower-design-1.jpeg";
import FlowerDesign2 from "../../assets/flower-design-2.jpeg";
import FlowerDesign3 from "../../assets/flower-design-3.jpeg";
import FlowerDesign4 from "../../assets/flower-design-4.jpeg";
import FlowerDesign5 from "../../assets/flower-design-5.jpeg";
import EventDesign1 from "../../assets/event-design-1.jpeg";
import EventDesign2 from "../../assets/event-design-2.jpeg";

import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";

export default function Home() {
  const section_one = [FlowerDesign1, FlowerDesign2, EventDesign1];
  const section_four = [
    [FlowerDesign4, "https://www.instagram.com/p/CsXBgxzuhfr/"],
    [FlowerDesign5, "https://www.instagram.com/p/C2JCjqINjgj/]"],
  ];
  return (
    <>
      <div className="home-hero">
        <div className="hero-text-parent">
          <div className="hero-text">
            <div className="hero-text-brand">GISA DESIGNS</div>
            <div className="hero-text-service">
              Floral Design | Event Design
            </div>
            <div className="hero-text-quote">
              "Transforming dreams into stunning realities, we specialize in
              creating unforgettable celebrations through floral artistry and
              meticulous event design. Whether its floral arrangements or
              intimate gatherings, let us weave elegance and beauty into every
              moment of your special occasion."
            </div>
          </div>
        </div>
        <img src={HeroImage} alt="Hero-Image" />
      </div>

      <div className="seperator">Flower Shop in NYC</div>
      <div className="home-section-1">
        <div className="home-section-1-desc">
          Gisa Designs is a premier, family-owned flower shop in NYC offering
          luxury flower delivery, subscription services, and custom arrangements
          for corporate events, weddings, celebrations, and gift baskets.
        </div>
        <div className="home-section-1-photos">
          {section_one.map((image) => (
            <img src={image} alt="" />
          ))}
        </div>
      </div>
      <div className="home-section-2">
        <img src={EventDesign2} alt="" />
        <div className="home-section-2-desc">
          <div className="title">Event Florals</div>
          <div className="info">
            Bring your event to life with stunning floral centerpieces! Elevate
            corporate luncheons, bridal and baby showers, bar/bat mitzvahs, and
            more. Our designers will work to craft the perfect arrangement to
            fit your event needs.
          </div>
          <Link to="/Services/event-florals" className="learn-more-btn">
            Learn More
          </Link>
        </div>
      </div>
      <div className="home-section-3">
        <div className="sub-container">
          <div className="home-section-3-desc">
            <div className="title">Designers Choice</div>
            <div className="info">
              Leave it to the experts.
              <br /> Our artisans will pick the best, freshest florals available
              to create a stunning arrangement for you.
            </div>
            <Link to="/Services/a-la-carte" className="learn-more-btn">
              Learn More
            </Link>
          </div>
          <img src={FlowerDesign3} alt="" />
        </div>
      </div>
      <div className="home-section-4">
        <div className="social-media">
          <InstagramIcon />
          <div>Giiissa</div>
        </div>
        <div className="home-section-4-photos">
          {section_four.map((image) => (
            <Link to={image[1]}>
              <img src={image[0]} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
