/* ==============================
   Carmen de la Legua — Catálogo 7 Ejes
   ============================== */

const CATEGORIES = [
    { id: 'carmen-verde', label: '🍃 Carmen Verde', title: 'Carmen Verde', subtitle: 'Medio Ambiente y Sostenibilidad', color: 'green', icon: '🍃' },
    { id: 'seguridad', label: '🛡️ Seguridad', title: 'Seguridad y Orden', subtitle: 'Protección y Tranquilidad', color: 'blue', icon: '🛡️' },
    { id: 'educacion', label: '🎓 Educación', title: 'Educación y Cultura', subtitle: 'Oportunidades para Crecer y Aprender', color: 'yellow', icon: '🎓' },
    { id: 'juventud', label: '💼 Juventud', title: 'Juventud y Empleo', subtitle: 'Tu Futuro Empieza Aquí', color: 'orange', icon: '💼' },
    { id: 'salud', label: '❤️ Salud', title: 'Salud y Nutrición', subtitle: 'Cuidamos de Ti y Tu Familia', color: 'red', icon: '❤️' },
    { id: 'familia', label: '🤝 Familia', title: 'Familia y Comunidad', subtitle: 'Protección Social para Todos', color: 'purple', icon: '🤝' },
    { id: 'tramites', label: '🏠 Trámites', title: 'Trámites y Negocios', subtitle: 'Formalización y Emprendimiento', color: 'teal', icon: '🏠' }
];

