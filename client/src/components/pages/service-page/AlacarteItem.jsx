import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../../../styles/pages/service-page/Alacarte.css";

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

  return (
    <li className="carte-item">
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
    </li>
  );
}

export default AlacarteItem;
