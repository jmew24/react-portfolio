import React, { useRef, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { skills as skillsData } from '../Data';
import { useOnScreen } from '../Hooks/useOnScreen';

const pageId = 'skills';

const SkillItem = ({ skill }) => (
	<li className="skill-item">
		<p className="skill-description">{skill}</p>
	</li>
);

SkillItem.propTypes = {
	skill: PropTypes.string.isRequired
};

const LanguageItem = ({ language }) => {
	return (
		<div className="language-bar-wrapper">
			<div
				className="language-bar"
				data-level={language.experience}
			>
				<span className="language-name" dangerouslySetInnerHTML={{ __html: language.name }} />
				<span className="language-level">{language.experience}</span>
			</div>
		</div>
	);
};

LanguageItem.propTypes = {
	language: PropTypes.shape({
		name: PropTypes.string.isRequired,
		experience: PropTypes.string.isRequired,
	}).isRequired,
};

const SkillSection = ({ title, description, children }) => (
	<>
		<div className='four columns header-col'>
			<h1>
				<span>{title}</span>
			</h1>
			{description && (
				<p className="category-description">{description}</p>
			)}
		</div>
		<div className='eight columns main-col'>
			<div className='row item'>
				<div className='skills'>
					{children}
				</div>
			</div>
		</div>
	</>
);

SkillSection.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string,
	children: PropTypes.node.isRequired
};

const SkillsPage = React.memo(({ setHighlight }) => {
	const pageRef = useRef();
	const isPageOnScreen = useOnScreen(pageRef, 0.2);

	useEffect(() => {
		if (isPageOnScreen) {
			setHighlight(pageId);
		}
	}, [isPageOnScreen, setHighlight]);

	const productionSkills = useMemo(
		() => {
			const list = skillsData?.categories?.production?.list || [];
			return list.map((skill, index) => (
				<SkillItem key={`production-${index}`} skill={skill} />
			));
		},
		[]
	);

	const codingSkills = useMemo(
		() => {
			const list = skillsData?.categories?.coding?.list || [];
			return list.map((skill, index) => (
				<SkillItem key={`coding-${index}`} skill={skill} />
			));
		},
		[]
	);

	const sortLanguages = (languages) => {
		const levelOrder = {
			'Advanced': 1,
			'Intermediate': 2,
			'Beginner': 3
		};
		
		return [...languages].sort((a, b) => {
			// First sort by experience level
			const levelDiff = levelOrder[a.experience] - levelOrder[b.experience];
			if (levelDiff !== 0) return levelDiff;
			
			// If same level, sort alphabetically by name (strip HTML tags for comparison)
			const nameA = a.name.replace(/<[^>]+>/g, '').toLowerCase();
			const nameB = b.name.replace(/<[^>]+>/g, '').toLowerCase();
			return nameA.localeCompare(nameB);
		});
	};

	const codingLanguages = useMemo(
		() => {
			const languages = skillsData?.categories?.coding?.languages?.list || [];
			const sortedLanguages = sortLanguages(languages);
			
			return sortedLanguages.map((language, index) => {
				// Ensure language is in the correct format
				const languageObj = typeof language === 'object' ? language : {
					name: String(language),
					experience: 'Intermediate'
				};
				
				return (
					<LanguageItem 
						key={`language-${index}`}
						language={languageObj}
					/>
				);
			});
		},
		[]
	);

	return (
		<section ref={pageRef} id={pageId} aria-label="Skills Section">
			<div className='row skill'>
				<SkillSection 
					title={skillsData?.categories?.production?.title || 'Production Skills'}
					description={skillsData?.categories?.production?.description}
				>
					<ul className="skills-list">{productionSkills}</ul>
				</SkillSection>

				<SkillSection 
					title={skillsData?.categories?.coding?.title || 'Programming Skills'}
					description={skillsData?.categories?.coding?.description}
				>
					<ul className="skills-list">{codingSkills}</ul>
				</SkillSection>

				<SkillSection 
					title={skillsData?.categories?.coding?.languages?.title || 'Programming Languages'}
					description={skillsData?.categories?.coding?.languages?.description}
				>
					<div className="languages-list">
						{codingLanguages}
					</div>
				</SkillSection>
			</div>
			<p className="last-updated">
				Last updated: {skillsData?.metadata?.lastUpdated || new Date().getFullYear()}
			</p>
		</section>
	);
});

SkillsPage.propTypes = {
	setHighlight: PropTypes.func.isRequired
};

SkillsPage.displayName = 'SkillsPage';

export default SkillsPage;
