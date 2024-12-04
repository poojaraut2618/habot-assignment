import React from 'react'
import bannerImage from '../../assets/banner.png';
import { FaMapMarkerAlt } from 'react-icons/fa'; // Example icons from React Icons
import { MdBusinessCenter } from "react-icons/md";

const Banner = () => {
    return (
        <>
            <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bannerImage})` }}>
            {/* Overlay */}
            <div className="absolute inset-0 bg-overlayColor bg-opacity-50"></div>
      
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
              {/* Heading */}
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
              Are You a Supplier?
              </h1>
              <h2 className="text-6xl md-text-6xl mb-6 text-center">Explore Matching Opportunities.</h2>
      
               {/* Search Form */}
        <form className="w-full max-w-4xl rounded-lg shadow-lg p-4 flex space-x-4 items-center">
        {/* Service Input */}
        <div className="flex items-center w-full">
          <input
            type="text"
            id="service"
            placeholder="Search your required service here"
            className="border border-gray-300 rounded p-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />
          <span className="absolute pl-3 text-customOrange">
          <MdBusinessCenter />
          </span>
        </div>

        {/* Location Input */}
        <div className="flex items-center w-full">
          <input
            type="text"
            id="location"
            placeholder="Serch your desired location here"
            className="border border-gray-300 rounded p-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />
          <span className="absolute pl-3 text-customOrange">
            <FaMapMarkerAlt />
          </span>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-customGreen text-white font-bold py-2 px-6 rounded hover:bg-customOrange transition"
        >
          Search
        </button>
      </form>

      <p className="text-sm"> <span className="font-bold">Are you a buyer?</span>  <a href="#" className="underline"> Click here if you are looking to post a requirements</a></p>
            </div>
          </div>

        </>
    )
}

export default Banner;