const SERVICES = [
    // === CARMEN VERDE ===
    { id: 'ecotrueque', cat: 'carmen-verde', audience: 'adultos jovenes', img: 'Fotos-imagenes/Carmen verde/ecotruque/17.05.25 Ecotrueque (8).JPG', title: 'Ecotrueque ♻️', desc: 'Convierte tu basura en un tesoro: trae botellas, cartones y plásticos al canje mensual y llévate plantas, compost o productos ecológicos gratis. ¡Cuidar el planeta nunca fue tan fácil!', freq: 'Mensual', benef: '406', cta: 'Ver requisitos' },
    { id: 'recicla', cat: 'carmen-verde', audience: 'adultos', img: 'Fotos-imagenes/Carmen verde/Programa Recicla/492484005_685565344418504_8064817244726700835_n.jpg', title: 'Programa Recicla 🗑️', desc: 'Separa tus residuos en casa y la municipalidad los recoge en tu puerta: orgánicos todos los días, inorgánicos cada semana. Contribuye a un Carmen de la Legua más limpio sin salir de tu hogar.', freq: 'Semanal', benef: '508', cta: 'Ver requisitos' },
    { id: 'educca', cat: 'carmen-verde', audience: 'adultos ninos jovenes', img: 'Fotos-imagenes/Carmen verde/educca/54929922195_fc732dbb33_b.jpg', title: 'EDUCCA — Educación Ambiental 🌿', desc: 'Aprende a cuidar tu distrito con talleres, campañas y formación de promotores ambientales. Ideal para escolares, familias y líderes vecinales que quieren hacer la diferencia desde su barrio.', freq: 'Diario', benef: '3,020', cta: 'Ver detalles' },
    { id: 'patitas', cat: 'carmen-verde', audience: 'adultos ninos', img: 'Fotos-imagenes/Carmen verde/jueves de patitas/54936446244_6bff3989f5_b.jpg', title: 'Jueves de Patitas 🐾', desc: 'Cada jueves, tu perro o gato recibe vacunas, desparasitación y atención veterinaria sin costo. Protege la salud de tu mascota y de toda tu familia con solo acercarte al punto de atención.', freq: 'Mensual', benef: '342', cta: 'Ver requisitos' },
    { id: 'vivero', cat: 'carmen-verde', audience: 'adultos', img: 'Fotos-imagenes/Carmen verde/vivero/DSC06881.JPG', title: 'Vivero Municipal 🌱', desc: 'Compra plantas a bajo costo, llévate compost para tu jardín o haz una visita guiada con tus hijos para aprender cómo la municipa produce vida verde. Tu hogar más bonito, tu bolsillo tranquilo.', freq: 'Permanente', benef: '146', cta: 'Ver requisitos' },
    { id: 'techo-limpio', cat: 'carmen-verde', audience: 'adultos', img: 'Fotos-imagenes/Carmen verde/techo limpio/DSC09691.jpg', title: 'Techo Limpio 🏠', desc: 'Nuestro equipo va a tu casa a retirar trastos viejos y residuos acumulados en el techo o azotea, sin ningún costo para ti. Más espacio, menos peligro y una familia más saludable.', freq: 'Semestral', benef: '49', cta: 'Ver requisitos' },

    // === SEGURIDAD ===
    { id: 'patrullaje', cat: 'seguridad', audience: 'adultos', img: 'Fotos-imagenes/seguridad y orden/patrullaje integrado/22.02.25 Operativo en conjunto _5.JPG', title: 'Patrullaje Integrado 🚔', desc: 'Serenos y policías patrullan juntos nuestras calles las 24 horas. Gracias al convenio «Serenazgo sin Fronteras», la protección llega hasta los límites del distrito. Tu tranquilidad es nuestra prioridad.', freq: '24/7', benef: '526', cta: 'Ver detalles' },
    { id: 'videovigilancia', cat: 'seguridad', audience: 'adultos', img: 'Fotos-imagenes/seguridad y orden/centro de vigilancia/DSC00182.jpg', title: 'Central de Videovigilancia 📹', desc: 'Tenemos cámaras en puntos estratégicos del distrito monitoreadas en tiempo real. Si necesitas imágenes para una denuncia o trámite legal, puedes solicitarlas directamente en la municipalidad.', freq: '24/7', benef: '31', cta: 'Ver detalles' },
    { id: 'club-ninos', cat: 'seguridad', audience: 'ninos', img: 'Fotos-imagenes/seguridad y orden/reporteros kids/DSC09243.jpg', title: 'Club de Niños y Adolescentes 🎖️', desc: '¡Tu hijo puede ser Mini Sereno, Reportero Kids, Minichef o tocar en la Banda Rítmica! Talleres mensuales gratuitos que forman niños con valores, disciplina y talentos. ¡Inscríbelo este mes!', freq: 'Mensual', benef: '413', cta: 'Ver requisitos' },
    { id: 'charlas-seg', cat: 'seguridad', audience: 'ninos jovenes', img: 'Fotos-imagenes/seguridad y orden/Charla de Sensibilizacion/484351237_652714654370240_1210568632535236877_n.jpg', title: 'Charlas de Sensibilización 🗣️', desc: 'Llevamos talleres a los colegios del distrito para que estudiantes aprendan a prevenir violencia, adicciones y peligros del entorno. Más conocimiento, más seguridad para toda la comunidad.', freq: 'Mensual', benef: '1,206', cta: 'Ver detalles' },
    { id: 'consejeria', cat: 'seguridad', audience: 'adultos', img: 'Fotos-imagenes/seguridad y orden/Consejeria Familiar/592097516_864519763189727_3132131290312886149_n.jpg', title: 'Consejería Familiar 💬', desc: 'Talleres gratuitos para padres donde aprenderás a detectar señales de violencia, maltrato y bullying en el hogar y la escuela. Porque un hogar seguro empieza por saber cómo protegerlo.', freq: 'Mensual', benef: '601', cta: 'Ver requisitos' },
    { id: 'grd', cat: 'seguridad', audience: 'adultos jovenes', img: 'Fotos-imagenes/seguridad y orden/gestion del riesgo/54827485784_c261ebd1ee_b.jpg', title: 'Gestión del Riesgo ⛑️', desc: '¿Sabes qué hacer ante un sismo o incendio? Únete como Brigadista Comunitario o forma a tu familia con «Familia Carmelina Preparada». El conocimiento que puede marcar la diferencia en una emergencia.', freq: 'Anual', benef: '363', cta: 'Ver requisitos' },

    // === EDUCACION ===
    { id: 'la-pre', cat: 'educacion', audience: 'jovenes', img: 'Fotos-imagenes/Educacion cultura/la pre/dsc00286_54587547763_l.jpg', title: 'Academia "La Pre" 🎓', desc: 'Preparación académica gratuita de lunes a viernes para jóvenes carmelinos que sueñan con entrar a la universidad. Docentes capacitados, temario actualizado y sin ningún costo. ¡Tu ingreso empieza aquí!', freq: 'Anual', benef: '263', cta: 'Ver requisitos' },
    { id: 'becas', cat: 'educacion', audience: 'jovenes', img: 'Fotos-imagenes/Educacion cultura/beca para tu futuro/DSC00931.jpg', title: 'Becas para Tu Futuro 🏅', desc: 'Te orientamos paso a paso para postular a Beca 18, Beca TEC y Beca Permanencia. No pagues a nadie por asesoría: la municipalidad te acompaña gratis en todo el proceso hasta que ganes tu beca.', freq: 'Según convocatoria', benef: '178', cta: 'Ver requisitos' },
    { id: 'talleres-verano', cat: 'educacion', audience: 'ninos jovenes', img: 'Fotos-imagenes/Educacion cultura/talleres de verano o invierno/DSC08099.jpg', title: 'Talleres de Verano e Invierno 🎨', desc: 'Danza, fútbol, arte, música, teatro y más: hasta 2,000 niños y jóvenes disfrutan de talleres totalmente gratuitos cada temporada. En enero-febrero y vacaciones de invierno. ¡Inscribe a tus hijos hoy!', freq: 'Ene-Feb / Jun-Set', benef: '2,400', cta: 'Ver requisitos' },
    { id: 'superate', cat: 'educacion', audience: 'jovenes adultos', img: 'Fotos-imagenes/Educacion cultura/Superate/495006000_1246230337503296_3316446325535786253_n.jpg', title: 'SUPÉRATE 🚀', desc: 'Conferencias motivacionales, talleres prácticos y capacitaciones culturales para crecer en lo personal y profesional. Cada dos meses, una nueva oportunidad de superarte junto a tu comunidad.', freq: 'Bimestral', benef: '1,800', cta: 'Ver requisitos' },
    { id: 'carmelino-lee', cat: 'educacion', audience: 'ninos jovenes', img: 'Fotos-imagenes/Educacion cultura/carmelino lee/DSC01068.jpg', title: 'Club "Carmelino Lee" 📚', desc: 'Lecturas en parques y colegios, dinámicas divertidas y el placer de descubrir nuevos mundos entre páginas. Un club mensual gratuito para niños y jóvenes que quieren enamorarse de los libros.', freq: 'Mensual', benef: '1,510', cta: 'Ver detalles' },
    { id: 'deportes', cat: 'educacion', audience: 'jovenes adultos', img: 'Fotos-imagenes/Educacion cultura/campeonato deportivo/54725545631_340d3bea28_b.jpg', title: 'Campeonatos Deportivos ⚽', desc: 'Interbarrios, torneo femenino y Bravo de Bravos: compite, diviértete y gana con tu equipo. También tenemos campos deportivos para alquilar y talleres con el IPD disponibles todo el año.', freq: 'Trimestral', benef: '1,518', cta: 'Ver requisitos' },

    // === JUVENTUD Y EMPLEO ===
    { id: 'chambea', cat: 'juventud', audience: 'jovenes', img: 'Fotos-imagenes/Juventud y Empleo/CHAMBEA JOVEN/DSC04332.jpg', title: 'Chambea Joven 💼', desc: '¿Buscas tu primer trabajo o quieres un mejor empleo? La municipa conecta a jóvenes carmelinos con empresas que buscan talento local. Sin costo, sin intermediarios, con oportunidades reales.', freq: 'Mensual', benef: '85', cta: 'Ver requisitos' },
    { id: 'emprende', cat: 'juventud', audience: 'emprendedores adultos', img: 'Fotos-imagenes/Juventud y Empleo/emprende carmelina/DSC07584.jpg', title: 'Emprende Carmelina 📈', desc: 'Aprende a armar tu plan de negocios, fijar precios, hacer marketing y manejar tus costos. Un taller intensivo y gratuito diseñado especialmente para emprendedoras carmelinas que quieren crecer.', freq: 'Anual', benef: '38', cta: 'Ver requisitos' },
    { id: 'liderazgo', cat: 'juventud', audience: 'adultos', img: 'Fotos-imagenes/Juventud y Empleo/Liderazgo Femenino/633970113_926725723635797_3911109543021264326_n.jpg', title: 'Liderazgo Femenino 👩‍💼', desc: 'Un espacio poderoso para mujeres que quieren desarrollar su liderazgo, comunicación efectiva y autoconfianza. Aprende a negociar, a dirigir y a creer en ti misma. ¡Puedes llegar más lejos!', freq: 'Anual', benef: '26', cta: 'Ver requisitos' },
    { id: 'talleres-prod', cat: 'juventud', audience: 'jovenes adultos emprendedores', img: 'Fotos-imagenes/Juventud y Empleo/talleres productivos/54814638362_9bdc4e5258_b.jpg', title: 'Talleres Productivos 🛠️', desc: 'Aprende un oficio rentable: barbería, manicure, drywall, maquillaje artístico, tejido y más. Talleres prácticos y gratuitos para que puedas generar tus propios ingresos rápidamente.', freq: 'Trimestral', benef: '—', cta: 'Ver requisitos' },
    { id: 'voluntariado', cat: 'juventud', audience: 'jovenes', img: 'Fotos-imagenes/Juventud y Empleo/Voluntariado Juvenil/504081325_717331757908529_4841154347585286613_n.jpg', title: 'Voluntariado Juvenil 🤜', desc: 'Forma parte del equipo que responde primero en emergencias y desastres. Gana experiencia real, certificación y la satisfacción de servir a tu comunidad. ¡Tu energía puede salvar vidas!', freq: 'Anual', benef: '30', cta: 'Ver requisitos' },
    { id: 'ferias', cat: 'juventud', audience: 'emprendedores adultos', img: 'Fotos-imagenes/Juventud y Empleo/Ferias y eventos/DSC08416.jpg', title: 'Ferias y Eventos 🎪', desc: 'Expande tu negocio en la Feria Gastronómica, el ComunaFest, la Feria del Ceviche o la Feria Laboral. Conecta con clientes, consigue trabajo o disfruta con tu familia en grandes eventos gratuitos.', freq: 'Eventual', benef: '490', cta: 'Ver calendario' },

    // === SALUD ===
    { id: 'ambulancia', cat: 'salud', audience: 'adultos', img: 'Fotos-imagenes/salud y nutricion/ambulancia/54501168384_1ec02f84af_o.jpg', title: 'Ambulancia Municipal 24/7 🚑', desc: 'Ante una emergencia médica, llama al 963544605 y nuestro equipo llega a tu puerta. Servicio totalmente gratuito para vecinos carmelinos, disponible los 365 días del año. No estás solo en los momentos difíciles.', freq: '24/7', benef: '2,152', cta: 'Llamar: 963544605' },
    { id: 'vaso-leche', cat: 'salud', audience: 'ninos adultos mayores', img: 'Fotos-imagenes/salud y nutricion/vaso de leche/IMG_0989.JPG', title: 'Vaso de Leche 🥛', desc: 'Cada mes, niños de 0 a 6 años, madres gestantes y adultos mayores reciben su ración de leche para asegurar una buena nutrición. Si cumples los requisitos, inscríbete hoy y no pierdas este beneficio.', freq: 'Mensual', benef: '5,982', cta: 'Ver requisitos' },
    { id: 'antianemia', cat: 'salud', audience: 'ninos adultos', img: 'Fotos-imagenes/salud y nutricion/brigada antianemia/DSC07813.jpg', title: 'Brigada Antianemia 💪', desc: 'Detectamos y tratamos la anemia en niños menores de 5 años con visitas domiciliarias, tamizaje de hemoglobina y suplementación gratuita. Un niño sin anemia aprende mejor y crece más sano.', freq: 'Diario', benef: '2,758', cta: 'Ver requisitos' },
    { id: 'salud-belleza', cat: 'salud', audience: 'adultos', img: 'Fotos-imagenes/salud y nutricion/campaña de salud/55101420298_13ce4f602a_b.jpg', title: 'Campañas de Salud y Belleza ✨', desc: 'Cada semana llevamos consultas de nutrición, odontología, psicología, glucosa, VIH y hasta corte de cabello gratis a diferentes puntos del distrito. ¡Cuídate sin gastar ni salir lejos de tu casa!', freq: 'Semanal', benef: '3,440', cta: 'Ver calendario' },
    { id: 'mamitas', cat: 'salud', audience: 'adultos', img: 'Fotos-imagenes/salud y nutricion/mamitas de hierro/dsc00603_54883411241_l.jpg', title: 'Club Mamitas de Hierro 🤱', desc: 'Un programa mensual pensado para mamás: suplementación nutricional, consejos de salud, seguimiento personalizado y mucha energía grupal. Porque una mamá bien nutrida es la base de una familia fuerte.', freq: 'Mensual', benef: '1,467', cta: 'Ver requisitos' },
    { id: 'alimentos', cat: 'salud', audience: 'adultos', img: 'Fotos-imagenes/salud y nutricion/alimentos al rescate/54794926200_f0127c5853_b.jpg', title: 'Alimentos al Rescate 🥗', desc: 'Familias carmelinas en situación de vulnerabilidad reciben alimentos de calidad de forma trimestral. Si atraviesas un momento difícil, acércate y te orientamos para acceder a este apoyo sin costo.', freq: 'Trimestral', benef: '19', cta: 'Ver requisitos' },

    // === FAMILIA Y COMUNIDAD ===
    { id: 'ciam', cat: 'familia', audience: 'mayores', img: 'Fotos-imagenes/Familia y comunidad/ciam/DSC08645.jpg', title: 'CIAM — Club del Adulto Mayor 🌟', desc: 'Tai Chi, danza, baile «A Todo Ritmo», manualidades, talleres cognitivos y club de lectura: el CIAM es el lugar donde los adultos mayores carmelinos viven activos, alegres y bien acompañados cada día.', freq: 'Lunes a Sábado', benef: '557', cta: 'Ver requisitos' },
    { id: 'omaped', cat: 'familia', audience: 'adultos', img: 'Fotos-imagenes/Familia y comunidad/omaped/ft 2.jpg', title: 'OMAPED — Inclusión para Todos ♿', desc: 'Si tienes una discapacidad o conoces a alguien que la tiene, aquí encontrarás orientación, acceso a programas del Estado y defensa de tus derechos. Todos merecemos vivir con dignidad y oportunidades.', freq: 'Permanente', benef: '—', cta: 'Ver detalles' },
    { id: 'demuna', cat: 'familia', audience: 'ninos adultos', img: 'Fotos-imagenes/Familia y comunidad/demuna y proteccion/DSC07550.jpg', title: 'DEMUNA — Protección de la Familia 🛡️', desc: 'Asesoría legal gratis, consejería psicológica, conciliación extrajudicial y atención ante violencia o trabajo infantil. Si tu familia necesita ayuda, la DEMUNA está aquí para escucharte y acompañarte.', freq: 'Diario', benef: '—', cta: 'Ver detalles' },
    { id: 'prog-sociales', cat: 'familia', audience: 'adultos mayores', img: 'Fotos-imagenes/Familia y comunidad/programas sociales/DSC05569.jpg', title: 'Programas Sociales del Estado 🤝', desc: 'Accede a Juntos, Contigo, Pensión 65, Cuna Más y Asistencia por Orfandad. La municipalidad te orienta para tramitar cada beneficio sin pérdida de tiempo ni costos innecesarios.', freq: 'Variable', benef: '130', cta: 'Ver requisitos' },
    { id: 'te-cuido', cat: 'familia', audience: 'adultos', img: 'Fotos-imagenes/Familia y comunidad/te cuido con amor/DSC07797.jpg', title: 'Programa "Te Cuido" 💙', desc: 'Una psicóloga y una abogada te escuchan, te orientan y te acompañan cada semana de forma completamente gratuita. Si estás pasando por un momento difícil, no tienes que enfrentarlo solo o sola.', freq: 'Semanal', benef: '160', cta: 'Ver detalles' },
    { id: 'identidad', cat: 'familia', audience: 'adultos', img: 'Fotos-imagenes/Familia y comunidad/DNI/DSC01444.jpg', title: 'Tu Identidad, Tu Derecho 🪪', desc: 'Tramita tu DNI electrónico gratis con el apoyo de la municipalidad. Sin largas colas ni costos adicionales: cada mes llegamos a los barrios para que ningún vecino carmelino quede sin su documento.', freq: 'Mensual', benef: '498', cta: 'Ver requisitos' },

    // === TRAMITES ===
    { id: 'licencias', cat: 'tramites', audience: 'emprendedores adultos', img: '', title: 'Licencias de Funcionamiento 🏪', desc: 'Formaliza tu negocio de manera rápida y con asesoría gratuita en cada paso. Un negocio con licencia genera más confianza en tus clientes y te protege de sanciones. ¡Da el paso hoy!', freq: 'Permanente', benef: '—', cta: 'Ver requisitos' },
    { id: 'edificacion', cat: 'tramites', audience: 'adultos', img: '', title: 'Licencias de Edificación 🏗️', desc: '¿Vas a construir, ampliar o remodelar? Tramita tu licencia con orientación técnica gratuita. Construir en regla protege tu inversión y te evita problemas legales y multas en el futuro.', freq: 'Mensual', benef: '12', cta: 'Ver requisitos' },
    { id: 'certificados', cat: 'tramites', audience: 'adultos', img: 'Fotos-imagenes/Trámites y Negocios/Certificados y Constancias/DSC02658.jpg.jpeg', title: 'Certificados y Constancias 📄', desc: 'Obtén tu certificado de numeración, nomenclatura, parámetros urbanos o constancia de posesión. Documentos esenciales para vender, alquilar, construir o gestionar servicios básicos en tu predio.', freq: 'Mensual', benef: '191', cta: 'Ver requisitos' },
    { id: 'tributarios', cat: 'tramites', audience: 'adultos', img: 'Fotos-imagenes/Trámites y Negocios/Trámites Tributarios/DSC08048.jpg.jpeg', title: 'Trámites Tributarios 🧾', desc: 'Registra tu predio, solicita tu constancia de no adeudo o resuelve un recurso administrativo. Te orientamos de forma gratuita para estar al día con tus obligaciones sin complicaciones ni sorpresas.', freq: 'Diario', benef: '653', cta: 'Ver requisitos' },
    { id: 'negocio-saludable', cat: 'tramites', audience: 'emprendedores', img: 'Fotos-imagenes/Trámites y Negocios/Negocio Saludable/IMG_0349.jpg.jpeg', title: 'Negocio Saludable 🍽️', desc: 'Inspecciones sanitarias gratuitas y capacitación en higiene alimentaria para tu negocio. Un local limpio y certificado atrae más clientes y protege la salud de toda tu comunidad.', freq: 'Diario', benef: '409', cta: 'Ver requisitos' },
    { id: 'buen-consumidor', cat: 'tramites', audience: 'adultos', img: 'Fotos-imagenes/Trámites y Negocios/Viernes del Buen Consumidor/DSC06465.JPG.jpeg', title: 'Viernes del Buen Consumidor 🛒', desc: 'Todos los viernes verificamos precios justos y calidad de productos en mercados y tiendas del distrito. Consume con confianza: velamos para que nadie te venda productos en malas condiciones.', freq: 'Semanal (Viernes)', benef: '100', cta: 'Ver detalles' }
];

