'use client';

import React from 'react';
import { SearchIcon } from '@/Icons/SearchIcon';
import { useRouter, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { AnimatedBox } from '../AnimatedBox';

type FormDataType = { searchTerm: string };

export const SearchInput = () => {
  const {
    handleSubmit,
    register,

    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormDataType>();

  const searchParams = useSearchParams();
  const { push } = useRouter();

  const params = new URLSearchParams(searchParams);

  async function onSubmit(data: FormDataType) {
    if (data.searchTerm) {
      params.set('q', data.searchTerm);
    } else {
      params.delete('q');
    }
    push(`/search?${params.toString()}`);
  }

  return (
    <AnimatedBox delay={0.1}>
      <form
        className="relative m-auto mb-16 flex w-full max-w-80"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          {...register('searchTerm')}
          className="border-gray-90 hover:border-primary focus:border-primary h-12 w-full
            appearance-none rounded-[50px] border pl-12 pr-7 outline-none ring-0
            transition-colors"
          type='search'
          placeholder='Search'
          autoFocus
          defaultValue={params.get('q') || ''}
        />

        <button
          type='submit'
          className="absolute left-4 top-0 inline-flex h-full cursor-pointer items-center
            text-c-gray-900 transition-colors hover:text-c-blue-500 active:text-c-blue-600"
        >
          <SearchIcon />
        </button>
      </form>
    </AnimatedBox>
  );
};
