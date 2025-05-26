import { projectCards } from "../consts";

type Category = {
    title: string;
    description: string;
    projects: any[];
    image: string;
    secondDescription: string;
}

export type CategoryKey = "mixedUses" | "centrosComerciales" | "hotels" | "dwellings" | "retail" | "latam";


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
        description: 'Complejos arquitectónicos concebidos para integrar de manera dinámica espacios comerciales, gastronómicos y de entretenimiento, que se convierten en puntos de encuentro, referencia y activación dentro del paisaje urbano.',
        projects: projectCards.centrosComerciales,
        image: '/images/centros-comerciales.jpg',
        secondDescription: 'Diseñados para generar experiencias memorables, promover la interacción social y responder a las nuevas formas de consumo',
    },
    "hotels": {
        title: 'Hoteles',
        description: 'Diseño de espacios especializados en la industria hotelera, enfocados en maximizar el confort, la funcionalidad y la experiencia integral del huésped, cuidando cada detalle y la narrativa emocional de cada marca para crear entornos únicos.',
        projects: projectCards.hotels,
        image: '/images/Hoteles.jpg',
        secondDescription: 'El objetivo es equilibrar la operación eficiente con una atmósfera única, generando entornos que inspiran descanso, conexión y memorabilidad',
    },
    "dwellings": {
        title: 'Dwellings',
        description: 'Proyectos habitacionales multinivel que combinan servicios y comodidad, para diseñados para responder de manera eficiente a las necesidades, dinámicas y estilo de vida contemporáneo en entornos urbanos.',
        projects: projectCards.dwellings,
        image: '/images/Vivienda.jpg',
        secondDescription: 'Cada desarrollo responde a los nuevos estilos de vida, ofreciendo servicios, amenidades y experiencias que elevan la forma de habitar la ciudad',
    },
    "retail": {
        title: 'Retail',
        description: 'Diseño de espacios comerciales que conectan marcas y consumidores, ofreciendo más que productos: experiencias únicas y memorables que fortalecen la lealtad a la marca y fomentan en compromiso con el cliente.',
        projects: projectCards.retail,
        image: '/images/Retail.jpg',
        secondDescription: 'Los proyectos de retail buscan fortalecer la identidad de marca, fomentar una relación duradera basada en la experiencia, la interacción y el valor percibido',
    },
    "latam": {
        title: 'LATAM',
        description: 'Presencia regional que demuestra nuestra capacidad para diseñar con sensibilidad, entendimiento y visión estratégica en distintos contextos de América Latina. Nuestro trabajo en LATAM representa una arquitectura que cruza fronteras y fortalece nuestra visión global desde lo local.',
        projects: projectCards.latam,
        image: '/images/LATAM.jpg',
        secondDescription: 'Cada proyecto responde al entorno social, cultural y urbano de cada región,  y está alineado a las necesidades específicas de cada mercado.',
    },
}