import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa"; // Import the green checkbox icon

const Tab = () => {
  const [activeTab, setActiveTab] = useState("Buyer");

  const renderTabContent = () => {
    switch (activeTab) {
      case "Buyer":
        return (
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <FaCheckCircle className="text-green-500 w-4 h-4" />
              <span>Post your requirements.</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaCheckCircle className="text-green-500 w-4 h-4" />
              <span>Sit back for multiple Buyers to contact you.</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaCheckCircle className="text-green-500 w-5 h-5" />
              <span>
                Choose among the Buyers based on the ratings and reviews.
              </span>
            </li>
          </ul>
        );
      case "Supplier":
        return (
            
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <FaCheckCircle className="text-green-500 w-4 h-4" />
              <span>Post your requirements.</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaCheckCircle className="text-green-500 w-4 h-4" />
              <span>Sit back for multiple suppliers to contact you.</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaCheckCircle className="text-green-500 w-5 h-5" />
              <span>
                Choose among the suppliers based on the ratings and reviews.
              </span>
            </li>
          </ul>
        
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-wrap bg-bgColour rounded mx-20 py-8">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-8">
        <div className="w-full max-w-lg aspect-video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/IZLp-TZyDkQ?rel=0&modestbranding=1&controls=0&showinfo=0&disablekb=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex justify-center p-8">
        <div className="w-full max-w-md rounded-lg p-6 ">
          {/* Tabs */}
          <div className="flex border-b border-bgColour mb-4">
            <button
              onClick={() => setActiveTab("Buyer")}
              className={`py-2 px-16 font-bold ${
                activeTab === "Buyer"
                  ? "border-b-2 border-customOrange text-customOrange"
                  : "text-white hover:text-customOrange"
              }`}
            >
              Buyer
            </button>
            <button
              onClick={() => setActiveTab("Supplier")}
              className={`py-2 px-16 font-bold ${
                activeTab === "Supplier"
                  ? "border-b-2 border-customOrange text-customOrange"
                  : "text-white hover:text-customOrange"
              }`}
            >
              Supplier
            </button>
          </div>

          {/* Tab Content */}
          <div
            className="text-white"
            style={{ minHeight: "120px" }} // Fixed height for the content area
          >
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab;
