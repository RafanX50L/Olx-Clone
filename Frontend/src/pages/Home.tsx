import React from 'react'
import Navbar from '../components/Navbar'
import FreshRecommendations from '../components/ProductsCard'
import Footer from '../components/Footer'

const Home:React.FC = () => {
  return (
    <div>
        <Navbar/>
        <FreshRecommendations/>
        <Footer/>
    </div>
  )
}

export default Home