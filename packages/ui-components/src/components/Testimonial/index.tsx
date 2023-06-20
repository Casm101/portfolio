import { SlantedContainer } from '../Slanted Container/index.tsx';
import { StyledTestimonial } from './styles.ts';

import { colors } from "../../theme";


interface TestimonialProps {
	image?: {
		src: string;
		alt: string;
	};
	name: string;
	userName: string;
	testimonial: string;
	theme: 'light' | 'dark';
}

export const Testimonial = ({ image, name, userName, testimonial, theme = 'light' }: TestimonialProps) => (
	
		<SlantedContainer color={colors[theme].background} rotation='left' shadow={true}>
			<StyledTestimonial>
				<div className='user-details'>
					{ image ?
						<div className='loaded-image'>
							<img src={image.src} alt={image.alt} /> 
						</div>
						:
						<SlantedContainer color="red" rotation='right'>
							<div className='empty-image' />
						</SlantedContainer>
					}
					<div>
						<p className='name'>{name}</p>
						<p className='username'>{userName}</p>
					</div>
				</div>
				<p className='user-testimonial'>{testimonial}</p>
			</StyledTestimonial>
		</SlantedContainer>
);
