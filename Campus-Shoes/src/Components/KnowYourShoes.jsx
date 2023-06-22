import "./KnowYourShoes.css";

export default function KnowYourShoes() {
  return (
    <section>
      <div className="KnowYourShoes-Heading">
        <h1>Know Your Shoes!</h1>
      </div>
      <div className="KnowYourShoes-title">
        <p>Get To Know The Tech That Makes Your Shoes More Special.</p>
      </div>
      <div className="Features-Images">
        <div className="Features-Images-Corousel">
          <img
            src="https://cdn.shopify.com/s/files/1/0607/6678/1671/files/Air-Capsule_1296x.jpg?v=1687265337"
            loading="lazy"
          />
          <h3>Air Capsule</h3>
          <p>For Responsive Impact Cushioning.</p>
        </div>
        <div className="Features-Images-Corousel">
          <img
            src="https://cdn.shopify.com/s/files/1/0607/6678/1671/files/Yoga-Flex_1296x.jpg?v=1687265433"
            loading="lazy"
          />
          <h3>Yoga-Flex</h3>
          <p>Flexible & Bouncy Footbed</p>
        </div>
      </div>
    </section>
  );
}
