import React from "react";

const TestimonialCard = ({ quote, author, image, isActive }) => {
  return (
    <div
      className={`${
        isActive ? "opacity-100" : "opacity-0"
      } transition-opacity duration-500 ease-in-out absolute w-3/4 mx-auto`}
    >
      <div className="bg-white shadow-lg rounded-lg overflow-hidden text-center">
        <div className="px-4 py-5 sm:p-6">
          <div className="flex-shrink-0">
            <img
              className="h-12 w-12 rounded-full mx-auto"
              src={'https://placedog.net/50/50'}
              alt={quote}
            />
          </div>
          <div className="mt-4 sm:mt-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              {quote}
            </h3>
            <div className="mt-2 text-sm leading-5 text-gray-500">
              <p>{author}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
