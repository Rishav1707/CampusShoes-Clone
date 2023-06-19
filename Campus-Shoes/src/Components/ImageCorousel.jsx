import image1 from "../assets/asset 2.jpeg";
import image2 from "../assets/asset 3.jpeg";
import image3 from "../assets/asset 4.jpeg";
import image4 from "../assets/asset 2-1.jpeg";
import image5 from "../assets/asset 3-1.jpeg";
import image6 from "../assets/asset 4-1.jpeg";
import left from "../assets/LeftArrow.svg";
import right from "../assets/RightArrow.svg";
import dot from "../assets/Dot.svg";
import { useState } from "react";
import "./ImageCorousel.css";

const DesktopCorousel = [image1, image2, image3];
const MobileCorousel = [image4, image5, image6];

export default function ImageCorousel() {
  const [current, setCurrent] = useState(0);

  function nextSlide() {
    setCurrent(current === DesktopCorousel.length - 1 ? 0 : current + 1);
  }

  function prevSlide() {
    setCurrent(current === 0 ? DesktopCorousel.length - 1 : current - 1);
  }
  return (
    <>
      <section className="Desktop-Corousel-Image">
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
        {DesktopCorousel.map(
          (image, index) =>
            current === index && (
              <div key={image} className="slide">
                <img src={image} alt="images" />
              </div>
            )
        )}
      </section>
      <section className="Mobile-Corousel-Image">
        <img
          className="left-arrow"
          src={dot}
          onClick={prevSlide}
          loading="lazy"
        />
        <img
          className="right-arrow"
          src={dot}
          onClick={nextSlide}
          loading="lazy"
        />
        {MobileCorousel.map(
          (image, index) =>
            current === index && (
              <div key={image} className="slide">
                <img src={image} alt="images" />
              </div>
            )
        )}
      </section>
    </>
  );
}
