
import React from 'react';
import { ShieldAlert, Phone } from 'lucide-react';

const UrgencyBanner: React.FC = () => {
  return (
    <section className="bg-brand-light py-20">
      <div className="container mx-auto px-4">
        <div className="bg-brand-secondary bg-[linear-gradient(135deg,_#0a0a0a_0%,_#1a1814_50%,_#0a0a0a_100%)] rounded-[2.5rem] p-10 md:p-16 flex flex-col items-center text-center relative overflow-hidden border border-brand-primary/20">
          {/* Decorative Circle */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 rounded-full -mr-32 -mt-32"></div>
          
          <div className="bg-brand-primary/20 text-brand-primary p-4 rounded-2xl mb-8">
            <ShieldAlert size={48} />
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 uppercase tracking-tight leading-tight">
            ASISTENCIA <span className="text-brand-primary font-nova normal-case tracking-normal">Inmediata</span> 24H
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mb-12 font-medium">
            ¿Avería crítica? Nuestros técnicos de guardia están operativos en Sevilla capital para resolver tu urgencia
          </p>
          
          <a 
            href="tel:+34681269974" 
            className="group bg-brand-primary hover:bg-white text-brand-secondary font-black py-5 px-12 rounded-2xl flex items-center gap-4 shadow-xl shadow-brand-primary/30 transition-all transform hover:scale-105"
          >
            <Phone size={24} className="group-hover:rotate-12 transition-transform" />
            LLAMAR AHORA: 681 269 974
          </a>
        </div>
      </div>
    </section>
  );
};

export default UrgencyBanner;
