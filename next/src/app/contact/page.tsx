'use client';

import { useState } from 'react';
import Button from '../components/Button';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Section from '../components/Section';
import CollapsibleList from '../components/Collapsible';
import OfficesGrid from '../components/OfficesGrid';
import Image from 'next/image';

const services = [
  {
    id: '1',
    title: 'Asesoría de tu proyecto',
    content: 'Le mostraremos lo que hemos hecho y lo que podemos hacer por us﻿tedes.',
  },
  {
    id: '2',
    title: 'Atención a provedores y acabados',
    content: 'Escriba en su mensaje cómo lo podemos ayudar.',
  },
  {
    id: '3',
    title: 'Deja tu currículum',
    content: 'Ingresa tus datos y un especialista te contactará.',
  },
];

const offices = [
  { 
    title: 'Guadalajara HQ', 
    country: 'México',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3731.87936882796!2d-103.3895095241311!3d20.71512258085691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428afb402bea60b%3A0xc14c66c13f1080b7!2sAv.%20de%20las%20Am%C3%A9ricas%201250%2C%20San%20Miguel%20de%20la%20Colina%2C%2045160%20Zapopan%2C%20Jal.%2C%20M%C3%A9xico!5e0!3m2!1ses-419!2scl!4v1745774152456!5m2!1ses-419!2scl',
    address: 'Av. Américas 1250, Planta Baja-B, San Miguel de la Colina, Zapopan, Jalisco, México, C.P. 45160',
    phone: '(+52) 33 3642 2224',
    email: 'gdl@aresarquitectos.com'
  },
  { 
    title: 'CDMX',
    country: 'México',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.7148299543737!2d-99.17937382416082!3d19.381496681887068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff9d1cae5a15%3A0x2a1eba8b97486c3b!2sAv.%20Insurgentes%20Sur%201079%2C%20Noche%20Buena%2C%20Benito%20Ju%C3%A1rez%2C%2003720%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX%2C%20M%C3%A9xico!5e0!3m2!1ses-419!2scl!4v1745775289153!5m2!1ses-419!2scl',
    address: 'Insurgentes Sur 1079, Colonia del Valle Centro, Benito Juarez, Ciudad de, México, C.P. 03100',
    phone: '(+52) 33 3642 2224',
    email: 'cdmx@aresarquitectos.com'
  },
  { 
    title: 'L35 Barcelona', 
    country: 'España',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.9856514065677!2d2.1541527765579067!3d41.39611797129864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a297339addff%3A0x2d30bf3eef38db19!2sAv.%20Diagonal%2C%20466%2C%20Gracia%2C%2008006%20Barcelona%2C%20Espa%C3%B1a!5e0!3m2!1ses-419!2scl!4v1745775347889!5m2!1ses-419!2scl',
    address: 'Avda. Diagonal 466, 6ª planta 08006 BARCELONA',
    phone: '(+34) 93 2922 299',
    email: 'bcn@L35.com'
  },
  { 
    title: 'L35 Madrid', 
    country: 'España',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.468296291743!2d-3.714212823483541!3d40.42062827143904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42287af374619b%3A0xd6ecf46c1434e218!2sPl.%20de%20la%20Marina%20Espa%C3%B1ola%2C%203%2C%20Centro%2C%2028013%20Madrid%2C%20Espa%C3%B1a!5e0!3m2!1ses-419!2scl!4v1745775420489!5m2!1ses-419!2scl',
    address: 'Plaza de la Marina Española, 3 28013 MADRID',
    phone: '(+34) 91 5474 96',
    email: 'mad@L35.com'
  },
];

