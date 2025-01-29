import React, { useState } from "react";
import { Search, Heart, ChevronDown, Plus, LogOut, User } from "lucide-react";
import olxIcon from "/images/Nabvar/olxIcon.jpg";
// import { X } from 'lucide-react';
// import axios from "axios";
import AddProduct from "./AddProduct";
import { toast } from "react-toastify";
import "react-toastify/ReactToastify.css";
import { useGlobal } from "../globalContext";
import { LoginSignup } from "./LoginSignup";

interface Location {
  id: number;
  name: string;
}

const Navbar: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedLanguage, setSelectedLanguage] = useState<string>("English");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [accountOpen, setAccountOpen] = useState<boolean>(false);
  const [AddProductDiv, setAddProductDiv] = useState<boolean>(false);
  const { globalVar, setGlobalVar } = useGlobal();

  const slides = [
    {
      icon: "🎸",
      title: "Help us become one of the safest places to buy and sell",
    },
    {
      icon: "🤝",
      title: "Connect with a community of genuine buyers and sellers",
    },
    {
      icon: "🔒",
      title: "Your safety is our top priority",
    },
  ];
  const locations: Location[] = [
    { id: 1, name: "New York" },
    { id: 2, name: "Los Angeles" },
    { id: 3, name: "Chicago" },
    { id: 4, name: "Houston" },
  ];
  const languages = ["ENGLISH", "Spanish", "French", "German"];

  const handleAddProductDiv = (globalVar: boolean) => {
    if (globalVar === true) {
      setAddProductDiv(true);
      console.log(AddProductDiv);
    } else {
      toast.error("Please Login For Sell. ");
    }
  };
  return (
    <>
      <nav className="bg-white shadow-md pl-2 px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Left section */}
          <div className="flex items-center space-x-2 flex-1">
            {/* Company image */}
            <img src={olxIcon} className="h-11" />
            {/* Location selector */}
            <div className="relative w-67 border-3">
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-sm pl-10 pr-8 py-2 focus:outline-none focus:ring-blue-500"
              >
                <option value="">India</option>
                {locations.map((location) => (
                  <option key={location.id} value={location.name}>
                    {location.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>

            {/* Search box */}
            <div className="flex items-center w-294 ml-2 border-2">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 border"
                />
              </div>
              <div className="ml- bg-green-950 w-11 pl-1">
                <Search className="  h-10.5 w-8 text-white cursor-pointer  p-1 rounded" />
              </div>
            </div>
          </div>

          {/* Right section */}
          <div className="flex items-center space-x-6">
            {/* Language selector */}
            <div className="relative">
              <button
                onClick={() => setIsOpen(true)}
                className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 "
              >
                {/* <Globe className="h-5 w-5" /> */}
                <span className="text-green-950 font-medium pt-1 pb-1">
                  {selectedLanguage}
                </span>
                <ChevronDown className="h-4 w-4" />
              </button>

              {isOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-lg">
                  {languages.map((language) => (
                    <button
                      key={language}
                      onClick={() => {
                        setSelectedLanguage(language);
                        setIsOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      {language}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Favorites */}
            <button className="text-gray-700 hover:text-gray-900">
              <Heart className="h-6 w-6" />
            </button>

            {/* Login button */}
            {globalVar ? (
              <>
                <button
                  onClick={() => {
                    setGlobalVar(false);
                    toast.success("LogOut successful! ");
                  }}
                  className="flex items-center  border-b-2 space-x-1 text-gray-700 hover:text-gray-900"
                >
                  <LogOut className="h-5 w-5" />
                  <span className="font-bold ">LogOut</span>
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => {
                    setAccountOpen(true);
                    console.log(accountOpen);
                  }}
                  className="flex items-center  border-b-2 space-x-1 text-gray-700 hover:text-gray-900"
                >
                  <User className="h-5 w-5" />
                  <span className="font-bold ">Login</span>
                </button>
              </>
            )}
            {accountOpen && (
              <LoginSignup setAccountOpen={setAccountOpen} slides={slides} />
            )}

            {/* Sell button */}
            <button
              onClick={() => {
                handleAddProductDiv(globalVar);
              }}
              className="flex items-center space-x-1 border-yellow-400 border-5 bg-white text-black font-semibold px-4 py-2 rounded-3xl"
            >
              <Plus className="h-5 w-5 " />
              <span>SELL</span>
            </button>
            {AddProductDiv && <AddProduct close={setAddProductDiv} />}
          </div>
        </div>
      </nav>
      <div className=" bg-gray-10 pb-2 pt-2 categories mt-2 text-center space-x-5 ">
        <span className="allcategories  font-semibold">ALL CATEGORIES ▼</span>
        <span>Cars</span>
        <span>Motorcles</span>
        <span>Mobile Phones</span>
        <span>For Sale Houses & Appartments</span>
        <span>Scooter</span>
        <span>Commercial & Other Vehicles</span>
        <span>For Reant: Houses & Appartments</span>
      </div>
    </>
  );
};

export default Navbar;
