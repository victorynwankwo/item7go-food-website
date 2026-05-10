import { Flame, Heart, Leaf } from "lucide-react";
import hero from "../assets/frontage of item7.jpg";
import "../styles/about.css";

const values = [
  { Icon: Flame, title: "Hot & Fast", body: "Cooked in batches all day so nothing sits — your meal leaves the kitchen steaming." },
  { Icon: Heart, title: "Made with care", body: "Recipes our grandmothers would approve of. No shortcuts on flavour." },
  { Icon: Leaf, title: "Fresh ingredients", body: "We shop local markets daily for produce, meat and spices." },
];

export default function About() {
  return (
    <>
      <section className="container about-hero">
        <div>
          <p className="eyebrow">Our story</p>
          <h1>From a kitchen on Iwo Road to a city favourite.</h1>
          <p>Item 7 Go started with one mission: serve Ibadan the kind of jollof, fried rice and suya that feels like home — quickly, consistently, and with real heart.</p>
          <p>Today our pots stay hot from 10 AM to 10 PM, every day of the week, feeding students, families, workers and travellers passing through Iwo Road.</p>
        </div>
        <img src={hero} alt="Our signature jollof" 
        style={{ width: "80%", height: "auto" }}
        />
      </section>

      <section className="values section-cream">
        <div className="container">
          <h2>What we stand for</h2>
          <div className="values__grid">
            {values.map(({ Icon, title, body }) => (
              <div key={title} className="value-card">
                <div className="value-card__icon"><Icon size={22} /></div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
