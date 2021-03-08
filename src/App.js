import React, { useState, useEffect } from 'react';
import ReactGA from 'react-ga';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Experience from './Components/Experience';
import Skills from './Components/Skills';
import Education from './Components/Education';
import Works from './Components/Works';

const App = () => {
	let [data, setData] = useState({});
	let getData = () => {
		fetch('/resumeData.json')
			.then((response) => response.json())
			.then((data) => setData(data))
			.catch((error) => console.error('setData', { ...error }));
	};

	useEffect(() => {
		ReactGA.initialize('UA-110570651-1');
		ReactGA.pageview(window.location.pathname);

		getData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return Object.keys(data).length > 0 ? (
		<div className='App'>
			<Header data={data.main} />
			<About data={data.main} />
			<section className='main'>
				<Experience data={data.experience} />
				<Skills data={data.skills} />
				<Education data={data.education} />
			</section>
			<Works data={data.works} />
			<Footer data={data.main} />
		</div>
	) : null;
};

export default App;
