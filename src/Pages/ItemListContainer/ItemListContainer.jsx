import { useState, useEffect } from "react";
import ItemList from "../../components/ItemList/ItemList";
import "./styles.css";

const ItemListContainer = ({ greeting }) => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProductList(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="titulo">
      {loading ? (
        <p>Cargando productos...</p>
      ) : productList.length > 0 ? (
        <>
          <h2>{greeting}</h2>
          <ItemList productList={productList} />
        </>
      ) : (
        <p>No se encontraron productos.</p>
      )}
    </div>
  );
};

export default ItemListContainer;
