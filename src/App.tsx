import { useState } from 'react';
import Navigation from './components/Navigation';
import LandingPage from './pages/LandingPage';
import TestimonialsPage from './pages/TestimonialsPage';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'testimonials'>('home');

  const handleNavigate = (page: 'home' | 'testimonials') => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      {currentPage === 'home' ? <LandingPage /> : <TestimonialsPage />}
    </div>
  );
}

export default App;
