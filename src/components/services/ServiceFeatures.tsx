
import { CheckCircle2 } from "lucide-react";

interface ServiceFeaturesProps {
    features: string[];
    title: string;
}

export default function ServiceFeatures({ features, title }: ServiceFeaturesProps) {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-brand-secondary">
                        {title}
                    </h2>
                    <div className="w-20 h-1 bg-brand-primary mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className="flex items-start gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-brand-primary/30 hover:shadow-lg transition-all duration-300 group"
                        >
                            <div className="bg-brand-primary/10 p-3 rounded-xl group-hover:bg-brand-primary transition-colors duration-300">
                                <CheckCircle2
                                    size={24}
                                    className="text-brand-primary group-hover:text-white transition-colors duration-300"
                                />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">
                                    {feature}
                                </h3>
                                <p className="text-sm text-gray-600">
                                    Servicio garantizado por profesionales cualificados.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
