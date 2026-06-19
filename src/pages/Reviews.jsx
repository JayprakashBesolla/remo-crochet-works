import "../styles/reviews.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function Reviews() {
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
    <section className="reviews-section">

      <div className="reviews-blob blob-left"></div>
      <div className="reviews-blob blob-right"></div>

      <p className="reviews-tag">✿ Testimonials</p>

      <h2 className="reviews-title">
        Loved by Our
        <br />
        Customers
      </h2>

      <div className="reviews-grid">

        <div
          className="review-card"
          ref={(el) => (cardsRef.current[0] = el)}
        >
          <p>
            I ordered a custom bouquet for my best friend's birthday and she
            absolutely loved it! The quality is stunning and it felt so personal.
            Will definitely order again.
          </p>

          <h4>★★★★★</h4>

          <span>🌸 Priya Sharma</span>
          <small>Hyderabad</small>
        </div>

        <div
          className="review-card"
          ref={(el) => (cardsRef.current[1] = el)}
        >
          <p>
            The keychain I got is so cute and well made! It hasn't frayed at all
            even after months of use. Love supporting such a talented handmade
            brand!
          </p>

          <h4>★★★★★</h4>

          <span>🎀 Meera Reddy</span>
          <small>Bangalore</small>
        </div>

        <div
          className="review-card"
          ref={(el) => (cardsRef.current[2] = el)}
        >
          <p>
            Ordered a crochet tote bag and I get compliments on it everywhere I
            go. It's truly unique and the craftsmanship is beautiful.
          </p>

          <h4>★★★★★</h4>

          <span>✨ Anusha K</span>
          <small>Chennai</small>
        </div>

      </div>
    </section>
  );
}

export default Reviews;