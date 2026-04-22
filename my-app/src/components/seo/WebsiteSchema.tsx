import { siteConfig } from "@/lib/seo";
import { JsonLd } from "./JsonLd";

export function WebsiteSchema() {
    const data = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: siteConfig.name,
        url: siteConfig.url,
        potentialAction: {
            "@type": "SearchAction",
            target: `${siteConfig.url}/blog?q={search_term_string}`,
            "query-input": "required name=search_term_string",
        },
    };

    return <JsonLd data={data} />;
}
