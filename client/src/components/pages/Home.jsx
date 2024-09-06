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
import { motion, AnimatePresence } from "framer-motion";

import updatePageTitle from "./helpers/pageTitle";
import { duration } from "@mui/material";

export default function Home() {
  updatePageTitle();

  const section_one = [FlowerDesign1, FlowerDesign2, EventDesign1];
  const section_four = [
    [FlowerDesign4, "https://www.instagram.com/p/CsXBgxzuhfr/"],
    [FlowerDesign5, "https://www.instagram.com/p/C2JCjqINjgj/]"],
  ];

  const pageVariants = {
    enter: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.25 } },
    exit: { opacity: 0, transition: { duration: 0.25 } },
  };

  const heroBrandVariants = {
    enter: { y: 35, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.6 } },
  };

  const heroServiceVariants = {
    enter: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.3, duration: 0.5 } },
  };

  return (
    <AnimatePresence>
      <motion.div
        initial="enter"
        animate="visible"
        exit="exit"
        variants={pageVariants}
      >
        <div className="home-hero">
          <div className="hero-text-parent">
            <div className="hero-text">
              <motion.div
                className="hero-text-brand"
                variants={heroBrandVariants}
              >
                GISA DESIGNS
              </motion.div>
              <motion.div
                className="hero-text-service"
                variants={heroServiceVariants}
              >
                Floral Design | Event Design
              </motion.div>
              <motion.div className="hero-text-quote">
                "Transforming dreams into stunning realities, we specialize in
                creating unforgettable celebrations through floral artistry and
                meticulous event design. Whether its floral arrangements or
                intimate gatherings, let us weave elegance and beauty into every
                moment of your special occasion."
              </motion.div>
            </div>
          </div>
          <img src={HeroImage} alt="Hero-Image" />
        </div>

        <div className="seperator">Flower Shop in NYC</div>
        <div className="home-section-1">
          <div className="home-section-1-desc">
            Gisa Designs is a premier, family-owned flower shop in NYC offering
            luxury flower delivery, subscription services, and custom
            arrangements for corporate events, weddings, celebrations, and gift
            baskets.
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
              Bring your event to life with stunning floral centerpieces!
              Elevate corporate luncheons, bridal and baby showers, bar/bat
              mitzvahs, and more. Our designers will work to craft the perfect
              arrangement to fit your event needs.
            </div>
          </div>
        </div>
        <div className="home-section-3">
          <div className="sub-container">
            <div className="home-section-3-desc">
              <div className="title">Designers Choice</div>
              <div className="info">
                Leave it to the experts.
                <br />
                Our artisans will pick the best, freshest florals available to
                create a stunning arrangement for you.
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
      </motion.div>
    </AnimatePresence>
  );
}
