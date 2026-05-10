import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import logo from "../assets/logo.png";
import "../styles/navbar.css";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => { setOpen(false); }, [location.pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <Link to="/" className="navbar__brand">
          <img src={logo} alt="Item 7 Go" />
          <span>Item 7 Go</span>
        </Link>

        <nav className="navbar__links" aria-label="Primary">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === "/"}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <a href="tel:+2348155745321" className="btn btn-primary navbar__cta">
          <Phone size={16} /> Order
        </a>

        <button
          className="navbar__toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div className={`navbar__mobile ${open ? "open" : ""}`}>
        {links.map((l) => (
          <NavLink key={l.to} to={l.to} end={l.to === "/"}>
            {l.label}
          </NavLink>
        ))}
        <a href="tel:+2348155745321" className="btn btn-primary">
          <Phone size={16} /> Call to order
        </a>
      </div>
    </header>
  );
}
