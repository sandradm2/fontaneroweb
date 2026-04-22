"use client";

import { useState } from "react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";

interface FormData {
    nombre: string;
    telefono: string;
    email: string;
    servicio: string;
    descripcion: string;
    zona: string;
    privacidad: boolean;
}

export default function PresupuestoForm() {
    const [formData, setFormData] = useState<FormData>({
        nombre: "",
        telefono: "",
        email: "",
        servicio: "",
        descripcion: "",
        zona: "",
        privacidad: false,
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

    const validate = (): boolean => {
        const newErrors: Partial<Record<keyof FormData, string>> = {};
        if (!formData.nombre.trim()) newErrors.nombre = "El nombre es obligatorio";
        if (!formData.telefono.trim()) newErrors.telefono = "El teléfono es obligatorio";
        else if (!/^\d{9,}$/.test(formData.telefono.replace(/\s/g, "")))
            newErrors.telefono = "Introduce un teléfono válido";
        if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
            newErrors.email = "Introduce un email válido";
        if (!formData.servicio) newErrors.servicio = "Selecciona un servicio";
        if (!formData.descripcion.trim())
            newErrors.descripcion = "Describe brevemente el trabajo";
        if (!formData.privacidad)
            newErrors.privacidad = "Debes aceptar la política de privacidad";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;
        setLoading(true);

        // Formatear mensaje para WhatsApp
        const serviceName = {
            reformas: "Reformas Integrales",
            fontaneria: "Fontanería",
            electricidad: "Electricidad",
            urgencia: "Urgencia 24h",
            mantenimiento: "Mantenimiento Comunidades",
            carpinteria: "Carpintería",
            impermeabilizacion: "Impermeabilización",
            climatizacion: "Climatización",
            otro: "Otro"
        }[formData.servicio] || formData.servicio;

        let mensaje = `*SOLICITUD DE PRESUPUESTO*\n\n`;
        mensaje += `👤 *Nombre:* ${formData.nombre}\n`;
        mensaje += `📞 *Teléfono:* ${formData.telefono}\n`;
        if (formData.email) mensaje += `📧 *Email:* ${formData.email}\n`;
        mensaje += `🔧 *Servicio:* ${serviceName}\n`;
        if (formData.zona) mensaje += `📍 *Zona:* ${formData.zona}\n`;
        mensaje += `\n📝 *Descripción del trabajo:*\n${formData.descripcion}`;

        // Codificar el mensaje para URL
        const mensajeCodificado = encodeURIComponent(mensaje);

        // Número de WhatsApp (sin el + y sin guiones)
        const numeroWhatsApp = "34681269974";

        // Crear URL de WhatsApp
        const whatsappURL = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;

        // Pequeña pausa para mostrar el estado de carga
        await new Promise((resolve) => setTimeout(resolve, 500));

        // Redirigir a WhatsApp
        window.open(whatsappURL, '_blank');

        // Limpiar formulario y mostrar mensaje de éxito
        setSubmitted(true);
        setLoading(false);
    };

    if (submitted) {
        return (
            <div className="bg-white p-12 rounded-3xl border border-gray-100 shadow-xl text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} className="text-green-600" />
                </div>
                <h2 className="text-2xl font-extrabold text-brand-secondary mb-4">
                    ¡Tu solicitud se ha enviado a WhatsApp!
                </h2>
                <p className="text-brand-muted font-medium mb-6">
                    Hemos abierto WhatsApp con tu solicitud de presupuesto ya preparada.
                    Solo tienes que hacer clic en enviar para que la recibamos.
                </p>
                <p className="text-sm text-brand-muted">
                    Si no se abrió WhatsApp automáticamente, llámanos al{" "}
                    <a
                        href="tel:+34681269974"
                        className="text-brand-primary font-bold"
                    >
                        681 269 974
                    </a>
                </p>
            </div>
        );
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-xl"
            noValidate
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Nombre */}
                <div>
                    <label
                        htmlFor="presupuesto-nombre"
                        className="block text-xs font-bold uppercase tracking-widest text-brand-secondary mb-2"
                    >
                        Nombre *
                    </label>
                    <input
                        id="presupuesto-nombre"
                        type="text"
                        value={formData.nombre}
                        onChange={(e) =>
                            setFormData({ ...formData, nombre: e.target.value })
                        }
                        className={`w-full px-4 py-3 rounded-xl border ${errors.nombre ? "border-red-400" : "border-gray-200"
                            } focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all font-medium`}
                        placeholder="Tu nombre completo"
                    />
                    {errors.nombre && (
                        <p className="text-red-500 text-xs mt-1">{errors.nombre}</p>
                    )}
                </div>

                {/* Teléfono */}
                <div>
                    <label
                        htmlFor="presupuesto-telefono"
                        className="block text-xs font-bold uppercase tracking-widest text-brand-secondary mb-2"
                    >
                        Teléfono *
                    </label>
                    <input
                        id="presupuesto-telefono"
                        type="tel"
                        value={formData.telefono}
                        onChange={(e) =>
                            setFormData({ ...formData, telefono: e.target.value })
                        }
                        className={`w-full px-4 py-3 rounded-xl border ${errors.telefono ? "border-red-400" : "border-gray-200"
                            } focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all font-medium`}
                        placeholder="Ej: 600 123 456"
                    />
                    {errors.telefono && (
                        <p className="text-red-500 text-xs mt-1">{errors.telefono}</p>
                    )}
                </div>

                {/* Email */}
                <div>
                    <label
                        htmlFor="presupuesto-email"
                        className="block text-xs font-bold uppercase tracking-widest text-brand-secondary mb-2"
                    >
                        Email
                    </label>
                    <input
                        id="presupuesto-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                        }
                        className={`w-full px-4 py-3 rounded-xl border ${errors.email ? "border-red-400" : "border-gray-200"
                            } focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all font-medium`}
                        placeholder="tu@email.com"
                    />
                    {errors.email && (
                        <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                    )}
                </div>

                {/* Servicio */}
                <div>
                    <label
                        htmlFor="presupuesto-servicio"
                        className="block text-xs font-bold uppercase tracking-widest text-brand-secondary mb-2"
                    >
                        Tipo de servicio *
                    </label>
                    <select
                        id="presupuesto-servicio"
                        value={formData.servicio}
                        onChange={(e) =>
                            setFormData({ ...formData, servicio: e.target.value })
                        }
                        className={`w-full px-4 py-3 rounded-xl border ${errors.servicio ? "border-red-400" : "border-gray-200"
                            } focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all font-medium bg-white`}
                    >
                        <option value="">Selecciona un servicio</option>
                        <option value="reformas">Reformas Integrales</option>
                        <option value="fontaneria">Fontanería</option>
                        <option value="electricidad">Electricidad</option>
                        <option value="urgencia">Urgencia 24h</option>
                        <option value="mantenimiento">Mantenimiento Comunidades</option>
                        <option value="carpinteria">Carpintería</option>
                        <option value="impermeabilizacion">Impermeabilización</option>
                        <option value="climatizacion">Climatización</option>
                        <option value="otro">Otro</option>
                    </select>
                    {errors.servicio && (
                        <p className="text-red-500 text-xs mt-1">{errors.servicio}</p>
                    )}
                </div>
            </div>

            {/* Zona */}
            <div className="mb-6">
                <label
                    htmlFor="presupuesto-zona"
                    className="block text-xs font-bold uppercase tracking-widest text-brand-secondary mb-2"
                >
                    Zona / Barrio de Sevilla
                </label>
                <input
                    id="presupuesto-zona"
                    type="text"
                    value={formData.zona}
                    onChange={(e) =>
                        setFormData({ ...formData, zona: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all font-medium"
                    placeholder="Ej: Triana, Nervión, Centro..."
                />
            </div>

            {/* Descripción */}
            <div className="mb-6">
                <label
                    htmlFor="presupuesto-descripcion"
                    className="block text-xs font-bold uppercase tracking-widest text-brand-secondary mb-2"
                >
                    Descripción del trabajo *
                </label>
                <textarea
                    id="presupuesto-descripcion"
                    value={formData.descripcion}
                    onChange={(e) =>
                        setFormData({ ...formData, descripcion: e.target.value })
                    }
                    rows={4}
                    className={`w-full px-4 py-3 rounded-xl border ${errors.descripcion ? "border-red-400" : "border-gray-200"
                        } focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all font-medium resize-none`}
                    placeholder="Describe brevemente qué necesitas..."
                />
                {errors.descripcion && (
                    <p className="text-red-500 text-xs mt-1">{errors.descripcion}</p>
                )}
            </div>

            {/* Privacidad */}
            <div className="mb-8">
                <label className="flex items-start gap-3 cursor-pointer">
                    <input
                        type="checkbox"
                        checked={formData.privacidad}
                        onChange={(e) =>
                            setFormData({ ...formData, privacidad: e.target.checked })
                        }
                        className="mt-1 w-4 h-4 rounded border-gray-300 text-brand-primary focus:ring-brand-primary/20"
                    />
                    <span className="text-xs text-brand-muted leading-relaxed">
                        He leído y acepto la{" "}
                        <a
                            href="/politica-privacidad"
                            target="_blank"
                            className="text-brand-primary font-bold hover:underline"
                        >
                            Política de Privacidad
                        </a>
                        . *
                    </span>
                </label>
                {errors.privacidad && (
                    <p className="text-red-500 text-xs mt-1">{errors.privacidad}</p>
                )}
            </div>

            <button
                type="submit"
                disabled={loading}
                className="w-full bg-brand-primary text-brand-secondary font-black py-4 px-8 rounded-2xl shadow-xl shadow-brand-primary/30 hover:bg-brand-secondary hover:text-white transition-all flex items-center justify-center gap-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {loading ? (
                    <>
                        <Loader2 size={20} className="animate-spin" />
                        Enviando...
                    </>
                ) : (
                    <>
                        <Send size={20} />
                        ENVIAR SOLICITUD
                    </>
                )}
            </button>
        </form>
    );
}
