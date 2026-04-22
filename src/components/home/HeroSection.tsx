import Link from "next/link";
import {
    Phone,
    MessageCircle,
    Clock,
    CheckCircle2,
} from "lucide-react";
import { siteConfig } from "@/lib/seo";

export default function HeroSection() {
    return (
        <div
            id="inicio"
            className="relative min-h-[90vh] sm:min-h-[85vh] flex items-center overflow-hidden pt-24 sm:pt-20 scroll-mt-20"
        >
            {/* Background Image with Light/Gold enhancement */}
            <div
                className="absolute inset-0 z-0 brightness-[1.15] contrast-[1.15] saturate-[1.1]"
                style={{
                    backgroundImage: `url(${siteConfig.images.hero})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-primary/5 clip-path-hero hidden lg:block" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10 py-8 sm:py-12">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                    {/* Text Content */}
                    <div className="w-full lg:w-3/5 text-center lg:text-left text-white">
                        <div className="inline-flex items-center gap-2 sm:gap-3 bg-brand-primary/20 backdrop-blur-md border border-brand-primary/30 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold mb-6 sm:mb-8 text-brand-primary">
                            <Clock size={14} className="flex-shrink-0" />
                            <span>¡LLEGAMOS EN MINUTOS!</span>
                        </div>

                        <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 sm:mb-6 leading-tight tracking-tight">
                            Reformas Integrales, Fontanería y Electricidad en{" "}
                            <span className="text-brand-primary font-serif italic">
                                Sevilla
                            </span>{" "}
                            — 24 Horas
                        </h1>

                        <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 mb-8 sm:mb-10 leading-relaxed font-medium">
                            Soluciones integrales de{" "}
                            <span className="text-white font-semibold">
                                Reformas, Fontanería y Electricidad
                            </span>{" "}
                            en Sevilla.
                            <span className="block mt-1">
                                Más de 20 años transformando hogares con el estándar de calidad
                                europeo.
                            </span>
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10">
                            <a
                                href={`tel:${siteConfig.phone}`}
                                className="group flex items-center justify-center gap-2 sm:gap-3 bg-brand-primary hover:bg-white text-brand-secondary font-black py-3 px-6 sm:py-4 sm:px-8 rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl shadow-brand-primary/30 transition-all transform hover:-translate-y-1"
                            >
                                <div className="flex flex-col items-start leading-tight">
                                    <span className="text-[9px] sm:text-[10px] uppercase opacity-80 tracking-widest">
                                        Llamada Directa
                                    </span>
                                    <span className="text-sm sm:text-lg">
                                        {siteConfig.phoneDisplay}
                                    </span>
                                </div>
                                <Phone
                                    size={20}
                                    className="flex-shrink-0 group-hover:rotate-12 transition-transform"
                                />
                            </a>
                            <a
                                href={siteConfig.whatsapp}
                                className="flex items-center justify-center gap-2 sm:gap-3 bg-white/5 hover:bg-white/10 border border-white/20 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-xl sm:rounded-2xl transition-all"
                            >
                                <span className="text-sm sm:text-lg">WHATSAPP</span>
                                <MessageCircle
                                    size={20}
                                    className="flex-shrink-0 text-brand-primary"
                                />
                            </a>
                        </div>

                        <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 text-xs sm:text-sm font-medium text-gray-400">
                            <div className="flex items-center gap-1.5 sm:gap-2 bg-white/5 px-3 py-1.5 rounded-lg">
                                <CheckCircle2
                                    size={14}
                                    className="text-brand-primary flex-shrink-0"
                                />
                                <span>Asistencia 24h</span>
                            </div>
                            <div className="flex items-center gap-1.5 sm:gap-2 bg-white/5 px-3 py-1.5 rounded-lg">
                                <CheckCircle2
                                    size={14}
                                    className="text-brand-primary flex-shrink-0"
                                />
                                <span>Presupuesto Inmediato</span>
                            </div>
                            <Link
                                href="/presupuesto"
                                className="flex items-center gap-1.5 sm:gap-2 bg-white/5 px-3 py-1.5 rounded-lg hover:bg-brand-primary/20 transition-colors"
                            >
                                <CheckCircle2
                                    size={14}
                                    className="text-brand-primary flex-shrink-0"
                                />
                                <span>Sin compromiso</span>
                            </Link>
                        </div>
                    </div>

                    {/* Image Box */}
                    <div className="w-full lg:w-2/5 relative hidden md:block mt-12 lg:mt-0">
                        <div className="relative z-10 rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl border-4 lg:border-8 border-white/5">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={siteConfig.images.heroWorker}
                                alt="Profesional de Servicios Andalusí realizando reforma en Sevilla"
                                className="w-full h-full object-cover transition-all duration-500"
                                width={600}
                                height={500}
                            />
                            <div className="absolute -bottom-4 -left-4 bg-brand-primary p-4 sm:p-5 lg:p-6 rounded-xl lg:rounded-2xl shadow-xl text-brand-secondary z-20">
                                <div className="text-2xl sm:text-3xl lg:text-4xl font-black">
                                    +20
                                </div>
                                <div className="text-[10px] sm:text-xs font-bold uppercase tracking-widest opacity-80">
                                    Años de experiencia
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
