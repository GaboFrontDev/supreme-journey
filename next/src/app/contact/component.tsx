'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Script from 'next/script';

import { offices, services } from './consts';

import Button from '../components/Button';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Section from '../components/Section';
import CollapsibleList from '../components/Collapsible';
import { fetchWithToken } from '@/dynamicRendering/utils';

const Map = dynamic(() => import('./map'), {
    ssr: false,
  });

type Offices = typeof offices;


interface ContactComponentProps {
  offices: Offices;
  styles: any;
}

const EnumServices = {
  '1': 'asesoria',
  '2': 'atencion-proveedor',
  '3': 'curriculum'
}

export default function ContactComponent({ offices, styles }: ContactComponentProps) {
  const [activeServiceId, setActiveServiceId] = useState<string | null>(
    services[0].id
  );

  const [isLoading, setIsLoading] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    let id = null;
    try {
      if (formRef.current) {
        const formData = new FormData();

        if ( activeServiceId === '3') {
          if (!formRef.current.cv.value) {
            alert('Por favor, sube tu currículum');
            return;
          }
          // serialize the file
          const file = formRef.current.cv.files?.[0];
          if (file) {
            formData.append('resume', file);
          }
        }
        // read all the form data
        formData.append('nombre', formRef.current.userName?.value || '');
        formData.append('email', formRef.current.email?.value || '');
        formData.append('tel', formRef.current.phone?.value || '');
        formData.append('puesto', formRef.current.position?.value || '');
        formData.append('empresa', formRef.current.company?.value || '');
        formData.append('mensaje', formRef.current.message?.value || '' );
        formData.append('tipo', EnumServices[activeServiceId as keyof typeof EnumServices]);
        // upload to strapi 
        await fetchWithToken<any>(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/contact`, {
          method: 'POST',
          body: formData,
        });

        // get the url from the response
        formRef.current?.reset();
        alert('Formulario enviado correctamente, gracias por contactarnos');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}
        strategy='beforeInteractive'
      />
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
            <form ref={formRef} onSubmit={handleSubmit} className='flex flex-col gap-4'>
              <div className='space-y-2'>
                <label htmlFor='name'>
                  Nombre completo <span className='text-[#EE3F3F]'>*</span>
                </label>
                <input
                  name='userName'
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
                  name='email'
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
                  name='phone'
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
                      name='position'
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
                      name='company'
                      type='text'
                      className='h-12 w-full rounded-xl border border-[#e0e0e0] px-4 text-base
                        placeholder:text-[#A1A1A1] focus:outline-0'
                    />
                  </div>
                  <div className='space-y-2'>
                    <label htmlFor='message'>Mensaje</label>
                    <textarea
                      id='message'
                      name='message'
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
                type='submit'
                disabled={isLoading}
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
          {offices.map((office: any, index: number) => {
            const isActive = office.title === selectedOffice.title;

            return (
              <div
                key={index}
                className='flex cursor-pointer items-center gap-4'
                onClick={() => setSelectedOffice(office)}
              >
                <div className='relative flex h-8 w-8 items-center justify-center rounded-full bg-[#EFEFEF]'>
                  <Image
                    src={
                      isActive
                        ? '/icons/arrow_downward_active.png'
                        : '/icons/arrow_downward_alt.png'
                    }
                    alt='Icono de flecha'
                    width={10}
                    height={10}
                    className='pointer-events-none object-cover'
                  />
                </div>
                <div>
                  <h4
                    className={`text-xl font-bold ${isActive ? 'text-[#407978]' : 'text-[#636B69]'}`}
                  >
                    {office.title}
                  </h4>
                  <span
                    className={`text-xs ${isActive ? 'text-[#407978]' : 'text-[#A1A1A1]'}`}
                  >
                    {office.country}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      <Section width='max-w-7xl' paddingTop='pt-4' paddingBottom='pb-48'>
        <div className='grid grid-cols-[300px_1fr] gap-32'>
          <div>
            <p className='mb-5 text-lg text-black'>{selectedOffice.address}</p>
            <div className='space-y-6'>
              <p className='text-lg font-bold'>Nombre pendiente</p>
              <ul className='space-y-4 text-lg leading-5 text-black'>
                <li>{selectedOffice.phone}</li>
                <li>{selectedOffice.email}</li>
              </ul>
            </div>
          </div>
          <div className='h-[447px] overflow-hidden rounded-xl'>
            <Map
              lat={selectedOffice.lat}
              lng={selectedOffice.lng}
              title={selectedOffice.title}
              styles={styles}
            />
          </div>
        </div>
      </Section>

      <Footer />
    </>
  );
}
