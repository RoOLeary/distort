import React, { useState, useEffect } from "react";
import TestimonialCard from "./TestimonialCard";

const TestimonialSlider = ({ testimonials }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const indicatorSlide = currentSlide + 1;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide) =>
        currentSlide === testimonials.length - 1 ? 0 : currentSlide + 1
      );
    }, 7000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handlePrevSlide = () => {
    setCurrentSlide((currentSlide) =>
      currentSlide === 0 ? testimonials.length - 1 : currentSlide - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((currentSlide) =>
      currentSlide === testimonials.length - 1 ? 0 : currentSlide + 1
    );
  };

  return (
    <div className="relative bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            What Folks be sayin&apos;
          </h2>
        </div>
        <div className="mt-10">
          <div className="flex justify-center">
            <div className="w-full">
              <div className="relative">
                
                <div className="testGrid">

                   
                <span className="-mt-8 font-black">{indicatorSlide} / {testimonials.length}</span>
                    
                  {testimonials.map((testimonial, index) => (
                    
                    <TestimonialCard
                      key={index}
                      quote={testimonial.quote}
                      author={testimonial.author}
                      image={testimonial.image}
                      isActive={index === currentSlide}
                    />
                   
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-14 flex flex-col">
            <div className="flex justify-center">
              <button
                onClick={handlePrevSlide}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l"
              >
                Prev
              </button>
              <button
                onClick={handleNextSlide}
                className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded-r"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
