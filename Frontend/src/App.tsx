import './App.css'
import AddProduct from './pages/AddProduct';
import Home from './pages/Home'
import ProductDetailsPage from './pages/ProductDetailsPage'
import { Routes ,Route} from 'react-router-dom';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/addproduct' element={<AddProduct/>}/>
        <Route path='/product-details' element={<ProductDetailsPage/>}/>
      </Routes>
    </>
  )
}

export default App
