export const Main = {
	year: '2021',
	name: 'James Wilson',
	occupation: 'TV Production & Software Testing',
	description:
		'Here will be your description. Use this to describe what you do or whatever you feel best describes yourself to a potential employer',
	image: 'profilepic.jpg',
	bio:
		'Use this bio section as your way of describing yourself and saying what you do, what technologies you like to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing in.',
	contactMessage: 'Here is where you should write your message to readers to have them get in contact with you.',
	email: 'james@jmew.ca',
	address: {
		region: 'Niagara',
		province: 'Ontario',
		country: 'Canada',
	},
	website: 'https://www.jmew.ca',
	experienceDownload: 'http://timbakerdev.com',
	social: [
		{
			name: 'twitter',
			url: 'https://twitter.com/jmew24',
			className: 'fa fa-twitter',
		},
		{
			name: 'linkedin',
			url: 'https://www.linkedin.com/in/james-wilson-a8945334/',
			className: 'fa fa-linkedin',
		},
		{
			name: 'instagram',
			url: 'https://instagram.com/jmew24',
			className: 'fa fa-instagram',
		},
		{
			name: 'github',
			url: 'https://github.com/jmew24',
			className: 'fa fa-github',
		},
	],
};

export const Education = [
	{
		id: 'niagara-college-2021',
		school: 'Niagara College',
		degree: ' Broadcasting – Radio, Television and Film (Television Production)',
		graduated: 'April 2021',
		description: 'Describe your experience at school, what you learned, what useful skills you have acquired etc.',
	},
];

export const Skills = {
	production: {
		title: 'Production Skills',
		list: ['Avid Media Composer', 'Pro Tools', 'Adobe Audition', 'Final Cut Pro', 'Adobe Premiere Pro'],
	},
	coding: {
		title: 'Programming Skills',
		list: ['NodeJS', 'ReactJS', 'GraphQL', 'NestJS', 'Python', 'C#', 'MySQL'],
	},
};

export const Experience = {
	production: [
		{
			id: '2020-summer-games',
			displayTitle: 'Canadian Olympic Wrestling Trials',
			title:
				"<a href='https://www.niagaracollege.ca/insidenc/2019/12/02/brtf-students-undertake-filming-of-olympic-wrestling-trials/' target='_blank'>Canadian Olympic Wrestling Trials</a>",
			subtitle: '2020 Summer Games',
			when: 'December 5th 2019 - December 7th 2019',
			description: 'Technical Director: <br />Graphics Operator: <br/>',
		},
		{
			id: 'spring-fall-convocation',
			displayTitle: 'Spring & Fall Convocation 2020',
			title:
				"<a href='https://www.niagaracollege.ca/virtualconvocation/' target='_blank'>Spring & Fall Convocation 2020</a>",
			subtitle: 'Niagara College',
			when: 'June 2020 & October 2020',
			description:
				"Media Director: <br />Name Readings: <a href='https://github.com/ReadySetLinq/convocation-controller/tree/dev' target='_blank'>Created a program</a> to display students names by program. This was used to record voice-over name readings for every student graduating so each student could have their name displayed and read during the ceremony.",
		},
		{
			id: 'brtf-sports',
			displayTitle: 'BRTF Sports',
			title: 'BRTF Sports',
			subtitle: 'Niagara College',
			when: 'September 2018 - March 2020 ',
			description:
				'Director: <br />Technical Director: <br />Replay/Playback: <br />CCU: <br />Graphics Operator: <br />Camera Operator: <br />',
		},
	],
	coding: [
		{
			id: 'hitbox-entertainment-gmbh-2020',
			title: 'Hitbox Entertainment GmbH',
			subtitle: 'Software Engineer',
			when: 'November 2020 - Present',
			description:
				"Using <a href='https://reactjs.org/' target='_blank'>ReactJS</a> and <a href='https://marmelab.com/react-admin/' target='_blank'>ReactAdmin</a>, I've created frontend solutions for administration and user management tools. I've also worked on the backend to write secure <a href='https://graphql.org/' target='_blank'>GraphQL</a> queries and mutations for managing user accounts using <a href='https://nestjs.com/' target='_blank'>nestjs</a>.",
		},
		{
			id: 'hitbox-entertainment-gmbh-2015',
			title: 'Hitbox Entertainment GmbH',
			subtitle: 'Software Testing',
			when: 'June 2015 - November 2020',
			description:
				'Create, modify, and test the code, forms, and scripts that allow computer applications to run. Work from specifications drawn up by software developers or other individuals. Assist software developers by analyzing user needs and designing testing solutions. Develop and write computer programs to store, locate, and retrieve specific documents, data, and information.',
		},
	],
};

export const Works = {
	production: [
		{
			id: '2020-summer-games',
			title: 'Canadian Olympic Wrestling Trials',
			images: [],
		},
		{
			id: 'spring-fall-convocation',
			title: 'Convocation 2020',
			images: [
				{
					file: 'control_room.jpg',
					description: 'Spring Convocation control room',
				},
				{
					file: 'main_set.jpg',
					description: 'Fall Convocation main set',
				},
				{
					file: 'second_set.jpg',
					description: 'Fall Convocation & Niagara Day secondary set',
				},
			],
		},
		{
			id: 'brtf-sports',
			title: 'BRTF Sports',
			images: [
				{
					file: 'soccer-switcher.jpg',
					description: 'Technical Directing soccer',
				},
				{
					file: 'basketball_gfx.jpg',
					description: 'Custom graphics system made for basketball controlling Ross Video Xpression',
				},
				{
					file: 'basketball_mv.jpg',
					description: 'Directing basketball',
				},
				{
					file: 'volleyball_gfx.jpg',
					description: 'Custom graphics pack for volleyball using Ross Video Xpression',
				},
			],
		},
	],
	coding: [
		{
			id: 'hyperdeck-ui',
			title: 'HyperDeck UI',
			description: 'A Python based controller for the Blackmagic Design HyperDeck',
			image: 'hyperdeck-controller.jpg',
			url: 'https://github.com/jmew24/blackmagic-hyperdeck-ui',
		},
		{
			id: 'convocation-controller',
			title: 'Convocation Controller',
			description: 'A React based Xpression controller for convocation ceremony name readings',
			image: 'convocation-controller.jpg',
			url: 'https://github.com/ReadySetLinq/convocation-controller/tree/dev',
		},
		{
			title: 'Portfolio Website',
			description: 'A React based portfolio website template',
			image: 'portfolio-website.jpg',
			url: 'https://github.com/jmew24/react-portfolio',
		},
	],
};

const ResumeData = {
	Main,
	Education,
	Skills,
	Experience,
	Works,
};

export default ResumeData;
