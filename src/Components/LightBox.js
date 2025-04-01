import React, { useState, useRef, useEffect, useCallback, memo } from 'react';
import PropTypes from 'prop-types';
import Lightbox from 'yet-another-react-lightbox';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/plugins/counter.css";
import 'yet-another-react-lightbox/styles.css';
import 'react-lazy-load-image-component/src/effects/blur.css';

const LightBox = memo(({ id = 'lightBox-ID', source = 'none', title = '', images = [] }) => {
	const [state, setState] = useState({
		isOpen: false,
		photoIndex: 0,
		isLoading: true,
		error: null
	});
	
	const isMounted = useRef(false);
	const curId = useRef('');

	const handleIdChange = useCallback((event) => {
		if (!state.isOpen) {
			if (curId.current === '') {
				const newId = event.detail.id();
				if (newId === `${source}-${id}`) {
					curId.current = newId;
					setState(prev => ({ ...prev, isOpen: true }));
				}
			} else {
				curId.current = '';
			}
		}
	}, [state.isOpen, source, id]);

	const handleClose = useCallback(() => {
		if (isMounted.current) {
			setState(prev => ({ ...prev, isOpen: false }));
		}
	}, []);

	const handleImageLoad = useCallback(() => {
		setState(prev => ({ ...prev, isLoading: false }));
	}, []);

	const handleImageError = useCallback(() => {
		setState(prev => ({ 
			...prev, 
			isLoading: false,
			error: 'Failed to load image'
		}));
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
		if (!state.isOpen) {
			curId.current = '';
			window.dispatchEvent(new Event('nav-reset'));
		}
	}, [state.isOpen]);

	const slides = images.map(img => ({
		src: img.src,
		alt: img.alt || title,
		description: img.description
	}));

	if (!images.length) return null;

	return (
		<div
			className='item-wrap clickable'
			onClick={() => setState(prev => ({ ...prev, isOpen: true }))}
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
				open={state.isOpen}
				close={handleClose}
				index={state.photoIndex}
				slides={slides}
				plugins={[Counter]}
				carousel={{ finite: false }}
				controller={{ closeOnBackdropClick: true }}
				toolbar={{ buttons: ['close'] }}
				animation={{ fade: 0 }}
				styles={{
					container: { backgroundColor: 'rgba(0, 0, 0, .95)' },
					button: { filter: 'none' },
					buttonPrev: { left: 20 },
					buttonNext: { right: 20 }
				}}
			/>
			{state.isLoading && <div className="loading-spinner" />}
			{state.error && <div className="error-message">{state.error}</div>}
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
