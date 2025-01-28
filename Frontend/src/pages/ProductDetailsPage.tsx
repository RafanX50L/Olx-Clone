import React from 'react'
import ProductDetails from '../components/productsDetails'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ProductDetailsPage:React.FC = () => {
  const images = [
    '/public/images/avatar-01.jpg',
    '/public/images/banner-01.jpg',
    '/public/images/bg-02.jpg',
    '/public/images/blog-01.jpg',
    '/public/images/gallery-01.jpg',
  ];
  return (
    <div>
      <Navbar/>
        <ProductDetails
        productName="Ford Aspire"
        modelYear="2018"
        price={385000}
        images={images}
        description="A well-maintained Ford Aspire, very low mileage, manual transmission."
        mileage="44,552 KM"
        transmission="Manual"
        location="Delhi"
      />
      <Footer/>
    </div>
  )
}

export default ProductDetailsPage