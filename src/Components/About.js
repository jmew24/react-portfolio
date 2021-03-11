import React from 'react';

import { Main } from '../Data/resume';

const AboutPage = () => {
	return (
		<section className='about' id='about'>
			<div className='row'>
				<div className='three columns'>
					<img className='profile-pic' src={`images/${Main.image}`} alt='Profile Pic' />
				</div>
				<div className='nine columns main-col'>
					<h2>About Me</h2>

					<p>{Main.bio}</p>
					<div className='row'>
						<div className='columns contact-details'>
							<h2>Contact Details</h2>
							<p className='address'>
								<span>
									Location: {Main.address.region ? `${Main.address.region} Region - ` : ''} {Main.address.province},{' '}
									{Main.address.country}
								</span>
								<br />
								<span>
									<a href={`mailto:${Main.email}`}>{Main.email}</a>
								</span>
							</p>
						</div>
						<div className='columns download'>
							<p>
								<a href={Main.resumeDownload} className='button'>
									<i className='fa fa-download'></i>Download Experience
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
