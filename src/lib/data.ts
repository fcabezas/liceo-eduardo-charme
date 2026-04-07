export const siteConfig = {
  name: "Liceo Eduardo Charme",
  description:
    "Liceo de Educación Media Técnico Profesional en San Fernando, Chile. 121 años formando profesionales.",
  url: "https://liceoeduardocharme.cl",
  address: "Argomedo 485, San Fernando, Región de O'Higgins, Chile",
  phone: "+56 9 5813 7970",
  phone2: "+56 9 8838 8822",
  email: "contacto@liceoeduardocharme.cl",
  rbd: "2448-1",
  director: "Oscar Muñoz Yáñez",
  founded: 1905,
  social: {
    instagram: "https://instagram.com/liceocharme",
    facebook: "https://www.facebook.com/liceo.eduardo.charme.2025",
  },
};

export const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/quienes-somos", label: "Quiénes Somos" },
  { href: "/especialidades", label: "Especialidades" },
  { href: "/oferta-academica", label: "Oferta Académica" },
  { href: "/noticias", label: "Noticias" },
  { href: "/evaluaciones", label: "Evaluaciones" },
  { href: "/contacto", label: "Contacto" },
];

export const specialties = [
  {
    id: "administracion",
    title: "Técnico en Administración",
    mention: "Mención Recursos Humanos",
    description:
      "Formación en gestión administrativa, recursos humanos, contabilidad básica y herramientas ofimáticas para el mundo empresarial.",
    icon: "Briefcase",
    color: "bg-blue-500",
    fieldWork: [
      "Empresas públicas y privadas",
      "Departamentos de recursos humanos",
      "Áreas administrativas y contables",
      "Emprendimiento propio",
    ],
    continuity: [
      "Ingeniería en Administración de Empresas",
      "Ingeniería en Recursos Humanos",
      "Contabilidad y Auditoría",
      "Administración Pública",
    ],
  },
  {
    id: "enfermeria",
    title: "Técnico en Atención de Enfermería",
    mention: "Adulto Mayor y Atención de Enfermería",
    description:
      "Capacitación en cuidados básicos de salud, atención de pacientes, primeros auxilios y apoyo en centros de salud.",
    icon: "Heart",
    color: "bg-red-500",
    fieldWork: [
      "Hospitales y clínicas",
      "Centros de salud familiar (CESFAM)",
      "Hogares de adulto mayor",
      "Centros de rehabilitación",
    ],
    continuity: [
      "Enfermería",
      "Técnico en Enfermería de Nivel Superior",
      "Kinesiología",
      "Terapia Ocupacional",
    ],
  },
  {
    id: "programacion",
    title: "Técnico en Programación",
    mention: "",
    description:
      "Desarrollo de software, programación en diversos lenguajes, bases de datos y soluciones tecnológicas.",
    icon: "Code",
    color: "bg-emerald-500",
    fieldWork: [
      "Empresas de desarrollo de software",
      "Departamentos de TI",
      "Startups tecnológicas",
      "Freelance y emprendimiento digital",
    ],
    continuity: [
      "Ingeniería en Informática",
      "Ingeniería Civil en Computación",
      "Analista Programador",
      "Ingeniería en Ciberseguridad",
    ],
  },
  {
    id: "turismo",
    title: "Técnico en Servicios de Turismo",
    mention: "",
    description:
      "Formación en atención al turista, gestión hotelera, patrimonio cultural y servicios turísticos de la región.",
    icon: "MapPin",
    color: "bg-amber-500",
    fieldWork: [
      "Agencias de turismo",
      "Hoteles y hostales",
      "Servicios de guía turístico",
      "Gestión de patrimonio cultural",
    ],
    continuity: [
      "Ingeniería en Turismo y Hotelería",
      "Administración Turística",
      "Ecoturismo",
      "Gestión Cultural",
    ],
  },
];

