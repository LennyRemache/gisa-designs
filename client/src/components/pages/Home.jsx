import "../../styles/pages/Home.css";
import HeroImage from "../../assets/home-flowers-1.jpg";

export default function Home() {
  return (
    <>
      <div className="home-hero">
        <div className="hero-text-parent">HELLO</div>
        <div className="hero-image-parent">
          <img src={HeroImage} alt="" />
          <div className="hero-image-shadow">LOLL</div>
        </div>
      </div>
    </>
  );
}
