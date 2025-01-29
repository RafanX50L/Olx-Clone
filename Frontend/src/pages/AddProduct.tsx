import React from 'react'
import { ToastContainer } from 'react-toastify'
import Footer from '../components/Footer'

const AddProduct = () => {
  return (
    <>
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
        <Footer/>
    </>
  )
}

export default AddProduct