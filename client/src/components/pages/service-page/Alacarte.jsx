import { Link } from "react-router-dom";

import "../../../styles/pages/service-page/Alacarte.css";
import Option1 from "../../../assets/a-la-carte-item-1.1.jpeg";
import Option1_2 from "../../../assets/a-la-carte-item-1.2.jpeg";
import Option2 from "../../../assets/a-la-carte-item-2.1.jpeg";
import Option2_2 from "../../../assets/a-la-carte-item-2.2.jpeg";
import Option3 from "../../../assets/a-la-carte-item-3.1.jpg";
import Option3_2 from "../../../assets/a-la-carte-item-3.2.jpg";

import { motion, delay } from "framer-motion";

import updatePageTitle from "../helpers/pageTitle";
import AlacarteItem from "./AlacarteItem";

export default function Alacarte() {
  updatePageTitle("A La Carte Menu");

  const items = [
    {
      "image-1": Option1,
      "image-2": Option1_2,
      title: "Bridal Bouquet — $75",
      desc: " Bridal Bouquet with a mix of Mid-Range to High-Range flowers. Tied with a ribbon and packaged in glass vase with water.Approx. 10-12 inches in diameter.",
    },
    {
      "image-1": Option2,
      "image-2": Option2_2,
      title: "Small Centerpiece — $65",
      desc: "Beautifully arranged with a mix of Mid-Range to High-Range flowers. Vase is a rental. Approx. 8-10 inches in diameter.",
    },
    {
      "image-1": Option3,
      "image-2": Option3_2,
      title: `Bud Vase — $12 ${(<br />)} (Min. Order of 3 Bud Vases)`,
      desc: "Dainty yet fulfilling design. A mix of Mid-Range to High-Range flowers. Vase is approx. 4-7 inches tall and is a rental. Approx. 3-4 inches in diameter.",
    },
  ];

  const serviceHeaderVariants = {
    enter: { y: 10, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { delay: 0.6, duration: 0.6 } },
  };

  const serviceDescVariants = {
    enter: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.6, duration: 0.5 } },
  };

  return (
    <div className="a-la-carte-container">
      <div className="a-la-carte-header">
        <motion.h1
          initial="enter"
          animate="visible"
          variants={serviceDescVariants}
        >
          Welcome to our A La Carte selection, where nature's beauty meets
          budget-friendly choices!
        </motion.h1>
        <motion.p
          initial="enter"
          animate="visible"
          variants={serviceDescVariants}
        >
          While you won't be customizing specific designs or flower choices,
          rest assured that our expertly curated seasonal blooms will bring
          charm and elegance to your arrangement. Simply pick your preferred
          color palette, and let us work our magic to create a stunning addition
          to your event.
        </motion.p>
        <motion.p
          initial="enter"
          animate="visible"
          variants={serviceDescVariants}
        >
          Ideal for those seeking both quality and budget-friendly options, our
          a la carte offerings promise a touch of natural splendor without
          breaking the bank.
        </motion.p>
      </div>
      <div className="a-la-carte-body">
        <div className="carte-items">
          <ul>
            {items.map((item, index) => (
              <AlacarteItem item={item} key={index} />
            ))}
          </ul>
        </div>
      </div>
      <div className="carte-footer">
        <p>
          Please fill out our <Link to="/Contact">Contact Form </Link> and
          indicate your interest in our A La Carte Menu for your event. In our
          message box specify which items and quantities you are interested in.
          Additionally, select one of our three color palette options: Neutral &
          White Color Palette, Romantic Autumn Color Palette, or Designer's
          Choice.
        </p>
        <p>We will reach out to answer any questions and confirm your order.</p>
      </div>
    </div>
  );
}
