import React from 'react';

import { main } from '../Data/General';
import { SocialList } from '../Factories/SocialList';

const FooterPage = () => {
	const socials = SocialList();

	return (
		<footer>
			<div className='row'>
				<div className='twelve columns'>
					<ul className='social-links'>{socials}</ul>

					<ul className='copyright'>
						<li>
							&copy; Copyright {main.year} {main.name}
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
