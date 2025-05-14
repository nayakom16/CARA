
import './App.css'
import { Routes , Route } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Shop from './pages/shop/Shop'
import ProductDetails from './components/productdetails/ProductDetails'
import Cart from './pages/cart/Cart'
import Blog from './pages/blog/Blog'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'


function App() {
  

  return (
    <>
    <Navbar />
    <div className='app'>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product-Details' element={<ProductDetails />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      



      <Footer />
    </div>

    </>
  )
}

export default App
