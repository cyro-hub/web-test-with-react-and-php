import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';
import AddProduct from './Pages/AddProduct';
import Product from './Pages/Product';

function App() {
  return (<Router>
    <Routes>
      <Route path="/" element={<Navigate replace to="/product" />} />
      <Route path='/add/product' element={<AddProduct/>}/> 
      <Route path='/product' element={<Product/>}/>   
    </Routes>
  </Router>);
}

export default App;
