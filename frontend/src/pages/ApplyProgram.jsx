import React, { useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppContext } from "../context/AppContext";



const ApplyProgram = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
    message: "",
  });

  const{ backendUrl } = useContext(AppContext)

  const [loading, setLoading] = useState(false);

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
      const response = await axios.post(`${backendUrl}/api/students/register`,formData);
      toast.success(response.data.message || "Registration successful!");
      setFormData({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        password: "",
        message: "",
      });
    } catch (error) {
      const errMsg =
        error.response?.data?.message || "An error occurred. Please try again.";
      toast.error(errMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl mx-4 md:mx-0">
        <div className="text-center text-3xl font-semibold text-gray-700 mb-6">
          <b>
            Student
            <span className="text-[#E13D7E] font-normal"> Registration</span>
          </b>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed mb-8">
          Moremi Techstars is a non-profit organization committed to empowering
          females with the highest percentage of youth in the technology
          workforce. We are embracing the technology of the future and
          advancing women in tech from the bootcamp to the workspace.
        </p>
        <form onSubmit={handleSubmit}>
          {[
            { label: "First Name", name: "firstName", type: "text" },
            { label: "Last Name", name: "lastName", type: "text" },
            { label: "Phone Number", name: "phoneNumber", type: "tel" },
            { label: "Email Address", name: "email", type: "email" },
            { label: "Password", name: "password", type: "password" },
          ].map(({ label, name, type }) => (
            <div className="mb-4" key={name}>
              <label htmlFor={name} className="block font-semibold text-gray-700">
                {label} <span className="text-red-600">*</span>
              </label>
              <input
                type={type}
                id={name}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                placeholder={`Your ${label}`}
                required
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E13D7E]"
              />
            </div>
          ))}
          <div className="mb-4">
            <label htmlFor="message" className="block font-semibold text-gray-700">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E13D7E]"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-[#E13D7E] text-white font-semibold rounded-md hover:bg-[#c12a62] transition-all duration-300 disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit Now"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyProgram;
