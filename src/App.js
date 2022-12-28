import { Route, Routes } from "react-router-dom";
import Main from './pages/main/Main';
import About from './pages/main/About';
import Login from './pages/auth/Login';
import Navbar from './components/Navbar'
import Cart from './pages/main/Cart';
import Profile from './pages/main/Profile';
import Register from './pages/auth/Register';
import Favorites from './pages/main/Favorites'
import Products from './pages/main/Products';
import ProductsMore from './components/ProductsMore';
import PrivateRoutes from "./components/PrivateRoutes";
import axios from "axios";

axios.defaults.baseURL = 'https://cryxxen.pythonanywhere.com/'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/auth/register" element={<Register/>}/>
        <Route path="/auth/login" element={<Login/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path='/products/product/:id' element={<ProductsMore/>}/>
        <Route element={<PrivateRoutes/>}>
          <Route path="/basket" element={<Cart/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/favorites" element={<Favorites/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
