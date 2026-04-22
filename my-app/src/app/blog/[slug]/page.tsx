import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { siteConfig } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import CTASection from "@/components/home/CTASection";

const articles: Record<string, { title: string; content: string; date: string; category: string; readTime: string; metaDescription: string }> = {
    "como-elegir-fontanero-sevilla": {
        title: "Cómo Elegir un Buen Fontanero en Sevilla: Guía Completa",
        date: "2025-06-15",
        category: "Fontanería",
        readTime: "5 min de lectura",
        metaDescription: "Consejos profesionales para elegir un fontanero fiable en Sevilla. Qué preguntar, precios orientativos y señales de un buen profesional.",
        content: `Encontrar un fontanero profesional y de confianza en Sevilla puede ser una tarea complicada, especialmente cuando se trata de una urgencia. En esta guía te compartimos los mejores consejos basados en nuestra experiencia de más de 20 años en el sector.

## 1. Busca referencias y opiniones

El boca a boca sigue siendo una de las mejores formas de encontrar un buen fontanero. Pregunta a familiares, amigos y vecinos. También consulta opiniones en Google y redes sociales. Un fontanero con buenas reseñas y una respuesta profesional a las opiniones negativas suele ser una buena señal.

## 2. Verifica que tenga seguro de responsabilidad civil

Un fontanero profesional debe contar con un seguro de responsabilidad civil que cubra posibles daños durante el trabajo. No tengas miedo de pedirlo, un profesional serio lo tendrá sin problema.

## 3. Pide presupuesto por escrito

Antes de iniciar cualquier trabajo, solicita un presupuesto detallado por escrito. Debe incluir: materiales, mano de obra, IVA, plazo de ejecución y condiciones de garantía. Desconfía de quien no quiera darte un presupuesto cerrado.

## 4. Comprueba su disponibilidad

Si necesitas un fontanero para urgencias, asegúrate de que ofrece servicio 24 horas real. En Servicios Andalusí disponemos de fontaneros de guardia las 24 horas, los 365 días del año en Sevilla capital.

## 5. Pregunta por la garantía

Todo trabajo de fontanería profesional debe incluir una garantía mínima. Pregunta cuánto tiempo cubre la garantía y qué incluye exactamente. En nuestro caso, todos los trabajos incluyen garantía de mano de obra y los materiales vienen con la garantía del fabricante.

Si necesitas un fontanero de confianza en Sevilla, no dudes en contactar con Servicios Andalusí. Más de 20 años de experiencia nos avalan.`,
    },
    "guia-reforma-bano-sevilla": {
        title: "Guía Completa para Reformar tu Baño en Sevilla",
        date: "2025-06-01",
        category: "Reformas",
        readTime: "7 min de lectura",
        metaDescription: "Guía profesional para reformar tu baño en Sevilla. Precios, materiales, plazos y consejos de expertos en reformas integrales.",
        content: `Reformar el baño es una de las inversiones más rentables que puedes hacer en tu vivienda. En esta guía te contamos todo lo que necesitas saber antes de embarcarte en una reforma de baño en Sevilla.

## ¿Cuánto cuesta reformar un baño en Sevilla?

El precio de una reforma de baño en Sevilla varía según el tamaño y los materiales elegidos. Como referencia orientativa:

- **Reforma básica** (cambio de sanitarios y azulejos): 3.000€ - 5.000€
- **Reforma media** (redistribución parcial): 5.000€ - 8.000€
- **Reforma completa** (redistribución total con materiales premium): 8.000€ - 15.000€

## ¿Cuánto tiempo tarda una reforma de baño?

Un baño estándar se puede reformar completamente en 7 a 15 días laborables, dependiendo de si hay cambios en las instalaciones de fontanería y electricidad.

## Materiales recomendados

Para baños en Sevilla recomendamos porcelánicos de gran formato que facilitan la limpieza y dan sensación de amplitud. Los acabados en tonos claros y neutros son los más demandados actualmente.

## Consejos profesionales

1. **Planifica la iluminación**: Un buen diseño de iluminación marca la diferencia
2. **Ventilación**: Fundamental en Sevilla por la humedad. Considera un extractor de calidad
3. **Impermeabilización**: No escatimes en la impermeabilización de la ducha
4. **Grifería**: Invierte en grifería de calidad, marcará la diferencia a largo plazo

¿Quieres reformar tu baño en Sevilla? En Servicios Andalusí te asesoramos sin compromiso.`,
    },
    "problemas-electricos-hogar": {
        title: "Los 5 Problemas Eléctricos Más Comunes en el Hogar",
        date: "2025-05-20",
        category: "Electricidad",
        readTime: "4 min de lectura",
        metaDescription: "Descubre los problemas eléctricos más frecuentes en viviendas y cuándo debes llamar a un electricista profesional en Sevilla.",
        content: `Los problemas eléctricos en el hogar pueden ser molestos e incluso peligrosos. Conocer los más habituales te ayudará a saber cuándo actuar y cuándo llamar a un electricista profesional.

## 1. Saltan los diferenciales continuamente

Si el diferencial de tu cuadro eléctrico salta con frecuencia, puede indicar una fuga de corriente en algún electrodoméstico o en la instalación. No es normal y debe revisarse por un electricista.

## 2. Enchufes que no funcionan

Un enchufe que deja de funcionar puede deberse a un cable suelto, un cortocircuito localizado o un fallo en el circuito. Nunca intentes repararlo tú mismo si no tienes formación eléctrica.

## 3. Luces que parpadean

El parpadeo de luces puede indicar problemas en los empalmes, en el neutro de la instalación o en la acometida. Si es generalizado en toda la casa, llama a un electricista urgente.

## 4. El cuadro eléctrico está obsoleto

Muchas viviendas en Sevilla tienen cuadros eléctricos de más de 30 años que no cumplen la normativa actual. Actualizar el cuadro eléctrico mejora la seguridad y puede ser necesario para aumentar la potencia contratada.

## 5. Olor a quemado sin fuente visible

Si percibes olor a quemado procedente de un enchufe, interruptor o del cuadro eléctrico, desconecta inmediatamente y llama a un electricista de urgencia. Esto puede indicar un sobrecalentamiento peligroso.

Si tienes cualquier problema eléctrico en tu hogar en Sevilla, contacta con Servicios Andalusí. Nuestros electricistas están disponibles 24 horas.`,
    },
};

