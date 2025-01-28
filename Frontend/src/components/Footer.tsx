import React from 'react';
import olx from '../../public/images/Footer/olx.jpg';
import carTech from '../../public/images/Footer/carttech.jpg';
import carwale from '../../public/images/Footer/carwale.jpg';
import bikeWale from '../../public/images/Footer/bikewale.jpg';
import carTrade from '../../public/images/Footer/cartrade.jpg';
import mobility from '../../public/images/Footer/mobility.jpg';

const Footer: React.FC = () => {
  return (
    <footer className="w-full">
    {/* <!-- Upper section --> */}
    <div className="bg-gray-100 py-6 ml-30 mr-30">
      <div className="container mx-auto px-12 grid grid-cols-5 gap-8">
        {/* <!-- Popular Locations --> */}
        <div>
          <h3 className="text-gray-800 font-semibold text-sm mb-3">POPULAR LOCATIONS</h3>
          <ul className=" text-sm">
            <li><a href="#" className="text-teal-950  hover:underline">Kolkata</a></li>
            <li><a href="#" className="text-teal-950 hover:underline">Mumbai</a></li>
            <li><a href="#" className="text-teal-950 hover:underline">Chennai</a></li>
            <li><a href="#" className="text-teal-950 hover:underline">Pune</a></li>
          </ul>
        </div>

        {/* <!-- Trending Locations --> */}
        <div>
          <h3 className="text-gray-800 font-semibold text-sm mb-3">TRENDING LOCATIONS</h3>
          <ul className=" text-sm">
            <li><a href="#" className="text-teal-950 hover:underline">Bhubaneshwar</a></li>
            <li><a href="#" className="text-teal-950 hover:underline">Hyderabad</a></li>
            <li><a href="#" className="text-teal-950 hover:underline">Chandigarh</a></li>
            <li><a href="#" className="text-teal-950 hover:underline">Nashik</a></li>
          </ul>
        </div>

        {/* <!-- About Us --> */}
        <div>
          <h3 className="text-gray-800 font-semibold text-sm mb-3">ABOUT US</h3>
          <ul className=" text-sm">
            <li><a href="#" className="text-teal-950 hover:underline">Tech@OLX</a></li>
          </ul>
        </div>

        {/* <!-- OLX --> */}
        <div>
          <h3 className="text-gray-800 font-semibold text-sm mb-3">OLX</h3>
          <ul className=" text-sm">
            <li><a href="#" className="text-teal-950 hover:underline">Blog</a></li>
            <li><a href="#" className="text-teal-950 hover:underline">Help</a></li>
            <li><a href="#" className="text-teal-950 hover:underline">Sitemap</a></li>
            <li><a href="#" className="text-teal-950 hover:underline">Legal & Privacy Information</a></li>
            <li><a href="#" className="text-teal-950 hover:underline">Vulnerability Disclosure Program</a></li>
          </ul>
        </div>

        {/* <!-- Follow Us & App Downloads --> */}
        <div>
          <h3 className="text-gray-800 font-semibold text-sm mb-3">FOLLOW US</h3>
          <div className="flex items-center space-x-2 mb-4">
            <a href="#" className="text-teal-950"><img src="/api/placeholder/20/20" alt="Facebook" /></a>
            <a href="#" className="text-teal-950"><img src="/api/placeholder/20/20" alt="Instagram" /></a>
            <a href="#" className="text-teal-950"><img src="/api/placeholder/20/20" alt="Twitter" /></a>
          </div>
          <div className="space-y-2">
            <a href="#"><img src="/api/placeholder/132/40" alt="Get it on Google Play" className="rounded" /></a>
            <a href="#"><img src="/api/placeholder/132/40" alt="Download on App Store" className="rounded" /></a>
          </div>
        </div>
      </div>
    </div>

    {/* <!-- Bottom dark section --> */}
    <div className="bg-teal-950 ml-30 mr-30 py-6 ">
        <div className="container mx-auto">
          <div className="flex justify-between items-center border-b border-gray-600 pb-6">
            <div className="flex items-center space-x-35 mt-6 mb-6">
              <img src={carTech} alt="CarTrade Tech Group " className='h-15 b' />
              <div className="h-25 w-px bg-white "></div>
              <img src={olx} alt="OLX" className='h-15' />
              <img src={carwale} alt="CarWale" className='h-15'  />
              <img src={bikeWale} alt="BikeWale" className='h-15' />
              <img src={carTrade} alt="CarTrade" className='h-15' />
              <img src={mobility} alt="Mobility Outlook" className='h-15' />
            </div>
          </div>
          <div className="pt-4 text-sm flex">
            <a href="#" className="text-white hover:underline">Help</a>
            <span className="text-white mx-2">-</span>
            <a href="#" className="text-white hover:underline">Sitemap</a>
            <div className="  text-white text-sm ml-300">
                All rights reserved © 2006-2025 OLX
            </div>
          </div>
        </div>
      </div>
      
  </footer>
  );
}

export default Footer;
