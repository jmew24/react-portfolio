import React from 'react';

const About = ({ data }) => {
	return (
		<section id='about'>
			<div className='row'>
				<div className='three columns'>
					<img className='profile-pic' src={`images/${data.image}`} alt='Profile Pic' />
				</div>
				<div className='nine columns main-col'>
					<h2>About Me</h2>

					<p>{data.bio}</p>
					<div className='row'>
						<div className='columns contact-details'>
							<h2>Contact Details</h2>
							<p className='address'>
								<span>
									Location: {data.address.province}, {data.address.country}
								</span>
								<br />
								<span>
									<a href={`mailto:${data.email}`}>{data.email}</a>
								</span>
							</p>
						</div>
						<div className='columns download'>
							<p>
								<a href={data.resumeDownload} className='button'>
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

export default About;