export const sealItems = [
  {
    title: "Respeto a las Diversidades",
    description:
      "El Liceo valora y respeta las diferencias individuales en términos de género, origen étnico, orientación sexual, habilidades, entre otros aspectos. Se promueve la creación de un entorno inclusivo donde todas las personas se sientan aceptadas y valoradas.",
    icon: "Users",
  },
  {
    title: "Convivencia Armoniosa",
    description:
      "Promover la coexistencia pacífica de los miembros de la comunidad educativa con interrelación positiva.",
    icon: "Handshake",
  },
  {
    title: "Formación Humana y Profesional",
    description:
      "Preparar estudiantes para asumir una vida responsable como ciudadanos críticos y trabajadores competentes.",
    icon: "GraduationCap",
  },
  {
    title: "Innovación y Emprendimiento",
    description:
      "Promover la innovación pedagógica y el trabajo colaborativo orientado a nuevas competencias.",
    icon: "Lightbulb",
  },
  {
    title: "Conciencia Ambientalista",
    description:
      "El Liceo promueve la educación ambiental, conciencia ambiental, conocimiento ecológico, actitudes y valores hacia el medio ambiente para tomar un compromiso de acciones y responsabilidades que tengan por fin el uso racional de los recursos y poder lograr así un desarrollo adecuado y sostenible.",
    icon: "Leaf",
  },
];

export const values = [
  "Responsabilidad",
  "Honestidad",
  "Compromiso social",
  "Respeto",
  "Solidaridad",
  "Tolerancia",
  "Lealtad",
];

export const talleres = [
  "Comprensión lectora",
  "Pensamiento crítico",
  "Deportes y recreación",
  "Fútbol",
  "Vóleibol",
  "Básquetbol",
  "Música y grupo instrumental",
  "Radio escolar",
  "Banda de guerra",
  "Otros: por confirmar",
];

