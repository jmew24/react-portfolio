import React, { useMemo } from 'react';

const Resume = ({ data }) => {
	const education = useMemo(
		() =>
			data.education.map((education) => {
				return (
					<div key={education.school}>
						<h3>{education.school}</h3>
						<p className='info'>
							{education.degree} <span>&bull;</span>
							<em className='date'>{education.graduated}</em>
						</p>
						<p>{education.description}</p>
					</div>
				);
			}),
		[data.education],
	);
	const work = useMemo(
		() =>
			data.work.map((work) => {
				return (
					<div key={work.company}>
						<h3>{work.company}</h3>
						<p className='info'>
							{work.title}
							<span>&bull;</span> <em className='date'>{work.years}</em>
						</p>
						<p>{work.description}</p>
					</div>
				);
			}),
		[data.work],
	);
	const productionSkills = useMemo(
		() =>
			data.skills.production.map((production) => {
				const className = 'bar-expand ' + production.name.toLowerCase();
				return (
					<li key={production.name}>
						<span style={{ width: production.level }} className={className}></span>
						<em>{production.name}</em>
					</li>
				);
			}),
		[data.skills.production],
	);
	const codingSkills = useMemo(
		() =>
			data.skills.coding.map((coding) => {
				const className = 'bar-expand ' + coding.name.toLowerCase();
				return (
					<li key={coding.name}>
						<span style={{ width: coding.level }} className={className}></span>
						<em>{coding.name}</em>
					</li>
				);
			}),
		[data.skills.coding],
	);

	return (
		<section id='resume'>
			<div className='row education'>
				<div className='three columns header-col'>
					<h1>
						<span>Education</span>
					</h1>
				</div>

				<div className='nine columns main-col'>
					<div className='row item'>
						<div className='twelve columns'>{education}</div>
					</div>
				</div>
			</div>

			<div className='row work'>
				<div className='three columns header-col'>
					<h1>
						<span>Work</span>
					</h1>
				</div>

				<div className='nine columns main-col'>{work}</div>
			</div>

			<div className='row skill'>
				<div className='three columns header-col'>
					<h1>
						<span>Skills</span>
					</h1>
				</div>

				<div className='nine columns main-col'>
					<p>{data.productionSkillmessage}</p>

					<div className='bars'>
						<ul className='skills'>{productionSkills}</ul>
					</div>

					<p>{data.codingSkillmessage}</p>

					<div className='bars'>
						<ul className='skills'>{codingSkills}</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Resume;
