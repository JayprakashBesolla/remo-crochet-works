import "../styles/gallery.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import fishKeychain from "../assets/gallery/keychain.jpg";
import flowerBouquet from "../assets/gallery/flower-bouquet.jpg";
import hairAccessory from "../assets/gallery/hair-accessory.jpg";
import handbag from "../assets/gallery/handbag.jpg";
import bagCharm from "../assets/gallery/bag-charm.jpg";
import homeDecor from "../assets/gallery/Home Decor.jpg";

function Gallery() {
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section className="gallery-section">

      <div className="gallery-blob blob-left"></div>
      <div className="gallery-blob blob-right"></div>

      <p className="gallery-tag">✿ Gallery</p>

      <h2 className="gallery-title">
        Crafted Moments,
        <br />
        Beautiful Memories
      </h2>

      <p className="gallery-description">
        Explore some of our handcrafted crochet creations.
      </p>

      <div className="gallery-grid">

        <div
          className="gallery-card"
          ref={(el) => (cardsRef.current[0] = el)}
        >
          <img src={fishKeychain} alt="Crochet Fish Keychain" />
          <div className="gallery-caption">Keychain</div>
        </div>

        <div
          className="gallery-card"
          ref={(el) => (cardsRef.current[1] = el)}
        >
          <img src={flowerBouquet} alt="Crochet Flower Bouquet" />
          <div className="gallery-caption">Flower Bouquet</div>
        </div>

        <div
          className="gallery-card"
          ref={(el) => (cardsRef.current[2] = el)}
        >
          <img src={hairAccessory} alt="Crochet Hair Accessory" />
          <div className="gallery-caption">Hair Accessory</div>
        </div>

        <div
          className="gallery-card"
          ref={(el) => (cardsRef.current[3] = el)}
        >
          <img src={handbag} alt="Crochet Handbag" />
          <div className="gallery-caption">Handbag</div>
        </div>

        <div
          className="gallery-card"
          ref={(el) => (cardsRef.current[4] = el)}
        >
          <img src={bagCharm} alt="Crochet Bag Charm" />
          <div className="gallery-caption">Bag Charm</div>
        </div>

        <div
          className="gallery-card"
          ref={(el) => (cardsRef.current[5] = el)}
        >
          <img src={homeDecor} alt="Crochet Home Decor" />
          <div className="gallery-caption">Home Décor</div>
        </div>

      </div>
    </section>
  );
}

export default Gallery;