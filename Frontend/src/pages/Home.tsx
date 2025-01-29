import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import FreshRecommendations from '../components/ProductsCard'
import Footer from '../components/Footer'
import { ToastContainer } from "react-toastify"
import axios from 'axios'

interface Product {
  id: number;
  title: string;
  price: number;
  year?: number;
  distance?: string;
  location: string;
  date: string;
  images: string[];
  isFeatured?: boolean;
  details?: string;
}

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/products");
        console.log(response);
        setProducts(response.data.products); 
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts(); 
  }, []);

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
      <Navbar />
      <FreshRecommendations products={products} />
      <Footer />
    </div>
  );
}

export default Home;
