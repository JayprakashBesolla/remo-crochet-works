import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/floatingMenu.css";

function FloatingMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="floating-menu">
      {open && (
        <div className="menu-items">
          <Link to="/" onClick={() => setOpen(false)}>
            🏠 Home
          </Link>

          <Link to="/about" onClick={() => setOpen(false)}>
            📖 About
          </Link>

          <Link to="/collections" onClick={() => setOpen(false)}>
            🧶 Collections
          </Link>

          <Link to="/why-remo" onClick={() => setOpen(false)}>
            💖 Why Remo
          </Link>

          <Link to="/gallery" onClick={() => setOpen(false)}>
            🖼 Gallery
          </Link>

          <Link to="/reviews" onClick={() => setOpen(false)}>
            ⭐ Reviews
          </Link>

          <Link to="/contact" onClick={() => setOpen(false)}>
            📞 Contact
          </Link>
        </div>
      )}

      <button
        className="menu-toggle"
        onClick={() => setOpen(!open)}
      >
        {open ? "✕" : "➜"}
      </button>
    </div>
  );
}

export default FloatingMenu;