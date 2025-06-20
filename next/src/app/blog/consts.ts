export const queryParams = {
  populate: [
    'relacionados',
    'relacionados.miniatura',
    'autor',
    'miniatura',
    'secciones',
    'secciones.imagen',
    'secciones.leftImage',
    'secciones.rightImage',
    'secciones.image',
    'secciones.relacionados',
    'secciones.relacionados.miniatura',
    'secciones.relacionados',
    'secciones.minuatura',
    'autor',
    'autor.foto',
    'involucrados',
    'categoria_proyectos',
  ],
  pagination: {
    pageSize: 100,
  },
};

export const listQueryParams = {
  populate: [
    'secciones',
    'secciones.imagen',
    'secciones.leftImage',
    'secciones.rightImage',
    'secciones.image',
    'miniatura',
    'relacionados',
    'relacionados.miniatura',
    'relacionados.secciones',
  ],
  pagination: {
    pageSize: 100,
  },
};

export const projectQueryParams = {
  populate: [
    'ficha',
    'premios',
    'categoria_proyecto',
    'secciones',
    'secciones.imagen',
    'secciones.image',
    'secciones.leftImage',
    'secciones.rightImage',
    'proyectos_relacionados',
    'proyectos_relacionados.miniatura',
    'proyectos_relacionados.categoria_proyecto',
    'lideres',
    'equipo',
    'premios',
    'concepto',
    'miniatura',
    'relacionados',
    'relacionados.miniatura',
  ],
};

export const categoryQueryParams = {
  populate: [
    'portada',
    'proyectos_ares',
    'proyectos_ares.miniatura',
    'proyectos_ares.categoria_proyecto',
  ],
};

export const clienteQueryParams = {
  populate: [
    'cliente.data',
  ],
};

export const destacadoQueryParams = {
  populate: [
    'proyectos',
    'proyectos.categoria_proyecto',
    'proyectos.miniatura',
    ...projectQueryParams.populate,
  ],
};