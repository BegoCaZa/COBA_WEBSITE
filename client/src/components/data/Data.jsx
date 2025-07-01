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
			<StyledDataItem>
				<StyledDataNumber>8k+</StyledDataNumber>
				<StyledDataText>
					proyectos arquitectónicos completados exitosamente
				</StyledDataText>
			</StyledDataItem>

			<StyledDataItem>
				<StyledDataNumber>98%</StyledDataNumber>
				<StyledDataText>
					control de calidad en cada uno de los pedidos
				</StyledDataText>
			</StyledDataItem>
		</StyledDataContainer>
	);
};

export default Data;
