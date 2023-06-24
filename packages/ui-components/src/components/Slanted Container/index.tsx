import { StyledSlantedContainer} from './styles.ts';


interface SContainerProps {
	children: React.ReactNode | JSX.Element;
	color?: string;
	rotation?: 'left' | 'right';
	shadow?: boolean;
}

export const SlantedContainer = ({ children, color = '#ccfbf1', rotation, shadow = false }: SContainerProps) => (
	<StyledSlantedContainer color={color} rotation={rotation} shadow={shadow}>
		{children}
	</StyledSlantedContainer>
);
