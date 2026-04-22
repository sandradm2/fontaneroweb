import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { siteConfig } from "@/lib/seo";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
    title: "Política de Privacidad",
    description: `Política de privacidad de ${siteConfig.name}. Información sobre el tratamiento de datos personales.`,
    alternates: { canonical: `${siteConfig.url}/politica-privacidad` },
    robots: { index: true, follow: true },
};

export default function PoliticaPrivacidadPage() {
    return (
        <div className="min-h-screen flex flex-col pt-32 pb-20">
            <BreadcrumbSchema items={[{ name: "Política de Privacidad", href: "/politica-privacidad" }]} />
            <main className="flex-grow bg-white px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto">
                    <div className="mb-8">
                        <Breadcrumb items={[{ name: "Política de Privacidad" }]} />
                    </div>
                    <div className="max-w-4xl mx-auto mb-8">
                        <Link href="/" className="inline-flex items-center text-brand-primary hover:text-brand-secondary transition-colors font-medium">
                            <ArrowLeft size={18} className="mr-2" /> Volver al inicio
                        </Link>
                    </div>
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-extrabold text-brand-secondary mb-4">
                                POLÍTICA DE PRIVACIDAD
                            </h1>
                            <div className="w-20 h-1 bg-brand-primary mx-auto rounded-full"></div>
                        </div>

                        <div className="prose prose-lg max-w-none text-gray-700">
                            <div className="mb-12">
                                <h2 className="text-2xl font-bold text-brand-secondary mb-4">1. RESPONSABLE DEL TRATAMIENTO</h2>
                                <p className="mb-2"><strong>¿Quién es el responsable del tratamiento de sus datos?</strong></p>
                                <div className="space-y-2 pl-6">
                                    <p className="flex items-start">
                                        <span className="font-semibold min-w-[120px]">Identidad:</span>
                                        <span>Jose Manuel Pozo Copado</span>
                                    </p>
                                    <p className="flex items-start">
                                        <span className="font-semibold min-w-[120px]">NIF:</span>
                                        <span>28791833L</span>
                                    </p>
                                    <p className="flex items-start">
                                        <span className="font-semibold min-w-[120px]">Dirección:</span>
                                        <span>Urbanización La Torrecilla 45A, C.P. 41410 Carmona, Sevilla</span>
                                    </p>
                                    <p className="flex items-start">
                                        <span className="font-semibold min-w-[120px]">Teléfono:</span>
                                        <a href="tel:+34681269974" className="text-brand-primary hover:underline">681 269 974</a>
                                    </p>
                                    <p className="flex items-start">
                                        <span className="font-semibold min-w-[120px]">Email:</span>
                                        <a href="mailto:serviciosandalusi@gmail.com" className="text-brand-primary hover:underline">serviciosandalusi@gmail.com</a>
                                    </p>
                                </div>
                            </div>

                            <div className="mb-12">
                                <h2 className="text-2xl font-bold text-brand-secondary mb-4">2. FINALIDAD DEL TRATAMIENTO</h2>
                                <p className="mb-4"><strong>¿Con qué finalidad tratamos sus datos personales?</strong></p>
                                <p className="mb-4">En nombre de Jose Manuel Pozo Copado, tratamos la información que nos facilitan las personas interesadas con las siguientes finalidades:</p>
                                <ul className="list-disc pl-6 space-y-2 mb-4">
                                    <li>Gestionar, administrar y prestarle los servicios solicitados o facilitarle los productos que adquiera.</li>
                                    <li>Cumplimiento y ejecución de los contratos comerciales celebrados.</li>
                                    <li>Envío de comunicaciones comerciales y promocionales sobre nuestros servicios (siempre que nos haya dado su consentimiento expreso o exista una relación contractual previa).</li>
                                    <li>Atender sus consultas o solicitudes realizadas a través del sitio web o correo electrónico.</li>
                                </ul>
                            </div>

                            <div className="mb-12">
                                <h2 className="text-2xl font-bold text-brand-secondary mb-4">3. LEGITIMACIÓN</h2>
                                <p className="mb-4"><strong>¿Cuál es la legitimación para el tratamiento de sus datos?</strong></p>
                                <p className="mb-4">La base legal para el tratamiento de sus datos es:</p>
                                <ul className="list-disc pl-6 space-y-2 mb-4">
                                    <li><strong>La ejecución de un contrato:</strong> Para la prestación de los servicios solicitados o la compra de productos.</li>
                                    <li><strong>El consentimiento del interesado:</strong> Para el envío de formularios de contacto, suscripción a boletines o comunicaciones comerciales. Este consentimiento se puede retirar en cualquier momento.</li>
                                    <li><strong>Interés legítimo:</strong> Para garantizar la seguridad de la red y la información.</li>
                                </ul>
                            </div>

                            <div className="mb-12">
                                <h2 className="text-2xl font-bold text-brand-secondary mb-4">4. CONSERVACIÓN DE DATOS</h2>
                                <p className="mb-4"><strong>¿Por cuánto tiempo conservaremos sus datos?</strong></p>
                                <p>Los datos personales proporcionados se conservarán:</p>
                                <ul className="list-disc pl-6 space-y-2 mb-4">
                                    <li>Mientras se mantenga la relación mercantil o contractual.</li>
                                    <li>Hasta que el interesado solicite su supresión (si aplica).</li>
                                    <li>Durante los años necesarios para cumplir con las obligaciones legales (por ejemplo, normativa fiscal o contable).</li>
                                </ul>
                            </div>

                            <div className="mb-12">
                                <h2 className="text-2xl font-bold text-brand-secondary mb-4">5. DESTINATARIOS</h2>
                                <p className="mb-4"><strong>¿A qué destinatarios se comunicarán sus datos?</strong></p>
                                <p>Los datos no se cederán a terceros salvo en los casos en que exista una obligación legal (ej. Agencia Tributaria, Bancos para cobros/pagos) o a proveedores de servicios necesarios para el funcionamiento del negocio (encargados de tratamiento como asesorías, proveedores de hosting web), quienes se comprometen al cumplimiento de las disposiciones normativas de aplicación en materia de protección de datos.</p>
                            </div>

                            <div className="mb-12">
                                <h2 className="text-2xl font-bold text-brand-secondary mb-4">6. DERECHOS DE LOS USUARIOS</h2>
                                <p className="mb-4"><strong>¿Cuáles son sus derechos cuando nos facilita sus datos?</strong></p>
                                <p className="mb-4">Cualquier persona tiene derecho a obtener confirmación sobre si Jose Manuel Pozo Copado está tratando datos personales que les conciernan o no. Las personas interesadas tienen derecho a:</p>
                                <ul className="list-disc pl-6 space-y-2 mb-4">
                                    <li>Acceder a sus datos personales.</li>
                                    <li>Solicitar la rectificación de los datos inexactos.</li>
                                    <li>Solicitar su supresión cuando, entre otros motivos, los datos ya no sean necesarios para los fines que fueron recogidos.</li>
                                    <li>Solicitar la limitación del tratamiento de sus datos, en cuyo caso únicamente los conservaremos para el ejercicio o la defensa de reclamaciones.</li>
                                    <li>Oponerse al tratamiento de sus datos (oposición).</li>
                                    <li>Solicitar la portabilidad de sus datos.</li>
                                </ul>
                                <p className="mb-4">Para ejercer estos derechos, el usuario debe enviar una comunicación por escrito a la dirección postal indicada anteriormente o al correo electrónico <a href="mailto:serviciosandalusi@gmail.com" className="text-brand-primary hover:underline">serviciosandalusi@gmail.com</a>, adjuntando fotocopia de su DNI o documento equivalente para acreditar su identidad.</p>
                                <p>Asimismo, le informamos que tiene derecho a presentar una reclamación ante la autoridad de control competente (Agencia Española de Protección de Datos - <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">www.aepd.es</a>) si considera que el tratamiento no se ajusta a la normativa vigente.</p>
                            </div>

                            <div className="mb-12">
                                <h2 className="text-2xl font-bold text-brand-secondary mb-4">7. MEDIDAS DE SEGURIDAD</h2>
                                <p>Jose Manuel Pozo Copado ha adoptado los niveles de seguridad de protección de los datos personales legalmente requeridos y procura instalar aquellos otros medios y medidas técnicas adicionales a su alcance para evitar la pérdida, mal uso, alteración, acceso no autorizado y robo de los datos personales facilitados. No obstante, el usuario debe ser consciente de que las medidas de seguridad en Internet no son inexpugnables.</p>
                            </div>

                            <div className="mb-12">
                                <h2 className="text-2xl font-bold text-brand-secondary mb-4">8. USO DE COOKIES</h2>
                                <p>Este sitio web puede utilizar cookies (pequeños archivos de información que el servidor envía al ordenador de quien accede a la página) para llevar a cabo determinadas funciones que son consideradas imprescindibles para el correcto funcionamiento y visualización del sitio, así como para estadísticas de uso. El usuario puede configurar su navegador para ser avisado de la recepción de cookies e impedir su instalación. Para más información, consulte nuestra Política de Cookies (si dispone de una página específica) o la configuración de su navegador.</p>
                            </div>

                            <div className="mb-12">
                                <h2 className="text-2xl font-bold text-brand-secondary mb-4">9. MENORES DE EDAD</h2>
                                <p>Nuestros servicios no van dirigidos a personas menores de 14 años. Jose Manuel Pozo Copado no recabará intencionadamente información personal de menores de dicha edad. Si detectamos que se han recabado datos de un menor de 14 años sin el consentimiento de sus padres o tutores, procederemos a eliminar dicha información a la mayor brevedad posible.</p>
                            </div>

                            <div className="mb-12">
                                <h2 className="text-2xl font-bold text-brand-secondary mb-4">10. ACTUALIZACIÓN DE LA POLÍTICA</h2>
                                <p>Jose Manuel Pozo Copado se reserva el derecho a modificar la presente política para adaptarla a novedades legislativas o jurisprudenciales. En dichos supuestos, se anunciarán en esta página los cambios introducidos con razonable antelación a su puesta en práctica.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
