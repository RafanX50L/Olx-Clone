import React, { useState } from "react";
import { Search, Heart, ChevronDown,  Plus, LogOut, User } from "lucide-react";
import olxIcon from '/images/Nabvar/olxIcon.jpg';
import { X } from 'lucide-react';
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/ReactToastify.css';

interface Location {
  id: number;
  name: string;
}
interface loginOrSignup{
  name?:string;
  email:string;
  password:string;
}
const Navbar: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedLanguage, setSelectedLanguage] = useState<string>("English");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [accountOpen, setAccountOpen] = useState<boolean>(false);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [loginOpen,setLoginOpen] = useState<boolean>(false);
  const [SignUp,setSignUp] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [isLoggedIn,setIsLoggedIn] = useState(localStorage.getItem("logedin"))


  const slides = [
    {
      icon: "🎸",
      title: "Help us become one of the safest places to buy and sell"
    },
    {
      icon: "🤝",
      title: "Connect with a community of genuine buyers and sellers"
    },
    {
      icon: "🔒",
      title: "Your safety is our top priority"
    }
  ];
  const locations: Location[] = [
    { id: 1, name: "New York" },
    { id: 2, name: "Los Angeles" },
    { id: 3, name: "Chicago" },
    { id: 4, name: "Houston" },
  ];
  const languages = ["ENGLISH", "Spanish", "French", "German"];


  const Login = async ({ email, password }: loginOrSignup) => {
    console.log("Input Data:", email, password);
  
    const data = { email, password };
  
    try {
      const response = await axios.post(
        "http://localhost:5000/login",
        data,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log('fasdfas')
      console.log(response)
      if (response.status === 200) {
        console.log("Login successful:", response.data);
        toast.success("Login successful! 🎉");
        localStorage.setItem('logedin','true');
        setIsLoggedIn('true');
        setAccountOpen(false);
        setLoginOpen(false)
      } else {
        console.log("Unexpected response:", response);
        toast.error("login failed. Please try again. ❌");
        setLoginOpen(false);
      }
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("login failed. Please try again. ❌");
    }
  };
  const Signup = async ({ name, email, password }: loginOrSignup) => {
    console.log("Input Data:", name, email, password);
  
    const data = { name, email, password };
  
    try {
      const response = await axios.post(
        "http://localhost:5000/signup",
        data,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log('fasdfas')
      console.log(response)
      if (response.status === 201) {
        console.log("Signup successful:", response.data);
        toast.success("Signup successful! 🎉");
        localStorage.setItem('logedin','true');
        setIsLoggedIn('true');
        setAccountOpen(false);
        setLoginOpen(false)
      } else {
        console.log("Unexpected response:", response);
        toast.error("Signup failed. Please try again. ❌");
        setLoginOpen(false);
      }
    } catch (error) {
      console.error("Error during signup:", error);
      toast.error("Signup failed. Please try again. ❌");
    }
  };
  return (
    <>
      <nav className="bg-white shadow-md pl-2 px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Left section */}
          <div className="flex items-center space-x-2 flex-1">
            {/* Company image */}
            <img src={olxIcon} className="h-11"/>
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
                <span className="text-green-950 font-medium pt-1 pb-1">{selectedLanguage}</span>
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
            {isLoggedIn === "true" ?
            <>
              <button onClick={()=>{localStorage.removeItem('logedin');setIsLoggedIn('false');toast.success("LogOut successful! ");}} className="flex items-center  border-b-2 space-x-1 text-gray-700 hover:text-gray-900">
                <LogOut className="h-5 w-5" />
                <span className="font-bold ">LogOut</span>
              </button>
            </>:
            <>
              <button onClick={()=>{setAccountOpen(true);console.log(accountOpen);}} className="flex items-center  border-b-2 space-x-1 text-gray-700 hover:text-gray-900">
                <User className="h-5 w-5" />
                <span className="font-bold ">Login</span>
              </button>
            </>
            }
            {accountOpen&&
              <>
                <div className="fixed inset-0  bg-black/80 bg-opacity-50 flex items-center justify-center z-50">
                  <div className="bg-white rounded-lg w-full max-w-md mx-4 relative">
                    {/* Close button */}
                    <button 
                      onClick={()=>{setAccountOpen(false);setSignUp(false)}}
                      className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
                    >
                      <X className="w-6 h-6" />
                    </button>

                    {/* Slider content */}
                    <div className="p-8">
                      <div className="flex justify-center mb-6">
                        <span className="text-5xl">{slides[currentSlide].icon}</span>
                      </div>

                      <h2 className="text-center text-xl font-semibold text-gray-800 mb-8">
                        {slides[currentSlide].title}
                      </h2>

                      {/* Slider dots */}
                      <div className="flex justify-center space-x-2 mb-8">
                        {slides.map((_, index) => (
                          <button
                            key={index}
                            className={`w-2 h-2 rounded-full transition-colors ${
                              index === currentSlide ? 'bg-blue-500' : 'bg-gray-300'
                            }`}
                            onClick={() => setCurrentSlide(index)}
                          />
                        ))}
                      </div>

                      {/* Auth buttons */}
                      <div className="space-y-4">
                        <button className="w-full py-3 px-4 border border-gray-300 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-50 transition-colors">
                          <span className="text-gray-700 font-medium">Continue with phone</span>
                        </button>

                        <button className="w-full py-3 px-4 border border-gray-300 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-50 transition-colors">
                          <img src="/api/placeholder/20/20" alt="Google" className="w-5 h-5" />
                          <span className="text-gray-700 font-medium">Continue with Google</span>
                        </button>

                        <div className="flex items-center justify-center space-x-4">
                          <div className="border-t border-gray-300 flex-grow" />
                          <span className="text-gray-500 text-sm">OR</span>
                          <div className="border-t border-gray-300 flex-grow" />
                        </div>

                        <button onClick={()=>{setLoginOpen(true);setAccountOpen(false);console.log(loginOpen,accountOpen,SignUp)}}
                          className="w-full text-center text-blue-600 hover:text-blue-700 font-medium"
                        >
                          Login 
                        </button>
                        <button onClick={()=>{setLoginOpen(true);setSignUp(true);setAccountOpen(false)}}
                          className="w-full text-center text-blue-600 hover:text-blue-700 font-medium"
                        >
                          Sign Up
                        </button>
                      </div>

                      {/* Terms text */}
                      <p className="mt-6 text-center text-xs text-gray-500">
                        All your personal details are safe with us.
                      </p>
                      <p className="mt-2 text-center text-xs text-gray-500">
                        If you continue, you are accepting OLX Terms and Conditions and Privacy Policy
                      </p>
                    </div>
                  </div>
                </div>
              </>
            }
            {loginOpen&&
              <>
                <div className="fixed inset-0  bg-black/80 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg w-full max-w-md mx-4 relative">
                      {/* Close button */}
                      <button 
                        onClick={()=>{setLoginOpen(false);setSignUp(false)}}
                        className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
                      >
                        <X className="w-6 h-6" />
                      </button>

                      {/* Slider content */}
                      <div className="p-8">
                        <div className="flex justify-center mb-6">
                          <span className="text-5xl">{slides[currentSlide].icon}</span>
                        </div>

                        <h2 className="text-center text-xl font-semibold text-gray-800 mb-8">
                          {slides[currentSlide].title}
                        </h2>

                        {/* Slider dots */}
                        <div className="flex justify-center space-x-2 mb-8">
                          {slides.map((_, index) => (
                            <button
                              key={index}
                              className={`w-2 h-2 rounded-full transition-colors ${
                                index === currentSlide ? 'bg-blue-500' : 'bg-gray-300'
                              }`}
                              onClick={() => setCurrentSlide(index)}
                            />
                          ))}
                        </div>

                        {/* Auth buttons */}
                        <div className="space-y-4 items-center ">
                          {SignUp?
                            <>
                              <input onChange={(e)=>{setName(e.target.value)}} type="name" placeholder="Enter Name " className="w-full py-3 px-4 border border-gray-300 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-50 transition-colors">
                              </input>

                              <input onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="Enter Email Address" className="w-full py-3 px-4 border border-gray-300 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-50 transition-colors">
                              </input>
      
                              <input onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="Password" className="w-full py-3 px-4 border border-gray-300 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-50 transition-colors">
                              </input>

                              <button onClick={()=>{Signup({name,email,password})}} className="w-full text-center border-2 rounded-md hover:bg-green-400 text-green-800 hover:text-teal-900 hover:border-3 font-medium">Sign Up</button>
                              
                              <div className="flex items-center justify-center space-x-4">
                                <div className="border-t border-gray-300 flex-grow" />
                                <span className="text-gray-500 text-sm">OR</span>
                                <div className="border-t border-gray-300 flex-grow" />
                              </div>

                              <button onClick={()=>{setSignUp(false)}}
                                className="w-full text-center text-blue-600 hover:text-blue-700 font-medium"
                              >
                                Login
                              </button>
                            </>:
                            <>
                              <input onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="Enter Email Address" className="w-full py-3 px-4 border border-gray-300 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-50 transition-colors">
                              </input>
      
                              <input onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="Password" className="w-full py-3 px-4 border border-gray-300 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-50 transition-colors">
                              </input>

                              <button onClick={()=>{Login({email,password})}} className="w-full text-center border-2 rounded-md text-green-800 hover:text-teal-900 hover:bg-green-400 hover:border-3 font-medium">Login</button>
                              
                              <div className="flex items-center justify-center space-x-4">
                                <div className="border-t border-gray-300 flex-grow" />
                                <span className="text-gray-500 text-sm">OR</span>
                                <div className="border-t border-gray-300 flex-grow" />
                              </div>

                              <button onClick={()=>{setSignUp(true)}}
                              className="w-full text-center text-blue-600 hover:text-blue-700 font-medium"
                            >
                              Sign Up
                            </button>
                            </>
                          }

                      
                        </div>

                        {/* Terms text */}
                        <p className="mt-6 text-center text-xs text-gray-500">
                          All your personal details are safe with us.
                        </p>
                        <p className="mt-2 text-center text-xs text-gray-500">
                          If you continue, you are accepting OLX Terms and Conditions and Privacy Policy
                        </p>
                      </div>
                    </div>
                  </div>
              </>
            }

            {/* Sell button */}
            <button className="flex items-center space-x-1 border-yellow-400 border-5 bg-white text-black font-semibold px-4 py-2 rounded-3xl">
              <Plus className="h-5 w-5 " />
              <span>SELL</span>
            </button>
          </div>
        </div>
      </nav>
      <div className=" bg-gray-10 pb-2 pt-2 categories mt-2 text-center space-x-5 ">
        <span className="allcategories  font-semibold">
          ALL CATEGORIES ▼
        </span>
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
