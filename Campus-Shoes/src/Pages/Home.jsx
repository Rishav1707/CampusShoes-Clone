import image1 from "../assets/asset 2.jpeg";
import image2 from "../assets/asset 3.jpeg";
import image3 from "../assets/asset 4.jpeg";
import left from "../assets/LeftArrow.svg";
import right from "../assets/RightArrow.svg";
import { useState } from "react";
import "./Home.css";

const corousel = [image1, image2, image3];

export default function Home() {
  const [current, setCurrent] = useState(0);

  function nextSlide() {
    setCurrent(current === corousel.length - 1 ? 0 : current + 1);
  }

  function prevSlide() {
    setCurrent(current === 0 ? corousel.length - 1 : current - 1);
  }
  return (
    <section className="Corousel-Image">
      <img
        className="left-arrow"
        src={left}
        onClick={prevSlide}
        loading="lazy"
      />
      <img
        className="right-arrow"
        src={right}
        onClick={nextSlide}
        loading="lazy"
      />
      {corousel.map(
        (image, index) =>
          current === index && (
            <div key={image} className="slide">
              <img src={image} alt="images" />
            </div>
          )
      )}
    </section>
  );
}
