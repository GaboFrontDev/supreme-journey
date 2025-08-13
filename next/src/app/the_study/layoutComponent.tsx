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
    <>
      <Script
        src='https://tracker.metricool.com/resources/be.js'
        strategy='afterInteractive'
      />
      <Script
        id='metricool-init'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            (function waitForMetricool() {
              var attempts = 0;
              var interval = setInterval(function() {
                if (window.beTracker && typeof window.beTracker.t === 'function') {
                  window.beTracker.t({ hash: "cce6f89e82017e6b68cfd26e5f674333" });
                  clearInterval(interval);
                } else if (attempts++ > 20) {
                  console.error("beTracker no se cargó después de esperar 20 intentos");
                  clearInterval(interval);
                }
              }, 100);
            })();
          `,
        }}
      />
    </>
  );
}
