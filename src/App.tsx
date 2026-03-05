import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Profile from './components/Profile';
import Experience from './components/Experience';
import Education from './components/Education';
import Initiatives from './components/Initiatives';
import Competencies from './components/Competencies';
import Vision from './components/Vision';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { LanguageProvider } from './hooks/useLanguage';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Pages
const HomePage = () => (
  <>
    <Hero />
    <Vision />
  </>
);

const ProfilePage = () => (
  <>
    <Profile />
    <Competencies />
  </>
);

function App() {
  return (
    <Router>
      <LanguageProvider>
        <ScrollToTop />
        <div className="bg-[#f8fafc] min-h-screen text-[#334155] font-sans selection:bg-[#2563eb] selection:text-white flex flex-col">
          <Navbar />
          <main className="flex-1 pt-20"> {/* pt-20 to account for fixed navbar */}
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/education" element={<Education />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/initiatives" element={<Initiatives />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </Router>
  );
}

export default App;
