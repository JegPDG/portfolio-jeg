import React, { useState } from 'react'

const ProjectImagesModal = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const {images, closeModal} = props

   if (!images || images.length === 0) return null;

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };


  return (
    <div>
    {currentIndex !== null && (
      <div
        className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
        onClick={closeModal}
      >
        <div className="relative flex items-center justify-center w-full h-full">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="absolute left-6 text-white bg-black/40 hover:bg-black/70 p-3 rounded-full text-2xl"
          >
            &#10094;
          </button>

          {/* Image */}
          <img
            src={images[currentIndex].image}
            alt="Full view"
            className="max-w-[90vw] max-h-[90vh] object-cover rounded-lg shadow-lg"
          />

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-6 text-white bg-black/40 hover:bg-black/70 p-3 rounded-full text-2xl"
          >
            &#10095;
          </button>

          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-white text-3xl font-bold hover:text-gray-300"
          >
            &times;
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-6 text-white text-sm bg-black/50 px-4 py-1 rounded-full">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      </div>
    )}
    </div>
  )
}

export default ProjectImagesModal