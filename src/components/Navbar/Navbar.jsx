import CarWidget from "../CarWidget/CarWidget"
import { Link } from "react-router-dom"
import "./navbar.css"


const Navbar = () => {
  return (
    <nav className="container">
        <h1>Tibu Motores</h1>
        <div>
            <ul className="categoriacontainer">
                <Link to="/categoria/Tourer">Tourer</Link>
                <Link to="/categoria/Enduro">Enduro</Link>
                <Link to="/categoria/Maxi scooter">Maxi scooter</Link>
                <Link to="/categoria/Deportivas">Deportivas</Link>
            </ul>
        </div>
        
        <CarWidget/>
    </nav>
  )
}

export default Navbar
