// Component imports
import { SlantedContainer } from '../Slanted Container/index.tsx';

// Type imports
import { ILink } from '../../types/LinkTypes.ts';

interface FooterProps {
	logo: string;
  links: ILink[];
}

export const Footer = ({ logo, links }: FooterProps) => (
	<SlantedContainer>
		hello
	</SlantedContainer>
);
