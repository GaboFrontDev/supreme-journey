import React from 'react';

import { Header } from './Header';
import './page.css';
import Hero from '@/components/Hero/Hero';
import { HeaderNav } from '@/components/Header/HeaderNav';
import Indicadores from '@/components/Indicadores/Indicadores';

type User = {
  name: string;
};

export const Page: React.FC = () => {
  return (
    <div className='h-screen bg-c-blue-400 relative'>
      <div className='h-20 flex items-center justify-center px-4 absolute top-0 left-0 right-0'>
        <HeaderNav
          currentLocale='es'
          navigationLinks={[
            {
              id: 1,
              title: 'Proyectos',
              url: 'projects',
            },
            {
              id: 2,
              title: 'El estudio',
              url: 'about',
            },
            {
              id: 3,
              title: 'Cultura Ares',
              url: 'culture',
            },
            {
              id: 4,
              title: 'Blog',
              url: 'blog',
            },
          ]}
        />
      </div>
      <Hero
        title='Success through design'
        description='We are a design studio that helps you create successful products.'
        image='https://picsum.photos/1440/1024'
      />
      <Indicadores />
    </div>
  );
};
