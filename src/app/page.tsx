'use client';

import { useState, useEffect } from 'react';
import { getPrograms } from '@/actions/programs';
import { getQuotas, getTestimonials, getJobFields, getStats } from '@/actions/sections';
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
  const [programsList, setProgramsList] = useState<any[]>([]);
  const [quotasList, setQuotasList] = useState<any[]>([]);
  const [testimonialsList, setTestimonialsList] = useState<any[]>([]);
  const [jobFieldsList, setJobFieldsList] = useState<any[]>([]);
  const [statsList, setStatsList] = useState<any[]>([]);

  useEffect(() => {
    Promise.all([
      getPrograms(),
      getQuotas(),
      getTestimonials(),
      getJobFields(),
      getStats(),
    ])
      .then(([progs, quotas, testims, fields, stats]) => {
        if (progs) setProgramsList(progs);
        if (quotas) setQuotasList(quotas);
        if (testims) setTestimonialsList(testims);
        if (fields) setJobFieldsList(fields);
        if (stats) setStatsList(stats);
      })
      .catch(console.error);
  }, []);

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
          <Statistics statsList={statsList} />
          <BasicProgram programsList={programsList} />
          <Location />
          <QuotaSchedule quotasList={quotasList} />
          <ProgramCosts />
          <Testimonials testimonialsList={testimonialsList} />
          <Requirements />
          <RegistrationProcess />
          <Footer />
        </div>
      )}
    </main>
  );
}

