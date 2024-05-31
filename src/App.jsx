import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route
          path="/"
          element={<ItemListContainer greeting={"Bienvenido"} />}
        />
        <Route path="*" element={"no se pudo encontrar"} />
        <Route path="product/:id" element={<ItemDetailContainer />} />
      </Route>
    </Routes>
  );
}

export default App;
