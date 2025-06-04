import Image from 'next/image';
import Header from '@/app/components/Header';
import Section from '@/app/components/Section';
import Button from '@/app/components/Button';

export default function AresCulturePage() {
  
  return (
    <>
      <Section width='max-w-7xl' paddingTop='pt-52' paddingBottom='pb-12'>
        <div className='flex items-center justify-between gap-36'>
          <div className='flex-col'>
            <h2 className='mb-6 mt-2 max-w-2xl text-[40px] font-bold leading-tight text-[#636B69]'>
              Cultura Ares
            </h2>
          </div>
          <p className='max-w-2xl text-lg text-black'>
            Creemos en la fusión de la creatividad, la enseñanza y la innovación
            tecnológica. Nuestra cultura se basa en el compromiso de explorar
            nuevas formas de pensar, diseñar y crear, promoviendo una visión
            arquitectónica que trasciende generaciones.
          </p>
        </div>
      </Section>

      <Section
        width='w-full'
        paddingTop='pt-10'
        paddingBottom='pb-10'
        paddingLeft='pl-0'
        paddingRight='pr-0'
      >
        <div className='relative h-[810px] w-full overflow-hidden rounded-t-3xl'>
          <Image
            src='/images/ares_culture/1.png'
            alt='Ares Culture'
            fill
            className='object-cover'
          />
        </div>
      </Section>

      <Section width='max-w-7xl' paddingBottom='pb-20'>
        <div className='flex items-center'>
          <h2 className='font-regular max-w-2xl text-[40px] leading-tight text-black'>
            La tradición de la mano alzada, la enseñanza como legado de
            conocimiento y la innovación digital
          </h2>
        </div>
      </Section>

      <Section width='max-w-7xl' paddingTop="pt-10" paddingBottom='pb-48'>
        <div className='grid grid-cols-2 gap-10'>
          <div className="min-w-[620px] max-w-sm rounded-xl overflow-hidden bg-[#F5F5F5]">
            <div className="w-full h-[380px] overflow-hidden rounded-2xl relative">
              <Image src="images/ares_culture/2.png" alt="DIS" fill className="object-cover pointer-events-none" />
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div className="mb-8">
                  <h3 className="font-bold text-xl text-black mb-1">DIS</h3>
                  <p className="font-light text-lg text-[#A1A1A1]">Digital Innovation & Sustainability</p>
                </div>
                <Button href="/ares_sustainability" label='Ver Iniciativa' className="text-xs" />
              </div>
            </div>
          </div>
          <div className="min-w-[620px] max-w-sm rounded-xl overflow-hidden bg-[#F5F5F5]">
            <div className="w-full h-[380px] overflow-hidden rounded-2xl relative">
              <Image src="images/ares_culture/3.jpg" alt="DIS" fill className="object-cover pointer-events-none" />
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div className="mb-8">
                  <h3 className="font-bold text-xl text-black mb-1">Ares PEVA</h3>
                  <p className="font-light text-lg text-[#A1A1A1]">Digital Innovation & Sustainability</p>
                </div>
                <Button href="/ares_peva" label='Ver Iniciativa' className="text-xs" />
              </div>
            </div>
          </div>
          <div className="min-w-[620px] max-w-sm rounded-xl overflow-hidden bg-[#F5F5F5]">
            <div className="w-full h-[380px] overflow-hidden rounded-2xl relative">
              <Image src="images/ares_culture/4.png" alt="DIS" fill className="object-cover pointer-events-none" />
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div className="mb-8">
                  <h3 className="font-bold text-xl text-black mb-1">Formando arquitectos</h3>
                  <p className="font-light text-lg text-[#A1A1A1]">Impulsando nuevas generaciones</p>
                </div>
                <Button href="/ares_architects" label='Ver Iniciativa' className="text-xs" />
              </div>
            </div>
          </div>
        </div>
      </Section>

       
    </>
  );
}
