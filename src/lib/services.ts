
import { ServicePageConfig, siteConfig } from "./seo";

export const services: Record<string, ServicePageConfig> = {
    "boletines-electricos-sevilla": {
        slug: "boletines-electricos-sevilla",
        title: "Boletines Eléctricos Sevilla | Certificados Baratos y Rápidos",
        h1: "Boletines Eléctricos en Sevilla: Certificados Oficiales al Mejor Precio",
        metaTitle: "Boletines Eléctricos Sevilla | Certificados Instalación Eléctrica (CIE)",
        metaDescription: "Tramitamos tu Boletín Eléctrico en Sevilla de forma rápida y económica. Electricistas autorizados para certificados de instalación, cambios de potencia y altas nuevas.",
        shortDescription: "Emisión de Certificados de Instalación Eléctrica (CIE) y boletines para altas nuevas, cambios de titular o aumentos de potencia.",
        longDescription: "Somos electricistas autorizados por la Junta de Andalucía especializados en la tramitación urgente de boletines eléctricos (CIE). Si necesitas dar de alta la luz, aumentar la potencia contratada o regularizar una instalación antigua, gestionamos todo el papeleo técnico y administrativo para que tengas suministro eléctrico en tiempo récord. Realizamos la inspección técnica, emitimos el certificado y te asesoramos para que tu instalación cumpla con toda la normativa vigente (REBT) al menor coste posible.",
        features: [
            "Tramitación Urgente en 24h",
            "Precios Económicos desde 80€",
            "Electricistas Autorizados Oficiales",
            "Validez para Endesa e Iberdrola",
            "Asesoramiento Técnico Gratuito",
            "Sin Intermediarios",
        ],
        faqs: [
            {
                question: "¿Cuánto cuesta un boletín eléctrico en Sevilla?",
                answer: "El precio de un boletín eléctrico en Sevilla suele partir de los 80€ + tasas para instalaciones que cumplen normativa. El coste final puede variar si son necesarias adecuaciones técnicas en el cuadro eléctrico o cableado.",
            },
            {
                question: "¿Cuánto tardan en tramitar el boletín?",
                answer: "Una vez realizada la inspección y comprobado que todo está correcto, emitimos y registramos el boletín en Industria en un plazo de 24-48 horas laborables.",
            },
            {
                question: "¿Cuándo es obligatorio el boletín eléctrico?",
                answer: "Es necesario para altas nuevas, cambios de titular en instalaciones de más de 20 años, aumentos de potencia que excedan el máximo admisible actual o cambios de uso (de local a vivienda, por ejemplo).",
            },
        ],
        iconName: "FileCheck", // Lucide icon
        image: siteConfig.images.heroWorker, // Fallback image for now
        breadcrumbName: "Boletines Eléctricos",
    },
    "deteccion-fugas-sevilla": {
        slug: "deteccion-fugas-sevilla",
        title: "Detección de Fugas de Agua en Sevilla | Sin Obras ni Romper",
        h1: "Expertos en Detección de Fugas de Agua en Sevilla Sin Obras",
        metaTitle: "Detección de Fugas de Agua Sevilla | Localización Sin Obras 24h",
        metaDescription: "Localizamos fugas de agua ocultas en Sevilla sin romper nada. Tecnología avanzada: geófono, gas trazador y termografía. Rapidez y precisión garantizada.",
        shortDescription: "Tecnología avanzada para localizar fugas de agua ocultas sin necesidad de picar suelos ni paredes. Ahorra tiempo y dinero.",
        longDescription: "¿Tienes una factura de agua elevada o humedades inexplicables? Detectamos el punto exacto de la fuga utilizando la tecnología más avanzada del mercado: geófonos de alta sensibilidad, cámaras termográficas y gas trazador. Nuestro método no invasivo nos permite localizar averías en tuberías enterradas, bajo solerías o en paredes sin necesidad de realizar obras destructivas ni levantar todo el suelo. Intervenimos en viviendas, comunidades de vecinos, jardines y redes de abastecimiento, garantizando una localización precisa que minimiza los costes de reparación.",
        features: [
            "Tecnología No Invasiva (Sin Picar)",
            "Geófono y Gas Trazador",
            "Cámaras Termográficas",
            "Localización Exacta del Punto de Fuga",
            "Informe Técnico para el Seguro",
            "Urgencias 24 Horas",
        ],
        faqs: [
            {
                question: "¿Cómo detectáis la fuga sin romper el suelo?",
                answer: "Utilizamos equipos electroacústicos (geófonos) que amplifican el sonido del agua al salir, y gas trazador (hidrógeno y nitrógeno) inocuo que se filtra por la rotura y es detectado por sensores en la superficie.",
            },
            {
                question: "¿Cubre el seguro la localización de la fuga?",
                answer: "En la mayoría de las pólizas de hogar y comunidades, la localización y reparación de daños por agua están cubiertas. Nosotros emitimos un informe técnico detallado para que puedas gestionarlo con tu aseguradora.",
            },
            {
                question: "¿Atendéis urgencias de fugas?",
                answer: "Sí, disponemos de servicio 24 horas para fugas graves que estén provocando inundaciones o daños importantes a la estructura o vecinos.",
            },
        ],
        iconName: "Search", // Lucide icon
        image: siteConfig.images.hero, // Fallback image
        breadcrumbName: "Detección de Fugas",
    },
    "reformas-locales-comerciales-sevilla": {
        slug: "reformas-locales-comerciales-sevilla",
        title: "Reformas de Locales Comerciales Sevilla | Llave en Mano",
        h1: "Reformas de Locales Comerciales y Oficinas en Sevilla",
        metaTitle: "Reformas Locales Comerciales Sevilla | Proyectos Llave en Mano",
        metaDescription: "Especialistas en reformas de locales comerciales y oficinas en Sevilla. Diseño, licencias, obra y legalización. Transforma tu negocio al mejor precio.",
        shortDescription: "Servicio integral de reforma para negocios: desde el diseño y proyecto técnico hasta la ejecución de obra y decoración final.",
        longDescription: "Impulsa tu negocio con una reforma profesional adaptada a tus necesidades comerciales. Realizamos reformas integrales y parciales de locales comerciales, oficinas, restaurantes y tiendas en Sevilla. Nos encargamos de todo el proceso 'llave en mano': estudio previo de viabilidad, diseño de interiores, gestión de licencias de obra y actividad en el Ayuntamiento, ejecución coordinada de albañilería, instalaciones (electricidad, climatización, fontanería) y acabados de alta calidad. Cuidamos cada detalle para crear un espacio funcional y atractivo que potencie tus ventas y la imagen de tu marca.",
        features: [
            "Proyectos Llave en Mano",
            "Gestión de Licencias de Apertura",
            "Diseño de Interiores Comercial",
            "Cumplimiento Normativo (CTE, Accesibilidad)",
            "Plazos de Entrega Garantizados",
            "Financiación a Medida",
        ],
        faqs: [
            {
                question: "¿Os encargáis de la licencia de apertura?",
                answer: "Sí, nuestro equipo técnico gestiona toda la documentación necesaria, incluyendo proyectos de actividad y legalizaciones ante el Ayuntamiento de Sevilla.",
            },
            {
                question: "¿Cuánto tiempo dura la reforma de un local?",
                answer: "El plazo depende de la envergadura y el estado inicial, pero una reforma media de un local de 50-100m² suele oscilar entre 4 y 8 semanas. Nos comprometemos por contrato a cumplir los plazos acordados.",
            },
            {
                question: "¿Hacéis reformas parciales o solo integrales?",
                answer: "Nos adaptamos a lo que necesites. Realizamos desde lavados de cara y redistribuciones sencillas hasta reformas integrales completas con cambio de uso.",
            },
        ],
        iconName: "Store", // Lucide icon
        image: siteConfig.images.hero, // Fallback image
        breadcrumbName: "Reformas Locales",
    },
    // We can add existing static pages config here too if we migrate them later
};

export const serviceSlugs = Object.keys(services);
