import React from "react";
import ItemList from "../ItemList/ItemList";

const Accesorios = () => {
  return (
    <div>
      <h2>Accesorios para Celulares</h2>
      <p>
        Encuentra los mejores accesorios para complementar tu experiencia con tu
        celular.
      </p>

      {/* Aquí puedes personalizar la lógica de ItemList según tus necesidades */}
      <ItemList />
    </div>
  );
};

export default Accesorios;
