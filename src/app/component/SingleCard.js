"use client"
import React, { useState } from 'react';
import './gallery.css';



function SingleCard({ images }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImageIndex(null); // Reset selected image index when modal is closed
  };

  const goToPrevious = (event) => {
    event.stopPropagation(); // Prevent modal from closing
    setSelectedImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = (event) => {
    event.stopPropagation(); // Prevent modal from closing
    setSelectedImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className='flex flex-wrap ps-4 pe-4 pb-4 sm:ps-15 sm:pe-15 sm:pb-15 md:ps-28 md:pe-28 md:pb-28  lg:ps-48 lg:pe-48 lg:pb-48 '>
      {images.map((image, index) => (
        <div key={index} className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 ${index % 2 === 0 ? 'mt-0' : 'mt-12'}`}>
          <img
            src={image.src}
            className='w-full rounded-lg hover:border-8 border-red-600 cursor-pointer'
            alt='Card Image'
            onClick={() => openModal(index)}
          />
        </div>
      ))}

      {/* Modal */}
      {modalOpen && selectedImageIndex !== null && (
        <div className='modal fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center' onClick={closeModal}>
          <div className='modal-content max-w-screen-lg relative' onClick={(e) => e.stopPropagation()}>
            {/* Close button */}
            <button className="absolute top-0 right-0 m-4 text-white bg-black rounded-[50%]" onClick={closeModal}>
              <svg className="w-4 md:w-12 lg:w-12 h-4 md:h-12 lg:h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {/* Previous button */}
            <button className="absolute top-1/2 left-0 ml-4 text-white bg-[#EC9600] rounded-[50%]" onClick={goToPrevious}>
              <svg className="w-4 md:w-16 lg:w-16 h-4 md:h-16 lg:h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            {/* Next button */}
            <button className="absolute top-1/2 right-0 mr-4 text-white bg-[#EC9600] rounded-[50%] " onClick={goToNext}>
              <svg className="w-4 md:w-16 lg:w-16 h-4 md:h-16 lg:h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            {/* Image inside the modal */}
            <img
              src={images[selectedImageIndex].src}
              className='modal-img w-full border-[6px] h-[vh] sm:h-[90vh] md:h-[90vh] lg:h-[90vh]'
              alt='Modal Image'
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default SingleCard;
