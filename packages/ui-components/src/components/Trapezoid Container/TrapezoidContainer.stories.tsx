import type { Meta, StoryObj } from '@storybook/react';
import { TrapezoidContainer } from '.';

const meta = {
	title: 'Enviroment/TrapezoidContainer',
	component: TrapezoidContainer,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TrapezoidContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
		children: <div style={{ width: '500px', height: '500px' }}> Hello </div>,
		color: undefined,
		rotation: 'right'
  },
};
