import styled from "@emotion/styled";

const primary = '#ccfbf1';
//const secondary = '#e0f2fe';
const fontColor = '#111827';

export const StyledHeader = styled.header({

	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	position: 'fixed',

	height: '8vh',
	width: '100%',

	padding: '.5rem 2rem',
	marginBottom: '8vh',

	backgroundColor: primary,
	color: fontColor,

	boxShadow: 'var(--tw - ring - offset - shadow, 0 0 #0000), var(--tw - ring - shadow, 0 0 #0000), var(--tw - shadow)',

	img: {
		height: '70%'
	},

	boxSizing: 'border-box',
	zIndex: 1000
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