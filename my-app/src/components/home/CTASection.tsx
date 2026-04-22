import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/seo";

export default function CTASection() {
    return (
        <section className="py-24 bg-white" aria-labelledby="cta-heading">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="text-brand-primary font-bold text-xs tracking-[0.3em] uppercase mb-4 block">
                        EMPIEZA HOY
                    </span>
                    <h2 id="cta-heading" className="text-4xl md:text-5xl font-extrabold text-brand-secondary mb-6 tracking-tight">
                        ¿Necesitas una reforma o reparación en{" "}
                        <span className="text-brand-primary font-serif normal-case italic">
                            Sevilla
                        </span>
                        ?
                    </h2>
                    <p className="text-brand-muted font-medium max-w-2xl mx-auto mb-12 text-lg">
                        Solicita tu presupuesto gratuito y sin compromiso. Te respondemos en
                        menos de 2 horas.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/presupuesto"
                            className="group flex items-center justify-center gap-3 bg-brand-primary text-brand-secondary font-black py-4 px-10 rounded-2xl shadow-xl shadow-brand-primary/30 hover:bg-brand-secondary hover:text-white transition-all text-lg"
                        >
                            PEDIR PRESUPUESTO GRATIS
                            <ArrowRight
                                size={20}
                                className="group-hover:translate-x-1 transition-transform"
                            />
                        </Link>
                        <a
                            href={`tel:${siteConfig.phone}`}
                            className="flex items-center justify-center gap-3 bg-brand-secondary text-white font-bold py-4 px-10 rounded-2xl shadow-xl hover:bg-brand-primary hover:text-brand-secondary transition-all text-lg"
                        >
                            <Phone size={20} />
                            {siteConfig.phoneDisplay}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
