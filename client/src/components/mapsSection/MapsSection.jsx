import {
	StyledAdress,
	StyledAdressContainer,
	StyledCity,
	StyledContainer,
	StyledMapImgCDB,
	StyledMapImgMTY,
	StyledMapTitle
} from './mapsSection.styles';

const MapsSection = () => {
	return (
		<StyledContainer>
			<StyledMapTitle>PLANTA DE PRODUCCIÓN</StyledMapTitle>
			<StyledAdressContainer>
				<StyledMapImgCDB />
				<StyledCity>CÓRDOBA</StyledCity>
				<StyledAdress>
					Km. 335 Blvd. Córdoba a Fortín S/N, Fortín de las Flores, Ver. C.P.
					94470 
				</StyledAdress>
			</StyledAdressContainer>
			<StyledMapTitle>BODEGA</StyledMapTitle>
			<StyledAdressContainer>
				<StyledMapImgMTY />
				<StyledCity>MONTERREY</StyledCity>
				<StyledAdress>
					Prolongación José Ma. Arteaga #221 Colonia Fierro, Monterrey, Nuevo
					León
				</StyledAdress>
			</StyledAdressContainer>
		</StyledContainer>
	);
};

export default MapsSection;
