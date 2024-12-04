import React from 'react'

 const Verify = () => {
    return (
        <>
             
    <div className="flex flex-wrap bg-lightBlue p-12 my-16">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div>
          <h2 className="text-4xl font-bold text-gray-800">
          Let Suppliers <span className="underline decoration-customOrange underline-offset-8">Find You</span>
          </h2>
    
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center space-y-4">
        <button className="bg-customOrange border-2 border-customOrange text-white font-bold py-2 px-8 rounded hover:bg-white hover:text-customOrange transition">
          Get Verified
        </button>
      </div>
    </div>
        </>
    )
}

export default Verify;