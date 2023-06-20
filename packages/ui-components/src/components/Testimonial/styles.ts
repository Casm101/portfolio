import styled from "@emotion/styled";

export const StyledTestimonial = styled.div`

	display: flex;
	flex-direction: column;
	gap: 1rem;
	
	font-size: 1.2rem;
	padding: 1rem;
	max-width: 400px;

	.user-details {

		display: flex;
		align-items: center;
		gap: 2rem;

		.empty-image {
			width: 30px;
			height: 30px;
		}

		.loaded-image {

			transform: skewX(2deg) skewY(-1.75deg);
			object-fit: contain;
			overflow: hidden;

			width: 80px;
			height: 80px;

			img {
				transform: skewX(-2deg) skewY(1.75deg);
				width: 100%;
			}
		}

		.name {
			font-weight: 600;
			margin: 0;
		}

		.username {
			margin: 8px 0;
		}
	}

	.user-testimonial {
		line-height: 1.5;
	}
`;