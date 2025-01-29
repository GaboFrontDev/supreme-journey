'use client';

import { useRefererAndLandingTracker } from '@inneractive-inc/inneractive-contact-form';

export const RefererAndLandingTracker = () => {
  // work incorectly with reactStrictMode: true on the dev mode. turn off reactStrictMode to see the correct work. On the prod mode it works correctly
  useRefererAndLandingTracker();

  return null;
};
