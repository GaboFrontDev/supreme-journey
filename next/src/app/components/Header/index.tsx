'use client';

import { useEffect, useMemo, useState } from 'react';
import { useScroll, motion } from 'framer-motion';
import Image from 'next/image';
import Button from '../Button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface HeaderProps {
  scrollLimit?: number;
  categories?: string[];
}

const formatTitleToUrl = (title: string) => {
  // replace tildes too
  return title
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/~/g, '')
    .replace('i', 'i')
    .replace('é', 'e')
    .replace('ú', 'u')
    .replace('ó', 'o')
    .replace('á', 'a')
    .replace('í', 'i')
    .replace('ñ', 'n')
    .replace('ü', 'u')
    .replace('ç', 'c')
    .replace('ñ', 'n');
};

export default function Header({ scrollLimit = 2100, categories = [] }: HeaderProps) {
  const { scrollY } = useScroll();

  const SCROLL_TRIGGER = scrollLimit;
  const pathname = usePathname();
  const forceScrolledStyle = useMemo(() => {
    // Forzar el estilo scrolled si estamos en la página de inicio
    return pathname !== '/';
  }, [pathname]);

  const [logoSrc, setLogoSrc] = useState('/images/brand_white.png');
  const [dropdownSrc, setDropdownSrc] = useState('/icons/arrow_down_white.png');
  const [translateSrc, setTranslateSrc] = useState('/icons/translate_white.png');
  const [variantButton, setVariantButton] = useState<'primary' | 'secondary'>('secondary');
  const [textColorClass, setTextColorClass] = useState('text-white');
  const [backgroundColorClass, setBackgroundColorClass] = useState('bg-white/20');
  const [hoverColorClass, setHoverColorClass] = useState('hover:bg-white/10');
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    if (forceScrolledStyle) {
      setLogoSrc('/images/brand.png');
      setDropdownSrc('/icons/arrow_down.png');
      setTranslateSrc('/icons/translate.png');
      setVariantButton('primary');
      setTextColorClass('text-[#636B69]');
      setBackgroundColorClass('bg-white');
      setHoverColorClass('hover:bg-[#EFEFEF]');
    }

    const unsubscribe = scrollY.on('change', (latest) => {
      // Cambio de estilos basado en scroll
      if (latest > SCROLL_TRIGGER) {
        setLogoSrc('/images/brand.png');
        setDropdownSrc('/icons/arrow_down.png');
        setTranslateSrc('/icons/translate.png');
        setVariantButton('primary');
        setTextColorClass('text-[#636B69]');
        setBackgroundColorClass('bg-white');
        setHoverColorClass('hover:bg-[#EFEFEF]');
      } else if (!forceScrolledStyle) {
        setLogoSrc('/images/brand_white.png');
        setDropdownSrc('/icons/arrow_down_white.png');
        setTranslateSrc('/icons/translate_white.png');
        setVariantButton('secondary');
        setTextColorClass('text-white');
        setBackgroundColorClass('bg-white/20');
        setHoverColorClass('hover:bg-white/10');
      }
    });

    return () => unsubscribe();
  }, [scrollY, SCROLL_TRIGGER, forceScrolledStyle]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const dropdowns = document.querySelectorAll('.dropdown-menu');
  
      let clickedInside = false;
      dropdowns.forEach(dropdown => {
        if (dropdown.contains(event.target as Node)) {
          clickedInside = true;
        }
      });
  
      if (!clickedInside) {
        setOpenDropdown(null);
      }
    };
  
    document.addEventListener('mousedown', handleClickOutside);
  
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <motion.div
      className={`fixed top-6 left-1/2 z-50 -translate-x-1/2 w-full max-w-7xl px-6 py-3 shadow-lg rounded-full backdrop-blur-sm ${backgroundColorClass}`}
      initial={{ y: 0, opacity: 1, x: '-50%' }}
      animate={{ 
        y: 0, 
        opacity: 1,
        x: '-50%'
      }}
      style={{ left: '50%' }}
    >
      <div className="flex justify-between items-center">
        <Link href="/">
          <Image src={logoSrc} alt="Ares Logo" width={118} height={23} priority />
        </Link>
        <nav className="flex items-center space-x-4 font-bold text-[15px]">
          <div className="relative">
            <div className={`flex items-center py-1 px-3 rounded-full transition-all ${hoverColorClass} ${textColorClass}`}>
              <Link href="/projects">
                Proyectos
              </Link>
              <button 
                onClick={() => setOpenDropdown(openDropdown === 'proyectos' ? null : 'proyectos')}
                title="Mostrar menú de proyectos"
              >
                <Image src={dropdownSrc} alt="Arrow" width={20} height={20} priority />
              </button>
            </div>
            {openDropdown === 'proyectos' && (
              <div className={`dropdown-menu grid grid-cols-3 w-[700px] ${textColorClass} top-full left-0 mt-10 p-6 rounded-lg shadow-lg backdrop-blur-sm ${backgroundColorClass} absolute`}>
                {categories.map((category, index) => (
                  <Link 
                    key={index} 
                    href={`/projects/${formatTitleToUrl(category)}`} 
                    className="hover:underline mt-6"
                  >
                    {category}
                  </Link>
                ))}
              </div>
            )}
          </div>
          {/* </a> */}
          <Link href="/the_study" className={`flex items-center py-1 px-3 rounded-full transition-all ${hoverColorClass} ${textColorClass}`}>El Estudio</Link>
          <div className="relative">
            <div className={`flex items-center py-1 px-3 rounded-full transition-all ${hoverColorClass} ${textColorClass}`}>
              <Link href="/ares_culture">
                Cultura Ares
              </Link>
              <button 
                onClick={() => setOpenDropdown(openDropdown === 'cultura' ? null : 'cultura')}
                title="Mostrar menú de cultura"
              >
                <Image src={dropdownSrc} alt="Arrow" width={20} height={20} priority />
              </button>
            </div>
            {openDropdown === 'cultura' && (
              <div className={`dropdown-menu w-[333px] ${textColorClass} top-full left-0 mt-10 p-6 rounded-lg shadow-lg backdrop-blur-sm ${backgroundColorClass} absolute`}>
                <ul className="text-[15px] space-y-6">
                  <li><Link href="/ares_sustainability" className="hover:underline">Design Innovation & Sustainability</Link></li>
                  <li><Link href="/ares_peva" className="hover:underline">Ares PEVA</Link></li>
                  <li><Link href="/ares_architects" className="hover:underline">Formando Arquitectos</Link></li>
                </ul>
              </div>
            )}
          </div>
          <Link href="/blog" className={`flex items-center py-1 px-3 rounded-full transition-all ${hoverColorClass} ${textColorClass}`}>Blog</Link>
        </nav>
        <div className="flex items-center space-x-6">
          <div className="relative">
            <button onClick={() => setOpenDropdown(openDropdown === 'idioma' ? null : 'idioma')} className={`flex items-center font-bold text-[15px] py-1 px-3 gap-2 rounded-full ${hoverColorClass} transition-all ${textColorClass}`}>
              <Image src={translateSrc} alt="Translate" width={20} height={20} priority />
              ES
              <Image src={dropdownSrc} alt="Arrow" width={20} height={20} priority />
            </button>
            {openDropdown === 'idioma' && (
              <div className={`dropdown-menu w-[160px] font-bold ${textColorClass} top-full left-0 mt-10 p-6 rounded-lg shadow-lg backdrop-blur-sm ${backgroundColorClass} absolute`}>
                <ul className="text-[15px] space-y-6">
                  <li><Link href="/projects" className="hover:underline">ES Español</Link></li>
                  <li><Link href="/projects" className="hover:underline">EN English</Link></li>
                </ul>
              </div>
            )}
          </div>
          <Button href='/contact' label="Hablemos" variant={variantButton} />
        </div>
      </div>
    </motion.div>
  );
}
