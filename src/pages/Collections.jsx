import "../styles/collections.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function Collections() {
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      {
        y: 80,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section className="collections-section">

      <div className="collections-blob blob-left"></div>
      <div className="collections-blob blob-right"></div>

      <p className="section-tag">✿ Our Collections</p>

      <h2 className="section-title">
        Handmade with Heart,
        <br />
        Crafted for You
      </h2>

      <p className="section-description">
        Explore our curated range of crochet creations —
        each piece lovingly made to bring joy and beauty
        to your everyday life.
      </p>

      <div className="collections-grid">

        <div
          id="keychains"
          className="collection-card"
          ref={(el) => (cardsRef.current[0] = el)}
        >
          <div className="card-top pink">🔑</div>

          <div className="card-body">
            <span className="category">ACCESSORIES</span>
            <h3>Keychains</h3>

            <p>
              Adorable crochet keychains in countless styles —
              cute, playful, and perfect as gifts or everyday charms.
            </p>
          </div>
        </div>

        <div
          id="flowers"
          className="collection-card"
          ref={(el) => (cardsRef.current[1] = el)}
        >
          <div className="card-top purple">🌸</div>

          <div className="card-body">
            <span className="category">FLORALS</span>
            <h3>Flowers & Bouquets</h3>

            <p>
              Everlasting crochet flowers and bouquets —
              never wilt, always beautiful.
            </p>
          </div>
        </div>

        <div
          id="hair"
          className="collection-card"
          ref={(el) => (cardsRef.current[2] = el)}
        >
          <div className="card-top peach">🎀</div>

          <div className="card-body">
            <span className="category">HAIR</span>
            <h3>Hair Accessories</h3>

            <p>
              Soft, stylish crochet hair accessories that
              make every look sweeter and more unique.
            </p>
          </div>
        </div>

        <div
          id="handbags"
          className="collection-card"
          ref={(el) => (cardsRef.current[3] = el)}
        >
          <div className="card-top green">👜</div>

          <div className="card-body">
            <span className="category">BAGS</span>
            <h3>Handbags</h3>

            <p>
              Beautiful handcrafted crochet handbags
              designed with elegance and practicality.
            </p>
          </div>
        </div>

        <div
          id="charms"
          className="collection-card"
          ref={(el) => (cardsRef.current[4] = el)}
        >
          <div className="card-top rose">✨</div>

          <div className="card-body">
            <span className="category">CHARMS</span>
            <h3>Bag Charms</h3>

            <p>
              Elevate any bag with our whimsical crochet charms —
              a tiny detail that makes a big difference.
            </p>
          </div>
        </div>

        <div
          id="home-decor"
          className="collection-card"
          ref={(el) => (cardsRef.current[5] = el)}
        >
          <div className="card-top blue">🏠</div>

          <div className="card-body">
            <span className="category">HOME</span>
            <h3>Home Décor</h3>

            <p>
              Wind spinners, vases, and more —
              bring handmade warmth and texture into your living space.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Collections;