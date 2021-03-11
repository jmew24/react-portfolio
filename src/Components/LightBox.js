import React, { useState, useRef, useMemo, useEffect } from 'react';

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const LightBox = (props) => {
	const [state, setState] = useState({
		id: props.id ? props.id : 'lightBox-ID',
		source: props.source ? props.source : 'none',
		isOpen: false,
		photoIndex: 0,
		images: props.images ? props.images : [],
	});
	const curImage = state.images[state.photoIndex];
	let _isMounted = useRef(false);
	let _urlId = useRef('');

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const handlePopState = () => {
		if (!state.isOpen) {
			if (_urlId.current === '') {
				const curUrlId = window.location.toString().split('#')[1];
				if (curUrlId === `${state.source}-${state.id}`) {
					_urlId.current = curUrlId;
					setState((prevState) => ({
						...prevState,
						isOpen: true,
					}));
				}
			} else {
				_urlId.current = '';
			}
		}
	};

	useEffect(() => {
		_isMounted.current = true;

		return () => {
			_isMounted.current = false;
		};
	}, []);

	useEffect(() => {
		window.addEventListener('popstate', handlePopState);
		handlePopState();

		return () => {
			window.removeEventListener('popstate', handlePopState);
		};
	}, [handlePopState]);

	return (
		<div
			className='item-wrap clickable'
			onClick={() =>
				setState((prevState) => ({
					...prevState,
					isOpen: true,
				}))
			}
		>
			<img alt={props.title ? props.title : ''} src={state.images[0].src} />{' '}
			<div className='overlay'>
				<div className='works-item-meta'>
					<h5>{props.title}</h5>
					<p>Click to view photo gallery</p>
				</div>
			</div>
			<div className='link-icon'>
				<i className='fa fa-link'></i>
			</div>
			{state.isOpen && (
				<Lightbox
					enableZoom={false}
					imageTitle={props.title ? props.title : ''}
					imageCaption={curImage.description ? curImage.description : ''}
					mainSrc={curImage.src}
					nextSrc={state.images[(state.photoIndex + 1) % state.images.length].src}
					prevSrc={state.images[(state.photoIndex + state.images.length - 1) % state.images.length].src}
					onCloseRequest={() =>
						_isMounted.current &&
						setState((prevState) => ({
							...prevState,
							isOpen: false,
						}))
					}
					onMovePrevRequest={() =>
						_isMounted.current &&
						setState((prevState) => ({
							...prevState,
							photoIndex: (state.photoIndex + state.images.length - 1) % state.images.length,
						}))
					}
					onMoveNextRequest={() =>
						_isMounted.current &&
						setState((prevState) => ({
							...prevState,
							photoIndex: (state.photoIndex + 1) % state.images.length,
						}))
					}
				/>
			)}
		</div>
	);
};

export default LightBox;
