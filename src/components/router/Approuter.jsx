import {
    BrowserRouter,
    Routes,
    Route,
    
  } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";


function Approuter () {
    return(
        <BrowserRouter>
            <Routes>
                < Route path="/" element={<ItemListContainer />} />
                < Route path="/categoria:id" element={<ItemListContainer />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Approuter