import React, { useMemo } from 'react';

import { Main } from '../Data/resume';

const HeaderPage = () => {
	const networks = useMemo(
		() =>
			Main.social.map((network) => {
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
				<a className='mobile-btn' href='#nav-wrap' title='Show navigation'>
					Show navigation
				</a>
				<a className='mobile-btn' href='#home' title='Hide navigation'>
					Hide navigation
				</a>

				<ul id='nav' className='nav-list'>
					<li className='nav-list-item current'>
						<a className='smoothscroll' href='#home'>
							Home
						</a>
					</li>
					<li className='nav-list-item'>
						<a className='smoothscroll' href='#about'>
							About
						</a>
					</li>
					<li className='nav-list-item'>
						<a className='smoothscroll' href='#experience'>
							Experience
						</a>
					</li>
					<li className='nav-list-item'>
						<a className='smoothscroll' href='#skills'>
							Skills
						</a>
					</li>
					<li className='nav-list-item'>
						<a className='smoothscroll' href='#education'>
							Education
						</a>
					</li>
				</ul>
			</nav>

			<div className='row banner'>
				<div className='banner-text'>
					<h1 className='responsive-headline'>I'm {Main.name}.</h1>
					<h3>
						I'm{' '}
						<span>
							{Main.address.province} {Main.address.country}
						</span>{' '}
						based and work in <span>{Main.occupation}</span>. {Main.description}.
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
