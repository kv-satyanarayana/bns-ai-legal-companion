import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout.jsx';
import HomePage from './pages/HomePage.jsx';
import CitizenAssistantPage from './pages/CitizenAssistantPage.jsx';
import LegalResearchPage from './pages/LegalResearchPage.jsx';
import BnsExplorerPage from './pages/BnsExplorerPage.jsx';
import AboutPage from './pages/AboutPage.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="citizen-assistant" element={<CitizenAssistantPage />} />
        <Route path="legal-research" element={<LegalResearchPage />} />
        <Route path="bns-explorer" element={<BnsExplorerPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
