import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { siteConfig } from "@/lib/seo";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
    title: "Blog | Consejos de Reformas, Fontanería y Electricidad",
    description:
        "Blog de Servicios Andalusí. Consejos profesionales sobre reformas, fontanería, electricidad y mantenimiento del hogar en Sevilla.",
    alternates: {
        canonical: `${siteConfig.url}/blog`,
    },
};

const blogPosts = [
    {
        slug: "como-elegir-fontanero-sevilla",
        title: "Cómo Elegir un Buen Fontanero en Sevilla: Guía Completa",
        excerpt:
            "Consejos para seleccionar un fontanero profesional y de confianza en Sevilla. Qué preguntar, qué evitar y cómo identificar un buen profesional.",
        date: "2025-06-15",
        category: "Fontanería",
    },
    {
        slug: "guia-reforma-bano-sevilla",
        title: "Guía Completa para Reformar tu Baño en Sevilla",
        excerpt:
            "Todo lo que necesitas saber antes de reformar tu baño: presupuestos, materiales, plazos y consejos de nuestros profesionales.",
        date: "2025-06-01",
        category: "Reformas",
    },
    {
        slug: "problemas-electricos-hogar",
        title: "Los 5 Problemas Eléctricos Más Comunes en el Hogar",
        excerpt:
            "Identifica los problemas eléctricos más frecuentes y aprende cuándo debes llamar a un electricista profesional.",
        date: "2025-05-20",
        category: "Electricidad",
    },
];

export default function BlogPage() {
    return (
        <main className="pt-32 pb-20 bg-brand-light min-h-screen">
            <BreadcrumbSchema items={[{ name: "Blog", href: "/blog" }]} />
            <div className="container mx-auto px-4">
                <Breadcrumb items={[{ name: "Blog" }]} />

                <div className="text-center mb-16">
                    <span className="text-brand-primary font-bold text-xs tracking-[0.3em] uppercase mb-4 block">
                        NUESTRO BLOG
                    </span>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-brand-secondary mb-6 tracking-tight">
                        Consejos de{" "}
                        <span className="text-brand-primary font-serif normal-case italic">
                            Profesionales
                        </span>
                    </h1>
                    <p className="text-brand-muted font-medium max-w-2xl mx-auto">
                        Artículos y guías sobre reformas, fontanería, electricidad y
                        mantenimiento del hogar en Sevilla.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {blogPosts.map((post) => (
                        <article
                            key={post.slug}
                            className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 group"
                        >
                            <div className="h-48 bg-gradient-to-br from-brand-primary/10 to-brand-secondary/5 flex items-center justify-center">
                                <span className="text-brand-primary/30 font-serif text-6xl italic">
                                    A
                                </span>
                            </div>
                            <div className="p-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-primary bg-brand-primary/10 px-3 py-1 rounded-full">
                                        {post.category}
                                    </span>
                                    <span className="flex items-center gap-1 text-[10px] text-brand-muted font-medium">
                                        <Calendar size={10} />
                                        {new Date(post.date).toLocaleDateString("es-ES", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        })}
                                    </span>
                                </div>
                                <h2 className="text-lg font-extrabold text-brand-secondary mb-3 leading-tight group-hover:text-brand-primary transition-colors">
                                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                                </h2>
                                <p className="text-brand-muted text-sm leading-relaxed mb-6 font-medium">
                                    {post.excerpt}
                                </p>
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="inline-flex items-center gap-2 text-brand-primary font-bold text-sm hover:gap-3 transition-all"
                                >
                                    Leer más
                                    <ArrowRight size={14} />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </main>
    );
}
