
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Facebook, Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-secondary bg-[linear-gradient(180deg,_#0a0a0a_0%,_#0f0e0c_100%)] text-gray-500 pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Identity */}
          <div className="space-y-0">
            <div className="flex justify-center">
              <img 
                src="https://iili.io/fZSUejV.png" 
                alt="Servicios Andalusi" 
                className="h-56 object-contain"
              />
            </div>
            <p className="text-sm leading-relaxed -mt-2">
              Referentes en <span className="text-white font-bold">servicios integrales</span> en la provincia de Sevilla. Compromiso, técnica y rapidez en cada intervención.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-brand-primary font-black text-xs tracking-[0.2em] mb-10 uppercase">
              SERVICIOS TOP
            </h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
              <li><a href="#servicios" className="hover:text-white transition-colors">REFORMAS</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">FONTANERO</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">ELECTRICISTA</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">CARPINTERÍA</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">IMPERMEABILIZACIÓN</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">CLIMATIZACIÓN</a></li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div>
            <h4 className="text-brand-primary font-black text-xs tracking-[0.2em] mb-10 uppercase">
              SOPORTE 24H
            </h4>
            <ul className="space-y-8">
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0">
                  <Phone size={16} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-white/40 mb-1">Teléfonos</p>
                  <a href="tel:+34681269974" className="text-white font-black text-base hover:text-brand-primary block">681 269 974</a>
                  <a href="tel:+34665078309" className="text-white font-black text-base hover:text-brand-primary block mt-1">665 078 309</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0">
                  <Mail size={16} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-white/40 mb-1">Email</p>
                  <a href="mailto:serviciosandalusi@gmail.com" className="text-white font-bold text-xs hover:text-brand-primary block">serviciosandalusi@gmail.com</a>
                  <a href="mailto:construccionesandalusi@gmail.com" className="text-white font-bold text-xs hover:text-brand-primary block mt-1">construccionesandalusi@gmail.com</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-white/40 mb-1">Base de Operaciones</p>
                  <p className="text-xs font-bold text-white leading-relaxed">
                    Urb. La Torrecilla, 45A,<br />
                    C.P. 41410 Carmona, Sevilla.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-10">
            <div>
              <h4 className="text-brand-primary font-black text-xs tracking-[0.2em] mb-6 uppercase">
                LEGAL
              </h4>
              <div className="flex flex-col gap-3 text-[10px] font-bold uppercase tracking-widest">
                <Link 
                  to="/politica-de-privacidad" 
                  className="hover:text-white transition-colors"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Política de Privacidad
                </Link>
                <Link 
                  to="/aviso-legal" 
                  className="hover:text-white transition-colors"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Aviso Legal
                </Link>
                <Link 
                  to="/politica-cookies" 
                  className="hover:text-white transition-colors"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Política de Cookies
                </Link>
              </div>
              <div className="pt-6">
                <h4 className="text-brand-primary font-black text-xs tracking-[0.2em] mb-4 uppercase">
                  SÍGUENOS
                </h4>
                <div className="flex gap-3">
                  <a href="#" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-brand-primary hover:text-brand-secondary transition-all">
                    <Facebook size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-brand-primary hover:text-brand-secondary transition-all">
                    <Instagram size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright area */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] uppercase font-bold tracking-[0.3em] text-white/20">
            © {new Date().getFullYear()} Servicios Andalusi
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
