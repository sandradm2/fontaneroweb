
import React from 'react';
import { Clock, ShieldCheck, UserCheck, Banknote, Heart, Wrench } from 'lucide-react';

const benefits = [
  {
    title: 'Respuesta Instantánea',
    description: 'Gestión inmediata de solicitudes con tiempos de llegada garantizados.',
    icon: <Clock size={28} />
  },
  {
    title: 'Calidad Europea',
    description: 'Tradición familiar de 4 generaciones aplicada a la construcción moderna.',
    icon: <ShieldCheck size={28} />
  },
  {
    title: 'Expertos Senior',
    description: 'Técnicos especializados con experiencia internacional en Francia y Alemania.',
    icon: <UserCheck size={28} />
  },
  {
    title: 'Presupuesto Directo',
    description: 'Sin intermediarios. Trato directo para el mejor precio del mercado.',
    icon: <Banknote size={28} />
  },
  {
    title: 'Servicio Limpio',
    description: 'Máximo cuidado por tu hogar, dejando el espacio impecable tras el trabajo.',
    icon: <Heart size={28} />
  },
  {
    title: 'Tecnología Avanzada',
    description: 'Herramientas de última generación para diagnósticos rápidos y precisos.',
    icon: <Wrench size={28} />
  }
];

const WhyChooseUs: React.FC = () => {
  return (
    <section id="nosotros" className="py-24 bg-white scroll-mt-28">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-brand-primary font-bold text-xs tracking-[0.3em] uppercase mb-4 block">
            NUESTRO COMPROMISO
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-secondary mb-6 tracking-tight">
            ¿Por qué <span className="text-brand-primary font-nova normal-case">Andalusi</span>?
          </h2>
          <p className="text-brand-muted font-medium">
            Combinamos la maestría artesanal con la innovación tecnológica para ofrecer un servicio superior en Sevilla.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="group p-10 rounded-3xl border border-gray-100 hover:border-brand-primary/30 hover:bg-brand-secondary transition-all">
              <div className="w-14 h-14 bg-brand-light group-hover:bg-brand-primary group-hover:text-brand-secondary rounded-2xl flex items-center justify-center text-brand-primary mb-8 transition-all shadow-sm">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-secondary group-hover:text-white mb-3">
                {benefit.title}
              </h3>
              <p className="text-brand-muted text-sm leading-relaxed font-medium group-hover:text-gray-400">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
