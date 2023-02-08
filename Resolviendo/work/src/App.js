import './App.css';

import Nav from "./components/NavBar"
import ItemListContainer from './containers/ItemListContainer';



function App() {
  return (
    <div>
      <body>
        <Nav></Nav>
        <ItemListContainer></ItemListContainer>
      </body>
    </div>
    
  );
}

export default App;
