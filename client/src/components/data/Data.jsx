import {
	StyledDataContainer,
	StyledDataItem,
	StyledDataNumber,
	StyledDataText
} from './data.styles.js';

const Data = () => {
	return (
		<StyledDataContainer>
			<StyledDataItem>
				<StyledDataNumber>30+</StyledDataNumber>
				<StyledDataText>
					años liderando el mercado de materiales de construcción
				</StyledDataText>
			</StyledDataItem>
		</StyledDataContainer>
	);
};

export default Data;
