
'use client';

import { useMemo } from "react";
import Section from "../components/Section";
import { CategoriaProyectoData } from "./strapi";
import { formatSlug } from "@/utils/formatSlug";
import ProjectCard from "../components/ProjectCard";
import CarouselWrapper from "../components/CarouselWrapper";
import Button from "../components/Button";


export const CategoryComponent = ({ category, searchTerm }: { category: CategoriaProyectoData, searchTerm: string }) => {
    const projects = useMemo(() => {
      return category.attributes.proyectos_ares.data.filter((item) =>
        item.attributes.nombre.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }, [category, searchTerm]);
  
    if (projects.length === 0) {
      return null;
    }
  
    return (
      <Section width='max-w-7xl' paddingTop='pt-0' key={category.id}>
        <div className='mb-16 flex items-center justify-between'>
          <h2 className='text-5xl font-bold text-[#636B69]'>
            {category.attributes.nombre}
          </h2>
          <Button
            href={`/projects/${formatSlug(category.attributes.nombre)}`}
            label='Ver todos'
            variant='secondary'
          />
        </div>
        <CarouselWrapper arrowOffsetY='75%'>
          {projects.slice(0, 4).map((project) => (
            <ProjectCard
              key={project.attributes.nombre}
              title={project.attributes.nombre}
              location={project.attributes.ficha.ubicacion}
              categories={project.attributes.categoria_proyecto.data.map(
                (category) => category.attributes.nombre
              )}
              image={
                project.attributes.miniatura.data.attributes.formats.medium.url
              }
              parentCategory={formatSlug(category.attributes.nombre)}
            />
          ))}
        </CarouselWrapper>
      </Section>
    );
  };