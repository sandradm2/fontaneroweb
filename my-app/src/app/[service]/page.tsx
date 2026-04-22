
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { services, serviceSlugs } from "@/lib/services"; // Correct path to services config
import ServicePageHero from "@/components/services/ServicePageHero";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";
import UrgencyBanner from "@/components/home/UrgencyBanner";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import { FAQSchema } from "@/components/seo/FAQSchema";

// Generate static params for all defined services
export async function generateStaticParams() {
    return serviceSlugs.map((slug) => ({
        service: slug,
    }));
}

// Generate dynamic metadata for each service page
export async function generateMetadata({
    params,
}: {
    params: { service: string };
}): Promise<Metadata> {
    // Await params if needed in future Next.js versions, currently params is object
    const slug = params.service;
    const service = services[slug];

    if (!service) {
        return {
            title: "Servicio no encontrado",
        };
    }

    return {
        title: service.metaTitle,
        description: service.metaDescription,
        alternates: {
            canonical: `https://www.serviciosandalusi.com/${slug}`,
        },
        openGraph: {
            title: service.metaTitle,
            description: service.metaDescription,
            url: `https://www.serviciosandalusi.com/${slug}`,
            type: "website",
        },
    };
}

export default function ServicePage({
    params,
}: {
    params: { service: string };
}) {
    const slug = params.service;
    const service = services[slug];

    if (!service) {
        return notFound();
    }

    return (
        <main>
            <FAQSchema faqs={service.faqs} />

            <ServicePageHero
                title={service.h1}
                description={service.shortDescription}
                image={service.image}
                benefits={service.features.slice(0, 3)}
            />

            <ServiceFeatures features={service.features} title="¿Por qué elegirnos?" />

            {/* Long Description Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto prose prose-lg prose-amber">
                        <h2 className="text-3xl font-bold text-center mb-8 text-brand-secondary">
                            {service.title.split("|")[0]}
                        </h2>
                        <p className="text-gray-700 leading-relaxed text-justify">
                            {service.longDescription}
                        </p>
                    </div>
                </div>
            </section>

            <UrgencyBanner />

            <TestimonialsSection />

            <FAQSection faqs={service.faqs} />

            <CTASection />
        </main>
    );
}
