import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import './styles/Resume.css';

import { education as educationData } from '../Data';
import { useOnScreen } from '../Hooks/useOnScreen';

const pageId = 'education';

const EducationItem = ({ education }) => (
	<div key={`education-${education.id}`} id={`education-${education.id}`} className='education-item'>
		<h3>{education.title}</h3>
		<p className='info'>
			<span>{education.school}</span>
			{education.location && (
				<>
					<span>&bull;</span> <em className='location'>{education.location}</em>
				</>
			)}
			{education.credit && (
				<>
					<span>&bull;</span> <em className='credit'>{education.credit}</em>
				</>
			)}
			{education.graduationDate && (
				<>
					<span>&bull;</span> <em className='date'>{education.graduationDate}</em>
				</>
			)}
		</p>
		{education.description && <p className='description'>{education.description}</p>}
	</div>
);

EducationItem.propTypes = {
	education: PropTypes.shape({
		id: PropTypes.string,
		title: PropTypes.string,
		school: PropTypes.string,
		location: PropTypes.string,
		credit: PropTypes.string,
		graduationDate: PropTypes.string,
		description: PropTypes.string,
	})
};

const EducationPage = ({ setHighlight }) => {
	const pageRef = useRef(null);
	const isPageOnScreen = useOnScreen(pageRef);

	useEffect(() => {
		if (isPageOnScreen) {
			setHighlight(pageId);
		}
	}, [isPageOnScreen, setHighlight]);

	if (!educationData?.items?.length) return null;

	return (
		<section ref={pageRef} id={pageId} className="education">
			<div className="row">
				<div className="four columns header-col">
					<h1><span>EDUCATION</span></h1>
				</div>
				<div className="eight columns main-col">
					<div className="education-content">
						{educationData.items.map((education) => (
							<EducationItem key={education.id} education={education} />
						))}
					</div>
					<p className='last-updated'>
						Last updated: {educationData.metadata?.lastUpdated || 'N/A'}
					</p>
				</div>
			</div>
		</section>
	);
};

EducationPage.propTypes = {
	setHighlight: PropTypes.func
};

export default EducationPage;
