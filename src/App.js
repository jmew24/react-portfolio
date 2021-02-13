import React, { useState, useEffect } from 'react';
import ReactGA from 'react-ga';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Portfolio from './Components/Portfolio';

const App = () => {
	let [resumeData, setResumeData] = useState({});
	let getResumeData = () => {
		fetch('/resumeData.json')
			.then((response) => response.json())
			.then((data) => setResumeData(data))
			.catch((error) => console.error('getResumeData', { ...error }));
	};

	useEffect(() => {
		ReactGA.initialize('UA-110570651-1');
		ReactGA.pageview(window.location.pathname);

		getResumeData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return Object.keys(resumeData).length > 0 ? (
		<div className='App'>
			<Header data={resumeData.main} />
			<About data={resumeData.main} />
			<Resume data={resumeData.resume} />
			<Portfolio data={resumeData.portfolio} />
			<Footer data={resumeData.main} />
		</div>
	) : null;
};

export default App;
