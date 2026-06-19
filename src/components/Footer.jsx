import { Link } from "react-router-dom";
import "../styles/footer.css";
import logo from "../assets/images/logo.png";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">
          <img src={logo} alt="Remo Crochet Works" />

          <h3>Remo Crochet Works</h3>

          <p className="footer-tagline">
            Handcrafted with Love & Purpose
          </p>

          <p className="footer-text">
            Every stitch is a memory in the making.
            Thank you for being part of our story.
          </p>

          <div className="footer-socials">
            <span>📸</span>
            <span>💬</span>
            <span>📌</span>
          </div>
        </div>

        <div className="footer-links">
          <h3>Collections</h3>

          <Link to="/collections">Keychains</Link>
          <Link to="/collections">Flowers & Bouquets</Link>
          <Link to="/collections">Hair Accessories</Link>
          <Link to="/collections">Handbags</Link>
          <Link to="/collections">Bag Charms</Link>
          <Link to="/collections">Home Décor</Link>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <Link to="/about">Our Story</Link>
          <Link to="/why-remo">Why Choose Us</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/reviews">Reviews</Link>
          <Link to="/contact">Custom Orders</Link>
        </div>

        <div className="footer-links">
          <h3>Contact</h3>

          <a
            href="https://www.instagram.com/remocrochetworks"
            target="_blank"
            rel="noreferrer"
          >
            @remocrochetworks
          </a>

          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp Us
          </a>

          <a href="mailto:hello@remocrochetworks.com">
            hello@remocrochetworks.com
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 Remo Crochet Works • Made with 🤍</p>

        <p>Crafted with love, one stitch at a time</p>
      </div>

    </footer>
  );
}

export default Footer;