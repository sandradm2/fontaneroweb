import { Metadata } from "next";
import { SERVICES } from "@/lib/constants";
import { siteConfig } from "@/lib/seo";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";

const service = SERVICES.find(
    (s) => s.slug === "electricista-sevilla-24-horas"
)!;

export const metadata: Metadata = {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
        canonical: `${siteConfig.url}/${service.slug}`,
    },
    openGraph: {
        title: `${service.metaTitle} | ${siteConfig.name}`,
        description: service.metaDescription,
        url: `${siteConfig.url}/${service.slug}`,
        images: [{ url: service.image, width: 1200, height: 630 }],
    },
};

export default function ElectricistaPage() {
    return <ServicePageTemplate service={service} />;
}
