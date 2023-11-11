import ItemCount from "../ItemCount/ItemCount";
import "./styles.css";

const ItemDetail = ({ itemSelected }) => {
  return (
    <div className="container align-items-center">
      <div className="card-containerr">
        <h6 className="card-titlee">{itemSelected?.title}</h6>
        <img
          className="card-imagee"
          src={itemSelected?.image}
          alt={itemSelected?.title}
          width={200} // Ajusta el ancho de la imagen según sea necesario
        />

        <div className="card-descriptionn">
          <p>{itemSelected?.description}</p>
          {/* Agrega detalles específicos de celulares, por ejemplo: */}
          <p>Modelo: {itemSelected?.model}</p>
          <p>Almacenamiento: {itemSelected?.storage}</p>
        </div>

        <p>Precio: ${itemSelected?.price}</p>

        {/* Personaliza el componente ItemCount según tus necesidades */}
        <ItemCount initial={1} stock={10} />

        {/* Agrega un botón de compra u otras acciones según sea necesario */}
        <button className="buy-button">Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ItemDetail;
