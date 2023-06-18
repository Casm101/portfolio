import styled from "@emotion/styled";

interface StyledProps {
	color?: string;
	rotation?: 'left' | 'right';
}

export const StyledSlantedContainer = styled.div(({ color, rotation }: StyledProps) => ({
	background: color,
	padding: '1.5rem',
	transform: rotation === 'left' ?
		"skewX(-1deg) skewY(.75deg)" :
		"skewX(1deg) skewY(-.75deg)"
	,

	'> :first-of-type': {
		transform: rotation === 'left' ?
		"skewX(1deg) skewY(-.75deg)" :
		"skewX(-1deg) skewY(.75deg)"
		,
	}
}));