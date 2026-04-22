export const siteConfig = {
    name: "Servicios Andalusí",
    url: "https://www.serviciosandalusi.com",
    description:
        "Empresa líder en Reformas Integrales, Fontanería y Electricidad en Sevilla. Especialistas en rehabilitación de viviendas, boletines eléctricos, detección de fugas sin obra y desatascos 24h. Electricistas autorizados.",
    phone: "+34681269974",
    phoneDisplay: "681 269 974",

    email: "serviciosandalusi@gmail.com",
    email2: "construccionesandalusi@gmail.com",
    whatsapp: "https://wa.me/34681269974",
    owner: "Jose Manuel Pozo Copado",
    nif: "28791833L",
    address: {
        street: "Urb. La Torrecilla, 45A",
        city: "Carmona",
        province: "Sevilla",
        region: "Andalucía",
        postalCode: "41410",
        country: "ES",
    },
    serviceArea: "Sevilla capital",
    geo: {
        latitude: 37.3891,
        longitude: -5.9845,
    },
    social: {
        instagram: "https://www.instagram.com/serviciosandalusi/",
        tiktok: "https://www.tiktok.com/@serviciosandalusi",
    },
    images: {
        logo: "https://iili.io/fZSUkZB.png",
        logoText: "https://iili.io/fZU9CXt.png",
        logoFooter: "https://iili.io/fZSUejV.png",
        hero: "https://iili.io/fLNc707.jpg",
        heroWorker: "https://iili.io/ftdkQmg.jpg",
        ogImage: "/og-image.jpg",
    },
};

export type ServicePageConfig = {
    slug: string;
    title: string;
    h1: string;
    metaTitle: string;
    metaDescription: string;
    shortDescription: string;
    longDescription: string;
    features: string[];
    faqs: { question: string; answer: string }[];
    iconName: string;
    image: string;
    breadcrumbName: string;
};
