import { fetchWithToken } from '@/dynamicRendering/utils';
import type { HomePageContent, HomeStat, HomeOffice, HomeService, HomeTexts, HomeHero } from './types';

const defaultStats: HomeStat[] = [
  { value: '50', label: 'Años de experiencia', fixedWidth: true },
  { value: '16', label: 'Países' },
  { value: '4', label: 'Millones de m² diseñados', fixedWidth: true },
  { value: '11', label: 'Premios' },
  { value: '110', label: 'Proyectos en México y LATAM' },
];

const defaultOffices: HomeOffice[] = [
  { title: 'Guadalajara', country: 'México' },
  { title: 'CDMX', country: 'México' },
  { title: 'L35 Barcelona', country: 'España' },
  { title: 'L35 Madrid', country: 'España' },
];

const defaultServices: HomeService[] = [
  {
    id: '1',
    title: 'Arquitectura',
    content:
      'Diseñamos espacios únicos que resuelven necesidades, potencian el uso del espacio y generan valor a largo plazo. Combinando funcionalidad, estética y sostenibilidad para crear entornos que mejoran la calidad de vida y una experiencia única en cada proyecto.',
    image: '/images/services/1.png',
  },
  {
    id: '2',
    title: 'Diseño de Interiores',
    content:
      'Creamos espacios que combinan estilo, funcionalidad y personalidad. Cada proyecto es pensado cuidadosamente, desde la selección de materiales hasta los detalles finales, para ofrecer ambientes únicos que se adapten a las necesidades y el carácter de cada cliente.',
    image: '/images/hotels/2.png',
  },
  {
    id: '3',
    title: 'Master Planning',
    content:
      'Desarrollamos proyectos de Master Plan que integran diseño, funcionalidad y visión a largo plazo. Creamos entornos donde lo residencial, comercial y recreativo se conectan estratégicamente para fomentar el crecimiento sostenible. Cada proyecto está pensado para adaptarse y evolucionar, asegurando un impacto positivo en el entorno.',
    image: '/images/shopping_centers/3.png',
  },
  {
    id: '4',
    title: 'Branding y Diseño Gráfico',
    content:
      'Creamos marcas que cuentan historias y generan conexiones significativas. Cada proyecto está pensado para construir una narrativa visual que el usuario vivirá, desde el primer contacto hasta su experiencia en el espacio. Nuestro enfoque combina estrategia, diseño y emoción, transformando cada elemento en una herramienta que comunica y refuerza la identidad de la marca.',
    image: '/images/dwelling/4.png',
  },
];

const defaultTexts: HomeTexts = {
  servicesTitle: 'Servicios',
  collaborationTitle: 'Diseñamos desde la colaboración',
  collaborationDescription:
    'Escuchamos, entendemos y colaboramos con cada cliente para dar vida a espacios que reflejan su esencia y superan expectativas',
  projectsTitle: 'Proyectos destacados',
  finalCtaTitle:
    'Diseñemos de la mano espacios que trasciendan e historias que conectan',
  ctaStudyLabel: 'Conoce el estudio',
  ctaStudyHref: '/the_study',
  ctaProjectsLabel: 'Explora nuestros proyectos',
  ctaProjectsHref: '/projects',
  finalCtaLabel: 'Trabajemos Juntos',
  finalCtaHref: '/contact',
};

const defaultHero: HomeHero = {
  title1: 'Éxito a través',
  title2: 'del diseño',
  description: 'Somos una empresa de diseño que ayuda a crear productos exitosos.',
  buttonLabel: 'Trabajemos Juntos',
  buttonHref: '/contact',
  image: '/images/hero.png',
};

export async function getHomeContent(): Promise<HomePageContent> {
  try {
    const response = await fetchWithToken<any>(
      `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/pagina-inicio?populate=*`,
      { next: { revalidate: 60 } }
    );

    const attrs = response?.data?.attributes ?? {};

    const heroIntro: boolean = attrs?.heroIntro ?? true;

    const stats: HomeStat[] = Array.isArray(attrs?.stats) && attrs.stats.length
      ? attrs.stats
      : defaultStats;

    const oficinas: HomeOffice[] = Array.isArray(attrs?.oficinas) && attrs.oficinas.length
      ? attrs.oficinas
      : defaultOffices;

    const serviciosRaw: HomeService[] = attrs?.servicios ?? attrs?.services ?? [];
    const servicios: HomeService[] = serviciosRaw.length ? serviciosRaw.map((s, idx) => ({
      id: s.id ?? `${idx + 1}`,
      title: s.title,
      content: s.content,
      image: typeof s.image === 'string' ? s.image : (s.image?.url ?? ''),
    })) : defaultServices;

    const textos: HomeTexts = { ...defaultTexts, ...(attrs?.textos ?? attrs?.texts ?? {}) };

    const hero: HomeHero = {
      title1: attrs?.heroTitle1 ?? defaultHero.title1,
      title2: attrs?.heroTitle2 ?? defaultHero.title2,
      description: attrs?.heroDescription ?? defaultHero.description,
      buttonLabel: attrs?.heroButtonLabel ?? defaultHero.buttonLabel,
      buttonHref: attrs?.heroButtonHref ?? defaultHero.buttonHref,
      image: attrs?.heroImage?.url ?? defaultHero.image,
    };

    return { heroIntro, hero, stats, oficinas, servicios, textos };
  } catch (err) {
    // fallback entirely if fetch fails
    return {
      heroIntro: true,
      hero: defaultHero,
      stats: defaultStats,
      oficinas: defaultOffices,
      servicios: defaultServices,
      textos: defaultTexts,
    };
  }
}
