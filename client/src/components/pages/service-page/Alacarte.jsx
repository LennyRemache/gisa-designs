import "../../../styles/pages/service-page/Alacarte.css";
import Option1 from "../../../assets/a-la-carte-item-1.1.jpeg";
import Option2 from "../../../assets/a-la-carte-item-2.1.jpeg";
import Option3 from "../../../assets/a-la-carte-item-3.1.jpeg";

export default function Alacarte() {
  return (
    <div>
      <div className="a-la-carte-header">
        <h1>A La Carte Menu</h1>
        <p>
          Welcome to our A La Carte selection, where nature's beauty meets
          budget-friendly choices!
        </p>
        <p>
          While you won't be customizing specific designs or flower choices,
          rest assured that our expertly curated seasonal blooms will bring
          charm and elegance to your arrangement.Simply pick your preferred
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
            <li>
              <div className="carte-item-img">
                <img src={Option1} alt="" srcset="" />
              </div>

              <div className="carte-item-desc">
                <h2>Bridal Bouquet — $75</h2>
                <p>
                  Bridal Bouquet with a mix of Mid-Range to High-Range flowers.
                  Tied with a ribbon and packaged in glass vase with water.
                  Approx. 10-12 inches in diameter
                </p>
              </div>
            </li>
            <li>
              <div className="carte-item-img">
                <img src={Option2} alt="" srcset="" />
              </div>
              <div className="carte-item-desc">
                <h2>Small Centerpiece — $65</h2>
                <p>
                  Beautifully arranged with a mix of Mid-Range to High-Range
                  flowers. Vase is a rental. Approx. 8-10 inches in diameter.{" "}
                </p>
              </div>
            </li>
            <li>
              <div className="carte-item-img">
                <img src={Option3} alt="" srcset="" />
              </div>
              <div className="carte-item-desc">
                <h2>Bud Vase — $12 (Min. Order of 3 Bud Vases) </h2>
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
    </div>
  );
}
