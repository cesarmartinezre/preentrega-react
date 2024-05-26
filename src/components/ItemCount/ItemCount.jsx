
import React, {useState} from 'react'
import "./itemcount.css"

const ItemCount = ({initial,stock}) => {
    
    const [count, setCount] = useState(initial)

    const decrement =() => {
        if(count > initial){
            setCount(count-1)
        }
    }


    const increment =() =>{
        if(count < stock){
            setCount(count+1)
        }
    }
  return (
    <div className='Itemcount'>
      
        <button onClick={decrement}>-</button>
        <samp className='contador'>{count}</samp>
        <button onClick={increment}>+</button>

    </div>
  )
}

export default ItemCount
