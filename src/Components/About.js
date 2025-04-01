import React, { useRef, useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import './styles/About.css';

import general from '../Data/general.json';
import { useOnScreen } from '../Hooks/useOnScreen';

const pageId = 'about';

const AboutPage = ({ setHighlight }) => {
	const pageRef = useRef();
	const isPageOnScreen = useOnScreen(pageRef, 0.3);

	useEffect(() => {
		if (isPageOnScreen) {
			setHighlight(pageId);
		}
	}, [isPageOnScreen, setHighlight]);

	const contactDetails = (
		<div className='columns contact-details'>
			<h2>Contact Details</h2>
			<p className='address'>
				<span>
					Location: {general.address.region ? `${general.address.region} Region - ` : ''}{' '}
					{general.address.province}, {general.address.country}
				</span>
				<br />
				<span>
					<a href={`mailto:${general.main.email}`} aria-label={`Email ${general.main.email}`}>
						{general.main.email}
					</a>
				</span>
			</p>
		</div>
	);

	const downloadResume = (
		<div className='columns download'>
			<p>
				<a 
					rel='noopener noreferrer' 
					href={general.main.resumeDownload} 
					target='_blank' 
					className='button'
					aria-label='Download Resume'
				>
					<i className='fa fa-download' aria-hidden='true'></i>Download Resume
				</a>
			</p>
		</div>
	);

	return (
		<div ref={pageRef} id={pageId}>
			<div className='row'>
				<div className='three columns'>
					<img
						className='profile-pic'
						src={`images/${general.main.image}`}
						alt='Profile'
					/>
				</div>
				<div className='nine columns main-col'>
					<h2 id='about-heading'>About Me</h2>
					<p>{general.main.bio}</p>
					<div className='row'>
						{contactDetails}
						{downloadResume}
					</div>
				</div>
			</div>
		</div>
	);
};

AboutPage.propTypes = {
	setHighlight: PropTypes.func.isRequired
};

export default memo(AboutPage);
