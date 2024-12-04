import React from 'react';
import './HowWorks.css';
import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png';
import icon3 from '../../assets/icon3.png'; 
import icon4 from '../../assets/icon4.png';
import icon5 from '../../assets/icon5.png';
import icon6 from '../../assets/icon6.png';
const HowWorks = () => {
  const items = [
    { id: 1, icon: icon1, text: "Select Your Role and Sign Up" }, // Use the imported image directly
    { id: 2, icon: icon2, text: "Buyers Post Your Requirements" },
    { id: 3, icon: icon3, text: "Review, Select, and Contact the Best Suppliers" },
    { id: 4, icon: icon4, text: "Suppliers Complete your profile and get notified for opportunities" },
    { id: 5, icon: icon5, text: "Contact Buyers and Share your Quote for the service" },
    { id: 6, icon: icon6, text: "Both the Parties can Connect and Make Business Leave a Feedback" },
  ];

  return (
    <>
      <section className="py-8 px-4">
        {/* Heading and Description */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800">How it works?</h2>
          <p className="text-gray-600 mt-2 text-center w-180">
            Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with <br/>
            potential buyers, and build successful business relationships, sharing valuable feedback.
          </p>
        </div>

        {/* 3 Columns with Alternate Background */}
        <div className="content-box">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 py-2">
            {items.map((item, index) => (
              <div
                key={item.id}
                className={`p-6 ${index % 2 === 0 ? "bg-lightBlue" : "bg-white"} flex flex-col items-center`}
              >
                <div className="mb-4">
                  {/* If the icon is a string (emoji), render it directly */}
                  
                    <img
                      src={item.icon} // Using the imported image here
                      alt={`Icon ${item.id}`}
                      className="w-12 h-12 object-contain" // Adjust size to fit
                    />
                 
                </div>
                <p className="text-gray-700 text-md px-2 font-medium text-center">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HowWorks;
