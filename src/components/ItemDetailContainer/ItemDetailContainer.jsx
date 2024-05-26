import {useState,useEffect} from 'react'
import { useParams } from "react-router-dom"
import ItemDetail from '../ItemDetail/ItemDetail'
import Loader from '../Loader/Loader'


const ItemDetailContainer = ({id}) => {

    const [producto, setProducto] = useState(null)
    
    

    useEffect(() => {

        const fetchData = async () => {
            try{
                const response = await fetch("./data/productos.json")
                const data = await response.json()
                const producto = data.find(producto => producto.id == id)
                setProducto(producto)

            }catch(error){
                console.log("Error", error)
            }
        }

        fetchData()
        
    }, [id])


  return (
    <div>
        {producto ? 
        <ItemDetail producto={producto} />
        :
        <Loader/>
        }
    </div>
  )
}

export default ItemDetailContainer