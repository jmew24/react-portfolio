import React, { useMemo } from 'react';
import LightBox from './LightBox';

import gallery from '../Data/Gallery';

const GalleryPage = () => {
	const productionGallery = useMemo(
		() =>
			gallery.production.map((gallery) => {
				const prefixUrl = `images/portfolio/production/gallery/${gallery.id}`;
				const images = gallery.images.map((image) => {
					return image.file
						? Object.assign(
								{},
								{
									src: `${prefixUrl}/${image.file}`,
									description: image.description ? image.description : '',
								},
						  )
						: null;
				});
				return images.length > 0 ? (
					<div
						key={`gallery-production-${gallery.id}`}
						id={`gallery-production-${gallery.id}`}
						className='columns gallery-item'
					>
						<LightBox id={gallery.id} source={'gallery-production'} title={gallery.title} images={images} />
					</div>
				) : null;
			}),
		[],
	);
	const codingGallery = useMemo(
		() =>
			gallery.coding.map((gallery) => {
				const prefixUrl = `images/portfolio/coding/gallery/${gallery.id}`;
				const images = gallery.images.map((image) => {
					return image.file
						? Object.assign(
								{},
								{
									src: `${prefixUrl}/${image.file}`,
									description: image.description ? image.description : '',
								},
						  )
						: null;
				});
				return images.length > 0 ? (
					<div
						key={`gallery-coding-${gallery.id}`}
						id={`gallery-coding-${gallery.id}`}
						className='columns gallery-item'
					>
						<LightBox id={gallery.id} source={'gallery-coding'} title={gallery.title} images={images} />
					</div>
				) : null;
			}),
		[],
	);

	return productionGallery.length > 0 || codingGallery.length > 0 ? (
		<div className='row' id='gallery'>
			<div className='twelve columns collapsed'>
				<h1>Check Out My Photo Gallery</h1>

				<div className='gallery-wrapper bgrid-quarters s-bgrid-thirds cf'>{productionGallery}</div>

				<div className='gallery-wrapper bgrid-quarters s-bgrid-thirds cf'>{codingGallery}</div>
			</div>
		</div>
	) : null;
};

export default GalleryPage;