export const newsItems = [
  {
    id: 1,
    title: "Acto de Inicio Año Escolar 2026",
    excerpt:
      "Con gran entusiasmo damos la bienvenida a nuestros estudiantes en este nuevo año académico, reafirmando nuestro compromiso con la excelencia educativa.",
    category: "Institucional",
    date: "2026-03-04",
    image: "/images/noticia-inicio-escolar.jpg",
  },
  {
    id: 2,
    title: "Liceo Eduardo Charme se integra a la Red para la Innovación en Evaluación de la Universidad de Chile",
    excerpt:
      "El Liceo Eduardo Charme se incorporó oficialmente a la Red de Establecimientos para la Innovación en Evaluación, iniciativa liderada por el Departamento de Estudios Pedagógicos de la Universidad de Chile y coordinada por la académica Teresa Flórez. Esta red reúne a más de 50 establecimientos a lo largo del país que trabajan en la transformación de sus culturas evaluativas, transitando desde la calificación numérica tradicional hacia un modelo de Evaluación para el Aprendizaje (EpA). Con esta incorporación, nuestro liceo comenzará a implementar prácticas como la retroalimentación formativa descriptiva, la diversificación de instrumentos de evaluación —incluyendo portafolios, proyectos y rúbricas—, y el fortalecimiento de la autoevaluación y coevaluación entre estudiantes. El objetivo es potenciar el aprendizaje profundo, la motivación intrínseca y el respeto por los distintos ritmos de aprendizaje de cada estudiante. Este hito refuerza el compromiso del Liceo Eduardo Charme con la innovación pedagógica y el mejoramiento continuo de la educación pública en San Fernando y la Región de O'Higgins.",
    category: "Académico",
    date: "2026-03-15",
    image: "/images/noticia-red-evaluacion.jpg",
    youtube: "https://www.youtube.com/watch?v=oRGIJws7gWA",
  },
  {
    id: 3,
    title: "Inicio de entrenamientos de vóleibol 2026: invitación abierta para estudiantes del Liceo Eduardo Charme",
    excerpt:
      "El Liceo Eduardo Charme da inicio a los entrenamientos de vóleibol del año 2026, con una invitación abierta a todos los estudiantes que quieran sumarse a esta disciplina deportiva. Las sesiones se realizarán los días lunes, martes y jueves de 16:00 a 18:00 horas en las instalaciones del liceo. No se requiere experiencia previa: el objetivo es fomentar la actividad física, el trabajo en equipo y la vida saludable entre nuestros jóvenes. El deporte es un pilar fundamental en la formación integral que promueve nuestro establecimiento, contribuyendo al bienestar emocional, la disciplina personal y la sana convivencia escolar. Invitamos a todas y todos los estudiantes interesados a acercarse al departamento de Educación Física para inscribirse. ¡Los esperamos en la cancha!",
    category: "Deportes",
    date: "2026-03-18",
    image: "/images/noticia-voleibol.jpg",
  },
  {
    id: 4,
    title: "Acto Inclusión Social y No Discriminación en el Liceo Eduardo Charme",
    excerpt:
      "El Liceo Eduardo Charme llevó a cabo el Acto de Inclusión Social y No Discriminación, una jornada dedicada a reflexionar sobre la importancia de construir una comunidad educativa libre de prejuicios y respetuosa de la diversidad. La actividad reunió a estudiantes, docentes y asistentes de la educación en torno a presentaciones, testimonios y dinámicas que visibilizaron el valor de la inclusión como pilar fundamental del proyecto educativo del liceo. Esta iniciativa se enmarca en el sello institucional de inclusión del establecimiento, que busca eliminar todas las formas de discriminación arbitraria que impidan el aprendizaje y la participación plena de cada estudiante. El acto reafirmó el compromiso del Liceo Eduardo Charme con la formación de ciudadanos críticos, empáticos y comprometidos con una sociedad más justa, fortaleciendo la convivencia escolar y promoviendo el respeto como base de las relaciones humanas en San Fernando y la Región de O'Higgins.",
    category: "Institucional",
    date: "2026-03-20",
    image: "/images/noticia-inclusion.jpg",
  },
  {
    id: 5,
    title: "Primera reunión de apoderados 2026 en el Liceo Eduardo Charme",
    excerpt:
      "El Liceo Eduardo Charme realizó la primera reunión general de apoderados del año escolar 2026, instancia en la que el equipo directivo dio la bienvenida a las familias y presentó las principales orientaciones para el presente período académico. Durante la jornada se abordaron temas clave como la nueva ley que prohíbe el uso de teléfonos celulares en la sala de clases, normativa que busca mejorar la concentración, reducir las distracciones y fortalecer la convivencia dentro del aula. El equipo de Inspectoría General entregó información sobre horarios, asistencia, puntualidad y protocolos internos del establecimiento. Por su parte, la Unidad Técnico Pedagógica (UTP) compartió las líneas de trabajo académico del año, incluyendo los planes de evaluación y el acompañamiento pedagógico a los estudiantes. Finalmente, el área de Orientación presentó los programas de apoyo socioemocional, prevención y acompañamiento disponibles para los estudiantes y sus familias. Esta reunión reforzó el vínculo entre el liceo y los apoderados, pieza fundamental para el éxito del proceso educativo en San Fernando y la Región de O'Higgins.",
    category: "Institucional",
    date: "2026-03-17",
    image: "/images/noticia-reunion-apoderados.jpg",
  },
  {
    id: 6,
    title: "Liceo Eduardo Charme marcha por el Día Mundial de la Concienciación sobre el Autismo en San Fernando",
    excerpt:
      "El 2 de abril, Día Mundial de la Concienciación sobre el Autismo, el Liceo Eduardo Charme demostró que la inclusión es acción: 120 estudiantes y el equipo completo del Programa de Integración Escolar (PIE), liderado por la coordinadora Karina Vásquez Navarro, participaron en una caminata organizada por la Fundación Autismo San Fernando con el objetivo de visibilizar y promover la comprensión y el respeto hacia las personas con Trastorno del Espectro Autista (TEA).\n\nLa actividad recorrió las calles de San Fernando como un gesto colectivo de empatía y compromiso. El director del establecimiento, profesor Oscar Miguel Ángel Muñoz Yáñez, felicitó a la Fundación Autismo San Fernando por el éxito de la jornada y destacó la participación activa de los estudiantes del liceo: \"Una comunidad que avanza unida, donde cada persona importa, se fortalece en el respeto y la empatía, garantizando no solo desde el discurso, sino con acciones concretas, los derechos de los niños, niñas y adolescentes neurodivergentes\".\n\nEsta iniciativa forma parte del sello educativo de Respeto a las Diversidades del Liceo Eduardo Charme, que trabaja permanentemente para construir un entorno escolar inclusivo donde cada estudiante, independientemente de sus características y necesidades, se sienta aceptado, valorado y protagonista de su propio aprendizaje. El Programa de Integración Escolar (PIE) del liceo acompaña cotidianamente a estudiantes con necesidades educativas especiales, articulando apoyos especializados con la comunidad escolar.\n\nDesde el Liceo Eduardo Charme reafirmamos: la inclusión no es una palabra, es una construcción diaria.",
    category: "Inclusión",
    date: "2026-04-02",
    image: "/images/tea/001.jpeg",
    gallery: [
      "/images/tea/001.jpeg",
      "/images/tea/002.jpeg",
      "/images/tea/003.jpeg",
      "/images/tea/004.jpeg",
      "/images/tea/005.jpeg",
      "/images/tea/006.jpeg",
      "/images/tea/007.jpeg",
      "/images/tea/008.jpeg",
      "/images/tea/009.jpeg",
      "/images/tea/010.jpeg",
      "/images/tea/011.jpeg",
      "/images/tea/012.jpeg",
      "/images/tea/013.jpeg",
      "/images/tea/014.jpeg",
      "/images/tea/015.jpeg",
      "/images/tea/016.jpeg",
      "/images/tea/017.jpeg",
      "/images/tea/018.jpeg",
      "/images/tea/019.jpeg",
    ],
  },
  {
    id: 7,
    title: "Estudiantes de Turismo del Liceo Eduardo Charme visitan el Museo Lircunlauta en San Fernando",
    excerpt:
      "La formación técnica profesional va más allá del aula: estudiantes de la Especialidad de Servicios de Turismo del Liceo Eduardo Charme realizaron una visita guiada al Museo Lircunlauta, uno de los principales referentes del patrimonio cultural e histórico de la comuna de San Fernando.\n\nLa actividad, enmarcada en el plan formativo de la especialidad, fue coordinada por los profesores Francisco Lillo y José Iván Aliaga, quienes acompañaron a los estudiantes durante el recorrido. El Museo Lircunlauta ofrece una mirada profunda a la historia, tradiciones y cultura de la región, constituyendo un espacio de aprendizaje invaluable para quienes se forman como técnicos en turismo y servicios.\n\nEl Liceo Eduardo Charme agradece al equipo del Museo Lircunlauta y a la Ilustre Municipalidad de San Fernando por las facilidades otorgadas para llevar a cabo esta experiencia formativa. Iniciativas como esta son fundamentales para que nuestros estudiantes desarrollen competencias prácticas en terreno, conozcan el patrimonio local y comprendan el potencial turístico de San Fernando y la Región de O'Higgins.\n\nLa Especialidad de Servicios de Turismo del Liceo Eduardo Charme es la única de su tipo en la provincia de Colchagua, preparando técnicos de nivel medio con las habilidades que demanda la industria turística nacional.",
    category: "Académico",
    date: "2026-04-02",
    image: "/images/turismo-museo/001.jpeg",
    gallery: [
      "/images/turismo-museo/001.jpeg",
      "/images/turismo-museo/002.jpeg",
      "/images/turismo-museo/003.jpeg",
      "/images/turismo-museo/004.jpeg",
      "/images/turismo-museo/005.jpeg",
      "/images/turismo-museo/006.jpeg",
    ],
  },
  {
    id: 8,
    title: "Liceo Eduardo Charme y Municipalidad de San Fernando firman compromisos por una Educación Pública de Calidad",
    excerpt:
      "El Liceo Eduardo Charme dio un paso concreto hacia el fortalecimiento de la educación pública en San Fernando: el director Oscar Miguel Ángel Muñoz Yáñez y el equipo directivo del establecimiento se reunieron con el Alcalde de la comuna, Pablo Silva Pérez, y su equipo municipal, para establecer compromisos formales en el marco del Convenio de Colaboración entre ambas instituciones.\n\nEl convenio contempla acciones directas en beneficio de los estudiantes del liceo, entre ellas: habilitación de Centros de Práctica para las especialidades Técnico Profesionales, Salidas Pedagógicas a espacios y recursos comunales, realización de Charlas y Talleres con profesionales municipales, apoyo en la mantención de áreas verdes del establecimiento, y reforzamiento de la seguridad de los estudiantes al término de la jornada escolar.\n\nEl director del liceo valoró la excelente disposición del Alcalde Silva Pérez para comprometer recursos materiales y humanos en la implementación del Proyecto Educativo Institucional: \"Este convenio nos permite garantizar más y mejores oportunidades para todos nuestros estudiantes, con especial atención en aquellos que provienen de los sectores más vulnerables de la comuna\".\n\nEsta alianza estratégica entre el Liceo Eduardo Charme y la Municipalidad de San Fernando reafirma que la educación pública de calidad se construye en red, articulando el trabajo escolar con los recursos y el compromiso del territorio.",
    category: "Institucional",
    date: "2026-04-07",
    image: "/images/muni/001.jpg",
    gallery: [
      "/images/muni/001.jpg",
      "/images/muni/002.jpg",
      "/images/muni/003.jpg",
      "/images/muni/004.jpg",
      "/images/muni/005.jpg",
    ],
  },
];

