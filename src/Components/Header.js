import React, { useRef, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import './styles/Header.css';

import general from '../Data/general.json';
import { SocialList } from '../Factories/SocialList';
import { useOnScreen } from '../Hooks/useOnScreen';

const pageId = 'home';

const navigationItems = [
	{ id: 'home', label: 'Home' },
	{ id: 'about', label: 'About' },
	{ id: 'experience', label: 'Experience' },
	{ id: 'certifications', label: 'Certifications' },
	{ id: 'skills', label: 'Skills' },
	{ id: 'education', label: 'Education' },
	{ id: 'gallery', label: 'Gallery & Projects' },
];

const HeaderPage = ({ setHighlight }) => {
	const pageRef = useRef(null);
	const isPageOnScreen = useOnScreen(pageRef, 0.2);

	useEffect(() => {
		if (isPageOnScreen) {
			setHighlight(pageId);
		}
	}, [isPageOnScreen, setHighlight]);

	const renderNavigation = useMemo(() => (
		<nav id="nav-wrap" role="navigation" aria-label="Main navigation">
			<ul id="nav" className="nav-list">
				{navigationItems.map(({ id, label }) => (
					<li key={id} className="nav-list-item" id={`nav-${id}`}>
						<a 
							className="smoothscroll" 
							href={`#${id}`}
							aria-current={id === pageId ? 'page' : undefined}
						>
							{label}
						</a>
					</li>
				))}
			</ul>
		</nav>
	), []);

	const renderBanner = useMemo(() => (
		<div className="row banner">
			<div className="banner-text">
				<h1 className="responsive-headline">I'm {general.main.name}.</h1>
				<h3>
					I'm{' '}
					<span>
						{general.address.province} {general.address.country}
					</span>{' '}
					based and work in <span>{general.main.occupation}</span>. {general.main.description}.
				</h3>
				<hr />
				<ul className="social">
					<SocialList socials={general.social} />
				</ul>
			</div>
		</div>
	), []);

	return (
		<header ref={pageRef} id={pageId}>
			{renderNavigation}
			{renderBanner}
			<p className="scrolldown">
				<a 
					className="smoothscroll" 
					href="#about"
					aria-label="Scroll to About section"
				>
					<i className="icon-down-circle" aria-hidden="true"></i>
				</a>
			</p>
		</header>
	);
};

HeaderPage.propTypes = {
	setHighlight: PropTypes.func.isRequired,
};

export default HeaderPage;
