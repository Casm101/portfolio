import type { Meta, StoryObj } from '@storybook/react';
import { Link } from '.';

const meta = {
	title: 'Typography/Link',
	component: Link,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
		text: 'this is a hyperlink',
		href: '#'
  },
};
