import { Metadata } from "next";
import { siteConfig } from "@/lib/seo";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import PresupuestoForm from "@/components/forms/PresupuestoForm";

export const metadata: Metadata = {
    title: "Solicitar Presupuesto Gratis | Sin Compromiso",
    description:
        "Solicita tu presupuesto gratuito y sin compromiso para reformas, fontanería o electricidad en Sevilla. Respuesta en menos de 2 horas.",
    alternates: {
        canonical: `${siteConfig.url}/presupuesto`,
    },
};

export default function PresupuestoPage() {
    return (
        <main className="pt-32 pb-20 bg-brand-light min-h-screen">
            <BreadcrumbSchema
                items={[{ name: "Presupuesto", href: "/presupuesto" }]}
            />
            <div className="container mx-auto px-4">
                <Breadcrumb items={[{ name: "Presupuesto" }]} />

                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-brand-primary font-bold text-xs tracking-[0.3em] uppercase mb-4 block">
                            CONTACTA CON NOSOTROS
                        </span>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-brand-secondary mb-6 tracking-tight">
                            Solicita Presupuesto{" "}
                            <span className="text-brand-primary font-serif normal-case italic">
                                Gratis
                            </span>{" "}
                            — Sin Compromiso
                        </h1>
                        <p className="text-brand-muted font-medium max-w-2xl mx-auto">
                            Rellena el formulario y te contactaremos en menos de 2 horas.
                            También puedes llamarnos directamente al{" "}
                            <a
                                href={`tel:${siteConfig.phone}`}
                                className="text-brand-primary font-bold hover:underline"
                            >
                                {siteConfig.phoneDisplay}
                            </a>
                            .
                        </p>
                    </div>

                    <PresupuestoForm />
                </div>
            </div>
        </main>
    );
}
