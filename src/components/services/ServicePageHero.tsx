
import Link from "next/link";
import { Phone, MessageCircle, CheckCircle2, Clock } from "lucide-react";
import { siteConfig } from "@/lib/seo";

interface ServicePageHeroProps {
    title: string;
    description: string;
    image?: string;
    benefits?: string[];
}

export default function ServicePageHero({
    title,
    description,
    image = siteConfig.images.hero,
    benefits = ["Presupuesto Gratis", "Sin Compromiso", "Asistencia Inmediata"],
}: ServicePageHeroProps) {
    return (
        <div className="relative min-h-[70vh] flex items-center overflow-hidden pt-24 pb-12">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 brightness-[0.4]"
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <div className="inline-flex items-center gap-2 bg-brand-primary/20 backdrop-blur-md border border-brand-primary/30 px-4 py-1.5 rounded-full text-xs font-bold mb-6 text-brand-primary">
                        <Clock size={14} />
                        <span>DISPONIBLES AHORA EN SEVILLA</span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                        {title}
                    </h1>

                    <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
                        {description}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                        <a
                            href={`tel:${siteConfig.phone}`}
                            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-brand-primary hover:bg-brand-secondary text-brand-secondary hover:text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:-translate-y-1 shadow-lg shadow-brand-primary/20"
                        >
                            <Phone size={20} />
                            <span>Llamar: {siteConfig.phoneDisplay}</span>
                        </a>
                        <a
                            href={siteConfig.whatsapp}
                            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold py-4 px-8 rounded-xl transition-all backdrop-blur-sm"
                        >
                            <MessageCircle size={20} />
                            <span>WhatsApp</span>
                        </a>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm font-medium text-gray-300">
                        {benefits.slice(0, 3).map((benefit, idx) => (
                            <div
                                key={idx}
                                className="flex items-center gap-2 bg-black/30 px-3 py-1.5 rounded-lg border border-white/10"
                            >
                                <CheckCircle2 size={16} className="text-brand-primary" />
                                <span>{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
