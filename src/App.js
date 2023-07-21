import './App.css';
import Navbar from './Components/Navbar';
import ProductDetail from './Components/ProductDetail';
import ProductListing from './Components/ProductListing';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Cart from './Components/Cart';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Navigate to='/products' />} />
        <Route exact path='/products' element={<ProductListing />} />
        <Route exact path='/products/:id' element={<ProductDetail />} />
        <Route exact path='/cart' element={<Cart />} />
      </Routes>
      <ToastContainer />
    </Router >
  );
}

export default App;