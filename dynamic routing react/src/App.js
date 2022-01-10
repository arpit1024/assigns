import logo from './logo.svg';
import './App.css';
import { Home } from './components/home';
import {Products} from './components/products'
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { ProductDetails } from './components/productsDetails';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>  
        <Route path="/products" element ={<Products />}></Route>
        <Route path='/products/:id' element={<ProductDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
