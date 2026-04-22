
import React from 'react';
import { Hammer, Droplets, Zap, Wind, MessageCircle, Phone } from 'lucide-react';
import { ServiceCard } from '../types';

const services: ServiceCard[] = [
  {
    category: 'REFORMAS',
    title: 'ALICATADOS Y SOLADOS',
    description: 'Expertos en alicatados y solados de gran formato porcelánico y gres. Buscamos la perfección técnica en cada acabado para garantizar tu satisfacción total.',
    points: ['Gran Formato Porcelánico', 'Todo tipo de materiales', 'Acabados de precisión'],
    image: 'https://iili.io/fLle9NR.png',
    icon: <Hammer size={20} />
  },
  {
    category: 'FONTANERO',
    title: 'ARREGLOS Y FONTANERÍA',
    description: 'Reparación inmediata de fugas de agua, desatascos y mantenimiento de calderas. Servicio rápido y eficaz 24/7.',
    points: ['Fugas de Agua', 'Desatascos 24h', 'Calderas y Termos'],
    image: 'https://iili.io/fL01HXa.png',
    icon: <Droplets size={20} />
  },
  {
    category: 'ELECTRICISTA',
    title: 'REPARACIONES ELECTRICIDAD',
    description: 'Solución experta a apagones, cortocorticuitos y averías. Boletines oficiales y optimización de cuadros eléctricos.',
    points: ['Apagones 24h', 'Cuadros Eléctricos', 'Instalaciones LED'],
    image: 'https://iili.io/fL0APpf.png',
    icon: <Zap size={20} />
  },
  {
    category: 'CARPINTERÍA',
    title: 'MONTAJES Y MADERA',
    description: 'Instalación de puertas de entrada, blindadas, armarios a medida y todo tipo de tarimas flotantes de alta calidad.',
    points: ['Puertas Blindadas', 'Tarimas y Parqué', 'Armarios a Medida'],
    image: 'https://iili.io/fLlmwGt.png',
    icon: <Hammer size={20} />
  },
  {
    category: 'IMPERMEABILIZACIÓN',
    title: 'AZOTEAS Y CUBIERTAS',
    description: 'Tratamientos avanzados contra filtraciones con pintura de caucho y refuerzo de fibra. Máxima estanqueidad garantizada.',
    points: ['Pintura Anti-goteras', 'Refuerzo de Fibra', 'Tratamiento de cubiertas'],
    image: 'https://iili.io/fLlD9nt.png',
    icon: <Droplets size={20} />
  },
  {
    category: 'CLIMATIZACIÓN',
    title: 'AIRE ACONDICIONADO',
    description: 'Mantenimiento y reparación de equipos de frío. Carga de gas, limpieza de filtros y optimización de rendimiento energético.',
    points: ['Carga de Gas y Fugas', 'Reparación de Compresores', 'Máximo Confort'],
    image: 'https://iili.io/fL0zaV9.png',
    icon: <Wind size={20} />
  }
];

const ServicesGrid: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 overflow-hidden flex flex-col border border-gray-100 transition-all hover:-translate-y-2 hover:shadow-2xl group">
            <div className="relative h-48 overflow-hidden">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-brand-secondary text-brand-primary p-2.5 rounded-xl shadow-lg border border-brand-primary/30">
                {service.icon}
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent"></div>
            </div>
            
            <div className="p-8 pt-2 flex-grow flex flex-col">
              <span className="text-brand-primary text-[10px] font-extrabold uppercase tracking-[0.2em] mb-2">{service.category}</span>
              <h3 className="text-xl font-extrabold text-brand-secondary mb-4 leading-tight">{service.title}</h3>
              <p className="text-brand-muted text-sm leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>
              
              <ul className="space-y-3 mb-8">
                {service.points.map((point, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs font-bold text-brand-secondary">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-primary"></div>
                    {point}
                  </li>
                ))}
              </ul>
              
              <div className="flex gap-3">
                <a 
                  href="tel:+34681269974" 
                  className="flex-1 flex items-center justify-center gap-2 bg-brand-secondary text-brand-primary py-3 rounded-xl font-bold hover:bg-brand-primary hover:text-brand-secondary transition-all text-xs"
                >
                  <Phone size={14} /> LLAMAR
                </a>
                <a 
                  href="https://wa.me/34681269974" 
                  className="p-3 bg-brand-primary/10 text-brand-primary rounded-xl hover:bg-brand-primary hover:text-brand-secondary transition-all"
                >
                  <MessageCircle size={20} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesGrid;