const FEATURED = [
    { title: 'Vaso de Leche', desc: 'Nutrición para 5,982 niños, madres gestantes y adultos mayores. El programa de mayor alcance del distrito.', badge: '❤️ Salud', freq: '📅 Mensual', benef: '👥 5,982 beneficiarios', color: 'red', img: 'Fotos-imagenes/salud y nutricion/vaso de leche/IMG_0989.JPG' },
    { title: 'Campañas de Salud y Belleza', desc: 'Jornadas integrales de salud y cuidado personal cada semana. Odontología, nutrición, psicología y más.', badge: '❤️ Salud', freq: '📅 Semanal', benef: '👥 3,440 beneficiarios', color: 'red', img: 'Fotos-imagenes/salud y nutricion/campaña de salud/55101420298_13ce4f602a_b.jpg' },
    { title: 'EDUCCA — Educación Ambiental', desc: 'Programa que transforma la cultura ambiental de 3,020 vecinos con talleres, campañas y promotores verdes.', badge: '🍃 Carmen Verde', freq: '📅 Diario', benef: '👥 3,020 beneficiarios', color: 'green', img: 'Fotos-imagenes/Carmen verde/educca/54929922195_fc732dbb33_b.jpg' },
    { title: 'Brigada Antianemia', desc: 'Detección y suplementación nutricional para niños. Visitas domiciliarias y tamizaje de hemoglobina.', badge: '❤️ Salud', freq: '📅 Diario', benef: '👥 2,758 beneficiarios', color: 'red', img: 'Fotos-imagenes/salud y nutricion/brigada antianemia/DSC07813.jpg' },
    { title: 'Talleres de Verano e Invierno', desc: 'Danza, arte, deportes y cultura para 2,400 niños y jóvenes durante vacaciones. ¡Diversión y aprendizaje!', badge: '🎓 Educación', freq: '📅 Ene-Feb / Jul-Ago', benef: '👥 2,400 beneficiarios', color: 'yellow', img: 'Fotos-imagenes/Educacion cultura/talleres de verano o invierno/DSC08099.jpg' },
    { title: 'Academia "La Pre"', desc: 'Preparación gratuita de lunes a viernes para jóvenes que sueñan con entrar a la universidad.', badge: '🎓 Educación', freq: '📅 Anual', benef: '👥 263 beneficiarios', color: 'yellow', img: 'Fotos-imagenes/Educacion cultura/la pre/dsc00286_54587547763_l.jpg' },
    { title: 'Club de Niños y Adolescentes', desc: 'Mini Serenos, Reporteros Kids, Minichef y Banda Rítmica. Formación cívica y valores para los pequeños.', badge: '🛡️ Seguridad', freq: '📅 Mensual', benef: '👥 413 beneficiarios', color: 'blue', img: 'Fotos-imagenes/seguridad y orden/reporteros kids/DSC09243.jpg' }
];

