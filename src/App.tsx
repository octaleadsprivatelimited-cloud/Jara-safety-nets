import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingContactWidget from './components/FloatingContactWidget';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Testimonials from './pages/Testimonials';
import FAQ from './pages/FAQ';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Blog from './pages/Blog';
import BalconySafetyNets from './pages/blog/BalconySafetyNets';
import PigeonPreventionNets from './pages/blog/PigeonPreventionNets';
import BalconySafetyNetsService from './pages/services/BalconySafetyNetsService';
import InvisibleGrillsService from './pages/services/InvisibleGrillsService';
import BirdProtectionNetsService from './pages/services/BirdProtectionNetsService';
import SportsNetsService from './pages/services/SportsNetsService';
import ChildrenSafetyNetsService from './pages/services/ChildrenSafetyNetsService';
import CricketPracticeNetsService from './pages/services/CricketPracticeNetsService';
import CoconutSafetyNetsService from './pages/services/CoconutSafetyNetsService';
import BuildingSafetyNetsService from './pages/services/BuildingSafetyNetsService';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <ScrollToTop />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            
            {/* Blog Routes */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/balcony-safety-nets" element={<BalconySafetyNets />} />
            <Route path="/blog/pigeon-prevention-nets" element={<PigeonPreventionNets />} />
            
            {/* Service Detail Routes */}
            <Route path="/services/balcony-safety-nets" element={<BalconySafetyNetsService />} />
            <Route path="/services/invisible-grills" element={<InvisibleGrillsService />} />
            <Route path="/services/bird-protection-nets" element={<BirdProtectionNetsService />} />
            <Route path="/services/sports-nets" element={<SportsNetsService />} />
            <Route path="/services/children-safety-nets" element={<ChildrenSafetyNetsService />} />
            <Route path="/services/cricket-practice-nets" element={<CricketPracticeNetsService />} />
            <Route path="/services/coconut-safety-nets" element={<CoconutSafetyNetsService />} />
            <Route path="/services/building-safety-nets" element={<BuildingSafetyNetsService />} />
          </Routes>
        </main>
        <Footer />
        <FloatingContactWidget />
      </div>
    </Router>
  );
}

export default App;
