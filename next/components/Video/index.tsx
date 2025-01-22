import { FC } from 'react';

export type VideoProps = React.ComponentProps<'video'>;

export const Video: FC<VideoProps> = ({
  src,
  title,
  width = '100%',
  height = 'auto',
  autoPlay = false,
  controls = true,
  muted = false,
  loop = false,
}) => {
  return (
    <video
      src={src}
      title={title}
      width={width}
      height={height}
      autoPlay={autoPlay}
      controls={controls}
      muted={muted}
      loop={loop}
    />
  );
};

export default Video; 