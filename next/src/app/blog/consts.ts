export const queryParams = {
    populate: ['relacionados', 'relacionados.miniatura', 'autor', 'miniatura','secciones', 'secciones.imagen', 'secciones.leftImage', 'secciones.rightImage', 'secciones.image', 'secciones.relacionados', 'secciones.relacionados.miniatura', 'secciones.relacionados', 'secciones.minuatura', 'autor', 'autor.foto', 'involucrados', 'categoria_proyectos'],
}

export const listQueryParams = {
    populate: ['secciones', 'secciones.imagen', 'secciones.leftImage', 'secciones.rightImage', 'secciones.image', 'miniatura', 'relacionados', 'relacionados.miniatura', 'relacionados.secciones'],
}