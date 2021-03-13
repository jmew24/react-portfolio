import React, { useMemo } from 'react';
import LightBox from './LightBox';

import { Works } from '../Data/resume';

const WorksPage = () => {
	const productionProjects = useMemo(
		() =>
			Works.production.map((project) => {
				const prefixUrl = `images/portfolio/production/gallery/${project.id}`;
				const images = project.images.map((image) => {
					return image.file
						? Object.assign(
								{},
								{
									src: `${prefixUrl}/${image.file}`,
									description: image.description ? image.description : '',
								},
						  )
						: null;
				});
				return images.length > 0 ? (
					<div
						key={`works-production-${project.id}`}
						id={`works-production-${project.id}`}
						className='columns works-item'
					>
						<LightBox id={project.id} source={'works-production'} title={project.title} images={images} />
					</div>
				) : null;
			}),
		[],
	);

	const codingProjects = useMemo(
		() =>
			Works.coding.map((project) => {
				const projectImage = `images/portfolio/coding/${project.image}`;
				return (
					<div key={`works-coding-${project.id}`} id={`works-coding-${project.id}`} className='columns works-item'>
						<a rel='noopener noreferrer' href={project.url} title={project.title} target='_blank'>
							<div className='item-wrap'>
								<img alt={project.title} src={projectImage} />
								<div className='overlay'>
									<div className='works-item-meta'>
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

	return productionProjects.length > 0 || productionProjects.length > 0 ? (
		<section className='works'>
			<div className='row'>
				<div className='twelve columns collapsed'>
					<h1>Check Out Some of My Works.</h1>

					<div className='works-wrapper bgrid-quarters s-bgrid-thirds cf'>{productionProjects}</div>

					<div className='works-wrapper bgrid-quarters s-bgrid-thirds cf'>{codingProjects}</div>
				</div>
			</div>
		</section>
	) : null;
};

export default WorksPage;
