import './App.css';
import Nav from "./components/NavBar"
import ItemListContainer from './containers/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemOfertas from './containers/ItemOfertas/Index';
import ItemDetailContainer from './containers/ItemDetailContainer';
import ShopProvider from './Context/ShopProvider';
import ItemBiblioteca from './containers/ItemBiblioteca';
import Footer from './containers/Footer';


function App() {
  return (

  <ShopProvider>
    
    <BrowserRouter>
    
    
      
      <div className='divBody'>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path='/Ofertas' element={<ItemOfertas/>}></Route>
          <Route path='/detail/:id' element={<ItemDetailContainer/>}></Route>
          <Route path="/Biblioteca" element={<ItemBiblioteca/>}></Route>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  </ShopProvider>
    
  );
}

export default App;
