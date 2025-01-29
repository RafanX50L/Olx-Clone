import React, { useState } from "react";

interface Product {
  title: string;
  category: string;
  description: string;
  price: number;
  year: number;
  images: string[];
  location: string;
  owners: string;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}
interface ProductProps {
  product: Product;
}

const ProductDetails: React.FC <ProductProps>= ({ product }) => {
  console.log(product);
  const [currentImage, setCurrentImage] = useState<number>(0);

  const handleImageChange = (index: number) => {
    setCurrentImage(index);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between">
        {/* Image Carousel */}
        <div className="flex flex-col w-1/2">
          <div className="relative w-full h-72 overflow-hidden">
            <div
              className="w-full h-full transition-all duration-300 ease-in-out"
              style={{
                transform: `scale(${1 - currentImage * 0.05})`, // Adjust the scaling factor as needed
              }}
            >
              <img
                src={`http://localhost:5000/uploads/${product.images[currentImage]}`}
                alt={`Product image ${currentImage + 1}`}
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Thumbnails */}
          <div className="flex mt-4 space-x-4">
            {product.images.map((image:string, index:number) => (
              <img
                key={index}
                src={`http://localhost:5000/uploads/${image}`}
                alt={`Thumbnail ${index + 1}`}
                className={`w-16 h-16 object-cover rounded-md cursor-pointer ${
                  currentImage === index ? "border-4 border-blue-500" : ""
                }`}
                onClick={() => handleImageChange(index)}
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="w-1/2 pl-6">
          <h2 className="text-2xl font-semibold">
            {product.title} ({product.year})
          </h2>
          <div className="flex items-center my-4">
            <span className="text-lg font-bold text-green-600">
              ₹ {product.price.toLocaleString()}
            </span>
          </div>
          <p className="text-sm mb-4">{product.description}</p>
          <div className="space-y-2">
            <div className="flex items-center">
              <span className="font-semibold">Category:</span>{" "}
              <span>{product.category}</span>
            </div>
            <div className="flex items-center">
              <span className="font-semibold">Owners:</span>{" "}
              <span>{product.owners}</span>
            </div>
            <div className="flex items-center">
              <span className="font-semibold">Location:</span>{" "}
              <span>{product.location}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Buttons */}
      <div className="flex justify-between mt-6">
        <button className="bg-yellow-400 text-black py-2 px-6 rounded-lg shadow-md hover:bg-orange-300">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
