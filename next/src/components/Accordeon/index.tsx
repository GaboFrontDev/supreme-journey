'use client';
import { motion } from 'framer-motion';

import { useState } from 'react';

interface IAccordeonData {
  id?: number;
  Question: string;
  Answer: string;
}

interface IAccordeonItem {
  item: IAccordeonData;
  handleToggle: () => void;
  isOpen: boolean;
}

interface IAccordeon {
  data: IAccordeonData[];
}

const toggleAnimationVariants = {
  closed: { rotate: 90 },
  open: { rotate: 0 },
};

const contentAnimationVariants = {
  closed: { height: 0 },
  open: { height: 'auto' },
};

const AccordeonItem = ({ item, handleToggle, isOpen }: IAccordeonItem) => {
  return (
    <div className="rounded-lg border border-c-gray-200 bg-white ">
      <div
        onClick={handleToggle}
        className="flex cursor-pointer items-center px-8 py-6 text-lg"
      >
        {item.Question}
        <motion.div
          className='ml-auto text-2xl'
          variants={toggleAnimationVariants}
          initial='closed'
          animate={isOpen ? 'open' : 'closed'}
        >
          {isOpen ? String.fromCodePoint(8211) : '+'}
        </motion.div>
      </div>
      <motion.div
        initial='closed'
        variants={contentAnimationVariants}
        animate={isOpen ? 'open' : 'closed'}
        className='overflow-hidden text-c-gray-900 '
      >
        <p className="px-8 pb-6">{item.Answer}</p>
      </motion.div>
    </div>
  );
};

export const Accordeon = ({ data }: IAccordeon) => {
  const [openKey, setOpenKey] = useState<number | null>(null);

  const handleToggle = (key: number) => {
    setOpenKey(openKey !== key ? key : null);
  };

  return (
    <div className="flex flex-col gap-4">
      {data.map((itm, i) => (
        <AccordeonItem
          key={itm.Question}
          item={itm}
          handleToggle={() => handleToggle(i)}
          isOpen={i === openKey}
        />
      ))}
    </div>
  );
};
