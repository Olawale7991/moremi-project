import React from "react";
import { assets } from "../assets/asset";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xyzygjdw");
  if (state.succeeded) {
    return alert("Thanks for reaching out!");
  }

  return (
    <div className="bg-gray-50 py-10 px-4">
      {/* Header Section */}
      <div className="text-center text-3xl mb-6 text-gray-700">
        <b>
          Contact <span className="text-[#E13D7E] font-normal">Us</span>
        </b>
      </div>

      {/* Address and Image Section */}
      <div className="my-10 flex flex-col md:flex-row gap-10 items-center md:items-center justify-center">
        <img
          className="w-full md:w-1/3 rounded-lg shadow-md"
          src={assets.program}
          alt="Office Location"
        />

        <div className="flex flex-col gap-6 text-sm text-gray-600">
          <div>
            <p className="font-semibold text-lg">OUR <span className="text-[#E13D7E]">OFFICE</span></p>
            <p className="mt-2">
              3272 Wills Station <br />
              Suite 321, County, UK
            </p>
          </div>

          <div>
            <p className="text-gray-500">
              Tel: (233) 444-662 <br />
              Email:{" "}
              <a
                href=""
                className="text-[#E13D7E]"
              >
                moremitechstars@gmail.com
              </a>
            </p>
          </div>

          <div>
            <p className="font-semibold text-lg">Moremi Tech Stars</p>
            <p className="mt-2">Learn more about our team and job openings.</p>
            <button className="border border-[#E13D7E] px-6 py-3 mt-4 text-sm hover:bg-[#E13D7E] hover:text-white transition-all duration-500">
              Explore Jobs
            </button>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <p className="text-2xl mt-2  text-center">
          We would love to connect with{" "}
          <span className="text-[#E13D7E] font-normal">YOU!</span>
        </p>
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white p-6 shadow-md rounded-md"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block font-semibold text-gray-700">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E13D7E]"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block font-semibold text-gray-700">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E13D7E]"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div className="mb-4">
          <label htmlFor="name" className="block font-semibold text-gray-700">
            Enter the subject
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="subject of the mail"
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E13D7E]"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="message"
            className="block font-semibold text-gray-700"
          >
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Enter your message"
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E13D7E]"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-[#E13D7E] text-white font-semibold rounded-md hover:bg-[#c12a62] transition-all duration-300 disabled:opacity-50"
          disabled={state.submitting}
        >
          Submit Now
        </button>
      </form>
    </div>
  );
};

export default Contact;
