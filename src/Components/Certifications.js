import React, { useMemo } from 'react';

import certifications from '../Data/Certifications';

const CertificationsPage = () => {
	const productionCertifications = useMemo(
		() =>
			certifications.production.map((certification) => {
				const viewLink =
					certification?.hasOwnProperty('link') && certification?.link.toString().trim() !== '' ? (
						<span key={`certification-link-${certification.id}`}>
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
						key={`certification-${certification.id}`}
						id={`certification-${certification.id}`}
						className='certification-item'
					>
						<h3 className='certification-title' dangerouslySetInnerHTML={{ __html: certification.title }}></h3>
						<p className='info'>{viewLink}</p>

						<span className='item-wrap'>
							<ul className='certification-badges'>
								{certification?.badges.map((badge) => {
									return badge ? (
										<>
											<li className='badge' key={`certification-badge-${badge.id}`}>
												<img className='certification-badge-img' src={`images/${badge.image}`} alt={badge.title} />
											</li>
										</>
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
		<section className='certifications' id='certifications'>
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
