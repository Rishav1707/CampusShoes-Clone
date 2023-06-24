import twitter from "../assets/Twitter.svg";
import facebook from "../assets/Facebook.svg";
import youtube from "../assets/Youtube.svg";
import instagram from "../assets/Instagram.svg";
import amex from "../assets/Amex.svg";
import dc from "../assets/DC.svg";
import maestro from "../assets/Maestro.svg";
import mastercard from "../assets/Mastercard.svg";
import visa from "../assets/Visa.svg";
import "./Footer.css";

export default function Footer() {
  return (
    <section className="Footer-Section">
      <div className="info">
        <div className="What-In-Store">
          <h6>What&apos;s In Store</h6>
          <ul>
            <li>
              <a href="/collections/mens-footwear">Men</a>
            </li>
            <li>
              <a href="/collections/womens-footwear">Women</a>
            </li>
            <li>
              <a href="/collections/kids-footwear">Kids</a>
            </li>
            <li>
              <a href="/collections/new-arrival">New Arrivals</a>
            </li>
            <li>
              <a href="/collections/new-arrival">SS&apos;23</a>
            </li>
          </ul>
        </div>
        <div className="Company-info">
          <h6>Company Info & Policies</h6>
          <ul>
            <li>
              <a href="https://www.campusshoes.com/blogs/news">Blogs</a>
            </li>
            <li>
              <a
                href="https://www.campusactivewear.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Corporate
              </a>
            </li>
            <li>
              <a href="https://www.campusshoes.com/pages/terms-conditions">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="https://www.campusshoes.com/pages/privacy-cookie-policy">
                Privacy & Cookies Policy
              </a>
            </li>
            <li>
              <a href="https://www.campusshoes.com/pages/faqs">FAQ&apos;s</a>
            </li>
            <li>
              <a href="https://www.campusshoes.com/pages/payment-options">
                Return & Claim Policy
              </a>
            </li>
            <li>
              <a href="https://www.campusshoes.com/pages/contact">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="get-in-touch">
          <h6>Get In Touch</h6>
          <p>For Online Orders</p>
          <p className="Inquiry-Complaint">
            <strong className="margin-right">Inquiry/Complaint:</strong>
            <br />
            {"+91-11-43272500"}
            <br />
            <em>10.30AM to 6:00PM (Monday to Friday)</em>
          </p>
          <p className="Any-Other-queries">
            <strong className="margin-right">Any Other queries:</strong>
            <br />
            {"+91-11-43272500/120"}
            <br />
            <em>10.30AM to 6:00PM (Monday to Friday)</em>
          </p>
          <p>
            <strong>Email: </strong>
            <a
              href="mailto:customercare@campusshoes.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              customercare@campusshoes.com
            </a>
          </p>
        </div>
        <div className="newsletter">
          <h6>Newsletter</h6>
          <p>
            Sign up for exclusive offers, original stories, activism awareness,
            events and more.
          </p>
          <input type="email" placeholder="Enter email" />
          <button type="submit">SIGN UP</button>
          <div className="social-icon">
            <a
              href="https://twitter.com/campusshoes"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={twitter} alt="Twitter" loading="lazy" />
            </a>
            <a
              href="https://www.facebook.com/CampusShoes/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={facebook} alt="Facebook" loading="lazy" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCyzQ4Qo6jU5M5oPP6vUOi5Q"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={youtube} alt="Youtube" loading="lazy" />
            </a>
            <a
              href="https://www.instagram.com/campusshoes/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={instagram} alt="Instagram" loading="lazy" />
            </a>
          </div>
        </div>
      </div>

      <div className="Popular-Searches">
        <h2>Popular Searches</h2>
        <div className="Mens-Category">
          <a href="/collections/mens-footwear">Men&apos;s footwear</a>
          <a href="#">Men&apos;s Running Shoes</a>
          <a href="#">Men&apos;s Walking Shoes</a>
          <a href="#">Men&apos;s Casual Shoes</a>
          <a href="#">Men&apos;s Sports Shoes</a>
          <a href="#">Men&apos;s Sneakers</a>
          <a href="#">Men&apos;s Casual Sandals</a>
          <a href="#">Men&apos;s Sports Sandals</a>
          <a href="#">Men&apos;s Flip Flops & Slides</a>
          <a href="#">Men&apos;s Flip Flops</a>
          <a href="#">Men&apos;s Slides</a>
        </div>
        <div className="Womens-Category">
          <a href="/collections/womens-footwear">Women&apos;s Footwear</a>
          <a href="#">Women&apos;s Running Shoes</a>
          <a href="#">Women&apos;s Casual Shoes</a>
          <a href="#">Women&apos;s Sports Shoes</a>
          <a href="#">Sneakers</a>
          <a href="#">Women&apos;s Casual Sandal</a>
          <a href="#">Women&apos;s Sports Sandal</a>
          <a href="#">Women&apos;s Flip Flops & Slides</a>
          <a href="#">Women&apos;s Flip Flops</a>
          <a href="#">Women&apos;s Slides</a>
        </div>
        <div className="Kids-Category">
          <a href="/collections/kids-footwear">Kid&apos;s footwear</a>
          <a href="#">Kid&apos;s Running Shoes</a>
          <a href="#">Kid&apos;s Walking Shoes</a>
          <a href="#">Kid&apos;s Casual Shoes</a>
          <a href="#">Kid&apos;s School Shoes</a>
          <a href="#">Kid&apos;s Sports Shoes</a>
          <a href="#">Kid&apos;s Sandals & Floaters</a>
          <a href="#">Kid&apos;s Casual Sandals</a>
          <a href="#">Kid&apos;s Sports Sandals</a>
          <a href="#">Kid&apos;s Flip Flops & Slides</a>
          <a href="#">Kid&apos;s Flip Flops</a>
        </div>
      </div>

      <div className="lower-Footer-Section">
        <p className="copyright">
          © 2023 Campus Shoes. Powered by{" "}
          <a
            href="https://my-portfolio-indol-two.vercel.app/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Rishav Raj
          </a>
        </p>
        <div className="payment-option">
          <img src={amex} alt="Amex card" loading="lazy" />
          <img src={dc} alt="Amex card" loading="lazy" />
          <img src={maestro} alt="Amex card" loading="lazy" />
          <img src={mastercard} alt="Amex card" loading="lazy" />
          <img src={visa} alt="Amex card" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
