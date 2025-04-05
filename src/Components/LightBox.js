import React, { useState, useRef, useEffect, useCallback, memo } from 'react';
import PropTypes from 'prop-types';
import Lightbox from 'yet-another-react-lightbox';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/plugins/counter.css";
import 'yet-another-react-lightbox/styles.css';
import 'react-lazy-load-image-component/src/effects/blur.css';

const LightBox = memo(({ id = 'lightBox-ID', source = 'none', title = '', images = [] }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [photoIndex, setPhotoIndex] = useState(0);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	const isMounted = useRef(false);
	const curId = useRef('');

	const handleIdChange = useCallback((event) => {
		if (!isOpen) {
			if (curId.current === '') {
				const newId = event.detail.id();
				if (newId === `${source}-${id}`) {
					curId.current = newId;
					setIsOpen(true);
				}
			} else {
				curId.current = '';
			}
		}
	}, [isOpen, source, id]);

	const handleClose = useCallback(() => {
		if (isMounted.current) {
			setIsOpen(false);
		}
	}, []);

	const handleImageLoad = useCallback(() => {
		setIsLoading(false);
	}, []);

	const handleImageError = useCallback(() => {
		setIsLoading(false);
		setError('Failed to load image');
	}, []);

	useEffect(() => {
		isMounted.current = true;
		return () => {
			isMounted.current = false;
		};
	}, []);

	useEffect(() => {
		window.addEventListener('id_change', handleIdChange);
		return () => window.removeEventListener('id_change', handleIdChange);
	}, [handleIdChange]);

	useEffect(() => {
		if (!isMounted.current) return;
		if (!isOpen) {
			curId.current = '';
			window.dispatchEvent(new Event('nav-reset'));
		}
	}, [isOpen]);

	const slides = images.map(img => ({
		src: img.src,
		alt: img.alt || title,
		description: img.description
	}));

	if (!images.length) return null;

	return (
		<div
			className='item-wrap clickable'
			onClick={() => setIsOpen(true)}
			role="button"
			tabIndex={0}
			aria-label={`View gallery: ${title}`}
		>
			<LazyLoadImage
				alt={title}
				src={images[0].src}
				className="gallery-image"
				effect="blur"
				onLoad={handleImageLoad}
				onError={handleImageError}
			/>
			<div className='overlay'>
				<div className='gallery-item-meta'>
					<h5>{title}</h5>
					{images[0].description && <p>{images[0].description}</p>}
				</div>
			</div>
			<div className='link-icon'>
				<i className='fa fa-plus'></i>
			</div>

			<Lightbox
				open={isOpen}
				close={handleClose}
				index={photoIndex}
				slides={slides}
				plugins={[
					Counter
				]}
				carousel={{ finite: false }}
				controller={{ closeOnBackdropClick: true }}
				toolbar={{ buttons: ['close'] }}
				animation={{ fade: 0 }}
				on={{
					view: ({ index: currentIndex }) => {
						if (photoIndex !== currentIndex) {
							setPhotoIndex(currentIndex);
						}
					},
				}}
				styles={{
					container: { backgroundColor: 'rgba(0, 0, 0, .95)' },
					button: { filter: 'none' },
					buttonPrev: { left: 20 },
					buttonNext: { right: 20 }
				}}
			/>
			{isLoading && <div className="loading-spinner" />}
			{error && <div className="error-message">{error}</div>}
		</div>
	);
});

LightBox.propTypes = {
	id: PropTypes.string,
	source: PropTypes.string,
	title: PropTypes.string,
	images: PropTypes.arrayOf(PropTypes.shape({
		src: PropTypes.string.isRequired,
		alt: PropTypes.string,
		description: PropTypes.string,
	})),
};

export default LightBox;
