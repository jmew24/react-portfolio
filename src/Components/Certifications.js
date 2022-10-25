import React, { useRef, useEffect, useMemo } from 'react';

import certifications from '../Data/Certifications';
import { useOnScreen } from '../Hooks/useOnScreen';

const pageId = 'certifications';

const CertificationsPage = ({ setHighlight }) => {
	const pageRef = useRef();
	const isPageOnScreen = useOnScreen(pageRef);

	useEffect(() => {
		if (isPageOnScreen) {
			setHighlight(pageId);
		}
	}, [isPageOnScreen, setHighlight]);

	const productionCertifications = useMemo(
		() =>
			certifications.production.map((certification, index) => {
				const viewLink =
					certification?.hasOwnProperty('link') && certification?.link.toString().trim() !== '' ? (
						<span key={`certification-link-${certification.id}-${index}`}>
							<a
								rel='noopener noreferrer'
								href={certification.link}
								target='_blank'
								title={`${certification.displayTitle} Certification`}
							>
								{' '}
								[View {certification.displayTitle} Certification]
							</a>
						</span>
					) : null;

				return (
					<div
						key={`certification-${certification.id}-${index}`}
						id={`certification-${certification.id}`}
						className='certification-item'
					>
						<h3 className='certification-title' dangerouslySetInnerHTML={{ __html: certification.title }}></h3>
						<p className='info'>{viewLink}</p>

						<span className='item-wrap'>
							<ul className='certification-badges'>
								{certification?.badges.map((badge, index) => {
									return badge ? (
										<li className='badge' key={`certification-badge-${badge.id}-${index}`}>
											<img className='certification-badge-img' src={`images/${badge.image}`} alt={badge.title} />
										</li>
									) : null;
								})}
							</ul>
						</span>
					</div>
				);
			}),
		[],
	);

	return (
		<section ref={pageRef} className='certifications' id={pageId}>
			<div className='row certifications'>
				<div className='four columns header-col'>
					<h1>
						<span>Production Certifications</span>
					</h1>
				</div>

				<div className='eight columns main-col'>
					<div className='row item'>
						<br />
						<br />
						<div className='twelve columns'>{productionCertifications}</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CertificationsPage;
