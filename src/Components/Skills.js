import React, { useMemo } from 'react';

import { Skills } from '../Data/resume';

const SkillsPage = () => {
	const productionSkills = useMemo(
		() =>
			Skills.production.list.map((skill, index) => {
				return (
					<em key={`${skill}`} id={`skill-production-${skill}`}>
						<span>&bull;</span> <span>{skill}</span> <br />
					</em>
				);
			}),
		[],
	);

	const codingSkills = useMemo(
		() =>
			Skills.coding.list.map((skill, index) => {
				return (
					<em key={`${skill}`} id={`skill-production-${skill}`}>
						<span>&bull;</span> <span>{skill}</span> <br />
					</em>
				);
			}),
		[],
	);

	const codingLanguages = useMemo(
		() =>
			Skills.coding.languages.list.map((language, index) => {
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
						<span>{Skills.production.title}</span>
					</h1>
				</div>

				<div className='eight columns main-col'>
					<div className='row skill'>
						<p className='skills'>{productionSkills}</p>
					</div>
				</div>

				<div className='four columns header-col'>
					<h1>
						<span>{Skills.coding.title}</span>
					</h1>
				</div>

				<div className='eight columns main-col'>
					<div className='row item'>
						<p className='skills'>{codingSkills}</p>
					</div>
				</div>

				<div className='four columns header-col'>
					<h1>
						<span>{Skills.coding.languages.title}</span>
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
