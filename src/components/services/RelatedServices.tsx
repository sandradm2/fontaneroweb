import Link from "next/link";
import { ArrowRight } from "lucide-react";

const allServices = [
    {
        href: "/reformas-integrales-sevilla",
        title: "Reformas Integrales en Sevilla",
        label: "Reformas Integrales",
    },
    {
        href: "/fontanero-sevilla-24-horas",
        title: "Fontanero 24h en Sevilla",
        label: "Fontanería 24h",
    },
    {
        href: "/electricista-sevilla-24-horas",
        title: "Electricista 24h en Sevilla",
        label: "Electricidad 24h",
    },
    {
        href: "/urgencias-24-horas-sevilla",
        title: "Urgencias 24h en Sevilla",
        label: "Urgencias 24h",
    },
    {
        href: "/mantenimiento-comunidades-sevilla",
        title: "Mantenimiento Comunidades en Sevilla",
        label: "Comunidades",
    },
];

export default function RelatedServices({
    currentSlug,
}: {
    currentSlug: string;
}) {
    const services = allServices.filter(
        (s) => s.href !== `/${currentSlug}`
    );

    return (
        <section
            className="py-24 bg-white"
            aria-labelledby="related-services-heading"
        >
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <span className="text-brand-primary font-bold text-xs tracking-[0.3em] uppercase mb-4 block">
                        MÁS SERVICIOS
                    </span>
                    <h2
                        id="related-services-heading"
                        className="text-3xl md:text-4xl font-extrabold text-brand-secondary tracking-tight"
                    >
                        Otros Servicios en Sevilla
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                    {services.map((service) => (
                        <Link
                            key={service.href}
                            href={service.href}
                            title={service.title}
                            className="group bg-brand-light border border-gray-100 rounded-2xl p-6 text-center hover:bg-brand-secondary hover:border-brand-primary/30 transition-all duration-300"
                        >
                            <span className="font-bold text-brand-secondary group-hover:text-white text-sm block mb-2">
                                {service.label}
                            </span>
                            <ArrowRight
                                size={16}
                                className="mx-auto text-brand-primary opacity-0 group-hover:opacity-100 transition-opacity"
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
