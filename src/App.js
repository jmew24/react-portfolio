import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Experience from './Components/Experience';
import Certifications from './Components/Certifications';
import Skills from './Components/Skills';
import Education from './Components/Education';
import Gallery from './Components/Gallery';
import Projects from './Components/Projects';

import resumeData from './Data';

import './App.css';

const AppPage = () => {
	const [highlight, setHighlight] = React.useState('home');

	useEffect(() => {
		ReactGA.initialize('UA-110570651-1');
		ReactGA.pageview(window.location.pathname);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		const home = document.getElementById('nav-home');
		const about = document.getElementById('nav-about');
		const experience = document.getElementById('nav-experience');
		const certifications = document.getElementById('nav-certifications');
		const skills = document.getElementById('nav-skills');
		const education = document.getElementById('nav-education');
		const gallery = document.getElementById('nav-gallery');

		home.classList.remove('current');
		about.classList.remove('current');
		experience.classList.remove('current');
		certifications.classList.remove('current');
		skills.classList.remove('current');
		education.classList.remove('current');
		gallery.classList.remove('current');

		if (highlight === 'home') {
			home.classList.add('current');
		} else if (highlight === 'about') {
			about.classList.add('current');
		} else if (highlight === 'experience') {
			experience.classList.add('current');
		} else if (highlight === 'certifications') {
			certifications.classList.add('current');
		} else if (highlight === 'skills') {
			skills.classList.add('current');
		} else if (highlight === 'education') {
			education.classList.add('current');
		} else if (highlight === 'gallery' || highlight === 'projects') {
			gallery.classList.add('current');
		}
	}, [highlight]);

	return Object.keys(resumeData).length > 0 ? (
		<div className='App'>
			<Header setHighlight={setHighlight} />
			<About setHighlight={setHighlight} />
			<section className='main'>
				<Experience setHighlight={setHighlight} />
				<Certifications setHighlight={setHighlight} />
				<Skills setHighlight={setHighlight} />
				<Education setHighlight={setHighlight} />
			</section>
			<section className='bottom'>
				<Gallery setHighlight={setHighlight} />
				<Projects setHighlight={setHighlight} />
			</section>
			<Footer />
		</div>
	) : null;
};

export default AppPage;
