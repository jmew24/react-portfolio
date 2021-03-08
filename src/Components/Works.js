import React, { useMemo } from 'react';

const Portfolio = ({ data }) => {
	const productionProjects = useMemo(
		() =>
			data.production.map((projects) => {
				const projectImage = `images/portfolio/production/${projects.image}`;
				return (
					<div
						key={projects.title.replace(' ', '-').toLowerCase()}
						className='columns works-item'
						id={`works-production-${projects.title.replace(' ', '-').toLowerCase()}`}
					>
						<div className='item-wrap'>
							<a rel='noreferrer' href={projects.url} title={projects.title} target='_blank'>
								<img alt={projects.title} src={projectImage} />
								<div className='overlay'>
									<div className='works-item-meta'>
										<h5>{projects.title}</h5>
										<p>{projects.description}</p>
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
		[data.production],
	);

	const codingProjects = useMemo(
		() =>
			data.coding.map((projects) => {
				const projectImage = `images/portfolio/coding/${projects.image}`;
				return (
					<div
						key={projects.title.replace(' ', '-').toLowerCase()}
						className='columns works-item'
						id={`works-coding-${projects.title.replace(' ', '-').toLowerCase()}`}
					>
						<div className='item-wrap'>
							<a rel='noreferrer' href={projects.url} title={projects.title} target='_blank'>
								<img alt={projects.title} src={projectImage} />
								<div className='overlay'>
									<div className='works-item-meta'>
										<h5>{projects.title}</h5>
										<p>{projects.description}</p>
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
		[data.coding],
	);

	return (
		<section className='works' id='works'>
			<div className='row'>
				<div className='twelve columns collapsed'>
					<h1>Check Out Some of My Works.</h1>

					<div className='works-wrapper bgrid-quarters s-bgrid-thirds cf'>{productionProjects}</div>

					<div className='works-wrapper bgrid-quarters s-bgrid-thirds cf'>{codingProjects}</div>
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
