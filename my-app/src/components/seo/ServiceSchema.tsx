import { siteConfig } from "@/lib/seo";
import { JsonLd } from "./JsonLd";

interface ServiceSchemaProps {
    name: string;
    description: string;
    url: string;
    image?: string;
}

export function ServiceSchema({
    name,
    description,
    url,
    image,
}: ServiceSchemaProps) {
    const data = {
        "@context": "https://schema.org",
        "@type": "Service",
        name,
        description,
        url: `${siteConfig.url}${url}`,
        provider: {
            "@id": `${siteConfig.url}/#organization`,
        },
        areaServed: {
            "@type": "City",
            name: "Sevilla",
            sameAs: "https://es.wikipedia.org/wiki/Sevilla",
        },
        ...(image && { image }),
    };

    return <JsonLd data={data} />;
}
