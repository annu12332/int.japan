import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import HeroSection from './components/Hero';
import StaffSection from './components/Teachers';
import RecruitmentSection from './components/Recruitment';
import AdmissionsOverview from './components/Admission';
import ClassSchedule from './components/Schedule';
import CurriculumSection from './components/Curriculum';
import ExcellenceSection from './components/StudentSuccess';
import WhyChooseSection from './components/WhyChooseUs';
import AdmissionCoursesSection from './components/CourceIntro';
import ContactRecruitmentSection from './components/ContactRecruitment';
import ContactCTA from './components/CTA';

// Shared Components
import Navbar from './shared components/Navbar';
import Footer from './shared components/Footer';
import ScrollToTop from './shared components/ScrollToTop';

// Pages
import AdmissionDetailsPage from './Pages/AdmissionDetails';
import AdmissionForm from './Pages/AdmissionForm';
import AdmissionRegulations from './Pages/AdmissionRegulation';
import INTJapanResumePage from './Pages/Resume';
import INTCareerPathPage from './Pages/CareerPath';
import INTJapanSchoolOpenPage from './Pages/SchoolOpening';
import NoticePage from './Pages/Notice';
import EventsPage from './Pages/Events';
import HolidayPage from './Pages/Holidays';

function App() {
  const [currentLang, setCurrentLang] = useState('en');

  const handleLanguageChange = (lang) => {
    setCurrentLang(lang);
  };

  // হোম পেজ সেকশনগুলো
  const HomePage = () => (
    <>
      <HeroSection lang={currentLang} />
      <StaffSection lang={currentLang} />
      <RecruitmentSection lang={currentLang} />
      <AdmissionsOverview lang={currentLang} />
      <ClassSchedule lang={currentLang} />
      <CurriculumSection lang={currentLang} />
      <ExcellenceSection lang={currentLang} />
      <WhyChooseSection lang={currentLang} />
      <AdmissionCoursesSection lang={currentLang} />
      <ContactRecruitmentSection lang={currentLang} />
      <ContactCTA lang={currentLang} />
    </>
  );

  return (
    <div className="flex flex-col min-h-screen">
      {/* ScrollToTop এবং Navbar সবার উপরে থাকবে */}
      <ScrollToTop />
      <Navbar onLangChange={handleLanguageChange} currentLang={currentLang} />

      <main className="flex-grow">
        <Routes>
          {/* মেইন হোম রুট */}
          <Route path="/" element={<HomePage />} />

          {/* অন্যান্য পেজ রুট */}
          <Route path="/courses" element={<AdmissionCoursesSection lang={currentLang} />} />
          <Route path="/about" element={<WhyChooseSection lang={currentLang} />} />
          <Route path="/contact" element={<ContactRecruitmentSection lang={currentLang} />} />

          {/* Admission Guide পেজ */}
          <Route path="/admission-guide" element={<AdmissionDetailsPage lang={currentLang} />} />
          <Route path="/application-form" element={<AdmissionForm lang={currentLang} />} />
          <Route path="/school-rules" element={<AdmissionRegulations lang={currentLang} />} />

          <Route path="/resume" element={<INTJapanResumePage lang={currentLang} />} />
          <Route path="/career" element={<INTCareerPathPage lang={currentLang} />} />
          <Route path="/opening" element={<INTJapanSchoolOpenPage lang={currentLang} />} />


          <Route path="/notice" element={<NoticePage lang={currentLang} />} />
          <Route path="/events" element={<EventsPage lang={currentLang} />} />
          <Route path="/holidays" element={<HolidayPage lang={currentLang} />} />


          {/* 404 Route */}
          <Route path="*" element={
            <div className="text-center py-20 flex flex-col items-center justify-center">
              <h1 className="text-6xl font-black text-[#1A3673]">404</h1>
              <p className="text-xl mt-4 font-medium text-gray-600">Page Not Found</p>
              <a href="/" className="mt-6 px-6 py-2 bg-[#1A3673] text-white rounded-lg hover:bg-red-600 transition-colors">
                Back to Home
              </a>
            </div>
          } />
        </Routes>
      </main>

      <Footer lang={currentLang} />
    </div>
  );
}

export default App;