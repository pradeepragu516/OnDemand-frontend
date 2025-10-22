import React from 'react';
import { FaSearch, FaMapMarkerAlt, FaShoppingCart, FaUser, FaChevronDown } from 'react-icons/fa';
import "../App.css";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-3 border-b shadow-md bg-gradient-to-r from-blue-500 to-purple-500">
      {/* Logo and Brand */}
      <div className="flex items-center">
        {/* Much larger UC logo */}
        <div className="bg-black text-white w-14 h-14 flex items-center justify-center rounded-full">
          <span className="font-bold text-3xl">PF</span>
        </div>
        
        {/* Urban Company inline */}
        <div className="ml-4 flex flex-col">
          <span className="font-bold text-xl text-white">PRIME</span>
          <span className="font-bold text-xl text-white">FiXX</span>
        </div>
      </div>
      
      {/* Spacing */}
      <div className="flex-1 mx-8"></div>
      
      {/* Location and Search */}
      <div className="flex-1 max-w-2xl">
        <div className="flex">
          {/* Location Selection */}
          <div className="relative flex items-center border rounded-l-full px-4 py-2 bg-gray-50">
            <FaMapMarkerAlt className="text-gray-500 mr-2" />
            <span className="text-gray-700">Gandhipuram</span>
            <FaChevronDown className="text-gray-500 ml-2" size={12} />
            <select className="absolute inset-0 w-full opacity-0 cursor-pointer">
              <option>Gandhipuram</option>
              <option>Other locations</option>
            </select>
          </div>
          
          {/* Search Bar */}
          <div className="flex-1 relative border-l-0 border rounded-r-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search for 'Kitchen cleaning'"
              className="block w-full pl-10 pr-3 py-2 border-0 focus:ring-0 focus:outline-none text-sm"
            />
          </div>
        </div>
      </div>
      
      {/* User Actions */}
      <div className="flex items-center space-x-6">
        <button className="text-xl hover:text-blue-300" aria-label="View bookings">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
            <rect x="9" y="3" width="6" height="4" rx="2" />
            <path d="M9 14l2 2 4-4" />
          </svg>
        </button>
        <button className="text-xl hover:text-blue-300" aria-label="Shopping cart">
          <FaShoppingCart />
        </button>
        <button className="text-xl hover:text-blue-300" aria-label="User account">
          <FaUser />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
