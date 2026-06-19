import { Link } from "react-router-dom";
import "../styles/navbar.css";
import logo from "../assets/images/logo.png";

function Navbar() {
  return (
    <nav>
      <Link className="logo" to="/">
        <img src={logo} alt="Remo Crochet Works" />
      </Link>

      <div className="nav-links">
        <Link to="/about">About</Link>
        <Link to="/collections">Collections</Link>
         <Link to="/gallery">Gallery</Link>
        <Link to="/why-remo">Why Remo</Link>
       
        <Link to="/reviews">Reviews</Link>

        <Link className="contact-btn" to="/contact">
          Contact Us
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;