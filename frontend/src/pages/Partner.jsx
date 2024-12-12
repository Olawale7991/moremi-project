import React, { useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { countries } from "../assets/asset";
import { AppContext } from "../context/AppContext";



const Partner = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
    country: "",
    companyName: "",
    state: "",
    role: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const{ backendUrl } = useContext(AppContext)


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(`${backendUrl}/api/partners/register`, formData);
      toast.success(response.data.message); 
      setFormData({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        password: "",
        country: "",
        companyName: "",
        state: "",
        role: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      toast.error( error.response?.data?.message || "An error occurred. Please try again."); 
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl mx-4 md:mx-0">
        <div className="text-center text-3xl font-semibold text-gray-700 mb-6">
          <b>
            Become a part of this
            <span className="text-[#E13D7E] font-normal"> Community</span>
          </b>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed mb-8">
          Become a part of an innovative network of talented women who are
          leading the way in technology and entrepreneurship. Share your tech
          journey, collaborate on groundbreaking projects, and empower each
          other to reach new heights. Fill out the form now and let’s
          revolutionize the tech world together!
        </p>
        <form onSubmit={handleSubmit}>
          {/* First Name */}
          <div className="mb-4">
            <label htmlFor="first-name" className="block font-semibold text-gray-700">
              First Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="first-name"
              name="firstName"
              placeholder="Your First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E13D7E]"
            />
          </div>
          {/* Last Name */}
          <div className="mb-4">
            <label htmlFor="last-name" className="block font-semibold text-gray-700">
              Last Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="last-name"
              name="lastName"
              placeholder="Your Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E13D7E]"
            />
          </div>
          {/* Phone Number */}
          <div className="mb-4">
            <label htmlFor="phone-number" className="block font-semibold text-gray-700">
              Phone Number <span className="text-red-600">*</span>
            </label>
            <input
              type="tel"
              id="phone-number"
              name="phoneNumber"
              placeholder="Your Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E13D7E]"
            />
          </div>
          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block font-semibold text-gray-700">
              Email Address <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E13D7E]"
              required
            />
          </div>
          {/* Password */}
          <div className="mb-4">
            <label htmlFor="password" className="block font-semibold text-gray-700">
              Password <span className="text-red-600">*</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Your password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E13D7E]"
              required
            />
          </div>
          {/* Country Selection */}
          <div className="mb-4">
            <select
              name="country"
              id="country"
              value={formData.country}
              onChange={handleChange}
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
          {/* Company Name */}
          <div className="mb-4">
            <label htmlFor="company" className="block font-semibold text-gray-700">
              Company Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="company"
              name="companyName"
              placeholder="Your Company Name"
              value={formData.companyName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E13D7E]"
            />
          </div>
          {/* State */}
          <div className="mb-4">
            <label htmlFor="state" className="block font-semibold text-gray-700">
              State
            </label>
            <input
              type="text"
              id="state"
              name="state"
              placeholder="Your State"
              value={formData.state}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E13D7E]"
            />
          </div>
          {/* Role */}
          <div className="mb-4">
            <label htmlFor="role" className="block font-semibold text-gray-700">
              Role <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="role"
              name="role"
              placeholder="What's your role"
              value={formData.role}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E13D7E]"
            />
          </div>
          {/* Message */}
          <div className="mb-4">
            <label htmlFor="message" className="block font-semibold text-gray-700">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E13D7E]"
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-[#E13D7E] text-white font-semibold rounded-md hover:bg-[#c12a62] transition-all duration-300 disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit Now"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Partner;
