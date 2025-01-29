'use client';

import Button from '@/components/Button';
import { AnimatedBox } from '@/components/AnimatedBox';
import { FormSection } from '@/context/page/domain/PageEntity';
import { useCallback } from 'react';
import { useRouter } from 'next/navigation';

const formFieldClassnamesConfig = {
  formRowClassName: 'flex gap-4 mb-4 flex-col md:flex-row relative',
  formFieldClassName: 'relative flex-1',
  inputClassName:
    'peer w-full rounded-xl border border-c-gray-300 bg-c-gray-50 px-8 pb-5 pt-8 text-xl leading-6 outline-none ring-0 transition-all placeholder-shown:pb-7 placeholder-shown:pt-6 hover:border-c-blue-500 focus:border-c-blue-500 placeholder:text-transparent appearance-none',
  formLabelClassName:
    'pointer-events-none absolute left-8 top-3 text-sm text-c-gray-500 transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-xl',
  errorMessageClassName: 'text-c-red-500',
  selectClassNamePrefix: 'country_select_input',
  textareaClassName:
    'peer w-full rounded-xl border border-c-gray-300 bg-c-gray-50 px-8 pb-5 pt-8 text-xl leading-6 outline-none ring-0 transition-all placeholder-shown:pb-7 placeholder-shown:pt-6 hover:border-c-blue-500 focus:border-c-blue-500 placeholder:text-transparent min-h-48',
  textareaLabelClassName:
    'pointer-events-none absolute left-8 top-3 text-sm text-c-gray-500 transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-xl',
  checkboxClassName: 'peer absolute h-0 w-0 overflow-hidden',
  checkboxCheckmarkClassName:
    'pointer-events-none absolute left-0 top-0 scale-50 opacity-0 transition-all peer-checked:scale-100 peer-checked:opacity-100 size-6',
  checkboxLabelClassName:
    'before: flex items-start gap-5 text-xl text-c-gray-800 before:h-6 before:w-6 before:flex-shrink-0 before:rounded before:border before:border-l-c-gray-900 before:bg-c-gray-50 before:transition-colors peer-checked:before:border-c-blue-500 peer-checked:before:bg-c-blue-500',
};

export const ContactUsSection: React.FC<FormSection> = ({
  Title,
  Subtitle,
  currentLocale,
}) => {
  const router = useRouter();

  const onSubmitSuccess = useCallback(() => {
    const urlPrefix = currentLocale === 'en' ? '' : `/${currentLocale}`;
    const query = window?.location?.search;

    router.push(`${urlPrefix}/thank-you${query}`);
  }, [currentLocale, router]);

  return (
    <section className='bg-c-gray-100 py-28' id='pricing_anhor'>
      <div className='relative mx-auto w-full max-w-[1000px] px-4'>
        <AnimatedBox>
          <h2
            className='mb-5 text-center text-3xl leading-tight tracking-[-1.44px] md:text-5xl
              lg:text-6xl'
          >
            {Title?.HeadingText}
          </h2>
        </AnimatedBox>
        <AnimatedBox>
          <p className='mb-16 text-center text-xl text-c-gray-900'>
            {Subtitle}
          </p>
        </AnimatedBox>
        
        <AnimatedBox>
          hi  
        </AnimatedBox>
      </div>
    </section>
  );
};
