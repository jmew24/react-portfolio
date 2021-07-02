import React, { useMemo } from 'react';

import general from '../Data/General';

const HeaderPage = () => {
	const networks = useMemo(
		() =>
			general.social.map((network) => {
				return (
					<li key={network.name}>
						<a href={network.url}>
							<i className={network.className}></i>
						</a>
					</li>
				);
			}),
		[],
	);

	return (
		<header id='home'>
			<nav id='nav-wrap'>
				<ul id='nav' className='nav-list'>
					<li className='nav-list-item current' id='nav-home'>
						<a className='smoothscroll' href='#home'>
							Home
						</a>
					</li>
					<li className='nav-list-item' id='nav-about'>
						<a className='smoothscroll' href='#about'>
							About
						</a>
					</li>
					<li className='nav-list-item' id='nav-experience'>
						<a className='smoothscroll' href='#experience'>
							Experience
						</a>
					</li>
					<li className='nav-list-item' id='nav-certifications'>
						<a className='smoothscroll' href='#certifications'>
							Certifications
						</a>
					</li>
					<li className='nav-list-item' id='nav-skills'>
						<a className='smoothscroll' href='#skills'>
							Skills
						</a>
					</li>
					<li className='nav-list-item' id='nav-education'>
						<a className='smoothscroll' href='#education'>
							Education
						</a>
					</li>
					<li className='nav-list-item' id='nav-gallery'>
						<a className='smoothscroll' href='#gallery'>
							Gallery & Projects
						</a>
					</li>
				</ul>
			</nav>

			<div className='row banner'>
				<div className='banner-text'>
					<h1 className='responsive-headline'>I'm {general.main.name}.</h1>
					<h3>
						I'm{' '}
						<span>
							{general.address.province} {general.address.country}
						</span>{' '}
						based and work in <span>{general.main.occupation}</span>. {general.main.description}.
					</h3>
					<hr />
					<ul className='social'>{networks}</ul>
				</div>
			</div>

			<p className='scrolldown'>
				<a className='smoothscroll' href='#about'>
					<i className='icon-down-circle'></i>
				</a>
			</p>
		</header>
	);
};

export default HeaderPage;
