import type { Meta, StoryObj } from '@storybook/react';
import { HeaderNav } from './HeaderNav';

const NavContainer = (props: ILayout) => {
  return (
    <div className='bg-c-blue-400 h-[800px] w-[100vw]'>
      <div className='h-20 flex items-center justify-center px-4'>
        <HeaderNav {...props} />
      </div>
    </div>
  );
};

const meta: Meta<typeof HeaderNav> = {
  title: 'Components/Header/HeaderNav',
  component: NavContainer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof HeaderNav>;

const mockNavigationLinks = [
  {
    id: 1,
    title: 'Home',
    url: '',
  },
  {
    id: 2,
    title: 'About',
    url: 'about',
  },
  {
    id: 3,
    title: 'Services',
    url: 'services',
  },
  {
    id: 4,
    title: 'Contact',
    url: 'contact',
  },
];

export const Default: Story = {
  args: {
    currentLocale: 'en',
    navigationLinks: mockNavigationLinks,
  },
};

export const WithNoLinks: Story = {
  args: {
    currentLocale: 'en',
    navigationLinks: [],
  },
};

export const WithLongTitles: Story = {
  args: {
    currentLocale: 'en',
    navigationLinks: [
      {
        id: 1,
        title: 'Our Amazing Services and Products',
        url: 'services',
      },
      {
        id: 2,
        title: 'About Our Company and Mission',
        url: 'about',
      },
      {
        id: 3,
        title: 'Get in Touch With Our Team',
        url: 'contact',
      },
    ],
  },
}; 