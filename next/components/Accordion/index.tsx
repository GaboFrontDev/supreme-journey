'use client';

import ReactMarkdown from 'react-markdown';
import { DividerIcon } from '@/Icons/DividerIcon';
import { PlusIcon } from '@/Icons/PlusIcon';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface IAccordeonData {
  id?: number;
  title: string;
  content: string;
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
    <div className='flex flex-col rounded-xl border border-white/8 bg-c-gray/2'>
      <div
        onClick={handleToggle}
        className='flex cursor-pointer items-center px-8 py-8'
      >
        <span className='text-lg font-semibold'>{item.title}</span>
        <motion.div
          className='ml-auto'
          variants={toggleAnimationVariants}
          initial='closed'
          animate={isOpen ? 'open' : 'closed'}
        >
          {isOpen ? <DividerIcon className='rotate-90' /> : <PlusIcon />}
        </motion.div>
      </div>

      <motion.div
        initial='closed'
        variants={contentAnimationVariants}
        animate={isOpen ? 'open' : 'closed'}
        className='overflow-hidden'
      >
        <ReactMarkdown className='px-8 pb-6 text-gray-700'>
          {item.content}
        </ReactMarkdown>
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
    <div className='flex flex-col gap-4'>
      {data?.map((itm, i) => (
        <AccordeonItem
          key={itm?.id || i}
          item={itm}
          handleToggle={() => handleToggle(i)}
          isOpen={i === openKey}
        />
      ))}
    </div>
  );
};
