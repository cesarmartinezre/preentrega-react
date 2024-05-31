import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import ItemList from "../ItemList/ItemList";
import "./itemListContainer.css";

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./data/productos.json");
        const data = await response.json();
        setProductos(data);
      } catch (error) {
        console.log("Error ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="citemlist">
      <h2 className="itemlistTitulo">{greeting}</h2>
      {productos.length == 0 ? <Loader /> : <ItemList productos={productos} />}
    </div>
  );
};

export default ItemListContainer;
