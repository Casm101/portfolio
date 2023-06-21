/* eslint-disable react-hooks/rules-of-hooks */
import { StyledTag, StyledScroller, SlideLoop } from './styles.ts';
import { useShuffle } from '../../hooks/useShuffle.ts';

const random = (min: number, max: number) => Math.floor(Math.random() * (max - min)) + min;

interface ScrollerProps {
	tags: string[];
	rows: number;
	speed?: number;
}

interface TagProps {
	children: React.ReactNode;
}

const Tag = ({ children }: TagProps) => {
	return (
		<StyledTag>
			<span>#</span>{children}
		</StyledTag>
	);
};

export const InfiniteScroller = ({ tags, rows = 1, speed = 30000 }: ScrollerProps) => {

	const slideRows = [];

	for (let i = 0; i < rows; i++) {
		const direction = i % 2 ? 'left' : 'right';
		const shuffledTags = useShuffle(tags);
		slideRows.push(
			<SlideLoop direction={direction} duration={random(speed - 5000, speed + 5000)} key={i}>
				<div className="loop-slider">
					{[...shuffledTags, ...shuffledTags, ...shuffledTags].map((tag, idx) => (
						<Tag key={idx}>
							{tag}
						</Tag>
					))}
				</div>
			</SlideLoop>
		);
	}

	return (
		<StyledScroller>
			{slideRows}
			<div className='fade' />
		</StyledScroller>
	);
};
