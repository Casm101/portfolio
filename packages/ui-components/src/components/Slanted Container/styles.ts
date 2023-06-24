import styled from "@emotion/styled";

interface StyledProps {
	color?: string;
	rotation?: 'left' | 'right';
	shadow?: boolean;
}

export const StyledSlantedContainer = styled.div(({ color, rotation, shadow }: StyledProps) => ({
	background: color,
	padding: '1.5rem',
	transform: rotation === 'left' ?
		"skewX(-2deg) skewY(1.75deg)" :
		"skewX(2deg) skewY(-1.75deg)"
	,

	'> :first-of-type': {
		transform: rotation === 'left' ?
		"skewX(2deg) skewY(-1.75deg)" :
		"skewX(-2deg) skewY(1.75deg)"
		,
	},
	boxShadow: shadow ? '0 0 30px -10px grey' : '',
}));