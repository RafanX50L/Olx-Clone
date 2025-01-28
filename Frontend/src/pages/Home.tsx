import React from 'react'
import Navbar from '../components/Navbar'
import FreshRecommendations from '../components/ProductsCard'
import Footer from '../components/Footer'
import { ToastContainer } from "react-toastify";

const Home:React.FC = () => {
  return (
    <div>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnHover
          draggable
          theme="dark"
        />
        <Navbar/>
        <FreshRecommendations/>
        <Footer/>
    </div>
  )
}

export default Home