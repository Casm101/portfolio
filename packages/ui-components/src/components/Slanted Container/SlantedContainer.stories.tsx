import type { Meta, StoryObj } from '@storybook/react';
import { SlantedContainer } from '.';

const meta = {
	title: 'Enviroment/SlantedContainer',
	component: SlantedContainer,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SlantedContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
		children: <div style={{ width: '500px', height: '500px' }}> Hello </div>,
		color: undefined,
		rotation: 'right'
  },
};