export const documents = [
  {
    id: 1,
    title: "Proyecto Educativo Institucional (PEI)",
    description: "Documento que define la identidad y orientaciones del liceo.",
    category: "Institucional",
    fileType: "PDF",
    size: "2.4 MB",
    date: "2025-12-01",
  },
  {
    id: 2,
    title: "Reglamento Interno",
    description:
      "Normativa que regula el funcionamiento interno del establecimiento.",
    category: "Normativo",
    fileType: "PDF",
    size: "1.8 MB",
    date: "2025-12-01",
    downloadUrl: "/docs/reglamento-interno.pdf",
  },
  {
    id: 3,
    title: "Reglamento de Evaluación",
    description:
      "Criterios y procedimientos de evaluación académica del liceo.",
    category: "Académico",
    fileType: "PDF",
    size: "980 KB",
    date: "2025-12-01",
    downloadUrl: "/docs/reglamento-de-evaluacion.pdf",
  },
  {
    id: 4,
    title: "Protocolos de Actuación",
    description:
      "Procedimientos ante situaciones de emergencia y convivencia escolar.",
    category: "Normativo",
    fileType: "PDF",
    size: "1.5 MB",
    date: "2025-12-01",
  },
  {
    id: 5,
    title: "Manual de Convivencia Escolar",
    description:
      "Guía para la sana convivencia entre todos los miembros de la comunidad educativa.",
    category: "Normativo",
    fileType: "PDF",
    size: "1.2 MB",
    date: "2025-12-01",
  },
  {
    id: 6,
    title: "Calendario Escolar 2026",
    description:
      "Fechas importantes, feriados, evaluaciones y actividades del año escolar.",
    category: "Académico",
    fileType: "PDF",
    size: "540 KB",
    date: "2026-01-15",
  },
];

