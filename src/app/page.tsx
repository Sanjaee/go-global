'use client';

import { useState } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Programs from '../components/Programs';
import Advantages from '../components/Advantages';
import Statistics from '../components/Statistics';
import BasicProgram from '../components/BasicProgram';
import Location from '../components/Location';
import QuotaSchedule from '../components/QuotaSchedule';
import Requirements from '../components/Requirements';
import ProgramCosts from '../components/ProgramCosts';
import Testimonials from '../components/Testimonials';
import RegistrationProcess from '../components/RegistrationProcess';
import Footer from '../components/Footer';
import OpeningAnimation from '../components/OpeningAnimation';

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  const handleAnimationComplete = () => {
    setShowContent(true);
  };

  return (
    <main>
      {!showContent && <OpeningAnimation onComplete={handleAnimationComplete} />}
      
      {showContent && (
        <div style={{ animation: 'fadeIn 1s ease forwards' }}>
          <Hero />
          <About />
          <Programs />
          <Advantages />
          <Statistics />
          <BasicProgram />
          <Location />
          <QuotaSchedule />
          <ProgramCosts />
          <Testimonials />
          <Requirements />
          <RegistrationProcess />
          <Footer />
        </div>
      )}
    </main>
  );
}
