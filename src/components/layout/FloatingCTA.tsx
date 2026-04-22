"use client";

import { Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/seo";

export default function FloatingCTA() {
    return (
        <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50 md:hidden">
            <a
                href={siteConfig.whatsapp}
                className="bg-[#25D366] text-white p-5 rounded-2xl shadow-2xl shadow-green-500/40 transform active:scale-95 transition-transform"
                aria-label="Contactar por WhatsApp con Servicios Andalusí"
            >
                <MessageCircle size={28} />
            </a>
            <a
                href={`tel:${siteConfig.phone}`}
                className="bg-brand-secondary text-brand-primary p-5 rounded-2xl shadow-2xl shadow-brand-secondary/40 border border-brand-primary/30 transform active:scale-95 transition-transform"
                aria-label="Llamar a Servicios Andalusí"
            >
                <Phone size={28} />
            </a>
        </div>
    );
}
