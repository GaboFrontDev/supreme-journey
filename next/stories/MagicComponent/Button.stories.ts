import type { Meta, StoryObj } from '@storybook/react';

import MagicComponent from '@/containers/MagicComponent';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export


const meta = {
  title: 'Example/MagicComponent/Button',
  component: MagicComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' },
  },
} satisfies Meta<typeof MagicComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Magic Button',
    className: 'bg-red-500 w-full h-full text-white',
    component: 'Button',
    children: 'Hello',
  },
};
