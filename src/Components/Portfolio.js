import React, { useMemo } from 'react';

const Portfolio = ({ data }) => {
	const productionProjects = useMemo(
		() =>
			data.projects.production.map((projects) => {
				const projectImage = `images/portfolio/${projects.image}`;
				return (
					<div key={projects.title} className='columns portfolio-item'>
						<div className='item-wrap'>
							<a rel='noreferrer' href={projects.url} title={projects.title} target='_blank'>
								<img alt={projects.title} src={projectImage} />
								<div className='overlay'>
									<div className='portfolio-item-meta'>
										<h5>{projects.title}</h5>
										<p>{projects.category}</p>
									</div>
								</div>
								<div className='link-icon'>
									<i className='fa fa-link'></i>
								</div>
							</a>
						</div>
					</div>
				);
			}),
		[data.projects],
	);

	const codingProjects = useMemo(
		() =>
			data.projects.coding.map((projects) => {
				const projectImage = `images/portfolio/${projects.image}`;
				return (
					<div key={projects.title} className='columns portfolio-item'>
						<div className='item-wrap'>
							<a rel='noreferrer' href={projects.url} title={projects.title} target='_blank'>
								<img alt={projects.title} src={projectImage} />
								<div className='overlay'>
									<div className='portfolio-item-meta'>
										<h5>{projects.title}</h5>
										<p>{projects.category}</p>
									</div>
								</div>
								<div className='link-icon'>
									<i className='fa fa-link'></i>
								</div>
							</a>
						</div>
					</div>
				);
			}),
		[data.projects],
	);

	return (
		<section id='portfolio'>
			<div className='row'>
				<div className='twelve columns collapsed'>
					<h1>Check Out Some of My Works.</h1>

					<div id='portfolio-wrapper' className='bgrid-quarters s-bgrid-thirds cf'>
						{productionProjects}
					</div>

					<div id='portfolio-wrapper' className='bgrid-quarters s-bgrid-thirds cf'>
						{codingProjects}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
