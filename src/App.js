import { Route, Routes } from "react-router-dom";
import Main from './pages/main/Main';
import About from './pages/main/About';
import Login from './pages/auth/Login';
import Navbar from './components/Navbar'
import Basket from './pages/main/Basket';
import Profile from './pages/main/Profile';
import Register from './pages/auth/Register';
import Favorits from './pages/main/Favorits'
import Products from './pages/main/Products';
import ProductsMore from './components/ProductsMore';
import PrivateRoutes from "./components/PrivateRoutes";
import axios from "axios";

axios.defaults.baseURL = 'https://cryxxen.pythonanywhere.com/api/'

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
        <Route path='/products/:id' element={<ProductsMore/>}/>
        <Route path="/favorits" element={<Favorits/>}/>
        <Route element={<PrivateRoutes/>}>
          <Route path="/basket" element={<Basket/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
