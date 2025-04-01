import React, { useEffect, useMemo, Suspense } from 'react';
import ReactGA from 'react-ga';
import { HelmetProvider } from 'react-helmet-async';
import 'react-lazy-load-image-component/src/effects/blur.css';

import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Experience from './Components/Experience';
import Skills from './Components/Skills';
import Education from './Components/Education';
import Gallery from './Components/Gallery';
import Projects from './Components/Projects';
import Certifications from './Components/Certifications';
import ErrorBoundary from './Components/ErrorBoundary';
import LoadingSkeleton from './Components/LoadingSkeleton';
import { ThemeProvider } from './Context/ThemeContext';

import resumeData from './Data';

import './App.css';

const NAVIGATION = ['home', 'about', 'experience', 'certifications', 'skills', 'education', 'gallery'];

const AppPage = () => {
	const [highlight, setHighlight] = React.useState('home');

	// Initialize Google Analytics
	useEffect(() => {
		ReactGA.initialize('UA-110570651-1');
		ReactGA.pageview(window.location.pathname);
	}, []);

	// Handle navigation highlighting
	useEffect(() => {
		const currentHighlight = highlight === 'projects' ? 'gallery' : highlight;
		
		NAVIGATION.forEach((nav) => {
			const element = document.getElementById(`nav-${nav}`);
			if (element) {
				element.classList.toggle('current', currentHighlight === nav);
			}
		});
	}, [highlight]);

	// Memoize the main content to prevent unnecessary re-renders
	const mainContent = useMemo(() => (
		<section className='main'>
			<Experience setHighlight={setHighlight} />
			<Certifications setHighlight={setHighlight} />
			<Skills setHighlight={setHighlight} />
			<Education setHighlight={setHighlight} />
		</section>
	), []);

	// Memoize the bottom section
	const bottomContent = useMemo(() => (
		<section className='bottom'>
			<Gallery setHighlight={setHighlight} />
			<Projects setHighlight={setHighlight} />
		</section>
	), []);

	if (!Object.keys(resumeData).length) return null;

	return (
		<ErrorBoundary>
			<HelmetProvider>
				<ThemeProvider>
					<div className='App'>
						<Header setHighlight={setHighlight} />
						<About setHighlight={setHighlight} />
						<Suspense fallback={<LoadingSkeleton type="text" count={3} />}>
							{mainContent}
						</Suspense>
						<Suspense fallback={<LoadingSkeleton type="image" count={2} />}>
							{bottomContent}
						</Suspense>
						<Footer />
					</div>
				</ThemeProvider>
			</HelmetProvider>
		</ErrorBoundary>
	);
};

export default React.memo(AppPage);
