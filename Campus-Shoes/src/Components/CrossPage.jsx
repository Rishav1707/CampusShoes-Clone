import delivery from "../assets/Delivery.svg";
import label from "../assets/Label.svg";
import location from "../assets/Location2.svg";
import "./CrossPage.css";
export default function CrossPage() {
  return (
    <section className="Cross-Page-Promos">
      <div className="Cross-Page-Container">
        <div>
          <img src={delivery} alt="" loading="lazy" />
          <h6>Fast Delivery</h6>
        </div>
        <div>
          <img src={label} alt="" loading="lazy" />
          <h6>15 days easy return</h6>
        </div>
        <div>
          <img src={location} alt="" loading="lazy" />
          <h6>Accepting orders 24/7</h6>
        </div>
      </div>
    </section>
  );
}
