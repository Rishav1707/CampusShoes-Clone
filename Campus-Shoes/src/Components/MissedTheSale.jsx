import "./MissedTheSale.css";

export default function MissedTheSale() {
  return (
    <section className="missed-the-sale">
      <div className="missed-sale-container">
        <div className="missed-sale-images">
          <img
            className="missed-sale-img1"
            src="https://cdn.shopify.com/s/files/1/0607/6678/1671/files/Image-1_91c9ae4d-faa3-48d9-b157-365bfe2ba744_720x.jpg?v=1687265584"
            loading="lazy"
          />
          <img
            className="missed-sale-img2"
            src="https://cdn.shopify.com/s/files/1/0607/6678/1671/files/Image-2_cec95d96-97af-4908-bf12-884b3d92b714_720x.jpg?v=1687265601"
            loading="lazy"
          />
        </div>
        <div className="missed-sale-content">
          <h2>Missed the sale ?</h2>
          <p>Shop from the crazy deals</p>
          <a
            href="https://www.campusshoes.com/collections/min-30-off-on-men-s-shoes"
            rel="noopener noreferrer"
          >
            MIN 30% OFF {">"}
          </a>
        </div>
      </div>
    </section>
  );
}
