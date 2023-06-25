import "./MobileMenu.css";
import cancel from "../assets/Cross2.svg";
// import right from "../assets/Right1.svg";

export default function MobileMenu() {
  return (
    <section className="Mobile-menu">
      <div className="Mobile-menu-container">
        <div className="Cancel-Button">
          <img src={cancel} alt="Cancel Button" />
        </div>
        <div className="Menu-item">
          <ul>
            <li>
              <a href="http://" style={{ width: "70%" }}>
                MEN
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
              <a href="http://" style={{ width: "70%" }}>
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
              <a href="http://" style={{ width: "70%" }}>
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
              <a href="http://" style={{ width: "70%" }}>
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
              <a href="http://" style={{ width: "70%" }}>
                SALE
              </a>
            </li>
            <li>
              <a href="http://" style={{ width: "70%" }}>
                CORPORATE
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
