/* eslint-disable react/prop-types */
import logo from "../assets/Logo.png";
import search from "../assets/Search.svg";
import wishlist from "../assets/Like.svg";
import cart from "../assets/Cart.svg";
import store from "../assets/Location2.svg";
import hamburger from "../assets/hamburger.svg";
import profile from "../assets/Profile.svg";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar({ toggleMenu }) {
  return (
    <div className="Navbar-Container">
      <div className="Navbar-left">
        <ul>
          <li>
            <Link to="/collections/mens-footwear">MEN</Link>
          </li>
          <li>
            <Link to="/collections/womens-footwear">WOMEN</Link>
          </li>
          <li>
            <Link to="/collections/kids-footwear">KIDS</Link>
          </li>
          <li>
            <Link to="/collections/new-arrival">COLLECTIONS</Link>
          </li>
          <li>
            <Link to="/collections/sale">SALE</Link>
          </li>
          <li>
            <a
              href="https://www.campusactivewear.com/"
              target="_blank"
              rel="noreferrer"
            >
              CORPORATE
            </a>
          </li>
        </ul>
      </div>
      <div className="Mobile-Navbar-left">
        <ul>
          <li onClick={toggleMenu}>
            <img src={hamburger} loading="lazy" />
          </li>
          <li>
            <img src={search} loading="lazy" />
          </li>
        </ul>
      </div>
      <div className="Navbar-logo">
        <a href="http://localhost:5173/">
          <img src={logo} loading="lazy" />
        </a>
      </div>
      <div className="Navbar-right">
        <ul>
          <li>
            <Link to="/account/login">Account</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
            <img className="search-icon" src={search} loading="lazy" />
            <img className="profile-icon" src={profile} loading="lazy" />
          </li>
          <li>
            <Link to="/pages/wishlist">Wishlist</Link>
            <img src={wishlist} loading="lazy" />
          </li>
          <li>
            <Link to="/cart">Cart</Link>
            <img src={cart} loading="lazy" />
          </li>
          <li>
            <a
              href="https://stores.campusshoes.com/"
              target="_blank"
              rel="noreferrer"
            >
              Stores
            </a>
            <img src={store} loading="lazy" />
          </li>
        </ul>
      </div>
    </div>
  );
}
