import { projectCards } from "../consts";

type Category = {
    title: string;
    description: string;
    projects: any[];
    image: string;
    secondDescription: string;
}

export type CategoryKey = "mixedUses" | "centrosComerciales" | "hotels" | "corporativo" | "dwellings" | "retail" | "latam";


export const categories: {
    [key in CategoryKey]: Category;
} = {
    "mixedUses": {
        title: 'Usos Mixtos',
        description: 'La integración física y funcional de espacios residenciales, comerciales, culturales y de transporte, diseñados para crear entornos equilibrados y dinámicos que fomentan la convivencia, la movilidad eficiente y el desarrollo sotenible.',
        projects: projectCards.mixedUses,
        image: '/images/categories/1.png',
        secondDescription: 'Cada proyecto de Usos Mixtos redefine la vida urbana, creando espacios que integran funciones y mejoran la calidad de vida.',
    },
    "centrosComerciales": {
        title: 'Centros Comerciales',
        description: 'La integración física y funcional de espacios residenciales, comerciales, culturales y de transporte, diseñados para crear entornos equilibrados y dinámicos que fomentan la convivencia, la movilidad eficiente y el desarrollo sotenible.',
        projects: [],
        image: '/images/categories/1.png',
        secondDescription: 'Cada proyecto de Usos Mixtos redefine la vida urbana, creando espacios que integran funciones y mejoran la calidad de vida.',
    },
    "hotels": {
        title: 'Hoteles',
        description: 'La integración física y funcional de espacios residenciales, comerciales, culturales y de transporte, diseñados para crear entornos equilibrados y dinámicos que fomentan la convivencia, la movilidad eficiente y el desarrollo sotenible.',
        projects: [],
        image: '/images/categories/1.png',
        secondDescription: 'Cada proyecto de Usos Mixtos redefine la vida urbana, creando espacios que integran funciones y mejoran la calidad de vida.',
    },
    "corporativo": {
        title: 'Corporativo',
        description: 'La integración física y funcional de espacios residenciales, comerciales, culturales y de transporte, diseñados para crear entornos equilibrados y dinámicos que fomentan la convivencia, la movilidad eficiente y el desarrollo sotenible.',
        projects: [],
        image: '/images/categories/1.png',
        secondDescription: 'Cada proyecto de Usos Mixtos redefine la vida urbana, creando espacios que integran funciones y mejoran la calidad de vida.',
    },
    "dwellings": {
        title: 'Dwellings',
        description: 'La integración física y funcional de espacios residenciales, comerciales, culturales y de transporte, diseñados para crear entornos equilibrados y dinámicos que fomentan la convivencia, la movilidad eficiente y el desarrollo sotenible.',
        projects: [],
        image: '/images/categories/1.png',
        secondDescription: 'Cada proyecto de Usos Mixtos redefine la vida urbana, creando espacios que integran funciones y mejoran la calidad de vida.',
    },
    "retail": {
        title: 'Retail',
        description: 'La integración física y funcional de espacios residenciales, comerciales, culturales y de transporte, diseñados para crear entornos equilibrados y dinámicos que fomentan la convivencia, la movilidad eficiente y el desarrollo sotenible.',
        projects: [],
        image: '/images/categories/1.png',
        secondDescription: 'Cada proyecto de Usos Mixtos redefine la vida urbana, creando espacios que integran funciones y mejoran la calidad de vida.',
    },
    "latam": {
        title: 'LATAM',
        description: 'La integración física y funcional de espacios residenciales, comerciales, culturales y de transporte, diseñados para crear entornos equilibrados y dinámicos que fomentan la convivencia, la movilidad eficiente y el desarrollo sotenible.',
        projects: [],
        image: '/images/categories/1.png',
        secondDescription: 'Cada proyecto de Usos Mixtos redefine la vida urbana, creando espacios que integran funciones y mejoran la calidad de vida.',
    },
}