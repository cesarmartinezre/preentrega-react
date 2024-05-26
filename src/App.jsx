import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Footer from './components/Footer/Footer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Item from './components/Item/Item'
import Approuter from './components/router/Approuter'

function App() {

  return (
    <>
      <Navbar/>
      <ItemListContainer greeting={"Bienvenido"}/>
      <Approuter/>     
      <Footer/>
    </>
  )
}

export default App
