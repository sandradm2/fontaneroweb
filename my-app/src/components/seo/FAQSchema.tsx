import { JsonLd } from "./JsonLd";

interface FAQItem {
    question: string;
    answer: string;
}

export function FAQSchema({ faqs }: { faqs: FAQItem[] }) {
    const data = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        })),
    };

    return <JsonLd data={data} />;
}
