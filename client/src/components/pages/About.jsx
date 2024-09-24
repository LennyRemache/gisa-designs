import "../../styles/pages/About.css";
import SelfImageOne from "../../assets/self-image-1.jpeg";
import SelfImageTwo from "../../assets/self-image-2.jpeg";
import DesignImg from "../../assets/about-section-1.jpeg";
import CinemaImg from "../../assets/about-section-2.jpeg";
import updatePageTitle from "./helpers/pageTitle";

import { delay, motion } from "framer-motion";

export default function About() {
  updatePageTitle("About");

  const headerTextVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,

      transition: { duration: 0.6, delay: 0.2 },
    },
  };

  const headerImage1Variants = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: () => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: 0.2 },
    }),
  };

  const headerImage2Variants = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: () => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: 0.2 },
    }),
  };

  const aboutSectionVariants = {
    hidden: {
      opacity: 0,
    },
    visible: () => ({
      opacity: 1,
      transition: { duration: 0.6, delay: 0.4 },
    }),
  };

  return (
    <div className="about-parent">
      <div className="about-header">
        <motion.h1
          className="about-header-title"
          initial="hidden"
          animate="visible"
          variants={headerTextVariants}
        >
          Hi, I'm Gisa!
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={headerTextVariants}
        >
          Born and raised in the vibrant energy of New York City and with
          Ecuadorian roots, I've always been drawn to the beauty of nature. With
          each visit to Ecuador, my appreciation for its natural beauty deepens,
          filling me with a sense of tranquility and sparking a profound passion
          for flowers and design within me.
        </motion.p>
        <div className="about-self-images">
          <div className="self-image-1">
            <motion.img
              src={SelfImageOne}
              alt=""
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={headerImage1Variants}
            />
          </div>
          <div className="self-image-2">
            <motion.img
              src={SelfImageTwo}
              alt=""
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={headerImage2Variants}
            />
          </div>
        </div>
      </div>
      <div className="about-section">
        <motion.div
          className="about-section-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={aboutSectionVariants}
        >
          <div className="creative-img">
            <img src={DesignImg} alt="" />
          </div>
          <div className="creative-desc">
            <h2>Design-Obsessed</h2>
            <p>
              My journey also led me to the art of event design. My creativity
              is rooted in a blend of elegance, passion for eccentric ideas, and
              a deep understanding of my clients’ visions. By meticulously
              curating each element, I aim to tell a unique story, and it is my
              privilege to bring that narrative to life through the language of
              flowers and design.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="about-section-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={aboutSectionVariants}
        >
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
        </motion.div>
      </div>
    </div>
  );
}
