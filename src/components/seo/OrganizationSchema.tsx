import { siteConfig } from "@/lib/seo";
import { JsonLd } from "./JsonLd";

export function OrganizationSchema() {
    const data = {
        "@context": "https://schema.org",
        "@type": "HomeAndConstructionBusiness",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        description: siteConfig.description,
        url: siteConfig.url,
        telephone: siteConfig.phone,
        email: siteConfig.email,
        logo: `${siteConfig.url}/logo.png`,
        image: `${siteConfig.url}/og-image.jpg`,
        address: {
            "@type": "PostalAddress",
            streetAddress: siteConfig.address.street,
            addressLocality: siteConfig.address.city,
            addressRegion: siteConfig.address.region,
            postalCode: siteConfig.address.postalCode,
            addressCountry: siteConfig.address.country,
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: siteConfig.geo.latitude,
            longitude: siteConfig.geo.longitude,
        },
        openingHoursSpecification: [
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                ],
                opens: "00:00",
                closes: "23:59",
            },
        ],
        areaServed: [
            {
                "@type": "City",
                name: "Sevilla",
                sameAs: "https://es.wikipedia.org/wiki/Sevilla",
            },
        ],
        priceRange: "€€",
        currenciesAccepted: "EUR",
        paymentAccepted: "Efectivo, Tarjeta, Transferencia",
        sameAs: [siteConfig.social.instagram, siteConfig.social.facebook],
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Servicios de Reformas e Instalaciones",
            itemListElement: [
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Reformas Integrales",
                        description:
                            "Reformas completas de viviendas y locales comerciales en Sevilla",
                        url: `${siteConfig.url}/reformas-integrales-sevilla`,
                        areaServed: { "@type": "City", name: "Sevilla" },
                        provider: { "@id": `${siteConfig.url}/#organization` },
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Fontanería 24 Horas",
                        description:
                            "Servicio de fontanería urgente 24 horas en Sevilla capital",
                        url: `${siteConfig.url}/fontanero-sevilla-24-horas`,
                        areaServed: { "@type": "City", name: "Sevilla" },
                        provider: { "@id": `${siteConfig.url}/#organization` },
                        availableChannel: {
                            "@type": "ServiceChannel",
                            serviceType: "Urgencias 24h",
                        },
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Electricidad 24 Horas",
                        description:
                            "Electricistas urgentes 24 horas en Sevilla capital",
                        url: `${siteConfig.url}/electricista-sevilla-24-horas`,
                        areaServed: { "@type": "City", name: "Sevilla" },
                        provider: { "@id": `${siteConfig.url}/#organization` },
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Mantenimiento de Comunidades",
                        description:
                            "Mantenimiento integral para comunidades de vecinos en Sevilla",
                        url: `${siteConfig.url}/mantenimiento-comunidades-sevilla`,
                        areaServed: { "@type": "City", name: "Sevilla" },
                        provider: { "@id": `${siteConfig.url}/#organization` },
                    },
                },
            ],
        },
    };

    return <JsonLd data={data} />;
}
