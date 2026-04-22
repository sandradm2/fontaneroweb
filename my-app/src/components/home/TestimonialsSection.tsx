import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/seo";

export default function TestimonialsSection() {
    const aggregateRating = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: siteConfig.name,
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: String(TESTIMONIALS.length),
            bestRating: "5",
            worstRating: "1",
        },
        review: TESTIMONIALS.map((t) => ({
            "@type": "Review",
            author: { "@type": "Person", name: t.name },
            reviewRating: {
                "@type": "Rating",
                ratingValue: String(t.rating),
                bestRating: "5",
            },
            reviewBody: t.text,
            datePublished: t.date,
        })),
    };

    return (
        <section className="py-24 bg-brand-light" aria-labelledby="testimonials-heading">
            <JsonLd data={aggregateRating} />
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-brand-primary font-bold text-xs tracking-[0.3em] uppercase mb-4 block">
                        OPINIONES DE CLIENTES
                    </span>
                    <h2 id="testimonials-heading" className="text-4xl md:text-5xl font-extrabold text-brand-secondary mb-6 tracking-tight uppercase">
                        LO QUE DICEN NUESTROS{" "}
                        <span className="text-brand-primary font-serif normal-case tracking-normal italic">
                            Clientes
                        </span>
                    </h2>
                    <p className="text-brand-muted font-medium">
                        La satisfacción de nuestros clientes en Sevilla es nuestra mayor garantía.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex gap-1">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={16}
                                            className="fill-brand-primary text-brand-primary"
                                        />
                                    ))}
                                </div>
                                <Quote
                                    size={24}
                                    className="text-brand-primary/20 group-hover:text-brand-primary/50 transition-colors"
                                />
                            </div>
                            <p className="text-brand-muted text-sm leading-relaxed mb-6 font-medium">
                                &ldquo;{testimonial.text}&rdquo;
                            </p>
                            <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
                                <div>
                                    <p className="font-bold text-brand-secondary text-sm">
                                        {testimonial.name}
                                    </p>
                                    <p className="text-[10px] uppercase font-bold text-brand-primary tracking-widest">
                                        {testimonial.service}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
