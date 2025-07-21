import {
	ButtonContainer,
	Container,
	DownloadButton,
	FeatureCard,
	FeatureDescription,
	FeaturesGrid,
	FeatureTitle,
	IconImage,
	IntroText,
	MainTitle,
	TechnicalInfoSection
} from './technicalInfo.styled';

const TechnicalInfo = () => {
	return (
		<TechnicalInfoSection>
			<Container>
				<MainTitle>Información Técnica</MainTitle>
				<IntroText>
					En Coba, ofrecemos fichas técnicas de nuestros productos que incluyen
					instrucciones de instalación, cuidado y más. Explora nuestro catálogo
					y encuentra la solución perfecta para tu proyecto.
				</IntroText>

				<FeaturesGrid>
					<FeatureCard>
						<IconImage
							src='/assets/images/Products/Layout/245/description.svg'
							alt='Documento'
						/>
						<FeatureTitle>Proceso y Detalles Constructivos</FeatureTitle>
						<FeatureDescription>
							Consulta nuestro catálogo para ver todas las opciones.
						</FeatureDescription>
					</FeatureCard>

					<FeatureCard>
						<IconImage
							src='/assets/images/Products/Layout/245/colors.svg'
							alt='Paleta de colores'
						/>
						<FeatureTitle>Variedades de Color</FeatureTitle>
						<FeatureDescription>
							Ofrecemos múltiples variantes de color para cada producto.
						</FeatureDescription>
					</FeatureCard>

					<FeatureCard>
						<IconImage
							src='/assets/images/Products/Layout/245/contacts_product.svg'
							alt='Persona'
						/>
						<FeatureTitle>Recomendaciones</FeatureTitle>
						<FeatureDescription>
							Cada producto incluye una descripción detallada.
						</FeatureDescription>
					</FeatureCard>
				</FeaturesGrid>

				<ButtonContainer>
					<DownloadButton>Documentos descargables</DownloadButton>
				</ButtonContainer>
			</Container>
		</TechnicalInfoSection>
	);
};

export default TechnicalInfo;
