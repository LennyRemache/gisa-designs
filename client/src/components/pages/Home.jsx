import "../../styles/pages/Home.css";
import HeroImage from "../../assets/home-flowers-1.jpg";
import FlowerDesign1 from "../../assets/flower-design-1.jpeg";
import FlowerDesign2 from "../../assets/flower-design-2.jpeg";
import EventDesign1 from "../../assets/event-design-1.jpeg";

export default function Home() {
  return (
    <>
      <div className="home-hero">
        <div className="hero-text-parent">
          <div className="hero-text">
            <div className="hero-text-brand">Gisa Designs</div>
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

      <div className="seperator">Luxury Flower Shop in NYC</div>
      <div className="home-section-1">
        <div className="home-section-1-desc">
          Gisa Designs is a premier, family-owned flower shop in NYC offering
          luxury flower delivery, subscription services, and custom arrangements
          for corporate events, weddings, celebrations, and gift baskets.
        </div>
        <div className="home-section-1-photos">
          <img src={FlowerDesign1} alt="" />
          <img src={FlowerDesign2} alt="" />
          <img src={EventDesign1} alt="" />
        </div>
      </div>
      <div>TEST</div>
    </>
  );
}
