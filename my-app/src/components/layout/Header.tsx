"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Clock, Menu, X, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/seo";

const navLinks = [
    { href: "/", label: "INICIO" },
    { href: "/reformas-integrales-sevilla", label: "REFORMAS" },
    { href: "/fontanero-sevilla-24-horas", label: "FONTANERÍA" },
    { href: "/electricista-sevilla-24-horas", label: "ELECTRICIDAD" },
    { href: "/urgencias-24-horas-sevilla", label: "URGENCIAS 24H" },
    { href: "/sobre-nosotros", label: "NOSOTROS" },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-brand-secondary/95 backdrop-blur-sm" : "bg-transparent"
                }`}
        >
            {/* Upper Info Bar */}
            <div className="bg-brand-secondary/80 text-white py-1.5 px-4 hidden md:block border-b border-brand-primary/20">
                <div className="container mx-auto flex justify-between items-center text-xs font-semibold tracking-wide">
                    <div className="flex items-center gap-6">
                        <span className="flex items-center gap-2">
                            <Clock size={14} className="text-brand-primary" />
                            SOPORTE TÉCNICO 24/7
                        </span>
                    </div>
                    <div className="flex items-center gap-6">
                        <a
                            href={`tel:${siteConfig.phone}`}
                            className="flex items-center gap-2 hover:text-brand-primary transition-colors"
                        >
                            <Phone size={14} className="text-brand-primary" />
                            URGENCIAS: {siteConfig.phoneDisplay}
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <nav
                className={`bg-white transition-all duration-300 ${scrolled ? "py-1" : "py-2"
                    }`}
                role="navigation"
                aria-label="Navegación principal"
            >
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <Link href="/" className="flex items-center" aria-label="Servicios Andalusí - Inicio">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={siteConfig.images.logo}
                            alt="Servicios Andalusí Logo"
                            className={`${scrolled ? "h-10 md:h-12" : "h-12 md:h-14"
                                } object-contain transition-all duration-300`}
                            width={56}
                            height={56}
                        />
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={siteConfig.images.logoText}
                            alt="Servicios Andalusí"
                            className={`${scrolled ? "h-14 md:h-16" : "h-16 md:h-20"
                                } object-contain transition-all duration-300 -ml-12`}
                            width={200}
                            height={80}
                        />
                    </Link>

                    {/* Desktop menu */}
                    <div className="hidden lg:flex items-center gap-6 xl:gap-8 font-bold text-brand-secondary text-xs">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="hover:text-brand-primary transition-colors py-2 border-b-2 border-transparent hover:border-brand-primary uppercase tracking-widest"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="/presupuesto"
                            className="bg-brand-primary text-brand-secondary px-6 py-2.5 rounded-xl hover:bg-brand-secondary hover:text-white transition-all shadow-lg shadow-brand-primary/20 flex items-center gap-2 font-black whitespace-nowrap"
                        >
                            PRESUPUESTO GRATIS
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="lg:hidden p-2 text-brand-secondary hover:text-brand-primary transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
                        aria-expanded={isMenuOpen}
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile menu */}
                <div
                    className={`lg:hidden bg-white border-t border-gray-200 transition-all duration-300 ease-in-out ${isMenuOpen
                        ? "h-[calc(100vh-60px)] opacity-100 pt-4 pb-32 overflow-y-auto"
                        : "max-h-0 opacity-0 py-0 overflow-hidden"
                        }`}
                >
                    <div className="container mx-auto px-4 flex flex-col space-y-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="block py-3 px-4 hover:bg-gray-50 rounded-lg font-bold text-brand-secondary hover:text-brand-primary transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}

                        <Link
                            href="/presupuesto"
                            className="block py-3 px-4 bg-brand-primary text-brand-secondary rounded-lg font-black text-center hover:bg-brand-secondary hover:text-white transition-all shadow-md mt-2 mx-1"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            PRESUPUESTO GRATIS
                        </Link>

                        <div className="pt-2 mt-1 border-t border-gray-100 px-1 space-y-3">
                            <a
                                href={`tel:${siteConfig.phone}`}
                                className="flex items-center justify-center gap-3 w-full bg-brand-secondary text-white px-4 py-3 rounded-lg font-bold hover:bg-brand-primary transition-colors shadow-lg"
                            >
                                <Phone size={20} className="flex-shrink-0" />
                                <span>LLAMAR: {siteConfig.phoneDisplay}</span>
                            </a>
                            <a
                                href={siteConfig.whatsapp}
                                className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white px-4 py-3 rounded-lg font-bold hover:bg-[#1da851] transition-colors shadow-lg"
                            >
                                <MessageCircle size={20} className="flex-shrink-0" />
                                <span>WHATSAPP</span>
                            </a>
                        </div>

                        <div className="h-8 w-full" />
                    </div>
                </div>
            </nav>
        </header>
    );
}
