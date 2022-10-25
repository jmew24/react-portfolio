import { social } from '../Data/General';

export const SocialList = () => {
	social.map((network) => {
		return (
			<li key={network.name}>
				<a href={network.url}>
					<i className={network.className}></i>
				</a>
			</li>
		);
	});
};

export default SocialList;
