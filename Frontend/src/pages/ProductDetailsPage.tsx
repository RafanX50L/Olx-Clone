import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetails from '../components/productsDetails';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';

interface Product {
  productName: string;
  modelYear: string;
  price: number;
  images: string[];
  description: string;
  mileage: string;
  transmission: string;
  location: string;
}

const ProductDetailsPage: React.FC = () => {
  const { id } = useParams(); // Get product ID from the URL
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/product-details/${id}`);
        console.log(response);
        setProduct(response.data.product);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    if (id) fetchProduct(); // Only fetch if an ID is available
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <ProductDetails product={product}/>
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