document.addEventListener('DOMContentLoaded', () => {
    // --- Particles ---
    const pc = document.getElementById('heroParticles');
    for (let i = 0; i < 30; i++) {
        const p = document.createElement('div');
        p.classList.add('hero-particle');
        p.style.left = Math.random() * 100 + '%';
        p.style.animationDuration = (4 + Math.random() * 6) + 's';
        p.style.animationDelay = (Math.random() * 5) + 's';
        p.style.width = p.style.height = (2 + Math.random() * 4) + 'px';
        pc.appendChild(p);
    }

    // --- Navbar scroll ---
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 60));

    // --- Mobile menu ---
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
    navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

    // --- Counter animation ---
    const counters = document.querySelectorAll('.stat-number');
    const animateCounter = (el) => {
        const target = +el.dataset.target;
        const duration = 2000;
        const start = performance.now();
        const update = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const val = Math.floor(eased * target);
            el.textContent = target >= 1000 ? val.toLocaleString('es-PE') + '+' : val;
            if (progress < 1) requestAnimationFrame(update);
        };
        requestAnimationFrame(update);
    };
    const statsObs = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) { counters.forEach(animateCounter); statsObs.disconnect(); } });
    }, { threshold: 0.5 });
    if (counters.length) statsObs.observe(counters[0].closest('.hero-stats'));

    // --- Build Category Filter Buttons ---
    const filterContainer = document.getElementById('categoryFilters');
    filterContainer.innerHTML = '<button class="filter-btn active" data-filter="all">Todos</button>' +
        CATEGORIES.map(c => `<button class="filter-btn" data-filter="${c.id}">${c.label}</button>`).join('');

    // --- Build Carousel ---
    const track = document.getElementById('carouselTrack');
    track.innerHTML = FEATURED.map(f => `
    <div class="carousel-slide">
      <div class="featured-card featured-${f.color}" ${f.img ? `style="background-image:url('${f.img}');background-size:cover;background-position:center;"` : ''}>
        ${f.img ? '<div class="featured-photo-overlay"></div>' : ''}
        <div class="featured-badge">${f.badge}</div>
        <h3>${f.title}</h3><p>${f.desc}</p>
        <div class="featured-meta">
          <span class="featured-freq">${f.freq}</span>
          <span class="featured-benef">${f.benef}</span>
        </div>
      </div>
    </div>`).join('');

    // --- Build Category Sections & Cards ---
    const sectionsContainer = document.getElementById('categorySections');
    sectionsContainer.innerHTML = CATEGORIES.map(cat => {
        const catServices = SERVICES.filter(s => s.cat === cat.id);
        const totalBenef = catServices.reduce((sum, s) => sum + (parseInt(s.benef?.replace(/,/g, '')) || 0), 0);
        return `
    <section class="category-section" id="${cat.id}" data-category="${cat.id}">
      <div class="container">
        <div class="category-header cat-${cat.color}">
          <div class="category-icon-wrap"><span class="category-icon">${cat.icon}</span></div>
          <div>
            <h2>${cat.title}</h2>
            <p>${cat.subtitle}</p>
            ${totalBenef > 0 ? `<span class="cat-benef">👥 ${totalBenef.toLocaleString('es-PE')}+ beneficiarios en 2025</span>` : ''}
          </div>
        </div>
        <div class="services-grid" id="grid-${cat.id}">
          ${catServices.map(s => `
          <div class="service-card" data-cat="${s.cat}" data-audience="${s.audience}">
            <div class="card-image card-img-${cat.color}" ${s.img ? `style="background-image:url('${s.img}');background-size:cover;background-position:center;"` : ''}>
              ${!s.img ? `<svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" opacity=".4"><circle cx="12" cy="12" r="10"/><path d="M12 8v8m-4-4h8"/></svg>` : ''}
              <span class="card-freq">${s.freq}</span>
              ${s.benef && s.benef !== '—' ? `<span class="card-benef"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="display:inline;vertical-align:middle;margin-right:3px"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>${s.benef}</span>` : ''}
            </div>
            <div class="card-body">
              <span class="card-cat-badge badge-${cat.color}">${cat.icon} ${cat.title}</span>
              <h3>${s.title}</h3>
              <p>${s.desc}</p>
              <button class="card-cta cta-${cat.color}" data-service="${s.id}">${s.cta}</button>
            </div>
          </div>`).join('')}
        </div>
      </div>
    </section>`;
    }).join('');

    // --- Scroll Animations ---
    const cards = document.querySelectorAll('.service-card, .category-header');
    cards.forEach(c => c.classList.add('animate-on-scroll'));
    const scrollObs = new IntersectionObserver((entries) => {
        entries.forEach((e, i) => {
            if (e.isIntersecting) { setTimeout(() => e.target.classList.add('visible'), i * 60); scrollObs.unobserve(e.target); }
        });
    }, { threshold: 0.1 });
    cards.forEach(c => scrollObs.observe(c));

    // --- Filters ---
    let activeCat = 'all', activeAud = 'all';
    const allCards = () => document.querySelectorAll('.service-card');
    const allSections = () => document.querySelectorAll('.category-section');

    function applyFilters() {
        const noRes = document.getElementById('noResults');
        let visible = 0;
        allSections().forEach(sec => {
            const cat = sec.dataset.category;
            sec.style.display = (activeCat === 'all' || cat === activeCat) ? '' : 'none';
        });
        allCards().forEach(card => {
            const cCat = card.dataset.cat, cAud = card.dataset.audience || '';
            const catOk = activeCat === 'all' || cCat === activeCat;
            const audOk = activeAud === 'all' || cAud.includes(activeAud);
            if (catOk && audOk) { card.style.display = ''; card.classList.remove('hidden'); visible++; }
            else { card.style.display = 'none'; card.classList.add('hidden'); }
        });
        // Hide empty sections
        allSections().forEach(sec => {
            if (sec.style.display === 'none') return;
            const vis = sec.querySelectorAll('.service-card:not([style*="display: none"])');
            if (!vis.length && activeCat === 'all') sec.style.display = 'none';
        });
        noRes.classList.toggle('show', visible === 0);
    }

    document.querySelectorAll('.filter-btn[data-filter]').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn[data-filter]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeCat = btn.dataset.filter;
            applyFilters();
            if (activeCat !== 'all') {
                const t = document.getElementById(activeCat);
                if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    document.querySelectorAll('.filter-btn-sm[data-audience]').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn-sm[data-audience]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeAud = btn.dataset.audience;
            applyFilters();
        });
    });

    // --- Search ---
    const searchInput = document.getElementById('searchInput');
    function doSearch() {
        const q = searchInput.value.trim().toLowerCase();
        if (!q) {
            document.querySelectorAll('.filter-btn[data-filter]').forEach(b => b.classList.remove('active'));
            document.querySelector('.filter-btn[data-filter="all"]').classList.add('active');
            activeCat = 'all'; activeAud = 'all';
            document.querySelectorAll('.filter-btn-sm').forEach(b => b.classList.remove('active'));
            document.querySelector('.filter-btn-sm[data-audience="all"]').classList.add('active');
            applyFilters();
            allCards().forEach(c => { c.style.display = ''; c.classList.remove('hidden'); });
            allSections().forEach(s => s.style.display = '');
            document.getElementById('noResults').classList.remove('show');
            return;
        }
        allSections().forEach(s => s.style.display = '');
        let found = 0;
        allCards().forEach(card => {
            if (card.textContent.toLowerCase().includes(q)) {
                card.style.display = ''; card.classList.remove('hidden'); card.classList.add('animate-on-scroll', 'visible'); found++;
            } else { card.style.display = 'none'; }
        });
        allSections().forEach(sec => {
            const vis = sec.querySelectorAll('.service-card:not([style*="display: none"])');
            sec.style.display = vis.length ? '' : 'none';
        });
        document.getElementById('noResults').classList.toggle('show', found === 0);
        const first = document.querySelector('.service-card:not([style*="display: none"])');
        if (first) first.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    document.getElementById('searchBtn').addEventListener('click', doSearch);
    searchInput.addEventListener('keydown', e => { if (e.key === 'Enter') doSearch(); });

    // --- Carousel ---
    const slides = track.querySelectorAll('.carousel-slide');
    const dotsC = document.getElementById('carouselDots');
    let curSlide = 0, autoInt;
    slides.forEach((_, i) => {
        const d = document.createElement('button');
        d.classList.add('carousel-dot'); if (i === 0) d.classList.add('active');
        d.addEventListener('click', () => goSlide(i));
        dotsC.appendChild(d);
    });
    function goSlide(i) { curSlide = i; track.style.transform = `translateX(-${i * 100}%)`; dotsC.querySelectorAll('.carousel-dot').forEach((d, j) => d.classList.toggle('active', j === i)); }
    function nextS() { goSlide((curSlide + 1) % slides.length); }
    function prevS() { goSlide((curSlide - 1 + slides.length) % slides.length); }
    document.getElementById('carouselNext').addEventListener('click', () => { nextS(); clearInterval(autoInt); startAuto(); });
    document.getElementById('carouselPrev').addEventListener('click', () => { prevS(); clearInterval(autoInt); startAuto(); });
    function startAuto() { autoInt = setInterval(nextS, 4500); }
    startAuto();

    // --- Emergency FAB ---
    const fabMain = document.getElementById('fabMain');
    const fabOpts = document.getElementById('fabOptions');
    fabMain.addEventListener('click', () => fabOpts.classList.toggle('show'));
    document.addEventListener('click', e => { if (!e.target.closest('.emergency-fab')) fabOpts.classList.remove('show'); });

    // --- Modal ---
    const mOverlay = document.getElementById('modalOverlay');
    const serviceMap = {};
    SERVICES.forEach(s => { serviceMap[s.id] = s; });

    let currentServiceTitle = '';

    function openModal(sid) {
        const s = serviceMap[sid]; if (!s) return;
        const cat = CATEGORIES.find(c => c.id === s.cat);
        currentServiceTitle = s.title;
        // Mapa de anexos por categoría
        const ANEXOS = {
            'carmen-verde': 'Anexo 1400 — Desarrollo Ambiental',
            'seguridad':    'Anexo 1350 — Seguridad Ciudadana / Anexo 1360 — Serenazgo',
            'educacion':    'Anexo 1310 — Educación, Cultura y Deporte',
            'juventud':     'Anexo 1230 — Desarrollo Económico',
            'salud':        'Anexo 1410 — Sanidad / Ambulancia: 928-355-561',
            'familia':      'Anexo 1320 — Bienestar Social (DEMUNA) / Anexo 1330 — CIAM-OMAPED',
            'tramites':     'Anexo 1240 — Administración Tributaria / Anexo 1225 — Obras y Catastro'
        };
        const anexoEl = document.getElementById('modalAnexo');
        if (anexoEl) anexoEl.textContent = ANEXOS[s.cat] ? '📌 ' + ANEXOS[s.cat] : '';
        document.getElementById('modalTitle').textContent = s.title;
        document.getElementById('modalDesc').textContent = s.desc;
        document.getElementById('modalBadge').textContent = cat.icon + ' ' + cat.title;
        document.getElementById('modalBadge').className = 'modal-badge badge-' + cat.color;
        document.getElementById('modalFreq').textContent = s.freq;
        document.getElementById('modalBenef').innerHTML =
            s.benef && s.benef !== '—'
                ? `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="display:inline;vertical-align:middle;margin-right:4px"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg><strong>${s.benef}</strong> vecinos beneficiados en 2025`
                : 'Disponible para todos los vecinos';
        document.getElementById('modalHeader').className = 'modal-header mh-' + cat.color;
        mOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    function closeModal() { mOverlay.classList.remove('active'); document.body.style.overflow = ''; }

    // WhatsApp share
    document.getElementById('modalWhatsapp').addEventListener('click', () => {
        const msg = encodeURIComponent(
            `¡Hola! 👋 Mira este servicio gratuito de la Municipalidad de Carmen de la Legua que encontré:\n\n*${currentServiceTitle}*\n\nEncuéntralo en: Av. Primero de Mayo 898 o llama al 01-748505 📞`
        );
        window.open(`https://wa.me/?text=${msg}`, '_blank');
    });

    document.querySelectorAll('.card-cta').forEach(btn => {
        btn.addEventListener('click', e => { e.stopPropagation(); openModal(btn.dataset.service); });
    });
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('click', () => { const cta = card.querySelector('.card-cta'); if (cta) openModal(cta.dataset.service); });
    });
    document.getElementById('modalClose').addEventListener('click', closeModal);
    document.getElementById('modalCloseBtn').addEventListener('click', closeModal);
    mOverlay.addEventListener('click', e => { if (e.target === mOverlay) closeModal(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
});