export async function generateStaticParams() {
    return Object.keys(articles).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const article = articles[slug];
    if (!article) return {};
    return {
        title: article.title,
        description: article.metaDescription,
        alternates: { canonical: `${siteConfig.url}/blog/${slug}` },
        openGraph: {
            title: article.title,
            description: article.metaDescription,
            url: `${siteConfig.url}/blog/${slug}`,
            type: "article",
        },
    };
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const article = articles[slug];
    if (!article) notFound();

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: article.title,
        datePublished: article.date,
        author: { "@type": "Organization", name: siteConfig.name },
        publisher: {
            "@type": "Organization",
            name: siteConfig.name,
            url: siteConfig.url,
        },
        mainEntityOfPage: `${siteConfig.url}/blog/${slug}`,
    };

    const paragraphs = article.content.split("\n\n");

    return (
        <main className="pt-32 pb-0 min-h-screen">
            <JsonLd data={articleSchema} />
            <BreadcrumbSchema
                items={[
                    { name: "Blog", href: "/blog" },
                    { name: article.title, href: `/blog/${slug}` },
                ]}
            />
            <div className="container mx-auto px-4 mb-20">
                <Breadcrumb
                    items={[
                        { name: "Blog", href: "/blog" },
                        { name: article.title },
                    ]}
                />

                <article className="max-w-3xl mx-auto">
                    <header className="mb-12">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-primary bg-brand-primary/10 px-3 py-1 rounded-full">
                                {article.category}
                            </span>
                            <span className="flex items-center gap-1 text-xs text-brand-muted font-medium">
                                <Calendar size={12} />
                                {new Date(article.date).toLocaleDateString("es-ES", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                            </span>
                            <span className="flex items-center gap-1 text-xs text-brand-muted font-medium">
                                <Clock size={12} />
                                {article.readTime}
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-extrabold text-brand-secondary leading-tight">
                            {article.title}
                        </h1>
                    </header>

                    <div className="prose prose-lg max-w-none">
                        {paragraphs.map((paragraph, i) => {
                            if (paragraph.startsWith("## ")) {
                                return (
                                    <h2
                                        key={i}
                                        className="text-2xl font-extrabold text-brand-secondary mt-10 mb-4"
                                    >
                                        {paragraph.replace("## ", "")}
                                    </h2>
                                );
                            }
                            if (paragraph.startsWith("- ")) {
                                const items = paragraph.split("\n").filter((l) => l.startsWith("- "));
                                return (
                                    <ul key={i} className="list-disc pl-6 space-y-2 mb-6 text-gray-600">
                                        {items.map((item, j) => (
                                            <li key={j} className="font-medium">
                                                {item.replace("- ", "").replace(/\*\*(.*?)\*\*/g, "$1")}
                                            </li>
                                        ))}
                                    </ul>
                                );
                            }
                            if (paragraph.match(/^\d+\./)) {
                                const items = paragraph.split("\n").filter((l) => l.match(/^\d+\./));
                                return (
                                    <ol key={i} className="list-decimal pl-6 space-y-2 mb-6 text-gray-600">
                                        {items.map((item, j) => (
                                            <li key={j} className="font-medium">
                                                {item.replace(/^\d+\.\s*/, "").replace(/\*\*(.*?)\*\*/g, "$1")}
                                            </li>
                                        ))}
                                    </ol>
                                );
                            }
                            return (
                                <p
                                    key={i}
                                    className="text-gray-600 leading-relaxed font-medium mb-6"
                                >
                                    {paragraph}
                                </p>
                            );
                        })}
                    </div>

                    <div className="mt-12 pt-8 border-t border-gray-200">
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 text-brand-primary font-bold hover:gap-3 transition-all"
                        >
                            <ArrowLeft size={16} />
                            Volver al blog
                        </Link>
                    </div>
                </article>
            </div>

            <CTASection />
        </main>
    );
}
