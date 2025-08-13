'use client';

var beTracker: any;

import Script from 'next/script';

interface MetricoolTrackerProps {
  isProd: boolean;
}

export default function MetricoolTracker({ isProd }: MetricoolTrackerProps) {
  if (!isProd) {
    return <></>;
  }
  return (
    <Script
      src='https://tracker.metricool.com/resources/be.js'
      strategy='afterInteractive' // Se carga después de que la página esté lista
      onLoad={() => {
        if (typeof beTracker !== 'undefined' && beTracker.t) {
          beTracker.t({
            hash: 'cce6f89e82017e6b68cfd26e5f674333',
          });
        } else {
          console.error('beTracker no se cargó correctamente.');
        }
      }}
    />
  );
}
