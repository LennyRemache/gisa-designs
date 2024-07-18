import { Link } from "react-router-dom";

import "../../../styles/pages/service-page/Alacarte.css";
import Option1 from "../../../assets/a-la-carte-item-1.1.jpeg";
import Option1_2 from "../../../assets/a-la-carte-item-1.2.jpeg";
import Option2 from "../../../assets/a-la-carte-item-2.1.jpeg";
import Option2_2 from "../../../assets/a-la-carte-item-2.2.jpeg";
import Option3 from "../../../assets/a-la-carte-item-3.1.jpg";
import Option3_2 from "../../../assets/a-la-carte-item-3.2.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Alacarte() {
  const settings = {
    arrows: false,
    dots: true,
    infinite: false,
    draggable: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="a-la-carte-container">
      <div className="a-la-carte-header">
        <h1>A La Carte Menu</h1>
        <p>
          Welcome to our A La Carte selection, where nature's beauty meets
          budget-friendly choices!
        </p>
        <p>
          While you won't be customizing specific designs or flower choices,
          rest assured that our expertly curated seasonal blooms will bring
          charm and elegance to your arrangement. Simply pick your preferred
          color palette, and let us work our magic to create a stunning addition
          to your event.
        </p>
        <p>
          Ideal for those seeking both quality and budget-friendly options, our
          a la carte offerings promise a touch of natural splendor without
          breaking the bank.
        </p>
      </div>
      <div className="a-la-carte-body">
        <div className="carte-items">
          <ul>
            <li className="carte-item">
              <Slider {...settings} className="carte-carousel">
                <div className="carte-item-img">
                  <img src={Option1} alt="" srcset="" />
                </div>
                <div className="carte-item-img">
                  <img src={Option1_2} alt="" srcset="" />
                </div>
              </Slider>

              <div className="carte-item-desc">
                <h2>Bridal Bouquet — $75</h2>
                <p>
                  Bridal Bouquet with a mix of Mid-Range to High-Range flowers.
                  Tied with a ribbon and packaged in glass vase with water.
                  Approx. 10-12 inches in diameter.
                </p>
              </div>
            </li>
            <li className="carte-item">
              <Slider {...settings} className="carte-carousel">
                <div className="carte-item-img">
                  <img src={Option2} alt="" srcset="" />
                </div>
                <div className="carte-item-img">
                  <img src={Option2_2} alt="" srcset="" />
                </div>
              </Slider>
              <div className="carte-item-desc">
                <h2>Small Centerpiece — $65</h2>
                <p>
                  Beautifully arranged with a mix of Mid-Range to High-Range
                  flowers. Vase is a rental. Approx. 8-10 inches in diameter.
                </p>
              </div>
            </li>
            <li className="carte-item">
              <Slider {...settings} className="carte-carousel">
                <div className="carte-item-img">
                  <img src={Option3} alt="" srcset="" />
                </div>
                <div className="carte-item-img">
                  <img src={Option3_2} alt="" srcset="" />
                </div>
              </Slider>

              <div className="carte-item-desc">
                <h2>
                  Bud Vase — $12
                  <br />
                  (Min. Order of 3 Bud Vases)
                </h2>
                <p>
                  Dainty yet fulfilling design. A mix of Mid-Range to High-Range
                  flowers. Vase is approx. 4-7 inches tall and is a rental.
                  Approx. 3-4 inches in diameter.
                </p>
              </div>
            </li>
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
