import React, { useMemo } from 'react';

import { Experience, Works } from '../Data/resume';

const ExperiencePage = () => {
	const productionExperience = useMemo(
		() =>
			Experience.production.map((experience) => {
				const imageLink =
					Works?.production.find((o) => o.id === experience.id)?.images.length > 0 ? (
						<span>
							<br />
							<a
								rel='noreferrer'
								className='smoothscroll'
								href={`#works-production-${experience.id}`}
								title={experience.id}
							>
								{' '}
								[Goto {experience.displayTitle} Images]
							</a>
						</span>
					) : null;

				return (
					<div key={`experience-${experience.id}`} id={`experience-${experience.id}`}>
						<h3 dangerouslySetInnerHTML={{ __html: experience.title }}></h3>
						<p className='info'>
							<span dangerouslySetInnerHTML={{ __html: experience.subtitle }}></span>
							<span>&bull;</span> <em className='date'>{experience.when}</em>
							{imageLink}
						</p>
						<p dangerouslySetInnerHTML={{ __html: experience.description }}></p>
					</div>
				);
			}),
		[],
	);

	const codingExperience = useMemo(
		() =>
			Experience.coding.map((experience) => {
				return (
					<div key={`experience-${experience.id}`} id={`experience-${experience.id}`}>
						<h3 dangerouslySetInnerHTML={{ __html: experience.title }}></h3>
						<p className='info'>
							<span dangerouslySetInnerHTML={{ __html: experience.subtitle }}></span>
							<span>&bull;</span> <em className='date'>{experience.when}</em>
						</p>

						<p dangerouslySetInnerHTML={{ __html: experience.description }}></p>
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
