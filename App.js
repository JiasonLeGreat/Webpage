import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSingup';
import Footer from './Components/Footer/Footer';




function App() {
  return (
    <div>
     <BrowserRouter> 
     <Navbar/>
     <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/mens' element={<ShopCategory category="men"/>}/>
      <Route path='/womens' element={<ShopCategory category="women"/>}/>
      <Route path='/kids' element={<ShopCategory category="kid"/>}/>
      <Route path='/product' element={<Product/>}>       
       <Route path=':productId' element={<Cart/>}/>
      </Route>
      <Route path='/' element={<Cart/>}/>    
      <Route path='/' element={<LoginSignup/>}/>    
     </Routes>
     <Footer/>   
     </BrowserRouter>
    </div>
  );
}

export default App;
