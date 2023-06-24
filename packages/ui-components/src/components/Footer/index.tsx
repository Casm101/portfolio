// Component imports
import { SlantedContainer } from '../Slanted Container/index.tsx';
import { Link } from '../Link/index.tsx';

// Type imports
import { ILink } from '../../types/LinkTypes.ts';

interface FooterProps {
  links: ILink[];
}

export const Footer = ({ links }: FooterProps) => (
	<SlantedContainer>
		<div>
			{links.map((link, idx) => (
				<Link href={link.href} text={link.text} key={idx} />
			))}
		</div>
	</SlantedContainer>
);
