  import React, { useState } from "react";
  import { assets } from "../assets/asset";
  import { countries } from "../assets/asset";
import { useNavigate } from "react-router-dom";

  const Donate = () => {
    const [selectedAmount, setSelectedAmount] = useState(null); 
    const [customAmount, setCustomAmount] = useState(""); 
    const navigate = useNavigate()

    return (
      <div className="flex flex-col md:flex-row gap-6 px-6 py-10 bg-gray-50">
        {/* Image Section */}
        <div className="md:w-1/2">
          <img src={assets.donate} alt="Donate" className="w-full rounded-md sm:block" />
        </div>

        {/* Form Section */}
        <div className="md:w-1/2 flex flex-col gap-6">
          {/* Donation Amount Section */}
          <div>
            <p className="text-lg font-semibold mb-4 text-gray-700">
              Select Your Donation Amount
            </p>
            <div className="flex flex-wrap gap-4">
              {[10, 20, 30, 40, 50].map((amount) => (
                <span
                  key={amount}
                  className={`flex items-center gap-2 px-4 py-2 cursor-pointer ${
                    selectedAmount === amount
                      ? "text-[#E13D7E]"
                      : "border-gray-300"
                  }`}
                  onClick={() => setSelectedAmount(amount)}
                >
                  <input
                    type="radio"
                    value={amount}
                    name="donation"
                    checked={selectedAmount === amount}
                    onChange={() => setSelectedAmount(amount)}
                    className="cursor-pointer"
                  />
                  ${amount}
                </span>
              ))}
            </div>
            {/* Custom Amount */}
            <div className="mt-4">
              <label htmlFor="custom-amount" className="block text-gray-600 mb-2">
                Custom Amount
              </label>
              <input
                type="number"
                id="custom-amount"
                placeholder="Enter custom amount"
                value={customAmount}
                onChange={(e) => {
                  setSelectedAmount(null);
                  setCustomAmount(e.target.value);
                }}
                className="w-full border rounded-md p-2 focus:outline-[#E13D7E]"
              />
            </div>
          </div>

          {/* Information Section */}
          <div>
            <p className="text-lg font-semibold mb-4 text-gray-700">Information</p>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border rounded-md p-2 mb-4 focus:outline-[#E13D7E]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border rounded-md p-2 mb-4 focus:outline-[#E13D7E]"
            />
            <select
              name="country"
              id="country"
              className="w-full border rounded-md p-2 focus:outline-[#E13D7E]"
            >
              <option value="">Select your country</option>
              {countries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>

          {/* Payment Details Section */}
          <div>
            <p className="text-lg font-semibold mb-4 text-gray-700">
              Payment Details
            </p>
            <input
              type="number"
              placeholder="Enter your card number"
              className="w-full border rounded-md p-2 mb-4 focus:outline-[#E13D7E]"
            />
            <input
              type="text"
              placeholder="Expiry Date (MM/YY)"
              className="w-full border rounded-md p-2 mb-4 focus:outline-[#E13D7E]"
            />
            <input
              type="number"
              placeholder="CVV"
              className="w-full border rounded-md p-2 focus:outline-[#E13D7E]"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button onClick={()=>navigate('/')} className="border border-[#E13D7E] text-[#E13D7E] px-8 py-3 rounded-md text-sm font-medium shadow-md hover:bg-[#c12a62] hover:text-white transition-all duration-300">
              Back Home
            </button>
            <button className="bg-[#E13D7E] text-white px-8 py-3 rounded-md text-sm font-medium shadow-md hover:bg-[#c12a62] transition-all duration-300">
              Donate Now
            </button>
          </div>
        </div>
      </div>
    );
  };

  export default Donate;
