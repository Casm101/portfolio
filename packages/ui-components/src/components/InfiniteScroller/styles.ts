import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";
import { colors } from "../../theme";

interface LoopProps {
	direction: 'left' | 'right';
	duration: number;
}

export const StyledTag = styled.span`

	display: flex;
  align-items: center;
	gap: .25rem;
	min-width: max-content;

  color: ${colors['light'].fontColor.primary};
  background-color: ${colors['light'].secondary.base};

  border-radius: .5rem;
  padding: .5rem 1rem;
  box-shadow: 0 0 25px -15px grey;

	transition: all .25s;
	cursor: pointer;

	span {
		font-size: 1.2rem;
		color: ${colors['light'].secondary.darker};
	}

	&:hover {
		transform: translateY(10%);
	}
`;

export const StyledScroller = styled.div`
	display: flex;
	flex-direction: column;
	overflow: hidden;

	.fade {
		pointer-events: none;
		background: linear-gradient(90deg, ${colors['light'].secondary.lighter}, transparent 15%, transparent 85%, ${colors['light'].secondary.lighter});
		position: absolute;
		inset: 0;
		width: 105%;
		transform: translateX(-2.5%);
	}
`;

const moveRight = keyframes`
	0% {
		transform: translateX(0);
	}
	100% {
		transform: translateX(-25%);
	}
`;

const moveLeft = keyframes`
	0% {
		transform: translateX(-25%);
	}
	100% {
		transform: translateX(0%);
	}
`;

export const SlideLoop = styled.div<LoopProps>`
	width: 100%;
	display: flex;
	flex-shrink: 0;
	flex-direction: column;
	padding: 1rem 0;
	overflow: hidden;

	.loop-slider {
    display: flex;
		gap: 1rem;
    width: 200%;
    animation: ${p => p.direction === 'left' ? 
			css`${moveLeft} linear infinite` : 
			css`${moveRight} linear infinite`}
		;
    animation-duration: ${p => p.duration}ms;
  }
`;
