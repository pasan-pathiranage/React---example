import logo from './logo.svg';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './pages/Product';
import Home from './pages/Home';
import SingleProduct from './pages/SingleProduct';
import Category from './pages/Category';
import Checkout from './pages/Checkout';


const App = () => { //Main Component
   return (
    <BrowserRouter>
    <Routes>
        <Route index element = {<Home />}/>
        <Route path="/products" element = {<Product />} />
        <Route path="products/:id" element ={<SingleProduct />} />
        <Route path="/categories/:id" element = {<Category />}/>
        <Route path="/Checkout" element = {<Checkout/>} />
    </Routes>
    </BrowserRouter>
   ) 
}

export default App;

