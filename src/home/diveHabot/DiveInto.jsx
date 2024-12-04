import React from 'react'
import { BsArrowRight } from "react-icons/bs";


const DiveInto = () => {
    return (
        <>
       
            <div className="flex flex-wrap ">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-12">
        <h2 className="text-4xl font-bold mb-4 text-center">
        Ready to dive into <span className="text-customBlue">HABOT?</span>
        </h2>
        <p className="text-gray-700 text-lg mb-6 text-left">
        Signing up with HABOT opens the door to a world of new opportunities and potential for business growth. Gain access to a vibrant community of like-minded individuals, unlock valuable resources, and take the first step towards realizing your entrepreneurial dreams.        </p>
        <button className="bg-customGreen text-white font-bold py-2 px-4 rounded border border-customGreen hover:bg-white hover:text-customGreen transition flex items-center justify-center space-x-2 group">
        <span>Sign Up Today</span>
        <span
          className="transform transition-transform duration-300 group-hover:translate-x-2"
        >
          <BsArrowRight />
        </span>
      </button>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-8">
        <div className="grid grid-cols-2 gap-4 w-full max-w-md">
          <div className="border border-customOrange text-gray-800 text-center py-2 px-4 rounded">
            Abu Dhabi
          </div>
          <div className="border border-customOrange text-gray-800 text-center py-2 px-4 rounded">
            Dubai
          </div>
          <div className="border border-customOrange text-gray-800 text-center py-2 px-4 rounded">
          Sharjah & Ajman
          </div>
          <div className="border border-customOrange text-gray-800 text-center py-2 px-4 rounded">
          Fujairah
          </div>
          <div className="border border-customOrange text-gray-800 text-center py-2 px-4 rounded">
          Ras Al Khaimah
          </div>
          <div className="border border-customOrange text-gray-800 text-center py-2 px-4 rounded">
          Umm Al Quwain
          </div>
        </div>
      </div>
    </div>
    
        </>
    )
}

export default DiveInto;
