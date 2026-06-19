import "../styles/About.css";
import aboutHero from "../assets/about/about-hero.png";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function About() {
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const badgeRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      {
        x: -80,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      contentRef.current,
      {
        x: 80,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      badgeRef.current,
      {
        scale: 0,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        delay: 0.5,
        ease: "back.out(1.7)",
      }
    );
  }, []);

  return (
    <section className="about-section">

      <div className="about-blob blob-1"></div>
      <div className="about-blob blob-2"></div>

      <div className="about-card" ref={imageRef}>
        <div className="about-image">
          <img
            src={aboutHero}
            alt="Crochet artist creating handmade work"
          />
        </div>

        <div
          className="handmade-badge"
          ref={badgeRef}
        >
          <h3>100%</h3>
          <p>Handmade with love</p>
        </div>
      </div>

      <div
        className="about-content"
        ref={contentRef}
      >
        <p className="about-tag">✿ Our Story</p>

        <h2>Where Every Stitch Tells a Story</h2>

        <blockquote>
          "Remo stands for creating memories."
        </blockquote>

        <p>
          At Remo Crochet Works, we believe that handmade things carry
          something mass-produced items never can — intention, love,
          and a little piece of the maker's heart.
        </p>

        <p>
          Every keychain, every flower, every bag charm is crafted
          stitch by stitch with care and purpose.
        </p>

        <p>
          From soft bouquets to charming bag accessories, each creation
          is designed for women and girls who appreciate something
          truly unique and made just for them.
        </p>
      </div>

    </section>
  );
}

export default About;