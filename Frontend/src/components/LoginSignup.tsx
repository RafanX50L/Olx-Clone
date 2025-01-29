import React, { useState } from "react";
import { X } from "lucide-react";
import axios from "axios";
import { toast } from "react-toastify";
import { useGlobal } from "../globalContext";

interface loginOrSignup {
  name?: string;
  email: string;
  password: string;
}


export const LoginSignup = ({ setAccountOpen, slides }) => {

  const { globalVar, setGlobalVar } = useGlobal();
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [loginOpen, setLoginOpen] = useState<boolean>(false);
  const [SignUp, setSignUp] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");

  const Login = async ({ email, password }: loginOrSignup) => {
    console.log("Input Data:", email, password);

    const data = { email, password };

    try {
      const response = await axios.post("http://localhost:5000/login", data, {
        headers: { "Content-Type": "application/json" },
      });

      console.log("fasdfas");
      console.log(response);
      if (response.status === 200) {
        console.log("Login successful:", response.data);
        toast.success("Login successful! 🎉");
        setGlobalVar(true);
        setAccountOpen(false);
        setLoginOpen(false);
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
      const response = await axios.post("http://localhost:5000/signup", data, {
        headers: { "Content-Type": "application/json" },
      });

      console.log("fasdfas");
      console.log(response);
      if (response.status === 201) {
        console.log("Signup successful:", response.data);
        toast.success("Signup successful! 🎉");
        setGlobalVar(true);
        setAccountOpen(false);
        setLoginOpen(false);
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
      <>
        <div className="fixed inset-0  bg-black/80 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-md mx-4 relative">
            {/* Close button */}
            <button
              onClick={() => {
                setAccountOpen(false);
                setSignUp(false);
              }}
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
                      index === currentSlide ? "bg-blue-500" : "bg-gray-300"
                    }`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>

              {/* Auth buttons */}
              <div className="space-y-4">
                <button className="w-full py-3 px-4 border border-gray-300 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-50 transition-colors">
                  <span className="text-gray-700 font-medium">
                    Continue with phone
                  </span>
                </button>

                <button className="w-full py-3 px-4 border border-gray-300 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-50 transition-colors">
                  <img
                    src="/api/placeholder/20/20"
                    alt="Google"
                    className="w-5 h-5"
                  />
                  <span className="text-gray-700 font-medium">
                    Continue with Google
                  </span>
                </button>

                <div className="flex items-center justify-center space-x-4">
                  <div className="border-t border-gray-300 flex-grow" />
                  <span className="text-gray-500 text-sm">OR</span>
                  <div className="border-t border-gray-300 flex-grow" />
                </div>

                <button
                  onClick={() => {
                    setLoginOpen(true);
                    // setAccountOpen(false);
                    console.log(loginOpen, SignUp);
                  }}
                  className="w-full text-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Login
                </button>
                <button
                  onClick={() => {
                    setLoginOpen(true);
                    setSignUp(true);
                    // setAccountOpen(false);
                  }}
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
                If you continue, you are accepting OLX Terms and Conditions and
                Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </>
      {loginOpen && (
        <>
          <div className="fixed inset-0  bg-black/0 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg w-full max-w-md mx-4 relative">
              {/* Close button */}
              <button
                onClick={() => {
                  setLoginOpen(false);
                  setSignUp(false);
                }}
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
                        index === currentSlide ? "bg-blue-500" : "bg-gray-300"
                      }`}
                      onClick={() => setCurrentSlide(index)}
                    />
                  ))}
                </div>

                {/* Auth buttons */}
                <div className="space-y-4 items-center ">
                  {SignUp ? (
                    <>
                      <input
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                        type="name"
                        placeholder="Enter Name "
                        className="w-full py-3 px-4 border border-gray-300 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-50 transition-colors"
                      ></input>

                      <input
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        type="email"
                        placeholder="Enter Email Address"
                        className="w-full py-3 px-4 border border-gray-300 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-50 transition-colors"
                      ></input>

                      <input
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                        type="password"
                        placeholder="Password"
                        className="w-full py-3 px-4 border border-gray-300 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-50 transition-colors"
                      ></input>

                      <button
                        onClick={() => {
                          Signup({ name, email, password });
                        }}
                        className="w-full text-center border-2 rounded-md hover:bg-green-400 text-green-800 hover:text-teal-900 hover:border-3 font-medium"
                      >
                        Sign Up
                      </button>

                      <div className="flex items-center justify-center space-x-4">
                        <div className="border-t border-gray-300 flex-grow" />
                        <span className="text-gray-500 text-sm">OR</span>
                        <div className="border-t border-gray-300 flex-grow" />
                      </div>

                      <button
                        onClick={() => {
                          setSignUp(false);
                        }}
                        className="w-full text-center text-blue-600 hover:text-blue-700 font-medium"
                      >
                        Login
                      </button>
                    </>
                  ) : (
                    <>
                      <input
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        type="email"
                        placeholder="Enter Email Address"
                        className="w-full py-3 px-4 border border-gray-300 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-50 transition-colors"
                      ></input>

                      <input
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                        type="password"
                        placeholder="Password"
                        className="w-full py-3 px-4 border border-gray-300 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-50 transition-colors"
                      ></input>

                      <button
                        onClick={() => {
                          Login({ email, password });
                        }}
                        className="w-full text-center border-2 rounded-md text-green-800 hover:text-teal-900 hover:bg-green-400 hover:border-3 font-medium"
                      >
                        Login
                      </button>

                      <div className="flex items-center justify-center space-x-4">
                        <div className="border-t border-gray-300 flex-grow" />
                        <span className="text-gray-500 text-sm">OR</span>
                        <div className="border-t border-gray-300 flex-grow" />
                      </div>

                      <button
                        onClick={() => {
                          setSignUp(true);
                        }}
                        className="w-full text-center text-blue-600 hover:text-blue-700 font-medium"
                      >
                        Sign Up
                      </button>
                    </>
                  )}
                </div>

                {/* Terms text */}
                <p className="mt-6 text-center text-xs text-gray-500">
                  All your personal details are safe with us.
                </p>
                <p className="mt-2 text-center text-xs text-gray-500">
                  If you continue, you are accepting OLX Terms and Conditions
                  and Privacy Policy
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

// export default LoginSignup;
