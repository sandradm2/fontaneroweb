import { siteConfig } from "@/lib/seo";
import { JsonLd } from "./JsonLd";

interface BreadcrumbItem {
    name: string;
    href: string;
}

export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
    const data = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Inicio",
                item: siteConfig.url,
            },
            ...items.map((item, index) => ({
                "@type": "ListItem",
                position: index + 2,
                name: item.name,
                item: `${siteConfig.url}${item.href}`,
            })),
        ],
    };

    return <JsonLd data={data} />;
}
