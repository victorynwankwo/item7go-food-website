import { FormEvent } from "react";
import { Phone, MapPin, Clock, Mail } from "lucide-react";
import "../styles/contact.css";

export default function Contact() {
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    alert("Thanks! We'll get back to you shortly.");
  }

  return (
    <section className="contact container">
      <p className="eyebrow">Say hello</p>
      <h1>Get in touch with Item 7 Go.</h1>

      <div className="contact__grid">
        <div style={{ display: "grid", gap: "1.25rem" }}>
          <a href="tel:+2348155745321" className="contact-card">
            <div className="contact-card__icon primary"><Phone size={20} /></div>
            <div>
              <small>Call us</small>
              <div>+234 815 574 5321</div>
            </div>
          </a>
          <div className="contact-card">
            <div className="contact-card__icon secondary"><MapPin size={20} /></div>
            <div>
              <small>Address</small>
              <div style={{ fontFamily: "inherit", fontSize: "1rem", marginTop: "0.4rem" }}>
                CW3R+FQ3, opposite Item 7, Iwo Road, Ibadan 200258, Oyo, Nigeria
              </div>
            </div>
          </div>
          <div className="contact-card">
            <div className="contact-card__icon accent"><Clock size={20} /></div>
            <div>
              <small>Hours</small>
              <div style={{ fontFamily: "inherit", fontSize: "1rem", marginTop: "0.4rem" }}>
                Open daily 10:00 AM – 10:00 PM
              </div>
            </div>
          </div>
          <a href="mailto:hello@item7go.ng" className="contact-card">
            <div className="contact-card__icon dark"><Mail size={20} /></div>
            <div>
              <small>Email</small>
              <div style={{ fontFamily: "inherit", fontSize: "1rem", marginTop: "0.4rem" }}>
                hello@item7go.ng
              </div>
            </div>
          </a>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send a message</h2>
          <div>
            <label>Name</label>
            <input required placeholder="Your name" />
          </div>
          <div>
            <label>Phone or email</label>
            <input required placeholder="How we should reply" />
          </div>
          <div>
            <label>Message</label>
            <textarea required rows={5} placeholder="Catering, feedback, large orders…" />
          </div>
          <button type="submit">Send message</button>
        </form>
      </div>
    </section>
  );
}
