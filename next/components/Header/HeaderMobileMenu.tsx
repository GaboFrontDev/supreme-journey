import { HeaderNav } from './HeaderNav';
import { motion } from 'framer-motion';

export const HeaderMobileMenu = ({
  currentLocale,
  navigationLinks,
}: ILayout) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className='fixed bottom-0 left-0 right-0 flex h-full origin-top flex-col items-center
      justify-end gap-12 overscroll-none bg-c-primary pb-40'
  >
    <HeaderNav
      navigationLinks={navigationLinks}
      currentLocale={currentLocale}
    />
  </motion.div>
);
