import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from '.';

const meta = {
  title: 'Layout/Footer',
  component: Footer,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Footer>;

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