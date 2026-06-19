import "../styles/whyRemo.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function WhyRemo() {
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
        stagger: 0.2,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section className="why-remo">
      <p className="why-tag">✿ Why Remo</p>

      <h2 className="why-title">
        Made Differently,
        <br />
        Made with Love
      </h2>

      <div className="why-grid">

        <div
          className="why-card"
          ref={(el) => (cardsRef.current[0] = el)}
        >
          <div className="why-icon pink">🤍</div>

          <h3>Handmade with Care</h3>

          <p>
            Every single piece is crafted by hand, one stitch at a time.
            No machines, no shortcuts — just pure dedication.
          </p>
        </div>

        <div
          className="why-card"
          ref={(el) => (cardsRef.current[1] = el)}
        >
          <div className="why-icon purple">☀️</div>

          <h3>Unique Designs</h3>

          <p>
            Our designs are original and thoughtfully created.
            You'll find styles that are truly one-of-a-kind.
          </p>
        </div>

        <div
          className="why-card"
          ref={(el) => (cardsRef.current[2] = el)}
        >
          <div className="why-icon green">💕</div>

          <h3>Made with Love & Purpose</h3>

          <p>
            Remo means memories. Each piece carries warmth,
            intention, and a little piece of our heart.
          </p>
        </div>

        <div
          className="why-card"
          ref={(el) => (cardsRef.current[3] = el)}
        >
          <div className="why-icon peach">🎨</div>

          <h3>Custom Orders Available</h3>

          <p>
            Want something made just for you?
            We love bringing personal visions to life with
            custom crochet creations.
          </p>
        </div>

      </div>
    </section>
  );
}

export default WhyRemo;