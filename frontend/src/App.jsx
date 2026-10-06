import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';
import ServicesMaster from './pages/ServicesMaster';

// Distinct Service Pages
import Wedding from './pages/services/Wedding';
import PreWedding from './pages/services/PreWedding';
import PostWedding from './pages/services/PostWedding';
import Videography from './pages/services/Videography';
import Maternity from './pages/services/Maternity';
import Family from './pages/services/Family';
import Birthday from './pages/services/Birthday';
import Event from './pages/services/Event';
import Studio from './pages/services/Studio';
import Commercial from './pages/services/Commercial';
import Drone from './pages/services/Drone';
import Packages from './pages/services/Packages';
import FloatingActions from './components/FloatingActions';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen relative">
        <Navigation />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<ServicesMaster />} />
            
            {/* Explicit Sub-Pages */}
            <Route path="/services/wedding" element={<Wedding />} />
            <Route path="/services/pre-wedding" element={<PreWedding />} />
            <Route path="/services/post-wedding" element={<PostWedding />} />
            <Route path="/services/videography" element={<Videography />} />
            <Route path="/services/maternity" element={<Maternity />} />
            <Route path="/services/family" element={<Family />} />
            <Route path="/services/birthday" element={<Birthday />} />
            <Route path="/services/event" element={<Event />} />
            <Route path="/services/studio" element={<Studio />} />
            <Route path="/services/commercial" element={<Commercial />} />
            <Route path="/services/drone" element={<Drone />} />
            <Route path="/packages" element={<Packages />} />
          </Routes>
        </div>
        <Footer />
        <FloatingActions />
      </div>
    </Router>
  );
}
