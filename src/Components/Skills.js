import React, { useMemo } from 'react';

import { Skills } from '../Data/resume';

const SkillsPage = () => {
	const productionSkills = useMemo(
		() =>
			Skills.production.map((production) => {
				const className = 'bar-expand ' + production.name.toLowerCase();
				return (
					<li
						key={`${production.name}-${production.level.toString().replace('%', '')}`}
						id={`skill-production-${production.name}`}
					>
						<span style={{ width: production.level }} className={className}></span>
						<em>{production.name}</em>
					</li>
				);
			}),
		[],
	);

	const codingSkills = useMemo(
		() =>
			Skills.coding.map((coding) => {
				const className = 'bar-expand ' + coding.name.toLowerCase();
				return (
					<li key={`${coding.name}-${coding.level.toString().replace('%', '')}`} id={`skill-coding-${coding.name}`}>
						<span style={{ width: coding.level }} className={className}></span>
						<em>{coding.name}</em>
					</li>
				);
			}),
		[],
	);

	return (
		<section id='skills'>
			<div className='row skill'>
				<div className='three columns header-col'>
					<h1>
						<span>Skills</span>
					</h1>
				</div>

				<div className='nine columns main-col'>
					<p>{Skills.productionSkillmessage}</p>

					<div className='bars'>
						<ul className='skills'>{productionSkills}</ul>
					</div>

					<p>{Skills.codingSkillmessage}</p>

					<div className='bars'>
						<ul className='skills'>{codingSkills}</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SkillsPage;
