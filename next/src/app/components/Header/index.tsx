'use client';

import { useEffect, useState } from 'react';
import { useScroll, motion } from 'framer-motion';
import Image from 'next/image';
import Button from '../Button';
import Link from 'next/link';

interface HeaderProps {
  forceScrolledStyle?: boolean;
  scrollLimit?: number;
}

export default function Header({ forceScrolledStyle = false, scrollLimit = 2100 }: HeaderProps) {
  const { scrollY } = useScroll();

  const SCROLL_TRIGGER = scrollLimit;
  const HIDE_THRESHOLD = typeof window !== 'undefined' ? window.innerHeight : 800; // Primera página del viewport

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
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
      return;
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
      } else {
        setLogoSrc('/images/brand_white.png');
        setDropdownSrc('/icons/arrow_down_white.png');
        setTranslateSrc('/icons/translate_white.png');
        setVariantButton('secondary');
        setTextColorClass('text-white');
        setBackgroundColorClass('bg-white/20');
        setHoverColorClass('hover:bg-white/10');
      }

      // Lógica de auto-ocultar
      if (latest < HIDE_THRESHOLD) {
        // Siempre visible en la primera página
        setIsVisible(true);
      } else {
        // Después de la primera página, ocultar/mostrar basado en dirección del scroll
        if (latest > lastScrollY && latest > HIDE_THRESHOLD) {
          // Scrolling down - ocultar
          setIsVisible(false);
        } else if (latest < lastScrollY) {
          // Scrolling up - mostrar
          setIsVisible(true);
        }
      }

      setLastScrollY(latest);
    });

    return () => unsubscribe();
  }, [scrollY, forceScrolledStyle, SCROLL_TRIGGER, HIDE_THRESHOLD, lastScrollY]);

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
      initial={{ y: 0, opacity: 1 }}
      animate={{ 
        y: isVisible ? 0 : -100, 
        opacity: isVisible ? 1 : 0,
        x: '-50%'
      }}
      transition={{ 
        duration: 0.3, 
        ease: 'easeInOut' 
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
              <button onClick={() => setOpenDropdown(openDropdown === 'proyectos' ? null : 'proyectos')}>
                <Image src={dropdownSrc} alt="Arrow" width={20} height={20} priority />
              </button>
            </div>
            {openDropdown === 'proyectos' && (
              <div className={`dropdown-menu grid grid-cols-3 w-[700px] ${textColorClass} top-full left-0 mt-10 p-6 rounded-lg shadow-lg backdrop-blur-sm ${backgroundColorClass} absolute`}>
                <ul className="text-[15px] space-y-6">
                  <li><Link href="/projects/mixedUses" className="hover:underline">Usos Mixtos</Link></li>
                  <li><Link href="/projects/centrosComerciales" className="hover:underline">Centros Comerciales</Link></li>
                  <li><Link href="/projects/dwellings" className="hover:underline">Vivienda</Link></li>
                  <li><Link href="/projects/hotels" className="hover:underline">Hoteles</Link></li>
                </ul>
                <ul className="text-[15px] space-y-6">
                  <li><Link href="/projects" className="hover:underline">Master planning</Link></li>
                  <li><Link href="/projects/latam" className="hover:underline">LATAM</Link></li>
                  <li><Link href="/projects/retail" className="hover:underline">Retail</Link></li>
                  <li><Link href="/projects" className="hover:underline">Deportivo</Link></li>
                </ul>
                <ul className="text-[15px] space-y-6">
                  <li><Link href="/projects" className="hover:underline">Renovaciones y Expansiones</Link></li>
                  <li><Link href="/projects" className="hover:underline">Movilidad</Link></li>
                </ul>
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
              <button onClick={() => setOpenDropdown(openDropdown === 'cultura' ? null : 'cultura')}>
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
