import "./styles.css";

const Item = ({ title, description, price, image, onClickDetails }) => {
  return (
    <div className="card-container">
      <h6 className="card-title">{title}</h6>
      <img className="card-image" src={image} alt={title} width={200} />

      <div className="card-description">
        <p>{description}</p>
      </div>

      <p>${price}</p>

      {/* Agregar un botón o enlace para ver más detalles */}
      <button onClick={onClickDetails} className="details-button">
        Ver detalles
      </button>
    </div>
  );
};

export default Item;
