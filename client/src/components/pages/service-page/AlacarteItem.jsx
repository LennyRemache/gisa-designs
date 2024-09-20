import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, delay } from "framer-motion";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AlacarteItem({ item }) {
  const settings = {
    arrows: false,
    dots: true,
    infinite: false,
    draggable: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  const serviceItemVariant1 = {
    hidden: { opacity: 0, y: 75 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.6 },
    },
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.li
      className="carte-item"
      initial="hidden"
      animate={mainControls}
      variants={serviceItemVariant1}
      ref={ref}
    >
      <Slider {...settings} className="carte-carousel">
        <div className="carte-item-img">
          <img src={item["image-1"]} alt="" srcSet="" />
        </div>
        <div className="carte-item-img">
          <img src={item["image-2"]} alt="" srcSet="" />
        </div>
      </Slider>
      <div className="carte-item-desc">
        <h2>{item.title}</h2>
        <p>{item.desc}</p>
      </div>
    </motion.li>
  );
}

export default AlacarteItem;
