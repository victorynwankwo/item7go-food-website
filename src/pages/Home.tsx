import { Link } from "react-router-dom";
import { ArrowRight, Star, Clock, MapPin, Flame } from "lucide-react";
import hero from "../assets/hero-jollof.jpg";
import suya from "../assets/menu-suya.jpg";
import meatpie from "../assets/menu-meatpie.jpg";
import friedrice from "../assets/menu-friedrice.jpg";
import MenuCard from "../components/MenuCard";
import "../styles/hero.css";
import "../styles/home.css";

export default function Home() {
  return (
    <>
      <section className="hero">
        <img src={hero} alt="" className="hero__bg" aria-hidden />
        <div className="hero__inner">
          <div>
            <span className="hero__chip"><Flame size={14} /> Iwo Road · Ibadan</span>
            <h1>
              Hot meals.
              <span>Faster than hunger.</span>
            </h1>
            <p className="hero__lead">
              Naija comfort food done right — jollof, fried rice, suya, small chops and more, ready when you walk in.
            </p>
            <div className="hero__actions">
              <a href="tel:+2348155745321" className="btn btn-primary">
                Call to Order <ArrowRight size={18} />
              </a>
              <Link to="/menu" className="btn btn-outline">See the menu</Link>
            </div>
            <div className="hero__meta">
              <span><Star size={16} fill="#f4c12a" color="#f4c12a" /> 4.4 Google rating</span>
              <span><Clock size={16} /> Open till 10 PM</span>
            </div>
          </div>
          <div className="hero__photo">
            <img src={hero} alt="Jollof rice with grilled chicken" />
            <div className="hero__badge">
              <strong>7+</strong>
              <small>Years feeding Ibadan</small>
            </div>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-head">
          <div>
            <p className="eyebrow">Crowd favourites</p>
            <h2>Today's hot picks</h2>
          </div>
          <Link to="/menu">Full menu <ArrowRight size={16} /></Link>
        </div>
        <div className="grid grid-3">
          <MenuCard img={friedrice} name="Jollof / Fried Rice Combo" price="₦3,500" tag="Bestseller" />
          <MenuCard img={suya} name="Spicy Suya Skewers" price="₦2,000" tag="Spicy" />
          <MenuCard img={meatpie} name="Fresh-baked Meat Pie" price="₦800" tag="Daily" />
        </div>
      </section>

      <section className="stats">
        <div className="container stats__grid">
          <div><strong>10K+</strong><span>Meals served monthly</span></div>
          <div><strong>4.4★</strong><span>Average customer rating</span></div>
          <div><strong>12hrs</strong><span>Open every single day</span></div>
        </div>
      </section>

      <section className="section container">
        <div className="visit">
          <div className="visit__info">
            <p className="eyebrow">Visit us</p>
            <h2>Find Item 7 Go on Iwo Road</h2>
            <p style={{ marginTop: "1rem", color: "rgba(42,26,16,0.7)", maxWidth: "28rem" }}>
              Right across from the famous Item 7, our kitchen is fired up daily from 10 AM to 10 PM.
            </p>
            <p><MapPin size={20} /> CW3R+FQ3, opposite Item 7, Iwo Road, Ibadan, Oyo</p>
            <p><Clock size={20} /> Open daily 10:00 AM – 10:00 PM</p>
            <a
              href="https://maps.app.goo.gl/gNo1bX12V7DNnco87"
              target="_blank"
              rel="noreferrer"
              className="btn btn-solid"
              style={{ marginTop: "1.5rem" }}
            >
              Get directions <ArrowRight size={18} />
            </a>
          </div>
          <div className="visit__map">
            <iframe
              title="Item 7 Go location"
              src="https://www.google.com/maps?q=Iwo+Road+Ibadan&output=embed"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}
