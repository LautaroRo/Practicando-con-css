import './App.css';
import Nav from "./components/NavBar"
import ItemListContainer from './containers/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemOfertas from './containers/ItemOfertas/Index';



function App() {
  return (
    <BrowserRouter>
    <div className='divBody'>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path='/Ofertas' element={<ItemOfertas/>}></Route>
        </Routes>
        
    </div>
    </BrowserRouter>
    
  );
}

export default App;
