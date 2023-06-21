import type { Meta, StoryObj } from '@storybook/react';
import { InfiniteScroller } from '.';

const meta = {
	title: 'Service/InfiniteScroller',
	component: InfiniteScroller,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof InfiniteScroller>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
		tags: ['React JS', 'Astro', 'Svelte', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Styled Components', 'Emotion', 'Tailwind', 'PHP', 'SASS', 'Node JS', 'Express', 'Fastify', 'React Native', 'Prisma', 'TypeBox', 'Git'],
		rows: 3,
		speed: 60000
  },
};
