import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import DisclaimerBanner from '../components/DisclaimerBanner.jsx';
import SectionDetailModal from '../components/SectionDetailModal.jsx';

export const SectionModalContext = React.createContext({
  openModal: () => {},
  closeModal: () => {}
});

export default function MainLayout() {
  const [modalData, setModalData] = useState(null);

  const openModal = (data) => setModalData(data);
  const closeModal = () => setModalData(null);

  return (
    <SectionModalContext.Provider value={{ openModal, closeModal }}>
      <div className="page-wrapper">
        <DisclaimerBanner />
        <Navbar />
        <main className="main-content">
          <Outlet context={{ openModal }} />
        </main>
        <Footer />
        {modalData && (
          <SectionDetailModal sectionData={modalData} onClose={closeModal} />
        )}
      </div>
    </SectionModalContext.Provider>
  );
}
