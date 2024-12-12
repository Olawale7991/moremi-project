import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;


  const testimonials = [
    { id: 1, text: "Testimonial 1", name: "User 1" },
    { id: 2, text: "Testimonial 2", name: "User 2" },
    { id: 3, text: "Testimonial 3", name: "User 3" },
    { id: 4, text: "Testimonial 4", name: "User 4" },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length); 
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length); 
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); 
    return () => clearInterval(interval); 
  }, []);

  const value = {
    currentSlide,
    nextSlide,
    prevSlide,
    goToSlide,
    backendUrl
  };

  return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
};

export default AppContextProvider;
