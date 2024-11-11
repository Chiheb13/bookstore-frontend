import React from 'react';
import day from "../images/Day.png"; // Assuming you have this image
import "@fontsource/poppins";

function Footer() {
  return (
    <div className="flex items-center justify-between bg-[#EBF3FF] p-10">
      {/* Left Section */}
      <div className="flex items-center space-x-6">
        <img src={day} alt="Day" className="w-48" /> {/* Adjust size as needed */}
        <div>
          <h1 className="text-4xl font-bold text-black">Our Exclusive <span className="text-blue-500">Author</span></h1>
          <p className="text-gray-500">More than 5k Authors</p>
          {/* Authors Avatars (replace with real avatars if needed) */}
          <div className="flex space-x-2 mt-4">
            
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col items-center">
        <h2 className="text-gray-500">OUR BIGGEST SALE</h2>
        <h1 className="text-4xl font-bold">Trending Books</h1>
        <p className="text-gray-500">Explore trending books of this week</p>
        <button className="mt-4 bg-red-500 text-white py-2 px-4 rounded-full">Shop Now</button>
      </div>
    </div>
  );
}

export default Footer;
