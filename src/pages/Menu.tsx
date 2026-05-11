import friedrice from "../assets/menu-friedrice.jpg";
import suya from "../assets/menu-suya.jpg";
import meatpie from "../assets/menu-meatpie.jpg";
import jollof from "../assets/hero-jollof.jpg";
import "../styles/menu.css";

const sections = [
  {
    name: "Rice & Mains",
    items: [
      { n: "Jollof Rice + Chicken", p: "₦3,200", img: jollof, d: "Classic smoky party jollof, grilled chicken, plantain." },
      { n: "Fried Rice Combo", p: "₦3,500", img: friedrice, d: "Fried rice, chicken, coleslaw, plantain." },
      { n: "Special Seafood Jollof", p: "₦4,800", img: jollof, d: "Prawns and fish for seafood lovers." },
    ],
  },
  {
    name: "Grills & Suya",
    items: [
      { n: "Suya Skewers (3pc)", p: "₦2,000", img: suya, d: "Hand-spiced beef, charred to order." },
      { n: "Peppered Chicken", p: "₦2,500", img: suya, d: "Smoky, spicy, finger-licking." },
    ],
  },
  {
    name: "Small Chops & Snacks",
    items: [
      { n: "Meat Pie", p: "₦800", img: meatpie, d: "Buttery, flaky, baked daily." },
      { n: "Puff Puff (10pc)", p: "₦1,000", img: meatpie, d: "Sweet, fluffy, golden." },
      { n: "Small Chops Pack", p: "₦3,500", img: meatpie, d: "Mix of puff puff, samosa, spring rolls, gizzard." },
    ],
  },
];

export default function MenuPage() {
  const whatsappNavigate = (url: string) => {
    window.open(url, "_blank");
  }
  return (
    <>
      <section className="menu-hero">
        <div className="container">
          <p className="eyebrow" style={{ color: "var(--color-secondary)" }}>The menu</p>
          <h1>Built for big appetites.</h1>
          <p>Tap, point, devour. Call ahead for pickup — we'll have it hot when you arrive.</p>
        </div>
      </section>

      <div className="container">
        {sections.map((sec) => (
          <section key={sec.name} className="menu-section">
            <div className="menu-section__head">
              <h2>{sec.name}</h2>
              <span className="rule" />
            </div>
            <div className="menu-grid">
              {sec.items.map((it) => (
                <article key={it.n} className="card menu-item">
                  <img src={it.img} alt={it.n} loading="lazy" />
                  <div className="menu-item__body">
                    <div className="menu-item__top">
                      <h3>{it.n}</h3>
                      <span className="menu-item__price">{it.p}</span>
                    </div>
                    <p>{it.d}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}

        <div className="menu-cta">
          <h2>Hungry already?</h2>
          <p>Call us to order ahead — your meal will be ready when you arrive.</p>
          <div className="btn btn-primary"
          style={{cursor:"pointer"}}
          onClick={()=> whatsappNavigate("https://wa.me/2347044195667?text=Hi%20Item%207%20Go%2C%20I%20would%20like%20to%20place%20an%20order.")}
          >+2347044195667</div>
        </div>
      </div>
    </>
  );
}
