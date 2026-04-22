import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Footer from './Footer';

const LegalNotice = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto mb-8">
          <Link to="/" className="inline-flex items-center text-brand-primary hover:text-brand-secondary transition-colors font-medium">
            <ArrowLeft size={18} className="mr-2" /> Volver al inicio
          </Link>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-brand-secondary mb-4">
              AVISO LEGAL Y CONDICIONES GENERALES DE USO
            </h1>
            <div className="w-20 h-1 bg-brand-primary mx-auto rounded-full"></div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700">
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-brand-secondary mb-6">1. DATOS IDENTIFICATIVOS</h2>
              <p className="mb-6">En cumplimiento con el deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), a continuación se reflejan los siguientes datos:</p>
              
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-brand-primary">
                <p className="font-semibold mb-2">Titular del sitio web:</p>
                <p className="mb-2">Jose Manuel Pozo Copado (en adelante, "EL TITULAR").</p>
                <p className="mb-2"><strong>NIF:</strong> 28791833L</p>
                <p className="mb-2"><strong>Domicilio:</strong> Urbanización La Torrecilla 45A, C.P. 41410 Carmona, Sevilla.</p>
                <p className="mb-2"><strong>Correo electrónico de contacto:</strong> <a href="mailto:serviciosandalusi@gmail.com" className="text-brand-primary hover:underline">serviciosandalusi@gmail.com</a></p>
                <p><strong>Teléfono de contacto:</strong> <a href="tel:+34681269974" className="text-brand-primary hover:underline">681 269 974</a></p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-brand-secondary mb-4">2. USUARIOS</h2>
              <p>El acceso y/o uso de este portal atribuye la condición de USUARIO, que acepta, desde dicho acceso y/o uso, las Condiciones Generales de Uso aquí reflejadas. Las citadas Condiciones serán de aplicación independientemente de las Condiciones Generales de Contratación que en su caso resulten de obligado cumplimiento.</p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-brand-secondary mb-4">3. USO DEL PORTAL</h2>
              <p className="mb-4">El sitio web proporciona el acceso a multitud de informaciones, servicios, programas o datos (en adelante, "los contenidos") en Internet pertenecientes a EL TITULAR o a sus licenciantes a los que el USUARIO pueda tener acceso.</p>
              <p className="mb-4">El USUARIO asume la responsabilidad del uso del portal. Dicha responsabilidad se extiende al registro que fuese necesario para acceder a determinados servicios o contenidos. El USUARIO se compromete a hacer un uso adecuado de los contenidos y servicios que EL TITULAR ofrece a través de su portal y, con carácter enunciativo pero no limitativo, a no emplearlos para:</p>
              
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Incurrir en actividades ilícitas, ilegales o contrarias a la buena fe y al orden público.</li>
                <li>Difundir contenidos o propaganda de carácter racista, xenófobo, pornográfico-ilegal, de apología del terrorismo o atentatorio contra los derechos humanos.</li>
                <li>Provocar daños en los sistemas físicos y lógicos de EL TITULAR, de sus proveedores o de terceras personas, introducir o difundir en la red virus informáticos o cualesquiera otros sistemas físicos o lógicos que sean susceptibles de provocar los daños anteriormente mencionados.</li>
                <li>Intentar acceder y, en su caso, utilizar las cuentas de correo electrónico de otros usuarios y modificar o manipular sus mensajes.</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-brand-secondary mb-4">4. PROTECCIÓN DE DATOS</h2>
              <p>EL TITULAR cumple con las directrices del Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD), y vela por garantizar un correcto uso y tratamiento de los datos personales del usuario. Para más información, puede consultar nuestra <a href="/politica-de-privacidad" className="text-brand-primary hover:underline">Política de Privacidad</a>.</p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-brand-secondary mb-4">5. PROPIEDAD INTELECTUAL E INDUSTRIAL</h2>
              <p className="mb-4">EL TITULAR por sí o como cesionario, es titular de todos los derechos de propiedad intelectual e industrial de su página web, así como de los elementos contenidos en la misma (a título enunciativo: imágenes, sonido, audio, vídeo, software o textos; marcas o logotipos, combinaciones de colores, estructura y diseño, selección de materiales usados, programas de ordenador necesarios para su funcionamiento, acceso y uso, etc.).</p>
              <p className="font-semibold">Todos los derechos reservados.</p>
              <p>En virtud de lo dispuesto en la Ley de Propiedad Intelectual, quedan expresamente prohibidas la reproducción, la distribución y la comunicación pública, incluida su modalidad de puesta a disposición, de la totalidad o parte de los contenidos de esta página web, con fines comerciales, en cualquier soporte y por cualquier medio técnico, sin la autorización de EL TITULAR.</p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-brand-secondary mb-4">6. EXCLUSIÓN DE GARANTÍAS Y RESPONSABILIDAD</h2>
              <p>EL TITULAR no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.</p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-brand-secondary mb-4">7. MODIFICACIONES</h2>
              <p>EL TITULAR se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su portal, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través de la misma como la forma en la que éstos aparezcan presentados o localizados en su portal.</p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-brand-secondary mb-4">8. ENLACES</h2>
              <p>En el caso de que en la página web se dispusiesen enlaces o hipervínculos hacía otros sitios de Internet, EL TITULAR no ejercerá ningún tipo de control sobre dichos sitios y contenidos. En ningún caso EL TITULAR asumirá responsabilidad alguna por los contenidos de algún enlace perteneciente a un sitio web ajeno, ni garantizará la disponibilidad técnica, calidad, fiabilidad, exactitud, amplitud, veracidad, validez y constitucionalidad de cualquier material o información contenida en ninguno de dichos hipervínculos u otros sitios de Internet.</p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-brand-secondary mb-4">9. DERECHO DE EXCLUSIÓN</h2>
              <p>EL TITULAR se reserva el derecho a denegar o retirar el acceso a portal y/o los servicios ofrecidos sin necesidad de preaviso, a instancia propia o de un tercero, a aquellos usuarios que incumplan las presentes Condiciones Generales de Uso.</p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-brand-secondary mb-4">10. GENERALIDADES</h2>
              <p>EL TITULAR perseguirá el incumplimiento de las presentes condiciones así como cualquier utilización indebida de su portal ejerciendo todas las acciones civiles y penales que le puedan corresponder en derecho.</p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-brand-secondary mb-4">11. LEGISLACIÓN APLICABLE Y JURISDICCIÓN</h2>
              <p>La relación entre EL TITULAR y el USUARIO se regirá por la normativa española vigente. Cualquier controversia se someterá a los Juzgados y tribunales de la ciudad de Sevilla (salvo que la ley imponga otro fuero en caso de consumidores y usuarios).</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default LegalNotice;
