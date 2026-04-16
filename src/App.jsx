import React, { useState } from 'react';
import './App.css';
import HeroSection from './components/Hero';
import Navbar from './shared components/Navbar';
import StaffSection from './components/Teachers';
import RecruitmentSection from './components/Recruitment';
import AdmissionsOverview from './components/Admission';
import ClassSchedule from './components/Schedule';
import CurriculumSection from './components/Curriculum';
import ExcellenceSection from './components/StudentSuccess';
import WhyChooseSection from './components/WhyChooseUs';

function App() {
  const [currentLang, setCurrentLang] = useState('en');

  const handleLanguageChange = (lang) => {
    setCurrentLang(lang);
  };

  return (
    <>
      <Navbar onLangChange={handleLanguageChange} />

      <HeroSection lang={currentLang} />
      <StaffSection lang={currentLang} />
      <RecruitmentSection lang={currentLang} />
      <AdmissionsOverview lang={currentLang} />
      <ClassSchedule lang={currentLang} />
      <CurriculumSection lang={currentLang} />
      <ExcellenceSection lang={currentLang} />
      <WhyChooseSection lang={currentLang} />



    </>
  );
}

export default App;