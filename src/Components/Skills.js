import React, { useMemo } from 'react';

const Skills = ({ data }) => {
	const productionSkills = useMemo(
		() =>
			data.production.map((production) => {
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
		[data.production],
	);
	const codingSkills = useMemo(
		() =>
			data.coding.map((coding) => {
				const className = 'bar-expand ' + coding.name.toLowerCase();
				return (
					<li key={`${coding.name}-${coding.level.toString().replace('%', '')}`} id={`skill-coding-${coding.name}`}>
						<span style={{ width: coding.level }} className={className}></span>
						<em>{coding.name}</em>
					</li>
				);
			}),
		[data.coding],
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

export default Skills;
