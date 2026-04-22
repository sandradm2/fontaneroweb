
import { MetadataRoute } from "next";
import { serviceSlugs } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://www.serviciosandalusi.com";

    // Generar entradas dinámicas para los nuevos servicios nicho
    const dynamicServices = serviceSlugs.map((slug) => ({
        url: `${baseUrl}/${slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.9,
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1.0,
        },
        // Inyectamos los servicios dinámicos (Boletines, Fugas, Locales)
        ...dynamicServices,
        // Mantener las páginas estáticas principales
        {
            url: `${baseUrl}/reformas-integrales-sevilla`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/fontanero-sevilla-24-horas`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/electricista-sevilla-24-horas`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/urgencias-24-horas-sevilla`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/mantenimiento-comunidades-sevilla`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/presupuesto`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/sobre-nosotros`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.7,
        },
        // Blog posts estáticos (se podrían hacer dinámicos en el futuro)
        {
            url: `${baseUrl}/blog/como-elegir-fontanero-sevilla`,
            lastModified: new Date("2025-06-15"),
            changeFrequency: "yearly",
            priority: 0.6,
        },
        {
            url: `${baseUrl}/blog/guia-reforma-bano-sevilla`,
            lastModified: new Date("2025-06-01"),
            changeFrequency: "yearly",
            priority: 0.6,
        },
        {
            url: `${baseUrl}/blog/problemas-electricos-hogar`,
            lastModified: new Date("2025-05-20"),
            changeFrequency: "yearly",
            priority: 0.6,
        },
        // Legales
        {
            url: `${baseUrl}/politica-privacidad`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.3,
        },
        {
            url: `${baseUrl}/aviso-legal`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.3,
        },
    ];
}
