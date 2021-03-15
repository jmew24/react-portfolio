import React, { useMemo } from 'react';

import skills from '../Data/Skills';

const SkillsPage = () => {
	const productionSkills = useMemo(
		() =>
			skills.production.list.map((skill, index) => {
				return (
					<li key={`${skill}`} id={`skill-production-${skill}`}>
						{skill}
					</li>
				);
			}),
		[],
	);

	const codingSkills = useMemo(
		() =>
			skills.coding.list.map((skill, index) => {
				return (
					<li key={`${skill}`} id={`skill-coding-${skill}`}>
						{skill}
					</li>
				);
			}),
		[],
	);

	const codingLanguages = useMemo(
		() =>
			skills.coding.languages.list.map((language, index) => {
				return (
					<em key={`${language}`} id={`languages-production-${language}`}>
						{index > 0 ? <span>&bull;</span> : null} <span dangerouslySetInnerHTML={{ __html: language }}></span>{' '}
					</em>
				);
			}),
		[],
	);

	return (
		<section id='skills'>
			<div className='row skill'>
				<div className='four columns header-col'>
					<h1>
						<span>{skills.production.title}</span>
					</h1>
				</div>

				<div className='eight columns main-col'>
					<div className='row skill'>
						<div className='skills'>
							<ul>{productionSkills}</ul>
						</div>
					</div>
				</div>

				<div className='four columns header-col'>
					<h1>
						<span>{skills.coding.title}</span>
					</h1>
				</div>

				<div className='eight columns main-col'>
					<div className='row item'>
						<div className='skills'>
							<ul>{codingSkills}</ul>
						</div>
					</div>
				</div>

				<div className='four columns header-col'>
					<h1>
						<span>{skills.coding.languages.title}</span>
					</h1>
				</div>

				<div className='eight columns main-col'>
					<div className='row item'>
						<p className='skills'>{codingLanguages}</p>
					</div>
				</div>
			</div>
			<br />
		</section>
	);
};

export default SkillsPage;
