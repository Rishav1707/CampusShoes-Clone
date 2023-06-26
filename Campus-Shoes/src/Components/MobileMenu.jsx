/* eslint-disable react/prop-types */
import "./MobileMenu.css";

export default function MobileMenu({ isMenuOpen, toggleMenu }) {
  return (
    <section
      className={`Mobile-menu ${isMenuOpen ? "show-menu" : "hide-menu"}`}
    >
      <div className="Mobile-menu-container">
        <div className="Cancel-Button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#787a7c"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-x"
            onClick={toggleMenu}
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
        <div className="Menu-item">
          <ul>
            <li>
              <a href="/collections/mens-footwear" style={{ width: "70%" }}>
                MEN
              </a>
              <a href="/collections/mens-footwear">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-chevron-right"
                >
                  <title>Right</title>
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </a>
            </li>
            <li>
              <a href="/collections/womens-footwear" style={{ width: "70%" }}>
                WOMEN
              </a>
              <a href="http://">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-chevron-right"
                >
                  <title>Right</title>
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </a>
            </li>
            <li>
              <a href="/collections/kids-footwear" style={{ width: "70%" }}>
                KIDS
              </a>
              <a href="http://">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-chevron-right"
                >
                  <title>Right</title>
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </a>
            </li>
            <li>
              <a href="/collections/new-arrival" style={{ width: "70%" }}>
                COLLECTIONS
              </a>
              <a href="http://">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-chevron-right"
                >
                  <title>Right</title>
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </a>
            </li>
            <li>
              <a href="/collections/sale" style={{ width: "70%" }}>
                SALE
              </a>
            </li>
            <li>
              <a
                href="https://www.campusactivewear.com/"
                target="_blank"
                rel="noreferrer noopener"
                style={{ width: "70%" }}
              >
                CORPORATE
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
