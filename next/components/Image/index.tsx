import { FC } from 'react';
import NextImage, { ImageProps as NextImageProps } from 'next/image';

export type ImageProps = NextImageProps & {
  borderRadius?: string;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
}

export const Image: FC<ImageProps> = ({ 
  src, 
  alt, 
  width, 
  height, 
  ...props 
}) => {
  return (
    <NextImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      {...props}
    />
  );
}; 

export default Image;