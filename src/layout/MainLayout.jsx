import React, { useState } from 'react'
import { Outlet } from 'react-router'
import NavigationBar from '../components/medium/NavigationBar'
import { ModalContext } from '../context/ModalContext';
import ProjectImagesModal from '../components/medium/ProjectImagesModal';

const MainLayout = () => {
  const [modalData, setModalData] = useState({
    images: [],
    currentIndex: null,
  });

  const openModal = (images, index = 0) => {
    setModalData({ images, currentIndex: index });
  };

  const closeModal = () => {
    setModalData({ images: [], currentIndex: null });
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      <div className='relative'>
        {/* Navigation bar */}
        <div className='fixed top-4 left-0 w-full z-50'>
          <NavigationBar></NavigationBar>
        </div>

        {/* Main contents */}
        <div className=''>
          <Outlet></Outlet>
        </div>

        {/* Modal Overlay */}
        {modalData.currentIndex !== null && (
          <ProjectImagesModal
            images={modalData.images}
            closeModal={closeModal}
          />
        )}
      </div>
    </ModalContext.Provider>
  )
}

export default MainLayout