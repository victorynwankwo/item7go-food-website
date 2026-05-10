import "../styles/home.css";

interface Props {
  img: string;
  name: string;
  price: string;
  tag?: string;
  phone?: string;
}

export default function MenuCard({ img, name, price, tag, phone = "+2348155745321" }: Props) {
  return (
    <article className="card menu-card">
      <div className="menu-card__img">
        <img src={img} alt={name} loading="lazy" />
      </div>
      <div className="menu-card__body">
        {tag && <span className="menu-card__tag">{tag}</span>}
        <h3>{name}</h3>
        <div className="menu-card__row">
          <span className="menu-card__price">{price}</span>
          <a href={`tel:${phone}`}>Order →</a>
        </div>
      </div>
    </article>
  );
}
