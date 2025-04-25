'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Item {
  id: string;
  title: string;
  content: string;
}

interface Props {
  items: Item[];
  onChange?: (id: string | null) => void;
}

export default function CollapsibleList({ items, onChange }: Props) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="w-full">
      {items.map(({ id, title, content }) => {
        const isOpen = openId === id;

        const handleClick = () => {
          if (!isOpen) {
            setOpenId(id);
            onChange?.(id);
          }
        };

        return (
          <div key={id} className="py-4">
            <button
              onClick={handleClick}
              className="flex items-center w-full text-left"
              disabled={isOpen}
            >
              <motion.div
                animate={{ width: isOpen ? 0 : 32, marginRight: isOpen ? 0 : 16 }}
                transition={{ duration: 0.3 }}
              >
                <AnimatePresence>
                  {!isOpen && (
                    <motion.div
                      key="plus"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center justify-center w-8 h-8 rounded-full bg-[#EFEFEF]"
                    >
                      <span className="font-light text-2xl text-[#636B69]">+</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.span
                animate={{ color: isOpen ? '#407978' : '#000000' }}
                transition={{ duration: 0.3 }}
                className="font-bold text-2xl"
              >
                {title}
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { height: 'auto', opacity: 1 },
                    collapsed: { height: 0, opacity: 0 },
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="text-lg text-black my-4 py-5 border-b border-[#000000]/8">
                    {content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
