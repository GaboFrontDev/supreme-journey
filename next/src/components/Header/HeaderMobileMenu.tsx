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
    className='fixed bottom-0 left-0 right-0 top-0 flex flex-col items-center justify-center
      gap-12 overscroll-none bg-white'
  >
    <HeaderNav
      currentLocale={currentLocale}
      navigationLinks={navigationLinks}
    />
  </motion.div>
);
