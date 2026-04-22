import {
    Clock,
    ShieldCheck,
    UserCheck,
    Banknote,
    Heart,
    Wrench,
} from "lucide-react";
import { BENEFITS } from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
    Clock: <Clock size={28} />,
    ShieldCheck: <ShieldCheck size={28} />,
    UserCheck: <UserCheck size={28} />,
    Banknote: <Banknote size={28} />,
    Heart: <Heart size={28} />,
    Wrench: <Wrench size={28} />,
};

export default function BenefitsSection() {
    return (
        <section className="py-24 bg-white scroll-mt-28" aria-labelledby="benefits-heading">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-brand-primary font-bold text-xs tracking-[0.3em] uppercase mb-4 block">
                        NUESTRO COMPROMISO
                    </span>
                    <h2 id="benefits-heading" className="text-4xl md:text-5xl font-extrabold text-brand-secondary mb-6 tracking-tight">
                        ¿Por qué{" "}
                        <span className="text-brand-primary font-serif normal-case italic">
                            Andalusí
                        </span>
                        ?
                    </h2>
                    <p className="text-brand-muted font-medium">
                        Combinamos la maestría artesanal con la innovación tecnológica para
                        ofrecer un servicio superior en Sevilla.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {BENEFITS.map((benefit, index) => (
                        <div
                            key={index}
                            className="group p-10 rounded-3xl border border-gray-100 hover:border-brand-primary/30 hover:bg-brand-secondary transition-all duration-300"
                        >
                            <div className="w-14 h-14 bg-brand-light group-hover:bg-brand-primary group-hover:text-brand-secondary rounded-2xl flex items-center justify-center text-brand-primary mb-8 transition-all shadow-sm">
                                {iconMap[benefit.iconName] || <Wrench size={28} />}
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
}
