import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/mainLayouts";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Payment from "./pages/Payment";
import Bonus from "./pages/BonusProgramm";
import About from "./pages/About";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

const App:React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route path="" element={<Home/>}/>
        <Route path="catalog" element={<Catalog/>}/>
        <Route path="payment" element={<Payment/>}/>
        <Route path="bonus-programm" element={<Bonus/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="cart" element={<Cart/>}/>
        <Route path="product/:id" element={<Product/>}/>
      </Route>
    </Routes>
  );
}

export default App;