export default function ContactPage() {
  const [activeServiceId, setActiveServiceId] = useState<string | null>(services[0].id);
  const [fileName, setFileName] = useState<string>('Sin seleccionar');
  const [selectedOffice, setSelectedOffice] = useState(offices[0]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName('Sin seleccionar');
    }
  };

  return (
    <>
      <Header forceScrolledStyle />

      <Section width='max-w-7xl' paddingTop='pt-52' paddingBottom='pb-20'>
        <div className='grid grid-cols-2 gap-36'>
          <div className='flex-col'>
            <h2 className='mb-16 max-w-xs text-[40px] font-bold leading-tight text-[#636B69]'>
              Trabajemos juntos
            </h2>
            <div className='flex items-center justify-between gap-36'>
              <CollapsibleList items={services} onChange={setActiveServiceId} />
            </div>
          </div>
          <div>
            <form action='#' className='flex flex-col gap-4'>
              <div className='space-y-2'>
                <label htmlFor='name'>
                  Nombre completo <span className='text-[#EE3F3F]'>*</span>
                </label>
                <input
                  id='name'
                  type='text'
                  className='h-12 w-full rounded-xl border border-[#e0e0e0] px-4 text-base
                    placeholder:text-[#A1A1A1] focus:outline-0'
                />
              </div>
              <div className='space-y-2'>
                <label htmlFor='email'>
                  Correo eléctrónico <span className='text-[#EE3F3F]'>*</span>
                </label>
                <input
                  id='email'
                  type='email'
                  className='h-12 w-full rounded-xl border border-[#e0e0e0] px-4 text-base
                    placeholder:text-[#A1A1A1] focus:outline-0'
                />
              </div>
              <div className='space-y-2'>
                <label htmlFor='phone'>
                  Teléfono <span className='text-[#EE3F3F]'>*</span>
                </label>
                <input
                  id='phone'
                  type='tel'
                  className='h-12 w-full rounded-xl border border-[#e0e0e0] px-4 text-base
                    placeholder:text-[#A1A1A1] focus:outline-0'
                />
              </div>
              {activeServiceId === '3' && (
                <>
                  <div className='space-y-2'>
                    <label htmlFor='cv'>
                      Sube tu currículum{' '}
                      <span className='text-[#EE3F3F]'>*</span>
                    </label>
                    <label
                      htmlFor='cv'
                      className='flex h-12 w-full cursor-pointer items-center rounded-xl border border-[#e0e0e0]
                        bg-white px-4 text-base text-[#A1A1A1] transition-all hover:bg-[#e0e0e0]'
                    >
                      {fileName}
                    </label>
                    <input
                      id='cv'
                      type='file'
                      onChange={handleFileChange}
                      className='hidden'
                    />
                  </div>
                  <div className='space-y-2'>
                    <label htmlFor='position'>Puesto</label>
                    <input
                      id='position'
                      type='text'
                      className='h-12 w-full rounded-xl border border-[#e0e0e0] px-4 text-base
                        placeholder:text-[#A1A1A1] focus:outline-0'
                    />
                  </div>
                </>
              )}
              {activeServiceId !== '3' && (
                <>
                  <div className='space-y-2'>
                    <label htmlFor='company'>
                      Empresa{' '}
                      {activeServiceId === '2' && (
                        <span className='text-[#EE3F3F]'>*</span>
                      )}
                    </label>
                    <input
                      id='company'
                      type='text'
                      className='h-12 w-full rounded-xl border border-[#e0e0e0] px-4 text-base
                        placeholder:text-[#A1A1A1] focus:outline-0'
                    />
                  </div>
                  <div className='space-y-2'>
                    <label htmlFor='message'>Empresa</label>
                    <textarea
                      id='message'
                      className='h-[96px] w-full rounded-xl border border-[#e0e0e0] px-4 py-4 text-base
                        placeholder:text-[#A1A1A1] focus:outline-0'
                    />
                  </div>
                </>
              )}
              <Button
                label='Enviar'
                variant='primary'
                className='mt-4 text-center'
              />
            </form>
          </div>
        </div>
      </Section>

      <Section width='max-w-7xl' paddingTop='pt-0' paddingBottom='pb-0'>
        <h2 className='mb-16 text-[40px] font-bold leading-tight text-[#636B69]'>
          Nuestras oficinas
        </h2>
      </Section>

      <Section width='max-w-7xl' paddingBottom='pt-4' paddingTop='pt-10'>
        <div className='mb-16 grid grid-cols-4 gap-10'>
          {offices.map((office, index) => {
            const isActive = office.title === selectedOffice.title;

            return (
              <div 
                key={index} 
                className='flex items-center gap-4 cursor-pointer'
                onClick={() => setSelectedOffice(office)}
              >
                <div className='relative flex h-8 w-8 items-center justify-center rounded-full bg-[#EFEFEF]'>
                  <Image
                    src={isActive ? '/icons/arrow_downward_active.png' : '/icons/arrow_downward_alt.png'}
                    alt='Icono de flecha'
                    width={10}
                    height={10}
                    className='pointer-events-none object-cover'
                  />
                </div>
                <div>
                  <h4 className={`text-xl font-bold ${isActive ? 'text-[#407978]' : 'text-[#636B69]'}`}>
                    {office.title}
                  </h4>
                  <span className={`text-xs ${isActive ? 'text-[#407978]' : 'text-[#A1A1A1]'}`}>{office.country}</span>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      <Section width='max-w-7xl' paddingTop='pt-4' paddingBottom='pb-48'>
        <div className='grid grid-cols-[300px_1fr] gap-32'>
          <div>
            <p className='mb-5 text-lg text-black'>
              {selectedOffice.address}
            </p>
            <div className='space-y-6'>
              <p className='text-lg font-bold'>Nombre pendiente</p>
              <ul className='space-y-4 text-lg leading-5 text-black'>
                <li>{selectedOffice.phone}</li>
                <li>{selectedOffice.email}</li>
              </ul>
            </div>
          </div>
          <div className='h-[447px] rounded-xl overflow-hidden'>
            <iframe
              src={selectedOffice.mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </Section>

      <Footer />
    </>
  );
}
