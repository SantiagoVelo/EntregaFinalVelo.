import { Link, useParams } from "react-router-dom";
import Item from "../Item/Item";
import "./styles.css";
import { useEffect, useState } from "react";

const ItemList = () => {
  const [items, setItems] = useState([]);
  const { category } = useParams();

  const fetchProducts = async () => {
    try {
      // Reemplaza la URL de la API con la que prefieras usar
      const response = await fetch("https://tu-api-propia.com/celulares");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const productList = await fetchProducts();

        // Ajusta la lógica de filtrado según las categorías de tu tienda
        const filteredItems = category
          ? productList.filter((product) => product.category === category)
          : productList;

        setItems(filteredItems);
      } catch (error) {
        console.error(error);
        setItems([]);
      }
    };

    fetchItems();
  }, [category]);

  return (
    <div className="item-list-container">
      {items.map((item) => (
        <Link className="stylesLink" to={`/item/${item.id}`} key={item.id}>
          <Item
            title={item.title}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        </Link>
      ))}
    </div>
  );
};

export default ItemList;
