import React, { useRef, useEffect, useMemo } from 'react';

import education from '../Data/Education';
import { useOnScreen } from '../Hooks/useOnScreen';

const pageId = 'education';

const EducationPage = ({ setHighlight }) => {
	const pageRef = useRef();
	const isPageOnScreen = useOnScreen(pageRef);

	useEffect(() => {
		if (isPageOnScreen) {
			setHighlight(pageId);
		}
	}, [isPageOnScreen, setHighlight]);

	const educationData = useMemo(
		() =>
			education.map((education) => {
				return (
					<div key={`education-${education.id}`} id={`education-${education.id}`}>
						<h3>{education.title}</h3>
						<p className='info'>
							{education.school} <span>&bull;</span>
							{education.credit !== '' ? (
								<em className='credit'>
									{education.credit} <span>&bull;</span>
								</em>
							) : null}
							<em className='date'>{education.graduated}</em>
						</p>
					</div>
				);
			}),
		[],
	);

	return (
		<section ref={pageRef} id={pageId}>
			<div className='row education'>
				<div className='four columns header-col'>
					<h1>
						<span>Education</span>
					</h1>
				</div>

				<div className='eight columns main-col'>
					<div className='row item'>
						<div className='twelve columns'>{educationData}</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default EducationPage;
