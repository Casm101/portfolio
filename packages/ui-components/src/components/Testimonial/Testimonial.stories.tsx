import type { Meta, StoryObj } from '@storybook/react';
import { Testimonial } from '.';

const meta = {
	title: 'Service/Testimonial',
	component: Testimonial,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Testimonial>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
		image: {
			src: 'https://pbs.twimg.com/profile_images/1090714620275245056/HS9xcEDk_200x200.jpg',
			alt: 'Christian'
		},
		name: 'Christian Smith Mantas',
		userName: '@casm101',
		testimonial: 'Working with Christian is always a blast - his knack for problem-solving and coding skills kept our team inspired. Plus, his love for open-source is seriously contagious. Miss those days!',
		theme: 'light'
  },
};
