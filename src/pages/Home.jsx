import { useNavigate } from "react-router-dom";

import topBorder from "../assets/hero/top-border.png";
import cornerFlower from "../assets/hero/corner-flower.png";

import "../styles/home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <section className="hero">

      {/* Floating Orbs */}
      <div className="orb orb1"></div>
      <div className="orb orb2"></div>
      <div className="orb orb3"></div>
      <div className="orb orb4"></div>
      <div className="orb orb5"></div>
      <div className="orb orb6"></div>
      <div className="orb orb7"></div>
      <div className="orb orb8"></div>

      {/* Decorations */}
      <img
        src={topBorder}
        alt="Top Floral Border"
        className="top-border"
      />

      <img
        src={cornerFlower}
        alt="Corner Floral Decoration"
        className="corner-flower"
      />
    

      {/* Content */}
      <div className="hero-content">

        <p className="welcome-text">
          ✿ Welcome to
        </p>

        <h1 className="hero-title">
          <span className="remo-text">Remo</span>
          Crochet Works
        </h1>

        <p className="hero-description">
          Handcrafted with Love & Purpose
        </p>

        <p className="hero-story">
          Every stitch holds a memory — our crochet pieces aren't just things,
          they become part of your story, your home, and your heart.
        </p>

        <button
          className="hero-btn"
          onClick={() => navigate("/collections")}
        >
          ✦ Explore Collection
        </button>

      </div>
    </section>
  );
}

export default Home;