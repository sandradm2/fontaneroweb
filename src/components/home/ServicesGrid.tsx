import Link from "next/link";
import {
    Hammer,
    Droplets,
    Zap,
    Wind,
    MessageCircle,
    Phone,
} from "lucide-react";
import { SERVICE_CARDS } from "@/lib/constants";
import { siteConfig } from "@/lib/seo";

const iconMap: Record<string, React.ReactNode> = {
    Hammer: <Hammer size={20} />,
    Droplets: <Droplets size={20} />,
    Zap: <Zap size={20} />,
    Wind: <Wind size={20} />,
};

export default function ServicesGrid() {
    return (
        <section id="servicios" className="py-24 bg-white scroll-mt-28" aria-labelledby="servicios-heading">
            <div className="container mx-auto px-4 text-center mb-16">
                <span className="text-brand-primary font-bold text-xs tracking-[0.3em] uppercase mb-4 block">
                    PORTFOLIO DE SERVICIOS
                </span>
                <h2 id="servicios-heading" className="text-4xl md:text-6xl font-extrabold text-brand-secondary mb-6 tracking-tight uppercase">
                    Especialistas a tu{" "}
                    <span className="text-brand-primary font-serif normal-case tracking-normal italic">
                        disposición
                    </span>
                </h2>
                <p className="text-brand-muted max-w-2xl mx-auto font-medium">
                    Ofrecemos soluciones técnicas de alto nivel con un equipo
                    multidisciplinar preparado para cualquier reto constructivo o avería
                    inmediata en Sevilla.
                </p>
            </div>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {SERVICE_CARDS.map((service, index) => (
                        <article
                            key={index}
                            className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 overflow-hidden flex flex-col border border-gray-100 transition-all hover:-translate-y-2 hover:shadow-2xl group"
                        >
                            <div className="relative h-48 overflow-hidden">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={service.image}
                                    alt={`${service.title} - Servicios Andalusí Sevilla`}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    loading="lazy"
                                    width={400}
                                    height={192}
                                />
                                <div className="absolute top-4 left-4 bg-brand-secondary text-brand-primary p-2.5 rounded-xl shadow-lg border border-brand-primary/30">
                                    {iconMap[service.iconName] || <Hammer size={20} />}
                                </div>
                                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent" />
                            </div>

                            <div className="p-8 pt-2 flex-grow flex flex-col">
                                <span className="text-brand-primary text-[10px] font-extrabold uppercase tracking-[0.2em] mb-2">
                                    {service.category}
                                </span>
                                <h3 className="text-xl font-extrabold text-brand-secondary mb-4 leading-tight">
                                    <Link href={service.href} title={`${service.title} en Sevilla`}>
                                        {service.title}
                                    </Link>
                                </h3>
                                <p className="text-brand-muted text-sm leading-relaxed mb-6 flex-grow">
                                    {service.description}
                                </p>

                                <ul className="space-y-3 mb-8">
                                    {service.points.map((point, i) => (
                                        <li
                                            key={i}
                                            className="flex items-center gap-2 text-xs font-bold text-brand-secondary"
                                        >
                                            <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                                            {point}
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex gap-3">
                                    <a
                                        href={`tel:${siteConfig.phone}`}
                                        className="flex-1 flex items-center justify-center gap-2 bg-brand-secondary text-brand-primary py-3 rounded-xl font-bold hover:bg-brand-primary hover:text-brand-secondary transition-all text-xs"
                                        aria-label={`Llamar para ${service.category}`}
                                    >
                                        <Phone size={14} /> LLAMAR
                                    </a>
                                    <a
                                        href={siteConfig.whatsapp}
                                        className="p-3 bg-brand-primary/10 text-brand-primary rounded-xl hover:bg-brand-primary hover:text-brand-secondary transition-all"
                                        aria-label={`WhatsApp para ${service.category}`}
                                    >
                                        <MessageCircle size={20} />
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
