import Link from "next/link";
import { Home, Phone, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/seo";

export default function NotFound() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-brand-light pt-20">
            <div className="container mx-auto px-4 text-center">
                <div className="text-8xl md:text-9xl font-black text-brand-primary/20 mb-4">
                    404
                </div>
                <h1 className="text-3xl md:text-4xl font-extrabold text-brand-secondary mb-6">
                    Página no encontrada
                </h1>
                <p className="text-brand-muted font-medium max-w-md mx-auto mb-10">
                    Lo sentimos, la página que buscas no existe o ha sido trasladada.
                    ¿Podemos ayudarte en algo?
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/"
                        className="flex items-center justify-center gap-3 bg-brand-primary text-brand-secondary font-black py-4 px-8 rounded-2xl shadow-xl transition-all hover:bg-brand-secondary hover:text-white"
                    >
                        <Home size={18} />
                        VOLVER AL INICIO
                    </Link>
                    <a
                        href={`tel:${siteConfig.phone}`}
                        className="flex items-center justify-center gap-3 bg-brand-secondary text-white font-bold py-4 px-8 rounded-2xl transition-all hover:bg-brand-primary hover:text-brand-secondary"
                    >
                        <Phone size={18} />
                        LLAMAR: {siteConfig.phoneDisplay}
                    </a>
                </div>

                <div className="mt-12 text-sm text-brand-muted">
                    <p className="mb-4">También puedes visitar:</p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link
                            href="/reformas-integrales-sevilla"
                            className="flex items-center gap-1 text-brand-primary font-bold hover:underline"
                        >
                            Reformas <ArrowRight size={12} />
                        </Link>
                        <Link
                            href="/fontanero-sevilla-24-horas"
                            className="flex items-center gap-1 text-brand-primary font-bold hover:underline"
                        >
                            Fontanería <ArrowRight size={12} />
                        </Link>
                        <Link
                            href="/electricista-sevilla-24-horas"
                            className="flex items-center gap-1 text-brand-primary font-bold hover:underline"
                        >
                            Electricidad <ArrowRight size={12} />
                        </Link>
                        <Link
                            href="/presupuesto"
                            className="flex items-center gap-1 text-brand-primary font-bold hover:underline"
                        >
                            Presupuesto <ArrowRight size={12} />
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
