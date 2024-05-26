import React from 'react'
import Item from "../Item/Item"
import "./itemList.css"


const ItemList = ({productos}) => {
  return (
    productos.map((producto) => (

        <div className='Item' key={producto.id}>
            <Item producto={producto}/>
        </div>
        )
    )    
  )
}

export default ItemList
