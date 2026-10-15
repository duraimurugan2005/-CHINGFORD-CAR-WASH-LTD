import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { OurDifference } from './components/OurDifference';
import { Reviews } from './components/Reviews';
import { Gallery } from './components/Gallery';
import { LocationSection } from './components/LocationSection';
import { ContactEnquiry } from './components/ContactEnquiry';
import { Footer } from './components/Footer';
import { MobileQuickBar } from './components/MobileQuickBar';

export function App() {
  const [selectedService, setSelectedService] = useState<string>('Exterior Hand Wash');

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-obsidian text-silver-soft font-sans pb-16 sm:pb-0">
      {/* Header & Sticky Navigation */}
      <Header />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Services Section */}
        <Services onSelectService={handleSelectService} />

        {/* Our Difference / Strengths Section */}
        <OurDifference />

        {/* Real Customer Feedback & Google Reviews */}
        <Reviews />

        {/* Realistic Automotive Photo Gallery */}
        <Gallery />

        {/* Location & Opening Hours Section */}
        <LocationSection />

        {/* Contact & Transparent Service Enquiry */}
        <ContactEnquiry key={selectedService} initialService={selectedService} />
      </main>

      {/* Complete Footer */}
      <Footer />

      {/* Mobile Sticky Quick Action Bar */}
      <MobileQuickBar />
    </div>
  );
}

export default App;
