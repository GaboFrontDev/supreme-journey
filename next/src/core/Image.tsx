import _Image from 'next/image';
import { ComponentProps } from 'react';

type ImageProps = ComponentProps<typeof _Image>;

const Image = ({ src, alt, width, height, ...rest }: ImageProps) => {
  return (
    <_Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      {...rest}
    />
  );
};

export default Image;