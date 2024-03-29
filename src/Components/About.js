import React, { useRef, useEffect } from 'react';

import general from '../Data/General';
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

	return (
		<section ref={pageRef} className='about' id={pageId}>
			<div className='row'>
				<div className='three columns'>
					<img className='profile-pic' src={`images/${general.main.image}`} alt='Profile Pic' />
				</div>
				<div className='nine columns main-col'>
					<h2>About Me</h2>

					<p>{general.main.bio}</p>
					<div className='row'>
						<div className='columns contact-details'>
							<h2>Contact Details</h2>
							<p className='address'>
								<span>
									Location: {general.address.region ? `${general.address.region} Region - ` : ''}{' '}
									{general.address.province}, {general.address.country}
								</span>
								<br />
								<span>
									<a href={`mailto:${general.main.email}`}>{general.main.email}</a>
								</span>
							</p>
						</div>
						<div className='columns download'>
							<p>
								<a rel='noopener noreferrer' href={general.main.resumeDownload} target='_blank' className='button'>
									<i className='fa fa-download'></i>Download Resume
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutPage;
