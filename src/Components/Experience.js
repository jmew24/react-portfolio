import React, { useMemo } from 'react';

import experience from '../Data/Experience';
import gallery from '../Data/Gallery';

const ExperiencePage = () => {
	const productionExperience = useMemo(
		() =>
			experience.production.map((experience) => {
				const galleryLink =
					gallery?.production.find((o) => o.id === experience.id)?.images.length > 0 ? (
						<span key={`experience-goto-${experience.id}`}>
							<br />
							<a
								rel='noreferrer'
								className='smoothscroll'
								href={`#gallery-production-${experience.id}`}
								title={experience.id}
							>
								{' '}
								[Goto {experience.displayTitle} Photos]
							</a>
						</span>
					) : null;

				return (
					<div key={`experience-${experience.id}`} id={`experience-${experience.id}`} className='experience-item'>
						<h3 className='experience-title' dangerouslySetInnerHTML={{ __html: experience.title }}></h3>
						<p className='info'>
							<span dangerouslySetInnerHTML={{ __html: experience.subtitle }}></span>
							<span>&bull;</span> <em className='date'>{experience.when}</em>
							{galleryLink}
						</p>

						<span className='item-wrap'>
							{experience?.roles.map((role) => {
								return (
									<div
										className='role'
										key={`experience-${experience.id}-role-${role.title.toLowerCase().replace(' ', '_')}`}
									>
										<span className='role-title'>{role.title}:</span>{' '}
										<span className='role-description' dangerouslySetInnerHTML={{ __html: role.description }}></span>
									</div>
								);
							})}
						</span>
					</div>
				);
			}),
		[],
	);

	const codingExperience = useMemo(
		() =>
			experience.coding.map((experience) => {
				const galleryLink =
					gallery?.production.find((o) => o.id === experience.id)?.images.length > 0 ? (
						<span key={`experience-goto-${experience.id}`}>
							<br />
							<a
								rel='noreferrer'
								className='smoothscroll'
								href={`#gallery-coding-${experience.id}`}
								title={experience.id}
							>
								{' '}
								[Goto {experience.displayTitle} Photos]
							</a>
						</span>
					) : null;

				return (
					<div key={`experience-${experience.id}`} id={`experience-${experience.id}`} className='experience-item'>
						<h3 className='experience-title' dangerouslySetInnerHTML={{ __html: experience.title }}></h3>
						<p className='info'>
							<span dangerouslySetInnerHTML={{ __html: experience.subtitle }}></span>
							<span>&bull;</span> <em className='date'>{experience.when}</em>
							{galleryLink}
						</p>

						<span className='item-wrap'>
							<div className='role' key={`experience-${experience.id}-role`}>
								<span className='role-description' dangerouslySetInnerHTML={{ __html: experience.description }}></span>
							</div>
						</span>
					</div>
				);
			}),
		[],
	);

	return (
		<section className='experience' id='experience'>
			<div className='row work'>
				<div className='four columns header-col'>
					<h1>
						<span>Production Experience</span>
					</h1>
				</div>

				<div className='eight columns main-col'>
					<div className='row item'>
						<br />
						<br />
						<div className='twelve columns'>{productionExperience}</div>
					</div>
				</div>

				<div className='four columns header-col'>
					<h1>
						<span>Programming Experience</span>
					</h1>
				</div>

				<div className='eight columns main-col'>
					<div className='row item'>
						<br />
						<br />
						<div className='twelve columns'>{codingExperience}</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ExperiencePage;
