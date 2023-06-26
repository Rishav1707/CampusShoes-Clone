import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./Pages/Home";
import Mens from "./Pages/Mens";
import Womens from "./Pages/Womens";
import Kids from "./Pages/Kids";
import NewArrival from "./Pages/NewArrival";
import Sale from "./Pages/Sale";
import Login from "./Pages/Login";
import Search from "./Pages/Search";
import Wishlist from "./Pages/Wishlist";
import Cart from "./Pages/Cart";
import Navbar from "./Components/Navbar";
import DiscountBanner from "./Components/DiscountBanner";
import MobileMenu from "./Components/MobileMenu";
import "./App.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <BrowserRouter>
      <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <DiscountBanner />
      <Navbar toggleMenu={toggleMenu} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/collections/mens-footwear" element={<Mens />} />
        <Route exact path="/collections/womens-footwear" element={<Womens />} />
        <Route exact path="/collections/kids-footwear" element={<Kids />} />
        <Route exact path="/collections/new-arrival" element={<NewArrival />} />
        <Route exact path="/collections/sale" element={<Sale />} />
        <Route exact path="/account/login" element={<Login />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/pages/wishlist" element={<Wishlist />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
