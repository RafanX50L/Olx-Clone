import React, { useState } from "react";
import {
  X,
  Image as ImageIcon,
  Plus,
  MapPin,
  Calendar,
  Users,
  IndianRupee,
} from "lucide-react";
import { toast } from "react-toastify";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
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
interface AddProductProps {
  close: (value:boolean) => void;
  setProducts:(product:Product)=>void;
}

interface FormData {
  title: string;
  description: string;
  category: string;
  price: string;
  year: string;
  location: string;
  owners: string;
  images: File[];
}

const AddProduct: React.FC<AddProductProps> = ({ close,setProducts }) => {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    description: "",
    category: "",
    price: "",
    year: "",
    location: "",
    owners: "",
    images: [],
  });

  const ownerOptions: string[] = ["1st", "2nd", "3rd", "4th", "4+"];
  const [loading, setLoading] = useState<boolean>(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      if (files.length + formData.images.length <= 3) {
        setFormData((prev) => ({
          ...prev,
          images: [...prev.images, ...files],
        }));
      }
    }
  };

  const handleAddProduct = async () => {
    setLoading(true);
    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("category", formData.category);
    formDataToSend.append("price", formData.price);
    formDataToSend.append("year", formData.year);
    formDataToSend.append("location", formData.location);
    formDataToSend.append("owners", formData.owners);
    formData.images.forEach((image) => {
      formDataToSend.append("images", image);
    });

    try {
      const response = await axios.post(
        "http://localhost:5000/add_product",
        formDataToSend,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      console.log(response.data);
      if (response.status === 201) {
        toast.success("Product added successfully! 🎉");
        setLoading(false)
        setProducts(response.data.product)
        console.log(response)
        close(false);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error adding product:", error);
      toast.error("Product added failed! ");
      setLoading(false)
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-xl mx-4 relative max-h-[90vh] flex flex-col">
        <button
          onClick={()=>close(false)}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="bg-gray-50 flex-1 overflow-y-auto">
          <div className="max-w-3xl mx-auto p-4">
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6 border-b border-gray-200">
                <h1 className="text-2xl font-bold text-center">POST YOUR AD</h1>
              </div>
              <div className="p-6 space-y-6">
                <div>
                  <label className="block mb-1">
                    Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="Enter ad title"
                  />
                </div>
                <div>
                  <label className="block mb-1">
                    Description <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Enter ad description"
                  />
                </div>
                <div>
                  <label className="block mb-1">
                    Category <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    placeholder="Enter category"
                  />
                </div>
                <div>
                  <label className="block mb-1 flex items-center gap-2">
                    <IndianRupee className="w-4 h-4" /> Price{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    placeholder="Enter price"
                  />
                </div>
                <div>
                  <label className="block mb-1 flex items-center gap-2">
                    <Calendar className="w-4 h-4" /> Year{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md"
                    name="year"
                    value={formData.year}
                    onChange={handleInputChange}
                    placeholder="Enter year"
                  />
                </div>
                <div>
                  <label className="block mb-1 flex items-center gap-2">
                    <Users className="w-4 h-4" /> No. of Owners{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {ownerOptions.map((option) => (
                      <button
                        key={option}
                        className={`px-4 py-2 border rounded-md ${
                          formData.owners === option
                            ? "bg-blue-50 border-blue-500 text-blue-500"
                            : "hover:bg-gray-50"
                        }`}
                        onClick={() =>
                          setFormData((prev) => ({ ...prev, owners: option }))
                        }
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block mb-1 flex items-center gap-2">
                    <MapPin className="w-4 h-4" /> Location{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="Enter location"
                  />
                </div>
                <div>
                  <label className="block mb-1 flex items-center gap-2">
                    <ImageIcon className="w-4 h-4" /> Photos{" "}
                    <span className="text-red-500">*</span>{" "}
                    <span className="text-gray-500 text-sm">
                      (Max 3 images)
                    </span>
                  </label>
                  <div className="grid grid-cols-3 gap-4">
                    {[...Array(3)].map((_, index) => (
                      <div
                        key={index}
                        className="aspect-square border-2 border-dashed rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-50"
                      >
                        {formData.images[index] ? (
                          <img
                            src={URL.createObjectURL(formData.images[index])}
                            alt={`Upload ${index + 1}`}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        ) : (
                          <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer">
                            <Plus className="w-6 h-6 text-gray-400" />
                            <input
                              type="file"
                              className="hidden"
                              accept="image/*"
                              onChange={handleImageUpload}
                            />
                          </label>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => {
                    handleAddProduct();
                  }}
                  className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Post Ad
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {loading &&
        <div className="absolute inset-0 flex justify-center items-center z-50">
          <ThreeDots
            color="#3490dc" 
            height={80} 
            width={80} 
          />
        </div>
      }
    </div>
  );
};

export default AddProduct;
