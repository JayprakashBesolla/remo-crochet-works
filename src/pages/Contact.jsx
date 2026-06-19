import "../styles/contact.css";
import Footer from "../components/Footer";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function Contact() {
  const formRef = useRef(null);
  const socialRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      socialRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      formRef.current,
      {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
      }
    );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully! ✨");
  };

  return (
    <>
      <section className="contact-section">

        <div className="contact-blob blob-left"></div>
        <div className="contact-blob blob-right"></div>

        <p className="contact-tag">✿ Get In Touch</p>

        <h2 className="contact-title">
          Let's Create Something
          <br />
          Beautiful Together
        </h2>

        <p className="contact-description">
          Have a custom order in mind? Want to collaborate?
          We'd love to hear from you.
        </p>

        <div className="social-links">

          <a
            href="https://www.instagram.com/remocrochetwoorks"
            target="_blank"
            rel="noreferrer"
            className="instagram-card"
            ref={(el) => (socialRef.current[0] = el)}
          >
            📸 Follow us on
            <span>Instagram @remocrochetworks</span>
          </a>

          <a
            href="https://wa.me/9398405919"
            target="_blank"
            rel="noreferrer"
            className="whatsapp-card"
            ref={(el) => (socialRef.current[1] = el)}
          >
            💬 Chat with us on
            <span>WhatsApp</span>
          </a>

        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <label>Your Name</label>

          <input
            type="text"
            placeholder="e.g. Priya Sharma"
            required
          />

          <label>Email Address</label>

          <input
            type="email"
            placeholder="hello@example.com"
            required
          />

          <label>Message</label>

          <textarea
            rows="6"
            placeholder="Tell us about your custom order, question, or just say hello! 🌸"
            required
          />

          <button type="submit">
            Send Message ✨
          </button>
        </form>

      </section>

      <Footer />
    </>
  );
}

export default Contact;