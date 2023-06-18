import { StyledTrapezoidContainer} from './styles.ts';


interface SContainerProps {
	children: React.ReactNode | JSX.Element;
	color?: string;
	rotation?: 'left' | 'right';
}

export const TrapezoidContainer = ({ children, color = '#ccfbf1', rotation }: SContainerProps) => (
	<StyledTrapezoidContainer color={color} rotation={rotation}>
		{children}
	</StyledTrapezoidContainer>
);
