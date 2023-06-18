import styled from "@emotion/styled";

const primary = '#ccfbf1';
//const secondary = '#e0f2fe';
const fontColor = '#111827';

export const StyledHeader = styled.header({

	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',

	height: '10vh',
	width: '100%',

	padding: '.5rem 2rem',

	backgroundColor: primary,
	color: fontColor,

	borderBottom: '1px solid #e5e7eb',
	boxShadow: 'var(--tw - ring - offset - shadow, 0 0 #0000), var(--tw - ring - shadow, 0 0 #0000), var(--tw - shadow)',

	img: {
		height: '70%'
	},

	boxSizing: 'border-box'
});

export const LinkContainer = styled.div({
	display: 'flex',
	gap: '1rem'
});

export const StyledLink = styled.a({
	color: fontColor,
	textDecoration: 'none',

	':hover': {
		color: fontColor + '99',
	},

	transition: '.25s'
});