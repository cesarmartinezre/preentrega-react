import React from "react";
import "./item.css";
import { useNavigate } from "react-router-dom";

const Item = ({ producto }) => {
  const navigate = useNavigate();
  return (
    <div
      className="itemproducto"
      onClick={() => navigate("product/" + producto.id)}
    >
      <h3>{producto.nombre}</h3>
      <img src={producto.Imagen}></img>
      <p>{producto.categoria}</p>
    </div>
  );
};

export default Item;
