
import React from 'react';
import { 
  Phone, 
  MessageCircle
} from 'lucide-react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Hero from './Hero';
import ServicesGrid from './ServicesGrid';
import UrgencyBanner from './UrgencyBanner';
import WhyChooseUs from './WhyChooseUs';
import CoverageSection from './CoverageSection';
import ContactForm from './ContactForm';
import Footer from './Footer';
import PrivacyPolicy from './PrivacyPolicy';
import LegalNotice from './LegalNotice';
import CookiesPolicy from './CookiesPolicy';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-brand-light">
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <main className="flex-grow">
              <Hero />
              
              <section id="servicios" className="py-24 bg-white scroll-mt-28">
                <div className="container mx-auto px-4 text-center mb-16">
                  <span className="text-brand-primary font-bold text-xs tracking-[0.3em] uppercase mb-4 block">PORTFOLIO DE SERVICIOS</span>
                  <h2 className="text-4xl md:text-6xl font-extrabold text-brand-secondary mb-6 tracking-tight uppercase">
                    Especialistas a tu <span className="text-brand-primary font-nova normal-case tracking-normal italic">disposición</span>
                  </h2>
                  <p className="text-brand-muted max-w-2xl mx-auto font-medium">
                    Ofrecemos soluciones técnicas de alto nivel con un equipo multidisciplinar preparado para cualquier reto constructivo o avería inmediata.
                  </p>
                </div>
                <ServicesGrid />
              </section>

              <UrgencyBanner />

              <WhyChooseUs />

              <CoverageSection />

              <ContactForm />
            </main>
            <Footer />
          </>
        } />
        
        <Route path="/politica-de-privacidad" element={
          <PrivacyPolicy />
        } />
        <Route path="/aviso-legal" element={
          <LegalNotice />
        } />
        <Route path="/politica-cookies" element={
          <CookiesPolicy />
        } />
      </Routes>
      
      {/* Floating Action Buttons for Mobile */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50 md:hidden">
        <a 
          href="https://wa.me/34681269974" 
          className="bg-[#25D366] text-white p-5 rounded-2xl shadow-2xl shadow-green-500/40 transform active:scale-95 transition-transform"
        >
          <MessageCircle size={28} />
        </a>
        <a 
          href="tel:+34681269974" 
          className="bg-brand-secondary text-brand-primary p-5 rounded-2xl shadow-2xl shadow-brand-secondary/40 border border-brand-primary/30 transform active:scale-95 transition-transform"
        >
          <Phone size={28} />
        </a>
      </div>
    </div>
  );
};

export default App;
