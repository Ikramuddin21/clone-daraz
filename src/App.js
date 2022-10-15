import { Route, Routes } from 'react-router-dom';
import './App.css';
import Category from './Pages/Category/Category';
import Home from './Pages/Home/Home/Home';
import ProductsDetails from './Pages/ProductsDetails/ProductsDetails';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<Category />} />
        <Route path="/productDetails/:id" element={<ProductsDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
