import "../../styles/pages/Home.css";
import HeroImage from "../../assets/home-flowers-1.jpg";

export default function Home() {
  return (
    <>
      <div className="home-hero">
        <img src={HeroImage} alt="" />
      </div>
    </>
  );
}
