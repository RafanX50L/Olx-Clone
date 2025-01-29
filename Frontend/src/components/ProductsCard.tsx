import React from 'react';
import { Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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
}

interface FreshRecommendationsProps {
  products: Product[];
}


const FreshRecommendations: React.FC<FreshRecommendationsProps> = ({ products }) => {
  const navigate = useNavigate();
  const handleProductDetails = (productId:number)=>{
    console.log(productId)
    navigate(`product-details/${productId}` )
  }
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Fresh recommendations</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          
          <div key={product._id} onClick={()=>handleProductDetails(product._id)} className="border rounded-lg overflow-hidden bg-white hover:shadow-lg transition-shadow">
            <div className="relative">
              <img 
              // src={image}
              src={`http://localhost:5000/uploads/${product.images[0]}`}                
              alt={product.title}
                className="w-full h-48 object-cover"
              />
              <button className="absolute top-2 right-2 p-1 rounded-full bg-white shadow-md hover:bg-gray-100">
                <Heart className="h-5 w-5 text-gray-600" />
              </button>
              {product.isFeatured && (
                <span className="absolute top-2 left-2 bg-yellow-500 text-xs font-semibold px-2 py-1 rounded">
                  FEATURED
                </span>
              )}
            </div>
            
            <div className="p-4">
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-semibold">₹ {product.price.toLocaleString()}</span>
                {product.year && (
                  <span className="text-sm text-gray-600">
                    {product.year} {product.distance && `- ${product.distance}`}
                  </span>
                )}
              </div>
              
              <h3 className="mt-2 text-sm font-medium text-gray-900 line-clamp-2">
                {product.title}
              </h3>
              
              <div className="mt-2 flex items-center justify-between text-xs text-gray-500">
                <span>{product.location}</span>
                <span>{product.date}</span>
              </div>
            </div>
          </div>
        ))}

        {/* Sell CTA Card */}
        <div className="border rounded-lg overflow-hidden bg-blue-600 text-white flex flex-col items-center justify-center p-6 text-center">
          <h3 className="text-xl font-semibold mb-4">Want to see your stuff here?</h3>
          <p className="mb-6">Make some extra cash by selling things in your community. Go on, it's quick and easy.</p>
          <button className="bg-white text-blue-600 px-6 py-2 rounded-md font-semibold hover:bg-gray-100 transition-colors">
            Start selling
          </button>
        </div>
      </div>
    </div>
  );
};

export default FreshRecommendations;
