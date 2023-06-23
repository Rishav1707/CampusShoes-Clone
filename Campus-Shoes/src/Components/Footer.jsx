import twitter from "../assets/Twitter.svg";
import facebook from "../assets/Facebook.svg";
import youtube from "../assets/Youtube.svg";
import instagram from "../assets/Instagram.svg";
import "./Footer.css";

export default function Footer() {
  return (
    <section className="Footer-Section">
      <div className="info">
        <div className="What-In-Store">
          <h6>What&apos;s In Store</h6>
          <ul>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>New Arrivals</li>
            <li>SS&apos;23</li>
          </ul>
        </div>
        <div className="Company-info">
          <h6>Company Info & Policies</h6>
          <ul>
            <li>Blogs</li>
            <li>Corporate</li>
            <li>Terms & Conditions</li>
            <li>Privacy & Cookies Policy</li>
            <li>FAQ&apos;s</li>
            <li>Return & Claim Policy</li>
            <li>Contact Us</li>
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
            <img src={twitter} alt="Twitter" loading="lazy" />
            <img src={facebook} alt="Facebook" loading="lazy" />
            <img src={youtube} alt="Youtube" loading="lazy" />
            <img src={instagram} alt="Instagram" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}