export const calendarEvents = [
  {
    id: 1,
    title: "Inicio Año Escolar",
    date: "2026-03-02",
    type: "academic",
    description: "Primer día de clases del año escolar 2026.",
  },
  {
    id: 2,
    title: "Reunión de Apoderados",
    date: "2026-03-25",
    type: "meeting",
    description: "Primera reunión general de padres y apoderados.",
  },
  {
    id: 3,
    title: "Evaluación Diagnóstica",
    date: "2026-03-16",
    type: "evaluation",
    description: "Evaluaciones diagnósticas en todas las asignaturas.",
  },
  {
    id: 4,
    title: "Día de la Convivencia Escolar",
    date: "2026-04-10",
    type: "cultural",
    description: "Actividades de integración y convivencia escolar.",
  },
  {
    id: 5,
    title: "Feriado - Viernes Santo",
    date: "2026-04-03",
    type: "holiday",
    description: "Feriado nacional - Sin clases.",
  },
  {
    id: 6,
    title: "Torneo Deportivo Interno",
    date: "2026-04-17",
    type: "sports",
    description: "Campeonato interno de fútbol, vóleibol y básquetbol.",
  },
  {
    id: 7,
    title: "Feriado - Día del Trabajo",
    date: "2026-05-01",
    type: "holiday",
    description: "Feriado nacional - Sin clases.",
  },
  {
    id: 8,
    title: "Aniversario del Liceo",
    date: "2026-05-15",
    type: "cultural",
    description: "Celebración del 121° aniversario del Liceo Eduardo Charme.",
  },
  {
    id: 9,
    title: "Semana de Evaluaciones",
    date: "2026-05-25",
    type: "evaluation",
    description: "Primera ronda de evaluaciones semestrales.",
  },
  {
    id: 10,
    title: "Feria de Especialidades TP",
    date: "2026-06-05",
    type: "academic",
    description: "Presentación de las especialidades técnico profesionales.",
  },
  {
    id: 11,
    title: "Reunión de Profesores Jefes",
    date: "2026-03-31",
    type: "meeting",
    description: "Reunión de profesores jefes a las 16:15 hrs.",
  },
];

