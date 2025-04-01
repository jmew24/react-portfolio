import React, { useRef, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import './styles/Certifications.css';

import { certifications as certificationsData } from '../Data';
import { useOnScreen } from '../Hooks/useOnScreen';

const pageId = 'certifications';

const CertificationBadge = ({ badge, certificationId }) => {
	const imagePath = `images/certifications/${certificationId}/${badge.image}`;
	return (
		<li className='badge' key={`certification-badge-${badge.id}`}>
			<img 
				className='certification-badge-img' 
				src={imagePath} 
				alt={badge.title}
				onError={(e) => {
					e.target.onerror = null;
					e.target.src = 'images/placeholder.png';
				}}
			/>
			<div className='badge-info'>
				<span className='badge-title'>{badge.title}</span>
				<span className='badge-date'>{badge.date}</span>
				<span className='badge-level'>{badge.level}</span>
			</div>
		</li>
	);
};

CertificationBadge.propTypes = {
	badge: PropTypes.shape({
		id: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		image: PropTypes.string.isRequired,
		date: PropTypes.string.isRequired,
		level: PropTypes.string.isRequired,
	}).isRequired,
	certificationId: PropTypes.string.isRequired,
};

const CertificationItem = ({ certification }) => {
	const companyLink = certification.companyUrl ? (
		<a
			rel='noopener noreferrer'
			href={certification.companyUrl}
			target='_blank'
			title={`${certification.displayTitle} Website`}
		>
			{certification.title}
		</a>
	) : certification.title;

	const viewCertLink = certification.certificationUrl ? (
		<a
			rel='noopener noreferrer'
			href={certification.certificationUrl}
			target='_blank'
			title={`${certification.displayTitle} Certification`}
			className='certification-link'
		>
			View Certification
		</a>
	) : null;

	return (
		<div
			id={`certification-${certification.id}`}
			className='certification-item'
		>
			<h3 className='certification-title'>{companyLink}</h3>
			{viewCertLink && <p className='certification-link-container'>{viewCertLink}</p>}

			<div className='certification-badges-container'>
				<ul className='certification-badges'>
					{certification.badges.map((badge) => (
						<CertificationBadge 
							key={badge.id} 
							badge={badge} 
							certificationId={certification.id}
						/>
					))}
				</ul>
			</div>
		</div>
	);
};

CertificationItem.propTypes = {
	certification: PropTypes.shape({
		id: PropTypes.string.isRequired,
		displayTitle: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		companyUrl: PropTypes.string,
		certificationUrl: PropTypes.string,
		badges: PropTypes.arrayOf(PropTypes.shape({
			id: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			image: PropTypes.string.isRequired,
			date: PropTypes.string.isRequired,
			level: PropTypes.string.isRequired,
		})).isRequired,
	}).isRequired,
};

const CertificationsPage = ({ setHighlight }) => {
	const pageRef = useRef();
	const isPageOnScreen = useOnScreen(pageRef, 0.2);

	useEffect(() => {
		if (isPageOnScreen) {
			setHighlight(pageId);
		}
	}, [isPageOnScreen, setHighlight]);

	const productionCertifications = useMemo(
		() => certificationsData.categories.production.items.map((certification) => (
			<CertificationItem 
				key={`certification-${certification.id}`}
				certification={certification} 
			/>
		)),
		[]
	);

	return (
		<section ref={pageRef} className='certifications' id={pageId}>
			<div className='row certifications'>
				<div className='four columns header-col'>
					<h1>
						<span>{certificationsData.categories.production.title}</span>
					</h1>
					<p className='category-description'>
						{certificationsData.categories.production.description}
					</p>
				</div>

				<div className='eight columns main-col'>
					<div className='row item'>
						<div className='twelve columns'>{productionCertifications}</div>
					</div>
				</div>
			</div>
			<p className='last-updated'>
				Last updated: {certificationsData.metadata?.lastUpdated || 'N/A'}
			</p>
		</section>
	);
};

CertificationsPage.propTypes = {
	setHighlight: PropTypes.func.isRequired,
};

export default CertificationsPage;
