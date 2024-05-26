import React, {useState,useEffect} from 'react'
import "./count.css"

const Count = () => {

    const[contador,setContador] = useState(0)
    
    useEffect(
        () =>{
            const intervalId = setInterval(() => {
                console.log("ejecutando")
                setContador(contador => contador + 1)
            },1000 )
            return () => {
                clearInterval(intervalId)
            }
        }, [])
  return (
    <div className='Contador'>
      <p className='Contadorcolor'>{contador}</p>
    </div>
  )
}

export default Count
