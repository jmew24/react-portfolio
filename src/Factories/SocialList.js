export const SocialList = ({ socials }) => {
	return socials.map((network, index) => {
		return (
			<li key={`${network.name}-${index}`}>
				<a href={network.url}>
					<i className={network.className}></i>
				</a>
			</li>
		);
	});
};

export default SocialList;
