'use client';
import { useEffect, useRef } from 'react';
import { mapStyles } from './consts';

interface SnazzyMapProps {
  lat: number;
  lng: number;
  title?: string;
  zoom?: number;
  styles: any;
}

export default function Map({ lat, lng, title = '', zoom = 16, styles }: SnazzyMapProps) {
  const mapRef = useRef(null);

  useEffect(() => {
    // @ts-ignore
    if (!window.google || !mapRef.current) return ;

    const center = { lat, lng };

    const snazzyStyle = styles || mapStyles;
    // @ts-ignore
    const map = new window.google.maps.Map(mapRef.current, {
      center,
      zoom,
      styles: snazzyStyle,
      disableDefaultUI: true
    });

    // @ts-ignore
    new window.google.maps.Marker({
      position: center,
      map,
      title
    });
  }, [lat, lng, title, zoom]);

  return <div ref={mapRef} style={{ width: '100%', height: '600px', borderRadius: '1rem' }} />;
}
