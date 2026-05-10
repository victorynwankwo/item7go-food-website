import { FormEvent, useState } from "react";
import { Phone, MapPin, Clock, Mail } from "lucide-react";
import "../styles/contact.css";

interface FormData {
  name: string;
  contact: string;
  message: string;
}

interface FormErrors {
  name: string;
  contact: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: "",
    contact: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    name: "",
    contact: "",
    message: "",
  });

  function validate(): boolean {
    const newErrors: FormErrors = {
      name: "",
      contact: "",
      message: "",
    };

    // Name validation (letters + spaces only)
    const nameRegex = /^[A-Za-z\s]{2,}$/;

    // Email or phone validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9+\s]{7,15}$/;

    if (!nameRegex.test(form.name)) {
      newErrors.name = "Enter a valid name (letters only)";
    }

    if (!emailRegex.test(form.contact) &&!phoneRegex.test(form.contact) )

{
      newErrors.contact = "Enter a valid email or phone number";
    }

    if (form.message.trim().length < 5) {
      newErrors.message = "Message is too short";
    }

    setErrors(newErrors);

    return (
      !newErrors.name &&
      !newErrors.contact &&
      !newErrors.message
    );
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!validate()) return;

  

    setForm({
      name: "",
      contact: "",
      message: "",
    });

    setErrors({
      name: "",
      contact: "",
      message: "",
    });
  }

  return (
    <section className="contact container">
      <p className="eyebrow">Say hello</p>
      <h1>Get in touch with Item 7 Go.</h1>

      <div className="contact__grid">

        {/* LEFT SIDE (UNCHANGED UI) */}
        <div style={{ display: "grid", gap: "1.25rem" }}>
          <a href="tel:+2348155745321" className="contact-card">
            <div className="contact-card__icon primary">
              <Phone size={20} />
            </div>
            <div>
              <small>Call us</small>
              <div>+234 815 574 5321</div>
            </div>
          </a>

          <div className="contact-card">
            <div className="contact-card__icon secondary">
              <MapPin size={20} />
            </div>
            <div>
              <small>Address</small>
              <div style={{ fontSize: "1rem", marginTop: "0.4rem" }}>
                CW3R+FQ3, Iwo Road, Ibadan
              </div>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-card__icon accent">
              <Clock size={20} />
            </div>
            <div>
              <small>Hours</small>
              <div>Open daily 10:00 AM – 10:00 PM</div>
            </div>
          </div>

          <a href="mailto:hello@item7go.ng" className="contact-card">
            <div className="contact-card__icon dark">
              <Mail size={20} />
            </div>
            <div>
              <small>Email</small>
              <div>hello@item7go.ng</div>
            </div>
          </a>
        </div>

        {/* FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send a message</h2>

          <div>
            <label>Name</label>
            <input
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              style={{
                border: errors.name ? "1px solid red" : "",
              }}
            />
            {errors.name && (
              <small style={{ color: "red" }}>{errors.name}</small>
            )}
          </div>

          <div>
            <label>Phone or email</label>
            <input
              value={form.contact}
              onChange={(e) =>
                setForm({ ...form, contact: e.target.value })
              }
              style={{
                border: errors.contact ? "1px solid red" : "",
              }}
            />
            {errors.contact && (
              <small style={{ color: "red" }}>{errors.contact}</small>
            )}
          </div>

          <div>
            <label>Message</label>
            <textarea
              rows={5}
              value={form.message}
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
              style={{
                border: errors.message ? "1px solid red" : "",
              }}
            />
            {errors.message && (
              <small style={{ color: "red" }}>{errors.message}</small>
            )}
          </div>

          <button type="submit">Send message</button>
        </form>
      </div>
    </section>
  );
}