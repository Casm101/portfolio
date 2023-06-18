import { ILink } from '../../types/LinkTypes';
import { StyledLink } from './styles';

export const Link = ({ text, href }: ILink) => (
	<StyledLink href={href}>{text}</StyledLink>
);