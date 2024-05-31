import CarWidget from "../CarWidget/CarWidget";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="container">
      <h1>Tibu Motores</h1>
      <div>
        <ul className="categoriacontainer">
          <li>
            <Link to="/categoria/tourer">Tourer</Link>
          </li>
          <li>
            <Link to="/categoria/enduro">Enduro</Link>
          </li>
          <li>
            <Link to="/categoria/maxis-cooter">Maxis cooter</Link>
          </li>
          <li>
            <Link to="/categoria/deportivas">Deportivas</Link>
          </li>
        </ul>
      </div>

      <CarWidget />
    </nav>
  );
};

export default Navbar;
