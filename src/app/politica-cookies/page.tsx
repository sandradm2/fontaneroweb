import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { siteConfig } from "@/lib/seo";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
    title: "Política de Cookies",
    description: `Política de cookies de ${siteConfig.name}. Información sobre el uso de cookies y su gestión.`,
    alternates: { canonical: `${siteConfig.url}/politica-cookies` },
    robots: { index: true, follow: true },
};

export default function CookiesPolicyPage() {
    return (
        <div className="min-h-screen flex flex-col pt-32 pb-20">
            <BreadcrumbSchema items={[{ name: "Política de Cookies", href: "/politica-cookies" }]} />
            <main className="flex-grow bg-white px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto">
                    <div className="mb-8">
                        <Breadcrumb items={[{ name: "Política de Cookies" }]} />
                    </div>
                    <div className="max-w-4xl mx-auto mb-8">
                        <Link href="/" className="inline-flex items-center text-brand-primary hover:text-brand-secondary transition-colors font-medium">
                            <ArrowLeft size={18} className="mr-2" /> Volver al inicio
                        </Link>
                    </div>
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-extrabold text-brand-secondary mb-4">
                                POLÍTICA DE COOKIES
                            </h1>
                            <div className="w-20 h-1 bg-brand-primary mx-auto rounded-full"></div>
                        </div>

                        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
                            <section>
                                <h2 className="text-2xl font-bold text-brand-secondary mb-4">1. ¿Qué son las cookies?</h2>
                                <p>
                                    Las cookies son pequeños ficheros de datos que se generan en el ordenador, smartphone, tablet o cualquier otro dispositivo del Usuario cuando se accede a una página web y que permiten al titular de dicha página almacenar o recuperar determinada información sobre la navegación que se efectúa desde dicho equipo.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-brand-secondary mb-4">2. Tipología de cookies</h2>
                                <p className="mb-4">A continuación ofrecemos información sobre el tipo de cookies y la finalidad de las mismas:</p>

                                <h3 className="text-xl font-semibold text-brand-secondary mt-6 mb-3">2.1. Tipos de cookies según la entidad que las gestione</h3>
                                <p className="mb-4">Según quien sea la entidad que gestione el equipo o dominio desde donde se envían las cookies y trate los datos que se obtengan, podemos distinguir:</p>

                                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-brand-primary mb-6">
                                    <p className="font-semibold mb-2">Cookies propias:</p>
                                    <p className="mb-4">Son aquéllas que se envían al equipo terminal del usuario desde {siteConfig.url}.</p>

                                    <p className="font-semibold mb-2">Cookies de terceros:</p>
                                    <p>Son aquéllas que se envían al equipo terminal del usuario desde un equipo o dominio que no es gestionado por {siteConfig.owner} sino por otra entidad que trata los datos obtenidos través de las cookies. Dado que son estos terceros quienes proceden a su implementación, el bloqueo y desinstalación de las mismas se rige por sus condiciones y mecanismos específicos.</p>
                                </div>

                                <h3 className="text-xl font-semibold text-brand-secondary mt-6 mb-3">2.2. Tipos de cookies según el plazo de tiempo que permanecen activadas</h3>

                                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-brand-primary mb-6">
                                    <p className="font-semibold mb-2">Cookies de sesión:</p>
                                    <p className="mb-4">Son un tipo de cookies diseñadas para recabar y almacenar datos mientras el usuario accede a una página web. Estas cookies se almacenan en su terminal hasta que finalice la sesión de navegación del usuario.</p>

                                    <p className="font-semibold mb-2">Cookies persistentes:</p>
                                    <p>Son un tipo de cookies en el que los datos siguen almacenados en el terminal y pueden ser accedidos y tratados durante un periodo definido por el responsable de la cookie, y que puede ir de unos minutos a varios años.</p>
                                </div>

                                <h3 className="text-xl font-semibold text-brand-secondary mt-6 mb-3">2.3. Tipos de cookies según su finalidad</h3>

                                <div className="space-y-6">
                                    <div>
                                        <p className="font-semibold">Cookies técnicas:</p>
                                        <p>Son aquéllas que permiten al usuario la navegación a través de la página web o la plataforma y la utilización de las diferentes opciones o servicios que en ella existan como, por ejemplo, controlar el tráfico y la comunicación de datos, identificar la sesión, acceder a partes de acceso restringido, utilizar elementos de seguridad durante la navegación o almacenar contenidos para la difusión de videos o sonido o compartir contenidos a través de redes sociales como Twitter, Facebook, Google+ o Youtube. Se trata de cookies de sesión y persistentes.</p>
                                    </div>

                                    <div>
                                        <p className="font-semibold">Cookies de personalización:</p>
                                        <p>Son aquéllas que permiten al usuario acceder al servicio con algunas características predefinidas en función de una serie de criterios en el terminal del usuario como por ejemplo, el tipo de navegador a través del cual accede al servicio, la configuración regional desde donde accede al servicio, etc.</p>
                                    </div>

                                    <div>
                                        <p className="font-semibold">Cookies analíticas:</p>
                                        <p>Son aquéllas que nos permiten cuantificar el número de usuarios y así realizar la medición y análisis estadístico de la utilización que hacen los usuarios de nuestra web. Para ello se analiza su navegación en nuestra página web con el fin de mejorarla.</p>
                                    </div>

                                    <div>
                                        <p className="font-semibold">Cookies publicitarias:</p>
                                        <p>Son aquéllas que permiten la gestión, de la forma más eficaz posible, de los espacios publicitarios que se pudieran incluir en nuestra página web.</p>
                                    </div>

                                    <div>
                                        <p className="font-semibold">Cookies de publicidad comportamental:</p>
                                        <p>Estas cookies almacenan información del comportamiento de los usuarios obtenida a través de la observación continuada. Gracias a ellas, podemos conocer los hábitos de navegación en internet y mostrarte publicidad relacionada con tu perfil de navegación.</p>
                                    </div>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-brand-secondary mb-4">3. Gestión de cookies</h2>
                                <p className="mb-4">
                                    Puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones de tu navegador de Internet. En caso de que no permita la instalación de cookies en tu navegador es posible que no puedas acceder a algunos de los servicios y que tu experiencia en nuestra web pueda resultar menos satisfactoria.
                                </p>

                                <p className="mb-4">En los siguientes enlaces tienes a tu disposición toda la información para configurar o deshabilitar tus cookies en cada navegador:</p>

                                <ul className="list-disc pl-6 space-y-2 mb-6">
                                    <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">Google Chrome</a></li>
                                    <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">Mozilla Firefox</a></li>
                                    <li><a href="https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">Internet Explorer</a></li>
                                    <li><a href="https://support.apple.com/es-es/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">Safari</a></li>
                                    <li><a href="https://support.apple.com/es-es/HT201265" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">Safari para IOS (iPhone y iPad)</a></li>
                                    <li><a href="https://support.google.com/chrome/answer/2392971" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">Chrome para Android</a></li>
                                </ul>

                                <p className="mb-6">
                                    Algunas de las cookies incluidas en las categorías de cookies descritas anteriormente las almacenan terceros en su equipo cuando usted utiliza nuestra web. No tenemos control alguno sobre estas cookies o el modo en que las utilizan los terceros. Se utilizan para permitir al tercero prestarnos un servicio, por ejemplo, de análisis.
                                </p>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <p className="font-bold text-yellow-700">CONSENTIMIENTO:</p>
                                    <p className="mt-2 text-yellow-800">
                                        En {siteConfig.url} utilizamos cookies propias, de sesión, técnicas y analíticas. También empleamos cookies de terceros. Al navegar y continuar en nuestra web o al haber aceptado expresamente el uso de cookies, nos indicas que estás consintiendo el uso de las cookies antes enunciadas, y en las condiciones contenidas en la presente Política de Cookies.
                                    </p>
                                </div>

                                <p>
                                    {siteConfig.owner} puede modificar esta Política de Cookies en función de exigencias reglamentarias, legislativas o con la finalidad de adaptar dicha política a las instrucciones dictadas por la Agencia Española de Protección de Datos. En el caso que se produzcan cambios significativos en esta Política de Cookies, se comunicará debidamente a los usuarios.
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
