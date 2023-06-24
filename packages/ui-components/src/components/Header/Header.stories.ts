import type { Meta, StoryObj } from '@storybook/react';
import { Header } from '.';

const meta = {
  title: 'Layout/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
		logo: 'https://mi.corzzofit.com/images/logo.png',
		links: [
			{
				text: 'Home',
				href: '/'
			},
			{
				text: 'About Me',
				href: '/'
			}
		],
  },
};
