import "../styles/Cards.css"

function Card({ cover, title }) {
  return (
    <figure className="card">
      <img src={cover} alt={title} className="pictures" />
      <div className="card-shadow" />
      <figcaption class="card-title">
        <h2 className="tittle_card">{title}</h2>
      </figcaption>
    </figure>
  );
}

export default Card;
