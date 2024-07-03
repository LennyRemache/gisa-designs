import "../../styles/pages/About.css";
import SelfImageOne from "../../assets/self-image-1.jpeg";
import SelfImageTwo from "../../assets/self-image-2.jpeg";

export default function About() {
  return (
    <div className="about-parent">
      <div className="about-header">
        <h1 className="about-header-title">Hi, I'm Gisa!</h1>
        <p>
          Born and raised in the vibrant energy of New York City and with
          Ecuadorian roots, I've always been drawn to the beauty of nature. With
          each visit to Ecuador, my appreciation for its natural beauty deepens,
          filling me with a sense of tranquility and sparking a profound passion
          for flowers and design within me.
        </p>
        <div className="about-self-images">
          <div className="self-image-1">
            <img src={SelfImageOne} alt="" />
          </div>
          <div className="self-image-2">
            <img src={SelfImageTwo} alt="" />
          </div>
        </div>
        <div className="about-section">
          <div className="about-section-1">
            <img src="" alt="" />
            <div className=""></div>
          </div>
          <div className="about-section-2">
            <img src="" alt="" />
            <div className=""></div>
          </div>
        </div>
      </div>
    </div>
  );
}
