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

export default function Header({
  scrollLimit = 2100,
  categories = [],
}: HeaderProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  const SCROLL_TRIGGER = scrollLimit;
  const pathname = usePathname();
  const forceScrolledStyle = useMemo(() => {
    // Forzar el estilo scrolled si estamos en la página de inicio
    return pathname !== '/';
  }, [pathname]);

  const groupedCategoriesByCol = useMemo(() => {
    const itemsPerCol = 4;
    const grouped = [];

    for (let i = 0; i < categories.length; i += itemsPerCol) {
      grouped.push(categories.slice(i, i + itemsPerCol));
    }
    return grouped;
  }, [categories]);

  const [logoSrc, setLogoSrc] = useState('/images/brand_white.png');
  const [dropdownSrc, setDropdownSrc] = useState('/icons/arrow_down_white.png');
  const [hamburgerColorClass, setHamburgerColorClass] = useState('border-2 border-white bg-white');

  const [translateSrc, setTranslateSrc] = useState(
    '/icons/translate_white.png'
  );
  const [variantButton, setVariantButton] = useState<'primary' | 'secondary'>(
    'secondary'
  );
  const [textColorClass, setTextColorClass] = useState('text-white');
  const [backgroundColorClass, setBackgroundColorClass] =
    useState('bg-white/20');
  const [hoverColorClass, setHoverColorClass] = useState('hover:bg-white/10');
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    if (forceScrolledStyle) {
      setLogoSrc('/images/brand.png');
      setDropdownSrc('/icons/arrow_down.png');
      setTranslateSrc('/icons/translate.png');
      setVariantButton('primary');
      setTextColorClass('text-[#636B69]');
      setBackgroundColorClass('bg-white/20');
      setHoverColorClass('hover:bg-[#EFEFEF]');
      setHamburgerColorClass('border-2 border-[#636B69] bg-[#EFEFEF]');
    }

    const unsubscribe = scrollY.on('change', (latest) => {
      // Cambio de estilos basado en scroll
      if (latest > SCROLL_TRIGGER) {
        setLogoSrc('/images/brand.png');
        setDropdownSrc('/icons/arrow_down.png');
        setTranslateSrc('/icons/translate.png');
        setVariantButton('primary');
        setTextColorClass('text-[#636B69]');
        setBackgroundColorClass('bg-white/80');
        setHoverColorClass('hover:bg-[#EFEFEF]');
        setHamburgerColorClass('border-2 border-[#636B69] bg-[#EFEFEF]');
      } else if (!forceScrolledStyle) {
        setLogoSrc('/images/brand_white.png');
        setDropdownSrc('/icons/arrow_down_white.png');
        setTranslateSrc('/icons/translate_white.png');
        setVariantButton('secondary');
        setTextColorClass('text-white');
        setBackgroundColorClass('bg-white/20');
        setHoverColorClass('hover:bg-white/10');
        setHamburgerColorClass('border-2 border-white bg-white');
      }
    });

    return () => unsubscribe();
  }, [scrollY, SCROLL_TRIGGER, forceScrolledStyle]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const dropdowns = document.querySelectorAll('.dropdown-menu');

      let clickedInside = false;
      dropdowns.forEach((dropdown) => {
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

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, [window.innerWidth]);

  // Cerrar menú móvil al cambiar de ruta
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  if (isMobile) {
    return (
      <>
        <motion.section
          className={`fixed left-1/2 top-6 z-50 w-full max-w-7xl -translate-x-1/2 rounded-full px-6
          py-3 shadow-lg backdrop-blur-sm ${backgroundColorClass} w-[85dvw] select-none`}
          initial={{ y: 0, opacity: 1, x: '-50%' }}
          animate={{
            y: 0,
            opacity: 1,
            x: '-50%',
          }}
          style={{ left: '50%' }}
        >
          <div className='flex items-center justify-between'>
            <Link href='/'>
              <Image
                src={logoSrc}
                alt='Ares Logo'
                width={118}
                height={23}
                priority
              />
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`rounded-full p-2 ${hoverColorClass}`}
              aria-label='Abrir menú'
            >
              <div className='flex h-6 w-6 flex-col items-center justify-center'>
                <span
                  className={`${hamburgerColorClass} h-0.5 w-5`}
                ></span>
                <span
                  className={`${hamburgerColorClass} mt-1 h-0.5 w-5`}
                ></span>
                <span
                  className={`${hamburgerColorClass} mt-1 h-0.5 w-5`}
                ></span>
              </div>
            </button>
          </div>
        </motion.section>

        {/* Menú móvil */}
        {isMobileMenuOpen && (
          <motion.div
            className='fixed inset-0 z-40 bg-black/60 backdrop-blur-sm'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              className={`absolute right-10 top-24 w-[80dvw] rounded-2xl p-6 shadow-2xl backdrop-blur-sm
              ${backgroundColorClass}`}
              initial={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              onClick={(e) => e.stopPropagation()}
            >
              <nav className='space-y-6'>
                {/* Proyectos */}
                <div>
                  <div
                    className={`flex items-center justify-between ${textColorClass} mb-3 text-lg font-bold`}
                  >
                    <Link
                      href='/projects'
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Proyectos
                    </Link>
                    <button
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === 'proyectos-mobile'
                            ? null
                            : 'proyectos-mobile'
                        )
                      }
                      className='p-1'
                      title='Mostrar categorías de proyectos'
                    >
                      <Image
                        src={dropdownSrc}
                        alt='Arrow'
                        width={16}
                        height={16}
                        className={`transition-transform ${openDropdown === 'proyectos-mobile' ? 'rotate-180' : ''}`}
                      />
                    </button>
                  </div>
                  {openDropdown === 'proyectos-mobile' && (
                    <div className='ml-4 space-y-2'>
                      {categories.map((category, index) => (
                        <Link
                          key={index}
                          href={`/projects/${formatTitleToUrl(category)}`}
                          className={`block ${textColorClass} text-sm hover:underline`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {category}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* El Estudio */}
                <div>
                  <Link
                    href='/the_study'
                    className={`block ${textColorClass} text-lg font-bold`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    El Estudio
                  </Link>
                </div>

                {/* Cultura Ares */}
                <div>
                  <div
                    className={`flex items-center justify-between ${textColorClass} mb-3 text-lg font-bold`}
                  >
                    <Link
                      href='/ares_culture'
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Cultura Ares
                    </Link>
                    <button
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === 'cultura-mobile'
                            ? null
                            : 'cultura-mobile'
                        )
                      }
                      className='p-1'
                      title='Mostrar opciones de cultura'
                    >
                      <Image
                        src={dropdownSrc}
                        alt='Arrow'
                        width={16}
                        height={16}
                        className={`transition-transform ${openDropdown === 'cultura-mobile' ? 'rotate-180' : ''}`}
                      />
                    </button>
                  </div>
                  {openDropdown === 'cultura-mobile' && (
                    <div className='ml-4 space-y-2'>
                      <Link
                        href='/ares_sustainability'
                        className={`block ${textColorClass} text-sm hover:underline`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Design Innovation & Sustainability
                      </Link>
                      <Link
                        href='/ares_peva'
                        className={`block ${textColorClass} text-sm hover:underline`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Ares PEVA
                      </Link>
                      <Link
                        href='/ares_architects'
                        className={`block ${textColorClass} text-sm hover:underline`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Formando Arquitectos
                      </Link>
                    </div>
                  )}
                </div>

                {/* Blog */}
                <div>
                  <Link
                    href='/blog'
                    className={`block ${textColorClass} text-lg font-bold`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Blog
                  </Link>
                </div>

                {/* Idioma */}
                <div>
                  <div
                    className={`flex items-center justify-between ${textColorClass} mb-3 text-lg font-bold`}
                  >
                    <span>Idioma</span>
                    <button
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === 'idioma-mobile'
                            ? null
                            : 'idioma-mobile'
                        )
                      }
                      className='p-1'
                      title='Mostrar opciones de idioma'
                    >
                      <Image
                        src={dropdownSrc}
                        alt='Arrow'
                        width={16}
                        height={16}
                        className={`transition-transform ${openDropdown === 'idioma-mobile' ? 'rotate-180' : ''}`}
                      />
                    </button>
                  </div>
                  {openDropdown === 'idioma-mobile' && (
                    <div className='ml-4 space-y-2'>
                      <Link
                        href='/projects'
                        className={`block ${textColorClass} text-sm hover:underline`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        ES Español
                      </Link>
                      <Link
                        href='/projects'
                        className={`block ${textColorClass} text-sm hover:underline`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        EN English
                      </Link>
                    </div>
                  )}
                </div>

                {/* Botón Contacto */}
                <div className='pt-4'>
                  <Button
                    href='/contact'
                    label='Hablemos'
                    variant={variantButton}
                    className='w-full'
                  />
                </div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </>
    );
  }

  return (
    <motion.div
      className={`fixed left-1/2 top-6 z-50 w-full max-w-7xl -translate-x-1/2 rounded-full px-6
      py-3 shadow-lg backdrop-blur-sm ${backgroundColorClass}`}
      initial={{ y: 0, opacity: 1, x: '-50%' }}
      animate={{
        y: 0,
        opacity: 1,
        x: '-50%',
      }}
      style={{ left: '50%' }}
    >
      <div className='flex items-center justify-between'>
        <Link href='/'>
          <Image
            src={logoSrc}
            alt='Ares Logo'
            width={118}
            height={23}
            priority
          />
        </Link>
        <nav className='flex items-center space-x-4 text-[15px] font-bold'>
          <div className='relative'>
            <div
              className={`flex items-center rounded-full px-3 py-1 transition-all ${hoverColorClass}
              ${textColorClass}`}
            >
              <Link href='/projects'>Proyectos</Link>
              <button
                onClick={() =>
                  setOpenDropdown(
                    openDropdown === 'proyectos' ? null : 'proyectos'
                  )
                }
                title='Mostrar menú de proyectos'
              >
                <Image
                  src={dropdownSrc}
                  alt='Arrow'
                  width={20}
                  height={20}
                  priority
                />
              </button>
            </div>
            {openDropdown === 'proyectos' && (
              <div
                className={`dropdown-menu grid w-[700px] grid-cols-3 ${textColorClass} left-0 top-full mt-10
                rounded-lg px-8 py-4 shadow-lg backdrop-blur-sm ${backgroundColorClass} absolute`}
              >
                {groupedCategoriesByCol.map((group, index) => (
                  <div key={index} className='flex flex-col gap-1'>
                    {group.map((category, index) => (
                      <Link
                        key={index}
                        href={`/projects/${formatTitleToUrl(category)}`}
                        className='mt-4 hover:underline'
                      >
                        {category}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* </a> */}
          <Link
            href='/the_study'
            className={`flex items-center rounded-full px-3 py-1 transition-all ${hoverColorClass}
            ${textColorClass}`}
          >
            El Estudio
          </Link>
          <div className='relative'>
            <div
              className={`flex items-center rounded-full px-3 py-1 transition-all ${hoverColorClass}
              ${textColorClass}`}
            >
              <Link href='/ares_culture'>Cultura Ares</Link>
              <button
                onClick={() =>
                  setOpenDropdown(openDropdown === 'cultura' ? null : 'cultura')
                }
                title='Mostrar menú de cultura'
              >
                <Image
                  src={dropdownSrc}
                  alt='Arrow'
                  width={20}
                  height={20}
                  priority
                />
              </button>
            </div>
            {openDropdown === 'cultura' && (
              <div
                className={`dropdown-menu w-[333px] ${textColorClass} left-0 top-full mt-10 rounded-lg p-6
                shadow-lg backdrop-blur-sm ${backgroundColorClass} absolute`}
              >
                <ul className='space-y-6 text-[15px]'>
                  <li>
                    <Link
                      href='/ares_sustainability'
                      className='hover:underline'
                    >
                      Design Innovation & Sustainability
                    </Link>
                  </li>
                  <li>
                    <Link href='/ares_peva' className='hover:underline'>
                      Ares PEVA
                    </Link>
                  </li>
                  <li>
                    <Link href='/ares_architects' className='hover:underline'>
                      Formando Arquitectos
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <Link
            href='/blog'
            className={`flex items-center rounded-full px-3 py-1 transition-all ${hoverColorClass}
            ${textColorClass}`}
          >
            Blog
          </Link>
        </nav>
        <div className='flex items-center space-x-6'>
          <div className='relative'>
            <button
              onClick={() =>
                setOpenDropdown(openDropdown === 'idioma' ? null : 'idioma')
              }
              className={`flex items-center gap-2 rounded-full px-3 py-1 text-[15px] font-bold
              ${hoverColorClass} transition-all ${textColorClass}`}
            >
              <Image
                src={translateSrc}
                alt='Translate'
                width={20}
                height={20}
                priority
              />
              ES
              <Image
                src={dropdownSrc}
                alt='Arrow'
                width={20}
                height={20}
                priority
              />
            </button>
            {openDropdown === 'idioma' && (
              <div
                className={`dropdown-menu w-[160px] font-bold ${textColorClass} left-0 top-full mt-10
                rounded-lg p-6 shadow-lg backdrop-blur-sm ${backgroundColorClass} absolute`}
              >
                <ul className='space-y-6 text-[15px]'>
                  <li>
                    <Link href='/projects' className='hover:underline'>
                      ES Español
                    </Link>
                  </li>
                  <li>
                    <Link href='/projects' className='hover:underline'>
                      EN English
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <Button href='/contact' label='Hablemos' variant={variantButton} />
        </div>
      </div>
    </motion.div>
  );
}
