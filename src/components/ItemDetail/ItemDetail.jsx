import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ producto }) => {
  return (
    <div>
      <h3>{producto.nombre}</h3>
      <img style={{ width: "100px" }} src={producto.Imagen}></img>
      <p>Categoria: {producto.categoria}</p>
      <p>Precio: {producto.precio}</p>
      <p>Stock: {producto.stock}</p>
      <p>Descripción: {producto.descripcion}</p>

      <ItemCount initial={1} stock={producto.stock} />

      <button>Agregar al carrito</button>
    </div>
  );
};

export default ItemDetail;
