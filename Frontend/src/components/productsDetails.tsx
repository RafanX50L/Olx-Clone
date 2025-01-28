import React, { useState } from 'react';

interface ProductDetailsProps {
  productName: string;
  modelYear: string;
  price: number;
  images: string[];
  description: string;
  mileage: string;
  transmission: string;
  location: string;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  productName,
  modelYear,
  price,
  images,
  description,
  mileage,
  transmission,
  location,
}) => {
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
            <div className="w-full h-full transition-all duration-300 ease-in-out"
            style={{
                transform: `scale(${1 - currentImage * 0.05})`, // Adjust the scaling factor as needed
              }}
            >
              <img
                src={images[currentImage]}
                alt={`Product image ${currentImage + 1}`}
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Thumbnails */}
          <div className="flex mt-4 space-x-4">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className={`w-16 h-16 object-cover rounded-md cursor-pointer ${
                  currentImage === index ? 'border-4 border-blue-500' : ''
                }`}
                onClick={() => handleImageChange(index)}
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="w-1/2 pl-6">
          <h2 className="text-2xl font-semibold">{productName} ({modelYear})</h2>
          <div className="flex items-center my-4">
            <span className="text-lg font-bold text-green-600">₹ {price.toLocaleString()}</span>
          </div>
          <p className="text-sm mb-4">{description}</p>
          <div className="space-y-2">
            <div className="flex items-center">
              <span className="font-semibold">Mileage:</span> <span>{mileage}</span>
            </div>
            <div className="flex items-center">
              <span className="font-semibold">Transmission:</span> <span>{transmission}</span>
            </div>
            <div className="flex items-center">
              <span className="font-semibold">Location:</span> <span>{location}</span>
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
