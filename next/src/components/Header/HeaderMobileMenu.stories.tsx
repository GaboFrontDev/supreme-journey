import type { Meta, StoryObj } from '@storybook/react';
import { HeaderMobileMenu } from './HeaderMobileMenu';

const meta: Meta<typeof HeaderMobileMenu> = {
  title: 'Components/Header/HeaderMobileMenu',
  component: HeaderMobileMenu,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof HeaderMobileMenu>;

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