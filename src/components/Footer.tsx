import { Link } from "react-router-dom";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <div className="footer__brand">Item 7 Go</div>
          <p>Hot Nigerian fast food on Iwo Road, Ibadan. Fresh jollof, fried rice, suya and small chops served daily.</p>
        </div>
        <div>
          <h4>Visit</h4>
          <ul>
            <li>CW3R+FQ3, opposite Item 7</li>
            <li>Iwo Road, Ibadan, Oyo</li>
            <li>Open daily 10AM – 10PM</li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li><a href="tel:++2347044195667">+2347044195667</a></li>
            <li><a href="mailto:suppor@item7.com">suppor@item7.com</a></li>
          </ul>
        </div>
        <div>
          <h4>Explore</h4>
          <ul>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="container footer__bottom">
        © {new Date().getFullYear()} Item 7 Go. All rights reserved.
      </div>
    </footer>
  );
}
