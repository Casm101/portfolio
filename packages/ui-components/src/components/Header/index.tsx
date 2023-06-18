import { StyledHeader, StyledLink, LinkContainer } from './styles.ts';

import { ILink } from '../../types/LinkTypes.ts';

interface HeaderProps {
	logo: string;
  links: ILink[];
}

const Link = ({ text, href }: ILink) => (
	<StyledLink href={href}>{text}</StyledLink>
);

export const Header = ({ logo, links }: HeaderProps) => (
	<StyledHeader>
		<img src={logo} alt="Logo src" />

		<LinkContainer>
			{links.map((link, idx) => <Link {...link} key={idx} />)}
		</LinkContainer>
	</StyledHeader>
);
