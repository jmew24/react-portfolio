import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './styles/Portfolio.css';

import { projects as projectsData } from '../Data';
import { useOnScreen } from '../Hooks/useOnScreen';

const pageId = 'projects';

const ProjectItem = ({ project, category = 'production' }) => {
	if (!project || !project.id) return null;

	const prefixUrl = `images/portfolio/${category}`;
	const images = project.images
		? project.images
			.filter(image => image && image.file)
			.map(image => ({
				src: `${prefixUrl}/${image.file}`,
				description: image.description || '',
			}))
		: [];

	if (images.length === 0) return null;
	
	return (
		<div
			key={`projects-${category}-${project.id}`}
			id={`projects-${category}-${project.id}`}
			className='columns projects-item'
		>
			<a rel='noopener noreferrer' href={project.url} title={project.title} target='_blank'>
				<div className='item-wrap'>
					<LazyLoadImage
						alt={project.title || ''}
						src={images[0].src}
						className="project-image"
						effect="blur"
					/>
					<div className='overlay'>
						<div className='projects-item-meta'>
							<h5>{project.title}</h5>
							<p>{project.description}</p>
						</div>
					</div>
					<div className='link-icon'>
						<i className='fa fa-link'></i>
					</div>
				</div>
			</a>
		</div>
	);
};

ProjectItem.propTypes = {
	project: PropTypes.shape({
		id: PropTypes.string,
		title: PropTypes.string,
		description: PropTypes.string,
		url: PropTypes.string,
		images: PropTypes.arrayOf(PropTypes.shape({
			file: PropTypes.string,
			description: PropTypes.string,
		}))
	}),
	category: PropTypes.string,
};

const ProjectsSection = ({ category }) => {
	if (!projectsData?.categories?.[category]?.items?.length) return null;

	const items = projectsData.categories[category].items;
	
	return (
		<div className='projects-section'>
			<h2>{projectsData.categories[category].title}</h2>
			<p className='category-description'>
				{projectsData.categories[category].description}
			</p>
			<div className='projects-wrapper bgrid-quarters s-bgrid-thirds cf'>
				{items.map(item => (
					<ProjectItem
						key={`projects-${category}-${item.id}`}
						project={item}
						category={category}
					/>
				))}
			</div>
		</div>
	);
};

ProjectsSection.propTypes = {
	category: PropTypes.string
};

const ProjectsPage = ({ setHighlight }) => {
	const pageRef = useRef(null);
	const isPageOnScreen = useOnScreen(pageRef);

	useEffect(() => {
		if (isPageOnScreen) {
			setHighlight(pageId);
		}
	}, [isPageOnScreen, setHighlight]);

	if (!projectsData?.categories) return null;

	const hasContent = Object.values(projectsData.categories).some(
		category => category?.items?.length > 0
	);

	if (!hasContent) return null;

	return (
		<div ref={pageRef} className='row' id={pageId}>
			<div className='twelve columns collapsed'>
				{Object.keys(projectsData.categories).map(category => (
					<ProjectsSection key={category} category={category} />
				))}
				<p className='last-updated'>
					Last updated: {projectsData.metadata?.lastUpdated || 'N/A'}
				</p>
			</div>
		</div>
	);
};

ProjectsPage.propTypes = {
	setHighlight: PropTypes.func
};

export default ProjectsPage;
