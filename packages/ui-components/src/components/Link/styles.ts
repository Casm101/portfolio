import styled from "@emotion/styled";

const fontColor = '#111827';

export const StyledLink = styled.a({
	color: fontColor,
	textDecoration: 'none',

	':hover': {
		color: fontColor + '99',
	},

	transition: '.25s'
});