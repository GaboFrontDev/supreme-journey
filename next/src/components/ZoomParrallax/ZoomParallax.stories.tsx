import type { Meta, StoryObj } from '@storybook/react';
import ZoomParallax from './ZoomParallax';

const content = (props: ILayout) => {
  return (
    <ZoomParallax {...props}>
      <div className="w-full h-full bg-red-500">
        <h1>ZoomParallax</h1>
      </div>
    </ZoomParallax>
  )
}

const meta: Meta<typeof ZoomParallax> = {
  title: 'Components/ZoomParallax',
  component: content,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof ZoomParallax>;

export const Default: Story = {
  args: {},
};

export const CustomContent: Story = {
  args: {
    children: <div>Contenido personalizado</div>,
  },
};