import Link from "next/link";
import {
    Phone,
    MessageCircle,
    CheckCircle2,
    ArrowRight,
    Clock,
} from "lucide-react";
import { siteConfig, ServicePageConfig } from "@/lib/seo";
import Breadcrumb from "@/components/layout/Breadcrumb";
import FAQSection from "@/components/home/FAQSection";
import RelatedServices from "@/components/services/RelatedServices";
import CTASection from "@/components/home/CTASection";
import CoverageSection from "@/components/home/CoverageSection";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { ServiceSchema } from "@/components/seo/ServiceSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";

export default function ServicePageTemplate({
    service,
}: {
    service: ServicePageConfig;
}) {
    return (
        <main>
            <BreadcrumbSchema
                items={[{ name: service.breadcrumbName, href: `/${service.slug}` }]}
            />
            <ServiceSchema
                name={service.title}
                description={service.shortDescription}
                url={`/${service.slug}`}
                image={service.image}
            />
            <FAQSchema faqs={service.faqs} />

            {/* Hero */}
            <article>
                <header
                    className="relative min-h-[50vh] flex items-end overflow-hidden pt-32 pb-16"
                    style={{
                        backgroundImage: `url(${service.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary via-brand-secondary/80 to-brand-secondary/40" />
                    <div className="container mx-auto px-4 relative z-10">
                        <Breadcrumb
                            items={[{ name: service.breadcrumbName }]}
                        />
                        <div className="max-w-4xl">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                                {service.h1}
                            </h1>
                            <p className="text-lg text-gray-300 max-w-2xl mb-8 font-medium">
                                {service.shortDescription}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href={`tel:${siteConfig.phone}`}
                                    className="group flex items-center justify-center gap-3 bg-brand-primary text-brand-secondary font-black py-4 px-8 rounded-2xl shadow-xl shadow-brand-primary/30 transition-all hover:-translate-y-1"
                                >
                                    <Phone size={20} />
                                    LLAMAR: {siteConfig.phoneDisplay}
                                </a>
                                <Link
                                    href="/presupuesto"
                                    className="flex items-center justify-center gap-3 bg-white/10 border border-white/20 text-white font-bold py-4 px-8 rounded-2xl transition-all hover:bg-white/20"
                                >
                                    PRESUPUESTO GRATIS
                                    <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Service Description */}
                <section className="py-20 bg-gradient-to-b from-white to-gray-50" aria-labelledby="service-desc-heading">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto">
                            {/* Title with decorative line */}
                            <div className="text-center mb-16">
                                <h2 id="service-desc-heading" className="text-4xl md:text-5xl font-extrabold text-brand-secondary mb-4">
                                    {service.title} en Sevilla
                                </h2>
                                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-brand-primary to-transparent mx-auto rounded-full"></div>
                            </div>

                            {/* Content with enhanced visual structure */}
                            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
                                {/* Decorative top border */}
                                <div className="h-2 bg-gradient-to-r from-brand-primary via-brand-primary/80 to-brand-primary"></div>

                                {/* Text content with better spacing */}
                                <div className="p-8 md:p-12">
                                    <div className="prose prose-lg max-w-none">
                                        {/* Split long description into visually distinct paragraphs */}
                                        {service.longDescription.split('. ').map((sentence, index, array) => {
                                            // Add period back except for last sentence if it already has punctuation
                                            const text = index < array.length - 1 || !sentence.match(/[.!?]$/)
                                                ? sentence + '.'
                                                : sentence;

                                            // Group every 2-3 sentences into a paragraph
                                            const shouldStartNewParagraph = index % 3 === 0;

                                            if (shouldStartNewParagraph && index > 0) {
                                                return (
                                                    <p key={index} className="text-gray-700 text-lg leading-relaxed font-medium mb-6 first:mb-6 last:mb-0">
                                                        {text}
                                                    </p>
                                                );
                                            } else if (index === 0) {
                                                return (
                                                    <p key={index} className="text-gray-700 text-lg leading-relaxed font-medium mb-6 first-letter:text-5xl first-letter:font-bold first-letter:text-brand-primary first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                                                        {text}
                                                    </p>
                                                );
                                            }
                                            return null;
                                        }).filter(Boolean).length > 0
                                            ? service.longDescription.split('. ').reduce((acc, sentence, index, array) => {
                                                const text = index < array.length - 1 || !sentence.match(/[.!?]$/)
                                                    ? sentence + '.'
                                                    : sentence;

                                                const paragraphIndex = Math.floor(index / 3);
                                                if (!acc[paragraphIndex]) acc[paragraphIndex] = [];
                                                acc[paragraphIndex].push(text);
                                                return acc;
                                            }, [] as string[][]).map((paragraph, pIndex) => (
                                                <p
                                                    key={pIndex}
                                                    className={`text-gray-700 text-lg leading-relaxed font-medium mb-6 last:mb-0 ${pIndex === 0
                                                            ? 'first-letter:text-5xl first-letter:font-bold first-letter:text-brand-primary first-letter:float-left first-letter:mr-3 first-letter:mt-1'
                                                            : ''
                                                        }`}
                                                >
                                                    {paragraph.join(' ')}
                                                </p>
                                            ))
                                            : (
                                                <p className="text-gray-700 text-lg leading-relaxed font-medium first-letter:text-5xl first-letter:font-bold first-letter:text-brand-primary first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                                                    {service.longDescription}
                                                </p>
                                            )
                                        }
                                    </div>
                                </div>

                                {/* Bottom accent with subtle pattern */}
                                <div className="px-8 md:px-12 pb-8 md:pb-12 pt-6 bg-gradient-to-b from-transparent to-brand-light/30">
                                    <div className="flex items-center justify-center gap-2 text-brand-primary">
                                        <div className="h-px w-12 bg-brand-primary/30"></div>
                                        <span className="text-xs font-bold uppercase tracking-widest">Excelencia Garantizada</span>
                                        <div className="h-px w-12 bg-brand-primary/30"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features */}
                <section className="py-20 bg-brand-light" aria-labelledby="features-heading">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 id="features-heading" className="text-3xl font-extrabold text-brand-secondary mb-12 text-center">
                                ¿Qué incluye nuestro servicio?
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {service.features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm"
                                    >
                                        <CheckCircle2
                                            size={24}
                                            className="text-brand-primary flex-shrink-0"
                                        />
                                        <span className="font-bold text-brand-secondary">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Process */}
                <section className="py-20 bg-white" aria-labelledby="process-heading">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 id="process-heading" className="text-3xl font-extrabold text-brand-secondary mb-12 text-center">
                                ¿Cómo trabajamos?
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                {[
                                    {
                                        step: "01",
                                        title: "Llámanos",
                                        desc: "Contacta con nosotros por teléfono o WhatsApp",
                                    },
                                    {
                                        step: "02",
                                        title: "Llegamos rápido",
                                        desc: "Nos desplazamos en 30-60 minutos a tu domicilio",
                                    },
                                    {
                                        step: "03",
                                        title: "Diagnosticamos",
                                        desc: "Evaluamos la situación y te damos presupuesto",
                                    },
                                    {
                                        step: "04",
                                        title: "Reparamos",
                                        desc: "Ejecutamos el trabajo con garantía total",
                                    },
                                ].map((item) => (
                                    <div key={item.step} className="text-center">
                                        <div className="w-16 h-16 mx-auto bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary font-black text-xl mb-4">
                                            {item.step}
                                        </div>
                                        <h3 className="font-bold text-brand-secondary mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-brand-muted text-sm font-medium">
                                            {item.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Quick CTA */}
                <section className="py-16 bg-brand-secondary">
                    <div className="container mx-auto px-4 text-center">
                        <div className="flex items-center justify-center gap-3 text-brand-primary mb-4">
                            <Clock size={24} />
                            <span className="font-black text-lg uppercase tracking-wider">
                                Disponible 24/7
                            </span>
                        </div>
                        <p className="text-gray-400 mb-8 font-medium">
                            Servicio de urgencias disponible las 24 horas del día, los 365
                            días del año en Sevilla capital
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href={`tel:${siteConfig.phone}`}
                                className="bg-brand-primary text-brand-secondary font-black py-4 px-10 rounded-2xl shadow-xl shadow-brand-primary/30 transition-all hover:scale-105 flex items-center justify-center gap-3"
                            >
                                <Phone size={20} />
                                {siteConfig.phoneDisplay}
                            </a>
                            <a
                                href={siteConfig.whatsapp}
                                className="bg-[#25D366] text-white font-bold py-4 px-10 rounded-2xl transition-all hover:scale-105 flex items-center justify-center gap-3"
                            >
                                <MessageCircle size={20} />
                                WHATSAPP
                            </a>
                        </div>
                    </div>
                </section>
            </article>

            {/* Coverage */}
            <CoverageSection />

            {/* FAQ */}
            <FAQSection
                faqs={service.faqs}
                title={`Preguntas Frecuentes sobre ${service.title}`}
                id={`faq-${service.slug}`}
            />

            {/* Related Services */}
            <RelatedServices currentSlug={service.slug} />

            {/* Final CTA */}
            <CTASection />
        </main>
    );
}
