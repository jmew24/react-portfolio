import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import LightBox from './LightBox';
import { useOnScreen } from '../Hooks/useOnScreen';
import { gallery as galleryData } from '../Data';
import 'yet-another-react-lightbox/styles.css';

const pageId = 'gallery';

const GalleryItem = ({ item, category }) => {
	if (!item || !item.id) return null;

	const prefixUrl = `images/portfolio/${category}/gallery/${item.id}`;
	const images = item.images
		? item.images
			.filter(image => image && image.file)
			.map(image => ({
				src: `${prefixUrl}/${image.file}`,
				description: image.description || '',
			}))
		: [];

	if (images.length === 0) return null;
	
	return (
		<div
			key={`gallery-${category}-${item.id}`}
			id={`gallery-${category}-${item.id}`}
			className='columns gallery-item'
		>
			<LightBox
				id={item.id} 
				source={`gallery-${category}`} 
				title={item.title || ''}
				images={images} 
			/>
		</div>
	);
};

GalleryItem.propTypes = {
	item: PropTypes.shape({
		id: PropTypes.string,
		title: PropTypes.string,
		images: PropTypes.arrayOf(PropTypes.shape({
			file: PropTypes.string,
			description: PropTypes.string,
		})),
	}),
	category: PropTypes.string,
};

const GallerySection = ({ category }) => {
	if (!galleryData?.categories?.[category]?.items?.length) return null;

	const items = galleryData.categories[category].items;
	
	return (
		<div className='gallery-section'>
			<h2>{galleryData.categories[category].title}</h2>
			<p className='category-description'>
				{galleryData.categories[category].description}
			</p>
			<div className='gallery-wrapper bgrid-quarters s-bgrid-thirds cf'>
				{items.map(item => (
					<GalleryItem
						key={`gallery-${category}-${item.id}`}
						item={item}
						category={category}
					/>
				))}
			</div>
		</div>
	);
};

GallerySection.propTypes = {
	category: PropTypes.string
};

const GalleryPage = ({ setHighlight }) => {
	const pageRef = useRef(null);
	const isPageOnScreen = useOnScreen(pageRef);

	useEffect(() => {
		if (isPageOnScreen) {
			setHighlight(pageId);
		}
	}, [isPageOnScreen, setHighlight]);

	if (!galleryData?.categories) return null;

	const hasContent = Object.values(galleryData.categories).some(
		category => category?.items?.length > 0
	);

	if (!hasContent) return null;

	return (
		<div ref={pageRef} className='row' id={pageId}>
			<div className='twelve columns collapsed'>
				{Object.keys(galleryData.categories).map(category => (
					<GallerySection key={category} category={category} />
				))}
			</div>
		</div>
	);
};

GalleryPage.propTypes = {
	setHighlight: PropTypes.func
};

export default GalleryPage;
