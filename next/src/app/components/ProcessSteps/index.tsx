'use client';

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  {
    number: '01',
    title: 'Escuchamos',
    description: 'Nos acercamos al cliente con una mentalidad abierta, prestando atención a sus ideas, necesidades y aspiraciones. Este paso es clave para establecer una relación de confianza y definir una visión compartida del proyecto.',
  },
  {
    number: '02',
    title: 'Entendemos',
    description: 'Analizamos a fondo el contexto del proyecto: el entorno, las expetativas del usuario y las condiciones específicas. Este entendimiento profundo nos permite abordar cada desafío con soluciones personalizadas y estratégicas.',
  },
  {
    number: '03',
    title: 'Exploramos',
    description: 'Desarrollamos ideas y conceptos a través de un proceso creativo que combina inspiración, investigación y experiencia. Exploramos múltiples enfoques, buscando siempre la mejor manera de equilibrar funcionalidad, estética y viabilidad.',
  },
  {
    number: '04',
    title: 'Solucionamos',
    description: 'Convertimos las ideas en propuestas tangibles y efectivas, resolviendo cada detalle con un enfoque centrado en el usuario. Nuestro objetivo es ofrecer solucones integrales que respondan a las necesidades del cliente y del entorno.',
  },
  {
    number: '05',
    title: 'Entregamos',
    description: 'Finalizamos el proceso con la entrega de un proyecto de alta calidad, asegurándonos de cumplir con los estándares acordados y las expetativas del cliente. Cada entrega refleja nuestro compromiso con el diseño, la precisión y el impacto positivo.',
  },
];


const Step = ({ step, index, isActive, isAdjacent, activeWidth, totalSteps, onSelect }: {
  step: typeof steps[0],
  index: number,
  isActive: boolean,
  isAdjacent: boolean,
  activeWidth: number,
  totalSteps: number,
  onSelect: (index: number) => void
}) => {

  const [showDescription, setShowDescription] = useState(false);
  const closedWidth = `calc((100% - ${activeWidth}px) / ${totalSteps - 1})`;

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
      className={`flex flex-col justify-between items-center h-full transition-all duration-300 overflow-hidden ${
        isActive ? 'rounded-xl bg-[#F5F5F5] border-r border-transparent' : 
        isAdjacent ? 'border-r border-[#EFEFEF] bg-white' :
        'border-r border-[#EFEFEF] bg-white'
      }`}
      style={{
        width: isActive ? `${activeWidth}px` : closedWidth,
        minWidth: isActive ? `${activeWidth}px` : closedWidth,
        maxWidth: isActive ? `${activeWidth}px` : closedWidth,
      }}
    >
      <div onClick={() => onSelect(index)} className="cursor-pointer flex flex-col items-start p-6 h-full w-full">
        <h2 className={`text-[70px] transition-colors ${ isActive ? 'text-[#407978]' : 'text-[#A1A1A1]' }`}>
          {step.number}
        </h2>
        <h3 className={`font-bold text-lg whitespace-nowrap ${ isActive ? 'text-[#407978]' : 'text-black' }`}>
          {step.title}
        </h3>

        {showDescription && (
          <p className="mt-20 text-black text-base leading-relaxed">
            {step.description}
          </p>
        )}
        
        {!isActive && (
          <div className="mt-auto mb-4">
            <div className="w-8 h-8 flex items-center justify-center pt-[2px] bg-[#EFEFEF] rounded-full text-[#636B69] text-2xl">
              +
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default function ProcessSteps() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const totalSteps = steps.length;
  const activeWidth = 366;


  return (
    <div className="flex w-full h-[450px] overflow-hidden">
      {steps.map((step, index) => (
        <Step
          key={index}
          step={step}
          index={index}
          isActive={activeIndex === index}
          isAdjacent={index === activeIndex! - 1 || index === activeIndex! + 1}
          activeWidth={activeWidth}
          totalSteps={totalSteps}
          onSelect={setActiveIndex}
        />
      ))}
    </div>
  );
}
