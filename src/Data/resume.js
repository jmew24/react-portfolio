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
	resumeDownload: './James_Wilson_Resume.pdf',
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
		title: 'Broadcasting – Radio, Television and Film',
		school: 'Niagara College',
		credit: 'Advanced Diploma',
		graduated: '2021',
	},
	{
		id: 'stratford-college-2014',
		title: 'Video Game Design and Development',
		school: 'Stratford Career Institute',
		credit: 'College Diploma',
		graduated: '2014',
	},
	{
		id: 'governor-simcoe-2010',
		title: 'OSSD',
		school: 'Governor Simcoe Secondary School',
		credit: '',
		graduated: '2010',
	},
];

export const Skills = {
	production: {
		title: 'Production Skills',
		list: [
			'Knowledgeable in production practices and broadcast techniques',
			'Experienced in directing live sports and news broadcasts',
			'Worked well in editing teams and production crews',
			'Collaborated with external production crews and media to ensure completion of projects',
			'Managed multiple priorities from one or more projects and tasks',
			'Efficient in troubleshooting operating errors and providing quick decision making',
			'Proficient in Non-linear editing software such as Avid Media Composer, Premiere Pro and Final Cut Pro X',
		],
	},
	coding: {
		title: 'Programming Skills',
		list: [
			'Work from specifications drawn up by software developers or other individuals',
			'Analyzed user needs to design software solutions',
			'Solid background and advanced knowledge in full stack web development',
			'Experienced in working with database management tools',
			'Highly organized with exceptional commitment to task completion and quality assurance',
			'Strong attention to detail in successfully solving complex problems using logical reasoning',
			'Experienced with manual and automated software testing',
			'Efficient in lowering error and bug rates by reviewing and updating existing code',
		],
		languages: {
			title: 'Programming Languages',
			list: ['NodeJS', 'ReactJS', 'GraphQL', 'NestJS', 'Python', 'C#', 'MySQL'],
		},
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
			when: 'December 5-7th 2019',
			roles: [
				{
					title: 'Graphics Operator',
					description:
						'Created athlete profiles in Photoshop for all competitors in the finals, used the Ross Video Xpression system to display these live profiles for the broadcast and in-house video wall',
				},
				{
					title: 'Technical Director',
					description: 'Worked in the secondary control room, operating a Blackmagic Design ATEM video switcher',
				},
			],
		},
		{
			id: 'spring-fall-convocation',
			displayTitle: 'Niagara College Convocation',
			title:
				"<a href='https://www.niagaracollege.ca/virtualconvocation/' target='_blank'>Niagara College Convocation</a>",
			subtitle: 'Spring & Fall Ceremonies',
			when: 'June & October 2020',
			roles: [
				{
					title: 'Media Director',
					description: 'Managed live playback of pre-recorded video elements for over an hour of content per show',
				},
				{
					title: 'Name Readings',
					description:
						'<a href="https://github.com/ReadySetLinq/convocation-controller/tree/dev" target="_blank">created a program</a> to display students’ names by academic course which was used to record voice-over name readings for over 10,000 graduates',
				},
				{
					title: 'Pre-Production',
					description: 'Assisted in building show sets, built a remote production studio',
				},
			],
		},
		{
			id: 'brtf-sports',
			displayTitle: 'Niagara College BRTF Sports',
			title: 'Niagara College BRTF Sports',
			subtitle: 'Soccer, Basketball, Volleyball, Hockey',
			when: '2018-2020',
			roles: [
				{
					title: 'Replay/Playback',
					description:
						'Monitored live feeds and identified important plays, worked with on-air talent to provide instant replays for requested events, played pre-recorded intros and commercials during the broadcast',
				},
				{
					title: 'Technical Director',
					description:
						'Used a Ross Video Carbonite Black production switcher, worked in a remote-control room following director’s queues',
				},
				{
					title: 'Director',
					description:
						'Watched multiple live feeds to make decisions on the look of the show from camera angles to the use of graphics and sound ',
				},
				{
					title: 'Graphics Operator',
					description:
						'Created a program to control the Ross Video Xpression Graphics System for an ease-of-use visual graphics controller to update scores, game clocks, player lower-thirds, and live sports visual elements',
				},
				{
					title: 'CCU',
					description:
						'Managed the iris levels and colouring of up to 4 cameras at a time in both indoor and outdoor settings',
				},
			],
		},
		{
			id: 'virtual-niagara-day',
			displayTitle: 'Virtual Niagara Day 2020',
			title:
				"<a href='https://www.niagaracollege.ca/insidenc/2020/10/23/niagara-day-what-to-expect-and-how-to-access-the-oct-28-remote-celebration/ target='_blank'>Virtual Niagara Day 2020</a>",
			subtitle: 'Niagara College ',
			when: 'October 28, 2020',
			roles: [
				{
					title: 'Media Director',
					description:
						'Used the CasperCG system to play back pre-recorded faculty and award videos, managed multiple live remote crews surprising award winners at their houses using Discord Video Calls to transmit the feeds back to the control room',
				},
			],
		},
		{
			id: 'music-niagara-festival',
			displayTitle: 'Music Niagara Festival 2020',
			title:
				"<a href='https://www.musicniagara.org/concerts/steve-mcdade/ target='_blank'>Music Niagara Festival 2020</a>",
			subtitle: 'Steve McDade',
			when: 'October 2020',
			roles: [
				{
					title: 'Technical Producer',
					description:
						'Set-up outdoor broadcast control area to film a multi-camera music production, set up cameras and microphones to capture all angles and sounds of various string instruments',
				},
				{
					title: 'Technical Director',
					description:
						'Operated a stream deck to control the Blackmagic Design ATEM video switcher, followed director’s queues to match musical beats to live camera changes following the story of the song',
				},
			],
		},
	],
	coding: [
		{
			id: 'hitbox-entertainment-gmbh-2020',
			title: 'Hitbox Entertainment GmbH',
			subtitle: 'Software Engineer',
			when: 'November 2020-Present',
			roles: [],
			description:
				'Created frontend solutions for administration and user management tools using <a href="https://reactjs.org/" target="_blank">ReactJS</a> and <a href="https://marmelab.com/react-admin/" target="_blank">ReactAdmin</a>. Worked on the backend to write secure <a href="https://graphql.org/" target="_blank">GraphQL</a> queries and mutations for managing user accounts using <a href="https://nestjs.com/" target="_blank">nestjs</a>.',
		},
		{
			id: 'hitbox-entertainment-gmbh-2015',
			title: 'Hitbox Entertainment GmbH',
			subtitle: 'Software Testing',
			when: 'June 2015–November 2020',
			roles: [],
			description:
				'Created, modified, and tested code, forms and scripts that allow computer applications to run. Worked from specifications drawn up by software developers or other individuals. Assisted software developers by analyzing user needs and designing testing solutions. Developed and wrote computer programs to store, locate, and retrieve specific documents, data, and information.',
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
					file: 'spring_mv.jpg',
					description: 'Spring Convocation multi-viewer',
				},
				{
					file: 'control_room.jpg',
					description: 'Spring Convocation control room',
				},
				{
					file: 'control_room_bts.jpg',
					description: 'Spring Convocation control room crew',
				},
				{
					file: 'media_manager_bts.jpg',
					description: 'Spring Convocation media manager',
				},
				{
					file: 'spring_mv.jpg',
					description: 'Spring Convocation multi-viewer',
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
					file: 'soccer_switcher.jpg',
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
		{
			id: 'music-niagara-festival',
			title: 'Music Niagara Festival',
			images: [
				{
					file: 'control_area.jpg',
					description: 'Outdoor control room area',
				},
				{
					file: 'multi_viewer.jpg',
					description: 'Multi-viewer and ATEM software',
				},
				{
					file: 'stream_deck.jpg',
					description: 'Stream Deck used for video switching',
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
