import React, { useMemo } from 'react';

import general from '../Data/General';

const FooterPage = () => {
	const networks = useMemo(
		() =>
			general.social.map((network) => {
				return (
					<li key={network.name}>
						<a href={network.url}>
							<i className={network.className}></i>
						</a>
					</li>
				);
			}),
		[],
	);

	return (
		<footer>
			<div className='row'>
				<div className='twelve columns'>
					<ul className='social-links'>{networks}</ul>

					<ul className='copyright'>
						<li>
							&copy; Copyright {general.main.year} {general.main.name}
						</li>
						<li>
							Design by{' '}
							<a title='Styleshout' href='http://www.styleshout.com/'>
								Styleshout
							</a>
						</li>
					</ul>
				</div>
				<div id='go-top'>
					<a className='smoothscroll' title='Back to Top' href='#home'>
						<i className='icon-up-open'></i>
					</a>
				</div>
			</div>
		</footer>
	);
};

export default FooterPage;
