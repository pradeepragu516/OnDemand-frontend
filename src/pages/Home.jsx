import React from 'react';
import { FaStar, FaUsers } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import BarberImage from '../assets/BARBER.jpg';
import carp from '../assets/CARPENTER.jpg';
import elec from '../assets/ELECTRICIAN.jpg';
import electro from '../assets/ELECTRONICS.jpg';
import hk from '../assets/HOUSE KEEPING.jpg';
import HS from '../assets/HOUSE SECURITY AUTOMATION.jpg';
import plumb from '../assets/PLUMBING_NEW.jpg';
import tra from '../assets/TRANSPORTATION.jpg';
import AR from '../assets/AC_REPAIRING.jpg';
import sal from '../assets/vector saloon.jpg';
import plu from'../assets/WhatsApp Image 2025-03-18 at 09.19.10_5764b7b6.jpg';
import ele from'../assets/elec.jpg';

const Home = () => {
  const navigate = useNavigate();

  const services = [
    { image: BarberImage, title: "Salon for Men and Women" },
    { image:  AR, title: "AC & Appliance Repair" },
    { image: hk, title: "Bathroom & Kitchen Cleaning" },
    { image: elec, title: "Electrical" },
    { image: plumb, title: "Plumbing" },
    { image: carp, title: "Carpenter" },
    { image: HS, title: "Home Security & Automation" },
    { image:  electro, title: "Mobile and Electronics" },
    { image: tra, title: "Transportation & Moving Services" }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <div className="px-8 py-6">
        <div className="mb-8">
          <h1 className="text-4xl font-medium mb-1">Home services at your</h1>
          <h1 className="text-4xl font-medium">doorstep</h1>
          <p className="text-gray-500 mt-2">
            Reliable & expert solutions for your household needs.
          </p>
        </div>

        {/* Services Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="border rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-medium mb-6">What are you looking for?</h2>

            <div className="grid grid-cols-3 gap-4">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  image={service.image}
                  title={service.title}
                  navigate={navigate}
                />
              ))}
            </div>
          </div>

          {/* Service Images */}
          <div className="col-span-2 grid grid-cols-2 gap-4">
            <img src={BarberImage} className="rounded-lg w-full h-64 object-cover" alt="Salon service" />
            <img src={ele} className="rounded-lg w-full h-64 object-cover" alt="Electronics Services" />
            <img src={plu} className="rounded-lg w-full h-64 object-cover" alt="Plumbing service" />
            <img src={AR} className="rounded-lg w-full h-64 object-cover" alt="AC repair service" />
          </div>
        </div>

        {/* Ratings Section */}
        <div className="flex mt-8 items-center space-x-20">
          <div className="flex items-center space-x-3">
            <FaStar className="text-2xl text-gray-600" />
            <div>
              <h3 className="text-2xl font-bold">4.8</h3>
              <p className="text-gray-500">Service Rating</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <FaUsers className="text-2xl text-gray-600" />
            <div>
              <h3 className="text-2xl font-bold">12M+</h3>
              <p className="text-gray-500">Customers Globally</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const ServiceCard = ({ image, title, navigate }) => (
  <div
    className="flex flex-col items-center text-center cursor-pointer transition-transform hover:scale-105"
    onClick={() => navigate('/servicerequest', { state: { image, title } })}
    aria-label={`Navigate to ${title}`}
  >
<div className="bg-gray-100 rounded-lg p-3 mb-2 shadow-md hover:border hover:border-gray-300 transition-all duration-300">
<img src={image} alt={title} className="w-20 h-20 object-contain" />
    </div>
    <p className="text-xs font-medium">{title}</p>
  </div>
);

export default Home;