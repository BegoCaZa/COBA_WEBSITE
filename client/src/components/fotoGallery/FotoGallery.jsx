import {
	GalleryGrid,
	GalleryImage,
	LargeLeftItem,
	MediumBottomLeftItem,
	MediumBottomRightItem,
	SmallTopRightItem
} from './fotoGallery.styles';

const FotoGallery = () => {
	return (
		<GalleryGrid>
			<LargeLeftItem>
				<GalleryImage
					src='/assets/images/gallery/fotos/Placeholder Image 1.png'
					alt='Ladrillos y materiales de construcción COBA'
				/>
			</LargeLeftItem>

			<SmallTopRightItem>
				<GalleryImage
					src='/assets/images/gallery/fotos/Placeholder Image 2.png'
					alt='Trabajo con concreto de alta calidad'
				/>
			</SmallTopRightItem>

			<MediumBottomRightItem>
				<GalleryImage
					src='/assets/images/gallery/fotos/Placeholder Image 4.png'
					alt='Tejas rojas para construcción'
				/>
			</MediumBottomRightItem>

			<MediumBottomLeftItem>
				<GalleryImage
					src='/assets/images/gallery/fotos/Placeholder Image 3.png'
					alt='Sitio de construcción con camiones COBA'
				/>
			</MediumBottomLeftItem>
		</GalleryGrid>
	);
};

export default FotoGallery;
