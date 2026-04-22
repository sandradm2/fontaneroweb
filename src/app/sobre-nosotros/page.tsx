import { Metadata } from "next";
import Link from "next/link";
import {
    ShieldCheck,
    Globe,
    Clock,
    Users,
    Award,
    Phone,
    ArrowRight,
} from "lucide-react";
import { siteConfig } from "@/lib/seo";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
    title: "Sobre Nosotros | Profesionales de Confianza en Sevilla",
    description:
        "Conoce a Servicios Andalusí. Más de 20 años de experiencia en reformas, fontanería y electricidad en Sevilla. Empresa familiar con formación europea.",
    alternates: {
        canonical: `${siteConfig.url}/sobre-nosotros`,
    },
};

export default function SobreNosotrosPage() {
    return (
        <main className="pt-32 pb-0 min-h-screen">
            <BreadcrumbSchema
                items={[{ name: "Sobre Nosotros", href: "/sobre-nosotros" }]}
            />

            <div className="container mx-auto px-4 mb-16">
                <Breadcrumb items={[{ name: "Sobre Nosotros" }]} />

                <article>
                    <header className="max-w-4xl mx-auto text-center mb-16">
                        <span className="text-brand-primary font-bold text-xs tracking-[0.3em] uppercase mb-4 block">
                            NUESTRA HISTORIA
                        </span>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-brand-secondary mb-6 tracking-tight">
                            Sobre{" "}
                            <span className="text-brand-primary font-serif normal-case italic">
                                Servicios Andalusí
                            </span>{" "}
                            — Profesionales de Confianza en Sevilla
                        </h1>
                        <p className="text-brand-muted font-medium text-lg max-w-2xl mx-auto">
                            Más de 20 años transformando hogares en Sevilla con la maestría
                            artesanal de una familia de cuarta generación.
                        </p>
                    </header>

                    {/* Historia */}
                    <section className="max-w-4xl mx-auto mb-20" aria-labelledby="historia-heading">
                        <div className="bg-white p-12 rounded-3xl shadow-xl border border-gray-100">
                            <div className="w-16 h-1 bg-brand-primary mb-8 rounded-full" />
                            <h2 id="historia-heading" className="text-3xl font-extrabold text-brand-secondary mb-8">
                                Nuestra{" "}
                                <span className="text-brand-primary font-serif normal-case italic">
                                    Historia
                                </span>
                            </h2>

                            <div className="space-y-6 text-gray-600 leading-relaxed font-medium">
                                <p>
                                    En{" "}
                                    <span className="text-brand-secondary font-bold">
                                        Servicios Andalusí
                                    </span>{" "}
                                    representamos la excelencia técnica de una tradición familiar
                                    de cuatro generaciones dedicadas al sector de la construcción
                                    y las instalaciones.
                                </p>
                                <p>
                                    Con amplia trayectoria profesional en{" "}
                                    <span className="text-brand-primary font-bold">
                                        Francia y Alemania
                                    </span>
                                    , hemos integrado los más altos estándares europeos de calidad
                                    para ofrecer en Sevilla un servicio premium: rápido, limpio y
                                    altamente profesional.
                                </p>
                                <p>
                                    Nacimos con la vocación de dar un servicio integral al
                                    cliente sevillano: desde una reforma completa de vivienda
                                    hasta la reparación urgente de una fuga de agua a las 3 de la
                                    madrugada. Nuestro compromiso es estar disponibles cuando nos
                                    necesites, con la calidad que te mereces.
                                </p>
                                <div className="p-6 bg-brand-secondary/5 rounded-2xl border-l-4 border-brand-primary text-sm italic text-brand-secondary">
                                    &ldquo;Unimos la maestría artesanal con la innovación
                                    tecnológica para proteger y mejorar tu hogar.&rdquo;
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Cifras */}
                    <section className="max-w-4xl mx-auto mb-20" aria-labelledby="cifras-heading">
                        <h2 id="cifras-heading" className="sr-only">Nuestras cifras</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {[
                                { icon: <Clock size={32} />, number: "+20", label: "Años de experiencia" },
                                { icon: <Users size={32} />, number: "+2.500", label: "Clientes satisfechos" },
                                { icon: <Award size={32} />, number: "4ª", label: "Generación familiar" },
                                { icon: <Globe size={32} />, number: "3", label: "Países de experiencia" },
                            ].map((stat, i) => (
                                <div
                                    key={i}
                                    className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center"
                                >
                                    <div className="text-brand-primary mb-4 flex justify-center">
                                        {stat.icon}
                                    </div>
                                    <div className="text-3xl font-black text-brand-secondary mb-2">
                                        {stat.number}
                                    </div>
                                    <div className="text-xs uppercase font-bold text-brand-muted tracking-widest">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Valores */}
                    <section className="max-w-4xl mx-auto mb-20" aria-labelledby="valores-heading">
                        <h2 id="valores-heading" className="text-3xl font-extrabold text-brand-secondary mb-12 text-center">
                            Nuestros Valores
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: <ShieldCheck size={32} />,
                                    title: "Confianza",
                                    desc: "Presupuestos transparentes sin letra pequeña. Sin sorpresas. Sin costes ocultos.",
                                },
                                {
                                    icon: <Award size={32} />,
                                    title: "Calidad",
                                    desc: "Materiales de primera calidad y acabados de nivel europeo en todos nuestros trabajos.",
                                },
                                {
                                    icon: <Clock size={32} />,
                                    title: "Compromiso",
                                    desc: "Cumplimos plazos y horarios. Si decimos que estamos en 30 minutos, así será.",
                                },
                            ].map((value, i) => (
                                <div
                                    key={i}
                                    className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm text-center"
                                >
                                    <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary mx-auto mb-6">
                                        {value.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-brand-secondary mb-3">
                                        {value.title}
                                    </h3>
                                    <p className="text-brand-muted text-sm font-medium leading-relaxed">
                                        {value.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="max-w-4xl mx-auto text-center mb-20">
                        <h2 className="text-3xl font-extrabold text-brand-secondary mb-6">
                            ¿Necesitas nuestros servicios?
                        </h2>
                        <p className="text-brand-muted font-medium mb-8">
                            Contacta con nosotros para cualquier consulta o solicitud de
                            presupuesto.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/presupuesto"
                                className="group flex items-center justify-center gap-3 bg-brand-primary text-brand-secondary font-black py-4 px-10 rounded-2xl shadow-xl shadow-brand-primary/30 transition-all hover:bg-brand-secondary hover:text-white"
                            >
                                PEDIR PRESUPUESTO
                                <ArrowRight
                                    size={18}
                                    className="group-hover:translate-x-1 transition-transform"
                                />
                            </Link>
                            <a
                                href={`tel:${siteConfig.phone}`}
                                className="flex items-center justify-center gap-3 bg-brand-secondary text-white font-bold py-4 px-10 rounded-2xl shadow-xl transition-all hover:bg-brand-primary hover:text-brand-secondary"
                            >
                                <Phone size={18} />
                                {siteConfig.phoneDisplay}
                            </a>
                        </div>
                    </section>
                </article>
            </div>
        </main>
    );
}