export const galleryImages = [
  {
    id: 1,
    src: "/images/inclusion-dsc05018.jpg",
    alt: "Acto de Inclusión Social y No Discriminación - Liceo Eduardo Charme",
    category: "Eventos y ceremonias",
  },
  {
    id: 2,
    src: "/images/inclusion-dsc05025.jpg",
    alt: "Estudiantes participando en jornada de inclusión",
    category: "Eventos y ceremonias",
  },
  {
    id: 3,
    src: "/images/inclusion-dsc05048.jpg",
    alt: "Comunidad educativa en acto de no discriminación",
    category: "Eventos y ceremonias",
  },
  {
    id: 4,
    src: "/images/inclusion-dsc05055.jpg",
    alt: "Presentación en acto de inclusión social",
    category: "Eventos y ceremonias",
  },
  {
    id: 5,
    src: "/images/inclusion-dsc05075.jpg",
    alt: "Actividad de reflexión sobre diversidad e inclusión",
    category: "Eventos y ceremonias",
  },
  {
    id: 6,
    src: "/images/inclusion-dsc05078.jpg",
    alt: "Jornada de inclusión - participación estudiantil",
    category: "Eventos y ceremonias",
  },
  {
    id: 7,
    src: "/images/inclusion-dsc05081.jpg",
    alt: "Acto inclusión - comunidad Liceo Eduardo Charme",
    category: "Eventos y ceremonias",
  },
  {
    id: 8,
    src: "/images/inclusion-dsc05087.jpg",
    alt: "Estudiantes en actividad de convivencia escolar",
    category: "Eventos y ceremonias",
  },
  {
    id: 9,
    src: "/images/inclusion-dsc05090.jpg",
    alt: "Dinámica grupal en acto de inclusión social",
    category: "Eventos y ceremonias",
  },
  {
    id: 10,
    src: "/images/inclusion-dsc05115.jpg",
    alt: "Cierre del acto de inclusión y no discriminación",
    category: "Eventos y ceremonias",
  },
];

export const faqItems = [
  {
    question: "¿Cuál es el horario de clases?",
    answer:
      "La jornada escolar es de 8:00 a 16:25 horas, de lunes a viernes.",
  },
  {
    question: "¿Cómo postulo al liceo?",
    answer:
      "La postulación se realiza a través del Sistema de Admisión Escolar (SAE) del Ministerio de Educación. Puedes acceder en www.sistemadeadmisionescolar.cl",
  },
  {
    question: "¿Desde qué nivel puedo ingresar?",
    answer:
      "El liceo ofrece educación desde 1° a 4° Medio. Las especialidades técnico profesionales se cursan en 3° y 4° Medio.",
  },
  {
    question: "¿El liceo es gratuito?",
    answer:
      "Sí, el Liceo Eduardo Charme es un establecimiento público dependiente del SLEP Colchagua, por lo que la educación es completamente gratuita.",
  },
  {
    question: "¿Qué especialidades técnicas ofrece el liceo?",
    answer:
      "Ofrecemos cuatro especialidades: Administración mención Recursos Humanos, Atención de Enfermería, Programación y Servicios de Turismo.",
  },
  {
    question: "¿Los estudiantes realizan práctica profesional?",
    answer:
      "Sí, los estudiantes de 4° Medio de las especialidades TP realizan una práctica profesional obligatoria en empresas e instituciones del rubro correspondiente.",
  },
];

