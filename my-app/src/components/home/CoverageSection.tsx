import { MapPin } from "lucide-react";
import { COVERAGE_ZONES } from "@/lib/constants";
import { siteConfig } from "@/lib/seo";

export default function CoverageSection() {
    return (
        <section
            className="relative py-24 scroll-mt-28 overflow-hidden"
            id="cobertura"
            aria-labelledby="coverage-heading"
            style={{
                backgroundImage: `url(${siteConfig.images.hero})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
            }}
        >
            <div className="absolute inset-0 bg-black/30" />
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-white">
                    <div className="max-w-2xl">
                        <h2 id="coverage-heading" className="text-4xl md:text-5xl font-extrabold mb-6 uppercase tracking-tight">
                            ÁREAS DE{" "}
                            <span className="text-brand-primary">COBERTURA</span>
                        </h2>
                        <p className="text-gray-400 font-medium">
                            Desplazamiento{" "}
                            <span className="text-brand-primary font-bold">
                                gratuito
                            </span>{" "}
                            en servicios urgentes dentro de Sevilla Capital.
                        </p>
                    </div>
                    <div className="bg-brand-primary/10 border border-brand-primary/20 p-6 rounded-2xl hidden md:block">
                        <div className="text-brand-primary font-black text-2xl">
                            30 MIN
                        </div>
                        <div className="text-white text-[10px] uppercase font-bold tracking-widest">
                            Tiempo medio de respuesta
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {COVERAGE_ZONES.map((zone, index) => (
                        <div
                            key={index}
                            className="group bg-white/5 rounded-[2rem] overflow-hidden border border-white/5 flex flex-col hover:border-brand-primary/50 hover:shadow-[0_0_30px_rgba(197,160,89,0.25)] transition-all duration-500 cursor-default"
                        >
                            <div className="h-40 relative overflow-hidden">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={zone.image}
                                    alt={`Zona de cobertura ${zone.name} - Servicios Andalusí Sevilla`}
                                    className="w-full h-full object-cover transition-all duration-700"
                                    loading="lazy"
                                    width={400}
                                    height={160}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary to-transparent" />
                            </div>

                            <div className="p-6 pt-2 flex flex-col flex-grow">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-8 h-8 bg-brand-primary/20 rounded-lg flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-brand-secondary transition-colors duration-300">
                                        <MapPin size={16} />
                                    </div>
                                    <h3 className="text-lg font-bold text-white leading-tight group-hover:text-brand-primary transition-colors duration-300">
                                        {zone.name}
                                    </h3>
                                </div>

                                <div className="flex flex-wrap gap-1.5">
                                    {zone.subareas.map((sub, i) => (
                                        <span
                                            key={i}
                                            className="text-[9px] bg-white/5 text-gray-400 px-2 py-1 rounded-md font-bold group-hover:bg-brand-primary/10 group-hover:text-white transition-colors duration-300"
                                        >
                                            {sub}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
