"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
    question: string;
    answer: string;
}

export default function FAQSection({
    faqs,
    title = "Preguntas Frecuentes",
    id = "faq",
}: {
    faqs: FAQItem[];
    title?: string;
    id?: string;
}) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24 bg-brand-light" aria-labelledby={`${id}-heading`}>
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-brand-primary font-bold text-xs tracking-[0.3em] uppercase mb-4 block">
                        RESOLVEMOS TUS DUDAS
                    </span>
                    <h2 id={`${id}-heading`} className="text-4xl md:text-5xl font-extrabold text-brand-secondary mb-6 tracking-tight">
                        {title}
                    </h2>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm"
                        >
                            <button
                                className="w-full flex items-center justify-between p-6 text-left font-bold text-brand-secondary hover:text-brand-primary transition-colors"
                                onClick={() =>
                                    setOpenIndex(openIndex === index ? null : index)
                                }
                                aria-expanded={openIndex === index}
                                aria-controls={`faq-answer-${id}-${index}`}
                            >
                                <span className="pr-4">{faq.question}</span>
                                <ChevronDown
                                    size={20}
                                    className={`flex-shrink-0 text-brand-primary transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                        }`}
                                />
                            </button>
                            <div
                                id={`faq-answer-${id}-${index}`}
                                className={`overflow-hidden transition-all duration-300 ${openIndex === index
                                        ? "max-h-96 opacity-100"
                                        : "max-h-0 opacity-0"
                                    }`}
                                role="region"
                                aria-labelledby={`faq-question-${id}-${index}`}
                            >
                                <p className="px-6 pb-6 text-brand-muted text-sm leading-relaxed font-medium">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
