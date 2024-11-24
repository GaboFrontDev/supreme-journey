'use client';

import Button from '@/components/Button';
import { AnimatedBox } from '@/components/AnimatedBox';
import { useCallback, useState } from 'react';
import { FormSection } from '@/context/page/domain/PageEntity';

const formFieldClassnamesConfig = {
  formRowClassName: 'flex gap-4 mb-4 flex-col md:flex-row relative',
  formFieldClassName: 'relative flex-1',
  inputClassName:
    'border-white/8 hover:border-white/8 hover:bg-c-gray/4 focus:bg-c-gray/4 focus:border-white peer w-full rounded-xl border bg-c-gray/2 px-8 pb-5 pt-8 text-xl leading-6 outline-none ring-0 transition-all placeholder-shown:pb-7 placeholder-shown:pt-6 placeholder:text-transparent appearance-none',
  formLabelClassName:
    'text-gray-900 pointer-events-none absolute left-8 top-3 text-sm transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-xl',
  errorMessageClassName: 'text-red',
  selectClassNamePrefix: 'country_select_input',
  textareaClassName:
    'border-white/8 hover:border-white/8 hover:bg-c-gray/4 focus:bg-c-gray/4 focus:border-white peer w-full resize-none rounded-xl border bg-c-gray/2 px-8 pb-5 pt-8 text-xl leading-6 outline-none ring-0 transition-all placeholder-shown:pb-7 placeholder-shown:pt-6 placeholder:text-transparent min-h-48',
  textareaLabelClassName:
    'text-gray-900 pointer-events-none absolute left-8 top-3 text-sm transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-xl',
  checkboxClassName: 'peer absolute h-0 w-0 overflow-hidden',
  checkboxCheckmarkClassName:
    'pointer-events-none absolute left-0 top-0 scale-50 opacity-0 transition-all peer-checked:scale-100 peer-checked:opacity-100 invert',
  checkboxLabelClassName:
    'before:border-white/8 flex items-start gap-5 text-xl before:h-7 before:w-7 before:flex-shrink-0 before:rounded before:border before:bg-c-gray/2 before:transition-colors peer-checked:before:border-white peer-checked:before:!bg-white cursor-pointer peer-hover:before:bg-c-gray/4',
};

export const ContactUsSection: React.FC<FormSection> = ({
  Title,
  formRules,
  currentLocale,
}) => {
  const onSubmitSuccess = useCallback(() => {
    const urlPrefix = currentLocale === 'en' ? '' : `/${currentLocale}`;

    window.location.href = `${urlPrefix}/thank-you`;
  }, [currentLocale]);

  return (
    <section className='container grid justify-center px-6 lg:grid-cols-12 '>
      <div className='col-span-8 col-start-3'>
        <div className='relative py-24'>
          <AnimatedBox>
            <h2
              id='get-more-info'
              className='mb-14 text-center text-k-2xl font-semibold leading-tight tracking-[-0.01em]
                sm:text-k-3xl'
            >
              {Title?.HeadingText}
            </h2>
          </AnimatedBox>
          <AnimatedBox>
            <>Contact Box</>
          </AnimatedBox>
        </div>
      </div>
    </section>
  );
};
