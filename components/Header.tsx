import React, { useState, useEffect } from 'react';
import { Phone, Clock, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-secondary/95 backdrop-blur-sm' : 'bg-transparent'}`}>
      {/* Upper Info Bar - Solo visible en desktop */}
      <div className="bg-brand-secondary/80 text-white py-1.5 px-4 hidden md:block border-b border-brand-primary/20">
        <div className="container mx-auto flex justify-between items-center text-xs font-semibold tracking-wide">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Clock size={14} className="text-brand-primary" />
              SOPORTE TÉCNICO 24/7
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a href="tel:+34681269974" className="flex items-center gap-2 hover:text-brand-primary transition-colors">
              <Phone size={14} className="text-brand-primary" />
              URGENCIAS: 681 269 974
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`bg-white transition-all duration-300 ${scrolled ? 'py-1' : 'py-2'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="https://iili.io/fZSUkZB.png" 
              alt="Servicios Andalusi" 
              className={`${scrolled ? 'h-10 md:h-12' : 'h-12 md:h-14'} object-contain transition-all duration-300`} 
            />
            <img 
              src="https://iili.io/fZU9CXt.png" 
              alt="Servicios Andalusi" 
              className={`${scrolled ? 'h-12 md:h-14' : 'h-14 md:h-16'} object-contain transition-all duration-300 -ml-1`} 
            />
          </div>
          
          {/* Menú de navegación para desktop */}
          <div className="hidden lg:flex items-center gap-10 font-bold text-brand-secondary text-sm">
            <a href="#inicio" className="hover:text-brand-primary transition-colors py-2 border-b-2 border-transparent hover:border-brand-primary uppercase tracking-widest">INICIO</a>
            <a href="#servicios" className="hover:text-brand-primary transition-colors py-2 border-b-2 border-transparent hover:border-brand-primary uppercase tracking-widest">SERVICIOS</a>
            <a href="#cobertura" className="hover:text-brand-primary transition-colors py-2 border-b-2 border-transparent hover:border-brand-primary uppercase tracking-widest">COBERTURA</a>
            <a href="#horario-comercial" className="hover:text-brand-primary transition-colors py-2 border-b-2 border-transparent hover:border-brand-primary uppercase tracking-widest">NOSOTROS</a>
            <a 
              href="#contacto" 
              className="bg-brand-primary text-brand-secondary px-6 py-2.5 rounded-xl hover:bg-brand-secondary hover:text-white transition-all shadow-lg shadow-brand-primary/20 flex items-center gap-2 font-black whitespace-nowrap"
            >
              PRESUPUESTO GRATIS
            </a>
          </div>

          {/* Botón de menú móvil */}
          <button 
            className="lg:hidden p-2 text-brand-secondary hover:text-brand-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menú"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Menú móvil desplegable */}
        <div 
          className={`lg:hidden bg-white border-t border-gray-200 transition-all duration-300 ease-in-out ${
            isMenuOpen 
              ? 'h-[calc(100vh-60px)] opacity-100 pt-4 pb-32 overflow-y-auto' 
              : 'max-h-0 opacity-0 py-0 overflow-hidden'
          }`}
        >
          <div className="container mx-auto px-4 flex flex-col space-y-3">
            <a 
              href="#inicio" 
              className="block py-3 px-4 hover:bg-gray-50 rounded-lg font-bold text-brand-secondary hover:text-brand-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              INICIO
            </a>
            <a 
              href="#servicios" 
              className="block py-3 px-4 hover:bg-gray-50 rounded-lg font-bold text-brand-secondary hover:text-brand-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              SERVICIOS
            </a>
            <a 
              href="#cobertura" 
              className="block py-3 px-4 hover:bg-gray-50 rounded-lg font-bold text-brand-secondary hover:text-brand-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              COBERTURA
            </a>
            <a 
              href="#nosotros" 
              className="block py-3 px-4 bg-black text-white rounded-lg font-bold hover:bg-gray-800 transition-colors shadow-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              NOSOTROS
            </a>
            
            <a 
              href="#contacto" 
              className="block py-3 px-4 bg-brand-primary text-brand-secondary rounded-lg font-black text-center hover:bg-brand-secondary hover:text-white transition-all shadow-md mt-2 mx-1"
              onClick={() => setIsMenuOpen(false)}
            >
              PRESUPUESTO GRATIS
            </a>

            {/* Botón de llamada móvil */}
            <div className="pt-2 mt-1 border-t border-gray-100 px-1">
              <a 
                href="tel:+34681269974" 
                className="flex items-center justify-center gap-3 w-full bg-brand-secondary text-white px-4 py-3 rounded-lg font-bold hover:bg-brand-primary transition-colors shadow-lg"
              >
                <Phone size={20} className="flex-shrink-0" />
                <span>LLAMAR AHORA: 681 269 974</span>
              </a>
            </div>
            
            {/* Espaciador para evitar que el menú tape el último elemento */}
            <div className="h-8 w-full"></div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
