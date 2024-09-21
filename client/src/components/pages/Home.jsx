import "../../styles/pages/Home.css";
import HeroImage from "../../assets/home-flowers-1.jpg";
import FlowerDesign1 from "../../assets/flower-design-1.jpeg";
import FlowerDesign2 from "../../assets/flower-design-2.jpeg";
import FlowerDesign3 from "../../assets/flower-design-3.jpeg";
import FlowerDesign4 from "../../assets/flower-design-4.jpeg";
import FlowerDesign5 from "../../assets/flower-design-5.jpeg";
import FlowerDesign6 from "../../assets/flower-design-6.jpeg";
import FlowerDesign7 from "../../assets/flower-design-7.jpeg";
import FlowerDesign8 from "../../assets/flower-design-8.jpg";
import EventDesign1 from "../../assets/event-design-1.jpeg";
import EventDesign2 from "../../assets/event-design-2.jpeg";
import EventDesign3 from "../../assets/event-design-3.jpeg";

import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import updatePageTitle from "./helpers/pageTitle";
import { duration } from "@mui/material";

export default function Home() {
  updatePageTitle();

  const section_one = [FlowerDesign1, FlowerDesign2, FlowerDesign6];
  const section_four = [
    [FlowerDesign4, "https://www.instagram.com/p/CsXBgxzuhfr/"],
    [FlowerDesign8, "https://www.instagram.com/p/C63h5pWNoVf/"],
  ];

  const pageVariants = {
    enter: { opacity: 1 },
    visible: { opacity: 1, transition: { duration: 0.25 } },
    exit: { opacity: 0, transition: { duration: 0.25 } },
  };

  const heroBrandVariants = {
    enter: { y: 35, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { delay: 0.6, duration: 0.6 } },
  };

  const heroServiceVariants = {
    enter: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.6, duration: 0.5 } },
  };

  const sectionOneImgVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 * index,
        duration: 1,
      },
    }),
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

          <img src={EventDesign3} alt="Hero-Image" />
        </div>

        <div className="seperator">Floral Studio Based in NYC</div>

        <div className="home-section-1">
          <div className="home-section-1-desc">
            Creating unique floral arrangements for micro weddings, elopements,
            and special events, from corporate functions to baby showers. Let me
            bring a touch of nature's beauty to your special moments.
          </div>
          <div className="home-section-1-photos">
            {section_one.map((image, index) => (
              <motion.img
                src={image}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={sectionOneImgVariants}
                custom={index}
              />
            ))}
          </div>
        </div>

        {/*
        <div className="home-section-2">
          <img src={FlowerDesign3} alt="" />
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
        */}
        <div className="home-section-3">
          <div className="sub-container">
            <div className="home-section-3-desc">
              <div className="title">
                Designer’s Touch Meets Your Unique Vision
              </div>
              <div className="info">
                I blend my floral expertise with your unique vision through a
                collaborative process. By listening closely to your ideas and
                inspirations, I work with you to select the perfect flowers,
                colors, extra design elements, etc. My goal is to use my
                knowledge to guide you and craft bespoke floral creations that
                bring your dreams to life with my artistic touch. Together, we
                create floral designs as unique and memorable as your event.
              </div>
              {/*<Link to="/Services/a-la-carte" className="learn-more-btn">
                Learn More
              </Link>*/}
            </div>
            <img src={FlowerDesign7} alt="" />
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
