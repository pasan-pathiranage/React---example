import logo from './logo.svg'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './pages/Product';
import Home from './pages/Home';
import SingleProduct from './pages/SingleProduct';


const App = () => { //Main Component
   return (
    <BrowserRouter>
    <Routes>
        <Route index element = {<Home />}/>
        <Route path="/products" element = {<Product />} />
        <Route path="products/:id" element ={<SingleProduct />} />
    </Routes>
    </BrowserRouter>
   ) 
}

export default App;

