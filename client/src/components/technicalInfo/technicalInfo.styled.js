import styled from 'styled-components';
import { TYPOGRAPHY } from '../../styles/Typography';
import { COLORS } from '../../styles/Colors';

export const TechnicalInfoSection = styled.section`
	background-color: #e8ddd4;
	padding: 40px 20px;
`;

export const Container = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	align-items: center;
	display: flex;
	flex-direction: column;
`;

export const MainTitle = styled.h2`
	font-family: ${TYPOGRAPHY.headingFont};
	font-size: ${TYPOGRAPHY.headings.h1.mobile.fontSize};
	color: ${COLORS.irishCoffeeDarkest};
	margin-bottom: 20px;
	text-align: center;

	@media (min-width: 768px) {
		text-align: left;
		margin-bottom: 20px;
	}
`;

export const IntroText = styled.p`
	font-family: ${TYPOGRAPHY.bodyFont};
	font-size: ${TYPOGRAPHY.text.medium.fontSize};
	color: ${COLORS.irishCoffeeDarkest};
	line-height: 1.4;
	width: 90%;
	margin: 0;
	text-align: center;

	@media (min-width: 768px) {
		text-align: right;
		max-width: 50%;
		margin-left: auto;
		margin-bottom: 60px;
	}
`;

export const FeaturesGrid = styled.div`
	display: flex;
	flex-direction: column;
	gap: 40px;

	@media (min-width: 768px) {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 60px;
		margin-bottom: 60px;
	}
`;

export const FeatureCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
`;

export const IconImage = styled.img`
	width: 40px;
	height: 40px;
	margin-bottom: 20px;
`;
export const FeatureTitle = styled.h3`
	font-size: 18px;
	font-weight: 700;
	color: #333;
	text-transform: uppercase;
	margin-bottom: 15px;
	letter-spacing: 0.5px;

	@media (min-width: 768px) {
		font-size: 16px;
	}
`;

export const FeatureDescription = styled.p`
	font-size: 14px;
	color: #555;
	line-height: 1.5;
`;

export const DownloadButton = styled.button`
	background-color: #4a3424;
	color: white;
	padding: 15px 30px;
	border: none;
	border-radius: 6px;
	font-size: 16px;
	font-weight: 500;
	cursor: pointer;
	transition: background-color 0.3s ease;
	margin-top: 40px;

	&:hover {
		background-color: #3a2519;
	}

	@media (min-width: 768px) {
		margin-top: 0;
		align-self: flex-start;
	}
`;

export const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;

	@media (min-width: 768px) {
		justify-content: flex-start;
	}
`;
