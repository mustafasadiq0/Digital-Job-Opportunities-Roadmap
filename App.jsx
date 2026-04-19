import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CategoriesSection from './components/CategoriesSection';
import FeaturedJobsSection from './components/FeaturedJobsSection';
import TipOfTheWeekSection from './components/TipOfTheWeekSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-arabic">
      <Header />
      <main>
        <HeroSection />
        <CategoriesSection />
        <FeaturedJobsSection />
        <TipOfTheWeekSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
