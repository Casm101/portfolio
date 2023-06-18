import styled from "@emotion/styled";

interface StyledProps {
	color?: string;
	rotation?: 'left' | 'right';
}

export const StyledTrapezoidContainer = styled.div(({ color, rotation }: StyledProps) => ({
	background: color,
	padding: '1.5rem',
	clipPath: rotation === 'left' ?
		'polygon(0 5%, 100% 0, 100% 100%, 0 95%)' :
		'polygon(0 0, 100% 5%, 100% 95%, 0 100%)',
}));