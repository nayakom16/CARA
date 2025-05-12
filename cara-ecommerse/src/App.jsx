
import './App.css'
import { Routes , Route } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Shop from './pages/shop/Shop'
import ProductDetails from './components/productdetails/ProductDetails'

function App() {
  

  return (
    <>
    <Navbar />
    <div className='app'>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/product-Details' element={<ProductDetails />} />
      </Routes>
      



      <Footer />
    </div>

    </>
  )
}

export default App
