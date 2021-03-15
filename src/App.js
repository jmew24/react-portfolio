import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Experience from './Components/Experience';
import Skills from './Components/Skills';
import Education from './Components/Education';
import Gallery from './Components/Gallery';
import Projects from './Components/Projects';

import * as resume from './Data';

const AppPage = () => {
	useEffect(() => {
		ReactGA.initialize('UA-110570651-1');
		ReactGA.pageview(window.location.pathname);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return Object.keys(resume).length > 0 ? (
		<div className='App'>
			<Header />
			<About />
			<section className='main'>
				<Experience />
				<Skills />
				<Education />
			</section>
			<section className='bottom'>
				<Gallery />
				<Projects />
			</section>
			<Footer />
		</div>
	) : null;
};

export default AppPage;
