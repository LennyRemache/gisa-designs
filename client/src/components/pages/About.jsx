import "../../styles/pages/About.css";
import SelfImageOne from "../../assets/self-image-1.jpeg";
import SelfImageTwo from "../../assets/self-image-2.jpeg";
import DesignImg from "../../assets/about-section-1.jpeg";
import CinemaImg from "../../assets/about-section-2.jpeg";

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
      </div>
      <div className="about-section">
        <div className="about-section-1">
          <div className="creative-img">
            <img src={DesignImg} alt="" />
          </div>
          <div className="creative-desc">
            <h2>Design Obsessed</h2>
            <p>
              My journey also led me to the art of event design. My creativity
              is rooted in a blend of elegance, passion for eccentric ideas, and
              a deep understanding of my clients’ visions. By meticulously
              curating each element, I aim to tell a unique story, and it is my
              privilege to bring that narrative to life through the language of
              flowers and design.
            </p>
          </div>
        </div>
        <div className="about-section-2">
          <div className="cinema-desc">
            <h2>My BIG 3</h2>
            <p>
              Beyond design, I enjoy spending my free time at the cinema. My BIG
              3 are: Twilight, West Side Story, and The Hunger Games.
            </p>
          </div>
          <div className="cinema-img">
            <img src={CinemaImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
