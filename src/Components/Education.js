import React, { useMemo } from 'react';

import { Education } from '../Data/resume';

const EducationPage = () => {
	const education = useMemo(
		() =>
			Education.map((education) => {
				return (
					<div key={`education-${education.id}`} id={`education-${education.id}`}>
						<h3>{education.school}</h3>
						<p className='info'>
							{education.degree} <span>&bull;</span>
							<em className='date'>{education.graduated}</em>
						</p>
						<p dangerouslySetInnerHTML={{ __html: education.description }}></p>
					</div>
				);
			}),
		[],
	);

	return (
		<section id='education'>
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
		</section>
	);
};

export default EducationPage;