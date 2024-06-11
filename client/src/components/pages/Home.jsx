import "../../styles/pages/Home.css";
import HeroImage from "../../assets/home-flowers-1.jpg";

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
        <img src={HeroImage} alt="" />
      </div>
    </>
  );
}
