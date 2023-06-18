import { StyledSlantedContainer} from './styles.ts';


interface SContainerProps {
	children: React.ReactNode | JSX.Element;
	color?: string;
	rotation?: 'left' | 'right';
}

export const SlantedContainer = ({ children, color = '#ccfbf1', rotation }: SContainerProps) => (
	<StyledSlantedContainer color={color} rotation={rotation}>
		{children}
	</StyledSlantedContainer>
);
