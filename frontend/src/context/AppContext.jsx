import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    { id: 1, text: "Testimonial 1", name: "User 1" },
    { id: 2, text: "Testimonial 2", name: "User 2" },
    { id: 3, text: "Testimonial 3", name: "User 3" },
    { id: 4, text: "Testimonial 4", name: "User 4" },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length); // Cycle back to 0
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length); // Cycle to last slide
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Auto-slide every 30 seconds
    return () => clearInterval(interval); // Clear interval on unmount
  }, []);

  const value = {
    currentSlide,
    nextSlide,
    prevSlide,
    goToSlide,
  };

  return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
};

export default AppContextProvider;
