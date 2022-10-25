import React, { useRef, useEffect, useMemo } from 'react';

import projects from '../Data/Projects';
import { useOnScreen } from '../Hooks/useOnScreen';

const pageId = 'projects';

const ProjectsPage = ({ setHighlight }) => {
	const pageRef = useRef(null);
	const isPageOnScreen = useOnScreen(pageRef);

	useEffect(() => {
		if (isPageOnScreen) {
			setHighlight(pageId);
		}
	}, [isPageOnScreen, setHighlight]);

	const productionProjects = useMemo(
		() =>
			projects.production.map((project) => {
				const projectImage = `images/portfolio/production/${project.image}`;
				return (
					<div
						key={`projects-production-${project.id}`}
						id={`projects-production-${project.id}`}
						className='columns projects-item'
					>
						<a rel='noopener noreferrer' href={project.url} title={project.title} target='_blank'>
							<div className='item-wrap'>
								<img alt={project.title} src={projectImage} />
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
			}),
		[],
	);

	const codingProjects = useMemo(
		() =>
			projects.coding.map((project) => {
				const projectImage = `images/portfolio/coding/${project.image}`;
				return (
					<div
						key={`projects-coding-${project.id}`}
						id={`projects-coding-${project.id}`}
						className='columns projects-item'
					>
						<a rel='noopener noreferrer' href={project.url} title={project.title} target='_blank'>
							<div className='item-wrap'>
								<img alt={project.title} src={projectImage} />
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
			}),
		[],
	);

	return productionProjects.length > 0 || codingProjects.length > 0 ? (
		<div ref={pageRef} className='row' id={pageId}>
			<div className='twelve columns collapsed'>
				<h1>Check Out Some of My Projects</h1>

				<div className='projects-wrapper bgrid-quarters s-bgrid-thirds cf'>{productionProjects}</div>

				<div className='projects-wrapper bgrid-quarters s-bgrid-thirds cf'>{codingProjects}</div>
			</div>
		</div>
	) : null;
};

export default ProjectsPage;
