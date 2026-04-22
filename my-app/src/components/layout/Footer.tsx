import Link from "next/link";
import {
    Phone,
    MapPin,
    Instagram,
    Mail,
    Facebook,
} from "lucide-react";
import { siteConfig } from "@/lib/seo";

export default function Footer() {
    return (
        <footer className="bg-brand-secondary bg-[linear-gradient(180deg,_#0a0a0a_0%,_#0f0e0c_100%)] text-gray-500 pt-24 pb-12 border-t border-white/5">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                    {/* Brand Identity */}
                    <div className="space-y-0">
                        <div className="flex justify-center">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={siteConfig.images.logoFooter}
                                alt="Servicios Andalusí - Reformas e instalaciones en Sevilla"
                                className="h-56 object-contain"
                                width={224}
                                height={224}
                            />
                        </div>
                        <p className="text-sm leading-relaxed -mt-2">
                            Referentes en{" "}
                            <span className="text-white font-bold">
                                servicios integrales
                            </span>{" "}
                            en la provincia de Sevilla. Compromiso, técnica y rapidez en
                            cada intervención.
                        </p>
                    </div>

                    {/* Navigation — SEO Internal Links */}
                    <div>
                        <h4 className="text-brand-primary font-black text-xs tracking-[0.2em] mb-10 uppercase">
                            SERVICIOS
                        </h4>
                        <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
                            <li>
                                <Link
                                    href="/reformas-integrales-sevilla"
                                    title="Reformas integrales en Sevilla"
                                    className="hover:text-white transition-colors"
                                >
                                    REFORMAS
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/fontanero-sevilla-24-horas"
                                    title="Fontanero 24 horas en Sevilla"
                                    className="hover:text-white transition-colors"
                                >
                                    FONTANERO 24H
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/electricista-sevilla-24-horas"
                                    title="Electricista 24 horas en Sevilla"
                                    className="hover:text-white transition-colors"
                                >
                                    ELECTRICISTA 24H
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/urgencias-24-horas-sevilla"
                                    title="Urgencias 24 horas en Sevilla"
                                    className="hover:text-white transition-colors"
                                >
                                    URGENCIAS 24H
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/mantenimiento-comunidades-sevilla"
                                    title="Mantenimiento de comunidades en Sevilla"
                                    className="hover:text-white transition-colors"
                                >
                                    COMUNIDADES
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/boletines-electricos-sevilla"
                                    title="Boletines eléctricos baratos en Sevilla"
                                    className="hover:text-white transition-colors"
                                >
                                    BOLETINES ELÉCTRICOS
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/deteccion-fugas-sevilla"
                                    title="Detección de fugas sin obra Sevilla"
                                    className="hover:text-white transition-colors"
                                >
                                    DETECCIÓN DE FUGAS
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/reformas-locales-comerciales-sevilla"
                                    title="Reformas de locales comerciales Sevilla"
                                    className="hover:text-white transition-colors"
                                >
                                    REFORMAS LOCALES
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/presupuesto"
                                    title="Solicitar presupuesto gratis"
                                    className="hover:text-white transition-colors"
                                >
                                    PRESUPUESTO GRATIS
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact — NAP (Name, Address, Phone) */}
                    <div>
                        <h4 className="text-brand-primary font-black text-xs tracking-[0.2em] mb-10 uppercase">
                            SOPORTE 24H
                        </h4>
                        <ul className="space-y-8">
                            <li className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0">
                                    <Phone size={16} />
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase font-bold text-white/40 mb-1">
                                        Teléfonos
                                    </p>
                                    <a
                                        href={`tel:${siteConfig.phone}`}
                                        className="text-white font-black text-base hover:text-brand-primary block"
                                    >
                                        {siteConfig.phoneDisplay}
                                    </a>

                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0">
                                    <Mail size={16} />
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase font-bold text-white/40 mb-1">
                                        Email
                                    </p>
                                    <a
                                        href={`mailto:${siteConfig.email}`}
                                        className="text-white font-bold text-xs hover:text-brand-primary block"
                                    >
                                        {siteConfig.email}
                                    </a>
                                    <a
                                        href={`mailto:${siteConfig.email2}`}
                                        className="text-white font-bold text-xs hover:text-brand-primary block mt-1"
                                    >
                                        {siteConfig.email2}
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0">
                                    <MapPin size={16} />
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase font-bold text-white/40 mb-1">
                                        Base de Operaciones
                                    </p>
                                    <address className="text-xs font-bold text-white leading-relaxed not-italic">
                                        {siteConfig.address.street},<br />
                                        C.P. {siteConfig.address.postalCode}{" "}
                                        {siteConfig.address.city},{" "}
                                        {siteConfig.address.province}.
                                    </address>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Legal & Social */}
                    <div className="space-y-10">
                        <div>
                            <h4 className="text-brand-primary font-black text-xs tracking-[0.2em] mb-6 uppercase">
                                LEGAL
                            </h4>
                            <div className="flex flex-col gap-3 text-[10px] font-bold uppercase tracking-widest">
                                <Link
                                    href="/politica-privacidad"
                                    className="hover:text-white transition-colors"
                                >
                                    Política de Privacidad
                                </Link>
                                <Link
                                    href="/aviso-legal"
                                    className="hover:text-white transition-colors"
                                >
                                    Aviso Legal
                                </Link>
                                <Link
                                    href="/politica-cookies"
                                    className="hover:text-white transition-colors"
                                >
                                    Política de Cookies
                                </Link>
                            </div>
                            <div className="pt-6">
                                <h4 className="text-brand-primary font-black text-xs tracking-[0.2em] mb-4 uppercase">
                                    SÍGUENOS
                                </h4>
                                <div className="flex gap-3">
                                    <a
                                        href={siteConfig.social.tiktok}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="TikTok de Servicios Andalusí"
                                        className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-brand-primary hover:text-brand-secondary transition-all"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="18"
                                            height="18"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                                        </svg>
                                    </a>
                                    <a
                                        href={siteConfig.social.instagram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Instagram de Servicios Andalusí"
                                        className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-brand-primary hover:text-brand-secondary transition-all"
                                    >
                                        <Instagram size={18} />
                                    </a>
                                    <a
                                        href="https://www.facebook.com/p/Servicios-y-Reformas-Andalus%C3%AD-100086157018881/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Facebook de Servicios Andalusí"
                                        className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-brand-primary hover:text-brand-secondary transition-all"
                                    >
                                        <Facebook size={18} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-[10px] uppercase font-bold tracking-[0.3em] text-white/20">
                        © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados.
                    </div>
                    <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/20">
                        Reformas · Fontanería · Electricidad en Sevilla
                    </div>
                </div>
            </div>
        </footer>
    );
}
