'use client';
import { useEffect, useRef, useState } from 'react';
import { mapStyles } from './consts';

interface SnazzyMapProps {
  lat: number;
  lng: number;
  title?: string;
  zoom?: number;
  styles: any;
  id: string;
}

export default function Map({ lat, lng, title = '', zoom = 17, styles, id }: SnazzyMapProps) {
  const mapRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, [window.innerWidth]);


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
      icon: {
        url: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
        // @ts-ignore
        labelOrigin: new window.google.maps.Point(0, -20), // Cambia la posición del label
      },
      label: {
        text: title,
        color: 'black',
        fontSize: '18px',
        fontWeight: 'bold',
      },

    });
  }, [lat, lng, title, zoom, styles]);

  return <iframe src={`https://snazzymaps.com/embed/${id}`} width="100%" height={isMobile ? '300px' : '600px'} style={{border: 'none'}}></iframe>
}