export const teamMembers = [
  {
    name: "Oscar Muñoz Yáñez",
    role: "Director",
    image: "/images/team/director.jpg",
  },
  {
    name: "Claudio Calderón Ibarra",
    role: "Inspector General",
    image: "/images/team/inspector-general.jpg",
  },
  {
    name: "Sandra Baeza Ramírez",
    role: "Inspectora General",
    image: "/images/team/inspectora-general.jpg",
  },
  {
    name: "Rosa María Santibañez Montero",
    role: "Jefa UTP",
    image: "/images/team/jefa-utp.jpg",
  },
  {
    name: "Madeleine Leiva Castro",
    role: "Orientadora",
    image: "/images/team/orientadora.jpg",
  },
  {
    name: "Karina Vásquez Navarro",
    role: "Coordinadora PIE",
    image: "/images/team/coordinadora-pie.jpg",
  },
  {
    name: "Sandra Rodríguez Hernández",
    role: "Coordinadora Técnico Profesional",
    image: "/images/team/coordinadora-tp.jpg",
  },
];

export const organizationGroups = [
  {
    title: "Equipo Directivo",
    members: [
      { name: "Oscar Muñoz Yáñez", role: "Director", image: "/images/team/director.jpg" },
      { name: "Claudio Calderón Ibarra", role: "Inspector General", image: "/images/team/inspector-general.jpg" },
      { name: "Sandra Baeza Ramírez", role: "Inspectora General", image: "/images/team/inspectora-general.jpg" },
      { name: "Rosa María Santibañez Montero", role: "Jefa UTP", image: "/images/team/jefa-utp.jpg" },
      { name: "Madeleine Leiva Castro", role: "Orientadora", image: "/images/team/orientadora.jpg" },
      { name: "Karina Vásquez Navarro", role: "Coordinadora PIE", image: "/images/team/coordinadora-pie.jpg" },
      { name: "Sandra Rodríguez Hernández", role: "Coordinadora Técnico Profesional", image: "/images/team/coordinadora-tp.jpg" },
    ],
  },
  {
    title: "Docentes",
    members: [
      { name: "Por confirmar", role: "Docente de Lenguaje" },
      { name: "Por confirmar", role: "Docente de Matemática" },
      { name: "Por confirmar", role: "Docente de Historia" },
      { name: "Por confirmar", role: "Docente de Ciencias" },
      { name: "Por confirmar", role: "Docente de Inglés" },
      { name: "Por confirmar", role: "Docente de Educación Física" },
      { name: "Por confirmar", role: "Docente de Artes" },
    ],
  },
  {
    title: "Docentes de Especialidad TP",
    members: [
      { name: "Por confirmar", role: "Docente Administración" },
      { name: "Por confirmar", role: "Docente Enfermería" },
      { name: "Por confirmar", role: "Docente Programación" },
      { name: "Por confirmar", role: "Docente Turismo" },
    ],
  },
  {
    title: "Asistentes de la Educación",
    members: [
      { name: "Por confirmar", role: "Asistente de Aula" },
      { name: "Por confirmar", role: "Asistente Administrativo" },
      { name: "Por confirmar", role: "Auxiliar de Servicios" },
    ],
  },
  {
    title: "Programa de Integración Escolar",
    members: [
      { name: "Por confirmar", role: "Psicólogo/a" },
      { name: "Por confirmar", role: "Trabajador/a Social" },
      { name: "Por confirmar", role: "Fonoaudiólogo/a" },
    ],
  },
  {
    title: "Auxiliares",
    members: [
      { name: "Por confirmar", role: "Auxiliar" },
    ],
  },
  {
    title: "Internado",
    members: [
      { name: "Por confirmar", role: "Encargado/a Internado" },
    ],
  },
  {
    title: "Programa de Alimentación Escolar",
    members: [
      { name: "Por confirmar", role: "Encargado/a PAE" },
    ],
  },
];

export const testimonials = [
  {
    name: "Por confirmar",
    role: "Egresado/a Administración",
    year: "2024",
    quote:
      "El Liceo Eduardo Charme me entregó las herramientas para ingresar al mundo laboral con confianza. La formación en administración y recursos humanos me abrió puertas que no imaginé.",
  },
  {
    name: "Por confirmar",
    role: "Egresado/a Programación",
    year: "2023",
    quote:
      "Gracias a la especialidad de Programación descubrí mi vocación. Hoy estudio Ingeniería en Informática y todo partió en los laboratorios del liceo.",
  },
  {
    name: "Por confirmar",
    role: "Egresado/a Enfermería",
    year: "2024",
    quote:
      "La práctica profesional en centros de salud fue una experiencia invaluable. El liceo me preparó no solo técnicamente, sino como persona comprometida con el cuidado de otros.",
  },
];
