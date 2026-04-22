
import React from 'react';
import { Clock, Globe, ShieldCheck } from 'lucide-react';

const ContactForm: React.FC = () => {
  return (
    <section className="py-24 bg-white" id="nosotros">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          {/* Company Bio Card */}
          <div className="bg-white p-12 rounded-[3rem] shadow-2xl relative overflow-hidden flex flex-col justify-between border border-gray-100">
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-primary/10 rounded-full -mr-24 -mt-24"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-1 bg-brand-primary mb-8 rounded-full"></div>
              <h3 className="text-3xl font-extrabold text-brand-secondary mb-8">
                Nuestra <span className="text-brand-primary font-nova normal-case tracking-normal">Historia</span>
              </h3>
              
              <div className="space-y-6 text-gray-600 leading-relaxed font-medium">
                <p>
                  En <span className="text-brand-secondary font-bold">Servicios Andalusí</span> representamos la excelencia técnica de una tradición familiar de cuatro generaciones.
                </p>
                <p>
                  Con amplia trayectoria en <span className="text-brand-primary font-bold">Francia y Alemania</span>, hemos integrado los estándares europeos para ofrecer en Sevilla un servicio premium, rápido y altamente profesional.
                </p>
                <div className="p-6 bg-brand-secondary/5 rounded-2xl border-l-4 border-brand-primary text-sm italic text-brand-secondary">
                  "Unimos la maestría artesanal con la innovación tecnológica para proteger y mejorar tu hogar."
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-8 relative z-10 border-t border-gray-100 pt-8">
              <div className="flex items-center gap-3">
                <div className="bg-brand-primary/10 p-2 rounded-lg">
                  <ShieldCheck size={20} className="text-brand-primary" />
                </div>
                <span className="text-xs uppercase font-bold text-brand-secondary tracking-widest">Garantía</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-brand-primary/10 p-2 rounded-lg">
                  <Globe size={20} className="text-brand-primary" />
                </div>
                <span className="text-xs uppercase font-bold text-brand-secondary tracking-widest">Excelencia</span>
              </div>
            </div>
          </div>

          {/* Schedule / Urgency Card */}
          <div id="horario-comercial" className="scroll-mt-32 flex flex-col gap-8 pt-8">
            <div className="flex-1 bg-brand-light p-12 rounded-[3rem] border border-gray-100 shadow-sm flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-brand-secondary text-brand-primary p-4 rounded-2xl">
                  <Clock size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-brand-secondary uppercase tracking-tight">Horario Comercial</h3>
                  <p className="text-brand-muted font-bold text-sm">Disponibilidad total Lunes a Domingo</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg text-brand-secondary font-semibold leading-tight">
                  Servicio ininterrumpido 24h para averías eléctricas, fontanería y reformas urgentes.
                </p>
                <div className="bg-brand-primary text-brand-secondary px-8 py-4 rounded-2xl text-xl font-black uppercase shadow-lg shadow-brand-primary/20 inline-block">
                  URGENCIAS 24/7/365
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
