import React, { useMemo } from 'react';

const Experience = ({ data }) => {
	const productionExperience = useMemo(
		() =>
			data.production.map((experience) => {
				return (
					<div
						key={`${experience.title.replace(' ', '-').toLowerCase()}-${experience.when
							.replace(' ', '-')
							.toLowerCase()}`}
					>
						<h3 dangerouslySetInnerHTML={{ __html: experience.title }}></h3>
						<p className='info'>
							<span dangerouslySetInnerHTML={{ __html: experience.subtitle }}></span>
							<span>&bull;</span> <em className='date'>{experience.when}</em>
						</p>
						<p dangerouslySetInnerHTML={{ __html: experience.description }}></p>
					</div>
				);
			}),
		[data.production],
	);
	const codingExperience = useMemo(
		() =>
			data.coding.map((experience) => {
				return (
					<div
						key={`${experience.title.replace(' ', '-').toLowerCase()}-${experience.when
							.replace(' ', '-')
							.toLowerCase()}`}
					>
						<h3 dangerouslySetInnerHTML={{ __html: experience.title }}></h3>
						<p className='info'>
							<span dangerouslySetInnerHTML={{ __html: experience.subtitle }}></span>
							<span>&bull;</span> <em className='date'>{experience.when}</em>
						</p>

						<p dangerouslySetInnerHTML={{ __html: experience.description }}></p>
					</div>
				);
			}),
		[data.coding],
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

export default Experience;
