import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TipOfTheWeekSection from '../components/TipOfTheWeekSection';

const TipOfTheWeekPage = () => {
  return (
    <div className="min-h-screen bg-white font-arabic">
      <Header />
      <main>
        <TipOfTheWeekSection />
      </main>
      <Footer />
    </div>
  );
};

export default TipOfTheWeekPage;

