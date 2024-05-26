import React from 'react'
import "./item.css"
const Item = ({producto}) => {
  return (
    <div className='itemproducto'>
        <h3>{producto.nombre}</h3>
        <img  src={producto.Imagen}></img>
        <p>{producto.categoria}</p>
    </div>
  )
}

export default Item