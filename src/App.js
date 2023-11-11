import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBarApp from "./components/NavBar/Navbar";
import ItemDetailContainer from "./pages/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./pages/ItemListContainer/ItemListContainer";
import NotFound from "./pages/NotFound/NotFound"; // Añade una página 404
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <NavBarApp />
      <Routes>
        <Route
          path="/"
          element={<ItemListContainer greeting="Bienvenidos a Makers m 3D" />}
        />
        {/* Utiliza la misma ruta para ambas categorías */}
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        {/* Página 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
