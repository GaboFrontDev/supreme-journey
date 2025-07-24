'use client';

import React, { useEffect, useState } from 'react';
import CollapsableList from '../../app/components/Collapsible';

const steps = [
  {
    number: '01',
    title: 'Escuchamos',
    description:
      'Nos acercamos al cliente con una mentalidad abierta, prestando atención a sus ideas, necesidades y aspiraciones. Este paso es clave para establecer una relación de confianza y definir una visión compartida del proyecto.',
  },
  {
    number: '02',
    title: 'Entendemos',
    description:
      'Analizamos a fondo el contexto del proyecto: el entorno, las expetativas del usuario y las condiciones específicas. Este entendimiento profundo nos permite abordar cada desafío con soluciones personalizadas y estratégicas.',
  },
  {
    number: '03',
    title: 'Exploramos',
    description:
      'Desarrollamos ideas y conceptos a través de un proceso creativo que combina inspiración, investigación y experiencia. Exploramos múltiples enfoques, buscando siempre la mejor manera de equilibrar funcionalidad, estética y viabilidad.',
  },
  {
    number: '04',
    title: 'Solucionamos',
    description:
      'Convertimos las ideas en propuestas tangibles y efectivas, resolviendo cada detalle con un enfoque centrado en el usuario. Nuestro objetivo es ofrecer solucones integrales que respondan a las necesidades del cliente y del entorno.',
  },
  {
    number: '05',
    title: 'Entregamos',
    description:
      'Finalizamos el proceso con la entrega de un proyecto de alta calidad, asegurándonos de cumplir con los estándares acordados y las expetativas del cliente. Cada entrega refleja nuestro compromiso con el diseño, la precisión y el impacto positivo.',
  },
];

const Step = ({
  step,
  index,
  isActive,
  isAdjacent,
  activeHeight,
  totalSteps,
  onSelect,
}: {
  step: (typeof steps)[0];
  index: number;
  isActive: boolean;
  isAdjacent: boolean;
  activeHeight: number;
  totalSteps: number;
  onSelect: (index: number) => void;
}) => {
  const [showDescription, setShowDescription] = useState(false);
  const closedHeight = `calc((100% - ${activeHeight}px) / ${totalSteps - 1})`;

  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => {
        setShowDescription(true);
      }, 250);
      return () => clearTimeout(timer);
    } else {
      setShowDescription(false);
    }
  }, [isActive]);

  return (
    <div
      className={`flex h-full flex-col items-center justify-between overflow-hidden transition-all
      duration-300 ${
        isActive
          ? 'rounded-xl border-b border-transparent bg-[#F5F5F5]'
          : isAdjacent
            ? 'border-b border-[#EFEFEF] bg-white'
            : 'border-b border-[#EFEFEF] bg-white'
      }`}
      style={{
        height: isActive ? `${activeHeight}px` : closedHeight,
        minHeight: isActive ? `${activeHeight}px` : closedHeight,
        maxHeight: isActive ? `${activeHeight}px` : closedHeight,
      }}
      id={`step-${index}`}
    >
      <div
        onClick={() => onSelect(index)}
        className='flex h-full w-full cursor-pointer flex-col items-start p-6'
      >
        <h2
          className={`text-[70px] transition-colors ${isActive ? 'text-[#407978]' : 'text-[#A1A1A1]'}`}
        >
          {step.number}
        </h2>
        <h3
          className={`flex justify-between w-full whitespace-nowrap text-lg  ${
            isActive ? 'text-[#407978]' : 'text-black'
          }`}
        >
            <span className='font-bold'>
                {step.title}
            </span>
          {!isActive && (
          <div
              className='flex h-8 w-8 items-center justify-center rounded-full bg-[#EFEFEF] pt-[2px]
                text-2xl text-[#636B69]'
            >
              +
            </div>
        )}
        </h3>

        {showDescription && (
          <p className='mt-10 text-base leading-relaxed text-black'>
            {step.description}
          </p>
        )}
      </div>
    </div>
  );
};

interface CollapableStepsProps {
  onClick?: (index: number) => void;
}

export const CollapableSteps = ({
  onClick,
}: CollapableStepsProps = { onClick: () => {}
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const totalSteps = steps.length;
  const activeHeight = 450;

  const handleClick = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
    onClick?.(index);
  }


  return steps.map((step, index) => (
    <Step
      key={index}
      step={step}
      index={index}
      isActive={activeIndex === index}
      isAdjacent={index === activeIndex! - 1 || index === activeIndex! + 1}
      activeHeight={activeHeight}
      totalSteps={totalSteps}
      onSelect={handleClick}
    ></Step>
  ));
};
